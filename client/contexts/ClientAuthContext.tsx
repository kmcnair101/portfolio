import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  avatar?: string;
  memberSince: string;
}

interface ClientAuthContextType {
  isAuthenticated: boolean;
  client: Client | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: SignupData) => Promise<boolean>;
  logout: () => void;
  error: string | null;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  company: string;
  phone?: string;
}

const ClientAuthContext = createContext<ClientAuthContextType | undefined>(undefined);

const CLIENT_AUTH_KEY = 'client_authenticated';
const CLIENT_DATA_KEY = 'client_data';

// Mock client database
const mockClients: Record<string, { password: string; client: Client }> = {
  'sarah@techcorp.com': {
    password: 'password123',
    client: {
      id: 'CLIENT-001',
      name: 'Sarah Johnson',
      email: 'sarah@techcorp.com',
      company: 'TechCorp Solutions',
      phone: '+1 (555) 123-4567',
      memberSince: '2023-06-15'
    }
  },
  'john@example.com': {
    password: 'password123',
    client: {
      id: 'CLIENT-002',
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Example Corp',
      phone: '+1 (555) 987-6543',
      memberSince: '2024-01-15'
    }
  }
};

export function ClientAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [client, setClient] = useState<Client | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if client is already authenticated
    const authStatus = localStorage.getItem(CLIENT_AUTH_KEY);
    const clientData = localStorage.getItem(CLIENT_DATA_KEY);
    
    if (authStatus === 'true' && clientData) {
      try {
        const parsedClient = JSON.parse(clientData);
        setClient(parsedClient);
        setIsAuthenticated(true);
      } catch (e) {
        // Invalid data, clear storage
        localStorage.removeItem(CLIENT_AUTH_KEY);
        localStorage.removeItem(CLIENT_DATA_KEY);
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setError(null);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const clientData = mockClients[email];
    
    if (clientData && clientData.password === password) {
      setClient(clientData.client);
      setIsAuthenticated(true);
      localStorage.setItem(CLIENT_AUTH_KEY, 'true');
      localStorage.setItem(CLIENT_DATA_KEY, JSON.stringify(clientData.client));
      return true;
    } else {
      setError('Invalid email or password');
      return false;
    }
  };

  const signup = async (userData: SignupData): Promise<boolean> => {
    setError(null);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if email already exists
    if (mockClients[userData.email]) {
      setError('An account with this email already exists');
      return false;
    }
    
    // Create new client
    const newClient: Client = {
      id: `CLIENT-${Date.now()}`,
      name: userData.name,
      email: userData.email,
      company: userData.company,
      phone: userData.phone,
      memberSince: new Date().toISOString().split('T')[0]
    };
    
    // Add to mock database
    mockClients[userData.email] = {
      password: userData.password,
      client: newClient
    };
    
    // Auto login after signup
    setClient(newClient);
    setIsAuthenticated(true);
    localStorage.setItem(CLIENT_AUTH_KEY, 'true');
    localStorage.setItem(CLIENT_DATA_KEY, JSON.stringify(newClient));
    
    return true;
  };

  const logout = () => {
    setClient(null);
    setIsAuthenticated(false);
    setError(null);
    localStorage.removeItem(CLIENT_AUTH_KEY);
    localStorage.removeItem(CLIENT_DATA_KEY);
  };

  return (
    <ClientAuthContext.Provider value={{ 
      isAuthenticated, 
      client, 
      login, 
      signup, 
      logout, 
      error 
    }}>
      {children}
    </ClientAuthContext.Provider>
  );
}

export function useClientAuth() {
  const context = useContext(ClientAuthContext);
  if (context === undefined) {
    throw new Error('useClientAuth must be used within a ClientAuthProvider');
  }
  return context;
}

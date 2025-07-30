import { Navigate, useLocation } from 'react-router-dom';
import { useClientAuth } from '@/contexts/ClientAuthContext';
import { ReactNode } from 'react';

interface ProtectedClientRouteProps {
  children: ReactNode;
}

export default function ProtectedClientRoute({ children }: ProtectedClientRouteProps) {
  const { isAuthenticated } = useClientAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to client auth page with return url
    return <Navigate to="/client-auth" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { 
  FileText, 
  Search, 
  Plus, 
  Users,
  FolderOpen,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Download,
  Upload,
  Eye,
  Edit,
  Settings,
  Filter,
  MoreHorizontal,
  Shield,
  Building,
  Mail,
  Phone,
  Globe,
  Key,
  Activity
} from "lucide-react";

// Mock data for clients
const mockClients = [
  {
    id: "CLIENT-001",
    name: "TechCorp Solutions",
    contactPerson: "Sarah Johnson",
    email: "sarah@techcorp.com",
    phone: "+1 (555) 123-4567",
    company: "TechCorp Solutions",
    status: "active",
    lastLogin: "2024-01-15T10:30:00",
    joinDate: "2023-06-15",
    totalProjects: 3,
    activeProjects: 1,
    totalValue: 45000,
    documentsShared: 12,
    messagesUnread: 2,
    nextMilestone: "Design Review",
    milestoneDate: "2024-01-20"
  },
  {
    id: "CLIENT-002", 
    name: "Startup.io",
    contactPerson: "Michael Chen",
    email: "m.chen@startup.io",
    phone: "+1 (555) 234-5678",
    company: "Startup.io",
    status: "active",
    lastLogin: "2024-01-14T14:20:00",
    joinDate: "2023-09-10",
    totalProjects: 2,
    activeProjects: 1,
    totalValue: 28500,
    documentsShared: 8,
    messagesUnread: 0,
    nextMilestone: "MVP Launch",
    milestoneDate: "2024-01-25"
  },
  {
    id: "CLIENT-003",
    name: "Design Studio",
    contactPerson: "Emily Davis",
    email: "emily@designstudio.com", 
    phone: "+1 (555) 345-6789",
    company: "Design Studio",
    status: "inactive",
    lastLogin: "2024-01-08T09:15:00",
    joinDate: "2023-11-20",
    totalProjects: 1,
    activeProjects: 0,
    totalValue: 15200,
    documentsShared: 5,
    messagesUnread: 1,
    nextMilestone: "Project Complete",
    milestoneDate: null
  },
  {
    id: "CLIENT-004",
    name: "E-commerce Plus",
    contactPerson: "David Wilson",
    email: "david@ecommerce.com",
    phone: "+1 (555) 456-7890",
    company: "E-commerce Plus",
    status: "pending",
    lastLogin: null,
    joinDate: "2024-01-12",
    totalProjects: 1,
    activeProjects: 1,
    totalValue: 32000,
    documentsShared: 3,
    messagesUnread: 3,
    nextMilestone: "Requirements Review",
    milestoneDate: "2024-01-18"
  },
  {
    id: "CLIENT-005",
    name: "HealthTech Innovations",
    contactPerson: "Lisa Rodriguez",
    email: "lisa@healthtech.com",
    phone: "+1 (555) 567-8901",
    company: "HealthTech Innovations",
    status: "active",
    lastLogin: "2024-01-13T16:45:00",
    joinDate: "2023-08-05",
    totalProjects: 2,
    activeProjects: 0,
    totalValue: 38000,
    documentsShared: 15,
    messagesUnread: 0,
    nextMilestone: "Maintenance Phase",
    milestoneDate: null
  }
];

// Mock projects data
const mockProjects = [
  {
    id: "PROJ-001",
    clientId: "CLIENT-001",
    name: "Web Application Redesign",
    status: "in-progress",
    progress: 65,
    startDate: "2024-01-01",
    dueDate: "2024-02-15",
    value: 15000,
    milestones: [
      { name: "Discovery", status: "completed", date: "2024-01-05" },
      { name: "Design Review", status: "in-progress", date: "2024-01-20" },
      { name: "Development", status: "pending", date: "2024-02-01" },
      { name: "Testing & Launch", status: "pending", date: "2024-02-15" }
    ]
  },
  {
    id: "PROJ-002",
    clientId: "CLIENT-002",
    name: "Mobile App MVP",
    status: "in-progress",
    progress: 40,
    startDate: "2023-12-15",
    dueDate: "2024-01-30",
    value: 18500,
    milestones: [
      { name: "Planning", status: "completed", date: "2023-12-20" },
      { name: "MVP Development", status: "in-progress", date: "2024-01-25" },
      { name: "Beta Testing", status: "pending", date: "2024-01-28" },
      { name: "Launch", status: "pending", date: "2024-01-30" }
    ]
  }
];

// Mock documents
const mockDocuments = [
  {
    id: "DOC-001",
    clientId: "CLIENT-001",
    name: "Project Requirements.pdf",
    type: "pdf",
    size: "2.4 MB",
    uploadedDate: "2024-01-10",
    uploadedBy: "Admin",
    downloads: 3
  },
  {
    id: "DOC-002",
    clientId: "CLIENT-001",
    name: "Design Mockups.zip",
    type: "zip",
    size: "15.7 MB",
    uploadedDate: "2024-01-12",
    uploadedBy: "Admin",
    downloads: 1
  },
  {
    id: "DOC-003",
    clientId: "CLIENT-002",
    name: "Technical Specifications.docx",
    type: "docx",
    size: "1.8 MB",
    uploadedDate: "2024-01-08",
    uploadedBy: "Client",
    downloads: 5
  }
];

// Mock messages
const mockMessages = [
  {
    id: "MSG-001",
    clientId: "CLIENT-001",
    sender: "Sarah Johnson",
    subject: "Design Review Feedback",
    preview: "The new design looks great, but I have a few suggestions...",
    timestamp: "2024-01-15T14:30:00",
    unread: true
  },
  {
    id: "MSG-002",
    clientId: "CLIENT-004",
    sender: "David Wilson",
    subject: "Project Timeline Questions",
    preview: "Can we discuss the timeline for the e-commerce features?",
    timestamp: "2024-01-14T09:15:00",
    unread: true
  },
  {
    id: "MSG-003",
    clientId: "CLIENT-003",
    sender: "Emily Davis",
    subject: "Final Invoice Payment",
    preview: "Payment has been processed. Thank you for the excellent work!",
    timestamp: "2024-01-12T11:45:00",
    unread: false
  }
];

const statusColors = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-gray-100 text-gray-700",
  pending: "bg-yellow-100 text-yellow-700"
};

const projectStatusColors = {
  "in-progress": "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  "on-hold": "bg-orange-100 text-orange-700"
};

export default function ClientPortal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);

  // Admin notification counts
  const adminNotifications = {
    clients: mockClients.filter(c => c.status === 'pending' || c.messagesUnread > 0).length, // Pending clients or clients with unread messages
    projects: mockProjects.filter(p => p.status === 'in-progress' && p.progress < 50).length, // Projects needing attention
    documents: mockDocuments.filter(d => d.uploadedBy === 'Client' && d.uploadedDate === '2024-01-08').length, // New client uploads
    messages: mockMessages.filter(m => m.unread).length // Unread messages from clients
  };

  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate metrics
  const totalClients = mockClients.length;
  const activeClients = mockClients.filter(c => c.status === 'active').length;
  const pendingClients = mockClients.filter(c => c.status === 'pending').length;
  const totalProjects = mockClients.reduce((sum, c) => sum + c.totalProjects, 0);
  const activeProjects = mockClients.reduce((sum, c) => sum + c.activeProjects, 0);
  const unreadMessages = mockMessages.filter(m => m.unread).length;

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
            <div>
              <h1 className="text-3xl font-light tracking-tight flex items-center">
                <FileText className="h-8 w-8 mr-3 text-muted-foreground" />
                Client Portal Management
              </h1>
              <p className="text-muted-foreground mt-2">
                Manage client access, projects, and communications
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                Portal Settings
              </Button>
              <Button className="flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Add Client
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Clients</p>
                    <p className="text-2xl font-light">{totalClients}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activeClients} active • {pendingClients} pending
                    </p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                {pendingClients > 0 && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="destructive" className="text-xs animate-pulse">
                      {pendingClients} pending
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Projects</p>
                    <p className="text-2xl font-light">{activeProjects}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {totalProjects} total projects
                    </p>
                  </div>
                  <FolderOpen className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="relative">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Unread Messages</p>
                    <p className="text-2xl font-light">{unreadMessages}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Requires attention
                    </p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-orange-600" />
                </div>
                {unreadMessages > 0 && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center animate-pulse">
                      !
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Documents Shared</p>
                    <p className="text-2xl font-light">{mockDocuments.length}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      This month
                    </p>
                  </div>
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="clients" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="clients" className="relative">
                Clients
                {adminNotifications.clients > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {adminNotifications.clients}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="projects" className="relative">
                Projects
                {adminNotifications.projects > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {adminNotifications.projects}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="documents" className="relative">
                Documents
                {adminNotifications.documents > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {adminNotifications.documents}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="messages" className="relative">
                Messages
                {adminNotifications.messages > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {adminNotifications.messages}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="clients" className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search clients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending Setup</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Clients List */}
              <div className="grid grid-cols-1 gap-4">
                {filteredClients.map((client) => (
                  <Card key={client.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <Building className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="font-medium text-lg">{client.name}</h3>
                              <Badge className={statusColors[client.status]} variant="secondary">
                                {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{client.contactPerson}</p>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {client.email}
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {client.phone}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                Joined {formatDate(client.joinDate)}
                              </div>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <div>{client.activeProjects} active projects</div>
                              <div>{client.documentsShared} documents</div>
                              <div>Last login: {formatDateTime(client.lastLogin)}</div>
                              {client.messagesUnread > 0 && (
                                <Badge variant="destructive" className="text-xs">
                                  {client.messagesUnread} unread messages
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {mockProjects.map((project) => {
                  const client = mockClients.find(c => c.id === project.clientId);
                  return (
                    <Card key={project.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                              <FolderOpen className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h3 className="font-medium text-lg">{project.name}</h3>
                                <Badge className={projectStatusColors[project.status]} variant="secondary">
                                  {project.status.replace('-', ' ').charAt(0).toUpperCase() + project.status.replace('-', ' ').slice(1)}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">Client: {client?.name}</p>
                              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                                <div>Progress: {project.progress}%</div>
                                <div>Start: {formatDate(project.startDate)}</div>
                                <div>Due: {formatDate(project.dueDate)}</div>
                                <div>Value: ${project.value.toLocaleString()}</div>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Shared Documents</h3>
                <Button className="flex items-center">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {mockDocuments.map((document) => {
                  const client = mockClients.find(c => c.id === document.clientId);
                  return (
                    <Card key={document.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                              <FileText className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                              <h4 className="font-medium">{document.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {client?.name} • {document.size} • Uploaded {formatDate(document.uploadedDate)}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                By {document.uploadedBy} • {document.downloads} downloads
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="messages" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {mockMessages.map((message) => {
                  const client = mockClients.find(c => c.id === message.clientId);
                  return (
                    <Card key={message.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                              <MessageSquare className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-medium">{message.subject}</h4>
                                {message.unread && (
                                  <Badge variant="destructive" className="text-xs">New</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-1">
                                From: {message.sender} ({client?.name})
                              </p>
                              <p className="text-sm text-muted-foreground italic mb-2">
                                "{message.preview}"
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {formatDateTime(message.timestamp)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

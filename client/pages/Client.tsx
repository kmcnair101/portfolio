import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useClientAuth } from "@/contexts/ClientAuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import {
  Home,
  FolderOpen,
  MessageSquare,
  CreditCard,
  FileText,
  Calendar,
  BarChart3,
  Settings,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Upload,
  Send,
  Phone,
  Video,
  Mail,
  Bell,
  User,
  Building,
  Activity,
  Archive,
  DollarSign,
  Eye,
  Edit,
  Check,
  X,
  Plus,
} from "lucide-react";

// Client data comes from auth context

// Mock projects data
const mockProjects = [
  {
    id: "PROJ-001",
    name: "E-commerce Platform Development",
    status: "in-progress",
    progress: 65,
    startDate: "2024-01-01",
    dueDate: "2024-03-15",
    value: 25000,
    description:
      "Full-stack e-commerce platform with React, Node.js, and PostgreSQL",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
    milestones: [
      {
        id: 1,
        name: "API Architecture & Database Design",
        status: "completed",
        date: "2024-01-05",
        description: "RESTful API design and database schema implementation",
      },
      {
        id: 2,
        name: "Frontend Components & Authentication",
        status: "in-progress",
        date: "2024-01-20",
        description: "React components, user auth, and payment integration",
        needsApproval: true,
      },
      {
        id: 3,
        name: "Backend Services & Testing",
        status: "pending",
        date: "2024-02-15",
        description:
          "Order processing, inventory management, and automated testing",
      },
      {
        id: 4,
        name: "Deployment & Performance Optimization",
        status: "pending",
        date: "2024-03-15",
        description: "AWS deployment, CI/CD pipeline, and performance tuning",
      },
    ],
  },
  {
    id: "PROJ-002",
    name: "Mobile App Backend API",
    status: "completed",
    progress: 100,
    startDate: "2023-11-01",
    dueDate: "2023-12-15",
    value: 12000,
    description:
      "RESTful API backend for iOS/Android fitness tracking application",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
    milestones: [
      {
        id: 1,
        name: "API Design & Documentation",
        status: "completed",
        date: "2023-11-05",
      },
      {
        id: 2,
        name: "Core Backend Development",
        status: "completed",
        date: "2023-11-20",
      },
      {
        id: 3,
        name: "Testing & Security Implementation",
        status: "completed",
        date: "2023-12-10",
      },
      {
        id: 4,
        name: "Deployment & Monitoring Setup",
        status: "completed",
        date: "2023-12-15",
      },
    ],
  },
];

// Mock invoices data
const mockInvoices = [
  {
    id: "INV-001",
    projectName: "E-commerce Platform Development",
    amount: 12500,
    status: "paid",
    dueDate: "2024-01-15",
    paidDate: "2024-01-12",
    description: "50% milestone payment - API & Frontend development",
  },
  {
    id: "INV-002",
    projectName: "E-commerce Platform Development",
    amount: 12500,
    status: "pending",
    dueDate: "2024-03-15",
    paidDate: null,
    description: "Final payment on completion & deployment",
  },
  {
    id: "INV-003",
    projectName: "Mobile App Backend API",
    amount: 12000,
    status: "paid",
    dueDate: "2023-12-20",
    paidDate: "2023-12-18",
    description: "Full backend development & deployment",
  },
];

// Mock messages data
const mockMessages = [
  {
    id: 1,
    sender: "Kris McNair",
    message:
      "Hi Sarah! I've completed the authentication system and deployed the API to staging. The frontend components are ready for your review.",
    timestamp: "2024-01-15T14:30:00",
    isFromClient: false,
  },
  {
    id: 2,
    sender: "Sarah Johnson",
    message:
      "Excellent work! The API responses look great. Could we add pagination to the product listings and implement search functionality?",
    timestamp: "2024-01-15T15:45:00",
    isFromClient: true,
  },
  {
    id: 3,
    sender: "Kris McNair",
    message:
      "Absolutely! I'll implement pagination and search with filtering options. Should have that ready by tomorrow.",
    timestamp: "2024-01-15T16:00:00",
    isFromClient: false,
  },
];

// Mock files data
const mockFiles = [
  {
    id: 1,
    name: "Technical_Requirements_v2.pdf",
    type: "pdf",
    size: "2.4 MB",
    category: "documentation",
    uploadedDate: "2024-01-01",
    uploadedBy: "client",
  },
  {
    id: 2,
    name: "API_Documentation_v1.zip",
    type: "zip",
    size: "8.3 MB",
    category: "deliverables",
    uploadedDate: "2024-01-15",
    uploadedBy: "freelancer",
  },
  {
    id: 3,
    name: "Database_Schema_Design.sql",
    type: "sql",
    size: "156 KB",
    category: "deliverables",
    uploadedDate: "2024-01-10",
    uploadedBy: "freelancer",
  },
  {
    id: 4,
    name: "Deployment_Guide.md",
    type: "md",
    size: "45 KB",
    category: "documentation",
    uploadedDate: "2023-12-15",
    uploadedBy: "freelancer",
  },
  {
    id: 5,
    name: "Frontend_Components_v2.zip",
    type: "zip",
    size: "12.1 MB",
    category: "source_code",
    uploadedDate: "2024-01-15",
    uploadedBy: "freelancer",
  },
];

// Mock activity data
const mockActivity = [
  {
    id: 1,
    type: "milestone",
    description:
      "Frontend Components & Authentication milestone ready for review",
    timestamp: "2024-01-15T14:30:00",
  },
  {
    id: 2,
    type: "payment",
    description: "Invoice INV-001 payment received",
    timestamp: "2024-01-12T10:15:00",
  },
  {
    id: 3,
    type: "deployment",
    description: "API deployed to staging environment",
    timestamp: "2024-01-14T09:30:00",
  },
  {
    id: 4,
    type: "file",
    description: "New file uploaded: Frontend_Components_v2.zip",
    timestamp: "2024-01-15T14:25:00",
  },
  {
    id: 5,
    type: "code_review",
    description: "Code review completed for authentication system",
    timestamp: "2024-01-13T11:45:00",
  },
  {
    id: 6,
    type: "testing",
    description: "Unit tests added for API endpoints",
    timestamp: "2024-01-12T16:20:00",
  },
];

const statusColors = {
  "in-progress": "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  paid: "bg-green-100 text-green-700",
  overdue: "bg-red-100 text-red-700",
};

export default function Client() {
  const [newMessage, setNewMessage] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const { client, logout } = useClientAuth();

  // Notification counts
  const notifications = {
    projects: 1, // 1 code review needs approval
    messages: 2, // 2 technical updates
    invoices: 1, // 1 pending invoice
    proposals: 0, // No pending technical proposals
    files: 1, // 1 new deliverable uploaded
    activity: 0, // No new development activity
  };

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  // If client data is not loaded yet, show loading
  if (!client) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the server
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const handleApproveDecline = (milestoneId, action) => {
    console.log(`${action} milestone ${milestoneId}`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-border/50 gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-light tracking-tight">
                  Welcome back, {client.name}
                </h1>
                <p className="text-muted-foreground mt-1">{client.company}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Notifications</span>
                {notifications.projects +
                  notifications.messages +
                  notifications.invoices +
                  notifications.proposals +
                  notifications.files >
                  0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.projects +
                      notifications.messages +
                      notifications.invoices +
                      notifications.proposals +
                      notifications.files}
                  </span>
                )}
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Settings</span>
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <span className="sm:hidden">Exit</span>
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-12"
          >
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-1">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="projects" className="relative">
                Projects
                {notifications.projects > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.projects}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="messages" className="relative">
                Messages
                {notifications.messages > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.messages}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="invoices" className="relative">
                Invoices
                {notifications.invoices > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.invoices}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="proposals" className="relative">
                Proposals
                {notifications.proposals > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.proposals}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="scheduling">Schedule</TabsTrigger>
              <TabsTrigger value="files" className="relative">
                File Vault
                {notifications.files > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.files}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="mt-16 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Active Development
                        </p>
                        <p className="text-2xl font-light">1</p>
                      </div>
                      <FolderOpen className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Code Reviews
                        </p>
                        <p className="text-2xl font-light">1</p>
                      </div>
                      <AlertCircle className="h-8 w-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Technical Updates
                        </p>
                        <p className="text-2xl font-light">2</p>
                      </div>
                      <MessageSquare className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Pending Invoices
                        </p>
                        <p className="text-2xl font-light">1</p>
                      </div>
                      <CreditCard className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity & Current Projects */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="lg:order-1 order-last">
                  <CardHeader>
                    <CardTitle>Current Project Status</CardTitle>
                    <CardDescription>
                      Your active projects and their progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {mockProjects
                      .filter((p) => p.status === "in-progress")
                      .map((project) => (
                        <div key={project.id} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{project.name}</h4>
                            <Badge
                              className={statusColors[project.status]}
                              variant="secondary"
                            >
                              {project.progress}% Complete
                            </Badge>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                <Card className="lg:order-2 order-first">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Latest updates and actions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockActivity.slice(0, 4).map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm">{activity.description}</p>
                            <p className="text-xs text-muted-foreground">
                              {formatDateTime(activity.timestamp)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <div className="space-y-6">
                {mockProjects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-3">
                            {project.name}
                            <Badge
                              className={statusColors[project.status]}
                              variant="secondary"
                            >
                              {project.status
                                .replace("-", " ")
                                .charAt(0)
                                .toUpperCase() +
                                project.status.replace("-", " ").slice(1)}
                            </Badge>
                          </CardTitle>
                          <CardDescription>
                            {project.description}
                          </CardDescription>
                          {project.tech && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.tech.map((tech, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-medium">
                            ${project.value.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Due: {formatDate(project.dueDate)}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3">
                            Project Milestones
                          </h4>
                          <div className="space-y-3">
                            {project.milestones.map((milestone) => (
                              <div
                                key={milestone.id}
                                className="flex items-center justify-between p-3 border rounded-lg"
                              >
                                <div className="flex items-center space-x-3">
                                  {milestone.status === "completed" && (
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                  )}
                                  {milestone.status === "in-progress" && (
                                    <Clock className="h-5 w-5 text-blue-600" />
                                  )}
                                  {milestone.status === "pending" && (
                                    <AlertCircle className="h-5 w-5 text-gray-400" />
                                  )}
                                  <div>
                                    <div className="font-medium">
                                      {milestone.name}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      {milestone.description}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                      Due: {formatDate(milestone.date)}
                                    </div>
                                  </div>
                                </div>
                                {milestone.needsApproval && (
                                  <div className="flex gap-2 items-center">
                                    <Badge
                                      variant="destructive"
                                      className="text-xs animate-pulse"
                                    >
                                      Action Required
                                    </Badge>
                                    <Button
                                      size="sm"
                                      onClick={() =>
                                        handleApproveDecline(
                                          milestone.id,
                                          "approve",
                                        )
                                      }
                                    >
                                      <Check className="h-4 w-4 mr-1" />
                                      Approve
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() =>
                                        handleApproveDecline(
                                          milestone.id,
                                          "decline",
                                        )
                                      }
                                    >
                                      <X className="h-4 w-4 mr-1" />
                                      Decline
                                    </Button>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Development Updates with Kris McNair
                    {notifications.messages > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {notifications.messages} new
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription>
                    Technical discussions and project updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {mockMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isFromClient ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.isFromClient
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          <div className="text-sm font-medium mb-1">
                            {message.sender}
                          </div>
                          <div className="text-sm">{message.message}</div>
                          <div
                            className={`text-xs mt-1 ${message.isFromClient ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                          >
                            {formatDateTime(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Textarea
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1"
                      rows={2}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Invoices Tab */}
            <TabsContent value="invoices" className="space-y-6">
              <div className="space-y-4">
                {mockInvoices.map((invoice) => (
                  <Card key={invoice.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <FileText className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">
                              {invoice.id}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {invoice.projectName}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {invoice.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                              <div>Due: {formatDate(invoice.dueDate)}</div>
                              {invoice.paidDate && (
                                <div>Paid: {formatDate(invoice.paidDate)}</div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-medium">
                            ${invoice.amount.toLocaleString()}
                          </div>
                          <Badge
                            className={statusColors[invoice.status]}
                            variant="secondary"
                          >
                            {invoice.status.charAt(0).toUpperCase() +
                              invoice.status.slice(1)}
                          </Badge>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                            {invoice.status === "pending" && (
                              <>
                                <Button size="sm" className="animate-pulse">
                                  <CreditCard className="h-4 w-4 mr-1" />
                                  Pay Now
                                </Button>
                                <Badge
                                  variant="destructive"
                                  className="text-xs self-center"
                                >
                                  Payment Due
                                </Badge>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Proposals Tab */}
            <TabsContent value="proposals" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Proposals & SOW</CardTitle>
                  <CardDescription>
                    Review project scopes, technical specifications, and
                    contracts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      No technical proposals pending review
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Future feature enhancements and new project proposals will
                      appear here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Scheduling Tab */}
            <TabsContent value="scheduling" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule Technical Consultation</CardTitle>
                  <CardDescription>
                    Book technical reviews, sprint planning, or strategy
                    sessions with Kris McNair
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Button className="h-24 flex-col space-y-2">
                      <Phone className="h-6 w-6" />
                      <span>Technical Review Call</span>
                    </Button>
                    <Button
                      className="h-24 flex-col space-y-2"
                      variant="outline"
                    >
                      <Video className="h-6 w-6" />
                      <span>Screen Share Session</span>
                    </Button>
                  </div>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Available Session Types:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Code reviews and technical feedback</li>
                      <li>• Sprint planning and milestone discussions</li>
                      <li>• Architecture and technology decisions</li>
                      <li>• Deployment and infrastructure planning</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* File Vault Tab */}
            <TabsContent value="files" className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">Development Assets</h3>
                  {notifications.files > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {notifications.files} new deliverable
                    </Badge>
                  )}
                </div>
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Requirements
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {mockFiles.map((file) => (
                  <Card key={file.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <FileText className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{file.name}</h4>
                              {file.uploadedDate === "2024-01-15" &&
                                file.uploadedBy === "freelancer" && (
                                  <Badge
                                    variant="destructive"
                                    className="text-xs animate-pulse"
                                  >
                                    New
                                  </Badge>
                                )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {file.size} • Uploaded{" "}
                              {formatDate(file.uploadedDate)} by{" "}
                              {file.uploadedBy}
                            </p>
                            <Badge variant="outline" className="mt-1 text-xs">
                              {file.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                  <CardDescription>
                    Chronological history of all actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start space-x-3 pb-4 border-b border-border/30 last:border-b-0"
                      >
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mt-0.5">
                          <Activity className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            {activity.description}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatDateTime(activity.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

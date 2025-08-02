import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/Layout";
import {
  Users,
  Search,
  Plus,
  Mail,
  Phone,
  Building,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  Filter,
  MoreHorizontal,
  Edit,
  Eye,
  Trash2,
} from "lucide-react";

// Mock data for contacts
const mockContacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@techcorp.com",
    phone: "+1 (555) 123-4567",
    company: "TechCorp Solutions",
    position: "CTO",
    stage: "qualified",
    value: 15000,
    lastContact: "2024-01-15",
    source: "Website",
    tags: ["hot-lead", "enterprise"],
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@startup.io",
    phone: "+1 (555) 234-5678",
    company: "Startup.io",
    position: "Founder",
    stage: "proposal",
    value: 8500,
    lastContact: "2024-01-12",
    source: "Referral",
    tags: ["startup", "urgent"],
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@designstudio.com",
    phone: "+1 (555) 345-6789",
    company: "Design Studio",
    position: "Creative Director",
    stage: "lead",
    value: 5200,
    lastContact: "2024-01-10",
    source: "LinkedIn",
    tags: ["design", "small-business"],
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@ecommerce.com",
    phone: "+1 (555) 456-7890",
    company: "E-commerce Plus",
    position: "VP Engineering",
    stage: "negotiation",
    value: 22000,
    lastContact: "2024-01-14",
    source: "Cold Email",
    tags: ["enterprise", "e-commerce"],
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    email: "lisa@healthtech.com",
    phone: "+1 (555) 567-8901",
    company: "HealthTech Innovations",
    position: "Product Manager",
    stage: "closed-won",
    value: 12000,
    lastContact: "2024-01-08",
    source: "Event",
    tags: ["healthcare", "won"],
  },
];

const pipelineStages = [
  { id: "lead", name: "Lead", color: "bg-gray-100 text-gray-700" },
  { id: "qualified", name: "Qualified", color: "bg-blue-100 text-blue-700" },
  { id: "proposal", name: "Proposal", color: "bg-yellow-100 text-yellow-700" },
  {
    id: "negotiation",
    name: "Negotiation",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "closed-won",
    name: "Closed Won",
    color: "bg-green-100 text-green-700",
  },
  { id: "closed-lost", name: "Closed Lost", color: "bg-red-100 text-red-700" },
];

const recentActivities = [
  {
    id: 1,
    type: "call",
    contact: "Sarah Johnson",
    description: "Follow-up call scheduled",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "email",
    contact: "Michael Chen",
    description: "Proposal sent",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    type: "meeting",
    contact: "David Wilson",
    description: "Demo meeting completed",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    type: "note",
    contact: "Emily Davis",
    description: "Initial consultation notes added",
    timestamp: "2 days ago",
  },
];

export default function CRM() {
  const [searchTerm, setSearchTerm] = useState("");
  const [stageFilter, setStageFilter] = useState("all");
  const [selectedContact, setSelectedContact] = useState(null);

  const filteredContacts = mockContacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = stageFilter === "all" || contact.stage === stageFilter;
    return matchesSearch && matchesStage;
  });

  const getStageColor = (stage) => {
    const stageObj = pipelineStages.find((s) => s.id === stage);
    return stageObj ? stageObj.color : "bg-gray-100 text-gray-700";
  };

  const getStageName = (stage) => {
    const stageObj = pipelineStages.find((s) => s.id === stage);
    return stageObj ? stageObj.name : stage;
  };

  const totalValue = filteredContacts.reduce(
    (sum, contact) => sum + contact.value,
    0,
  );
  const wonDeals = mockContacts.filter((c) => c.stage === "closed-won").length;
  const totalDeals = mockContacts.length;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-border/50 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-light tracking-tight flex items-center">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3 text-muted-foreground" />
                <span className="hidden sm:inline">
                  Customer Relationship Management
                </span>
                <span className="sm:hidden">CRM</span>
              </h1>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Manage contacts, leads, and track your sales pipeline
              </p>
            </div>
            <Button className="flex items-center flex-shrink-0">
              <Plus className="h-4 w-4 mr-2" />
              Add Contact
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Contacts
                    </p>
                    <p className="text-2xl font-light">
                      {filteredContacts.length}
                    </p>
                  </div>
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Pipeline Value
                    </p>
                    <p className="text-2xl font-light">
                      ${totalValue.toLocaleString()}
                    </p>
                  </div>
                  <DollarSign className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Win Rate</p>
                    <p className="text-2xl font-light">
                      {Math.round((wonDeals / totalDeals) * 100)}%
                    </p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Active Deals
                    </p>
                    <p className="text-2xl font-light">
                      {
                        mockContacts.filter((c) => !c.stage.includes("closed"))
                          .length
                      }
                    </p>
                  </div>
                  <Clock className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="contacts" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>

            <TabsContent value="contacts" className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={stageFilter} onValueChange={setStageFilter}>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Stages</SelectItem>
                    {pipelineStages.map((stage) => (
                      <SelectItem key={stage.id} value={stage.id}>
                        {stage.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Contacts List */}
              <div className="grid grid-cols-1 gap-4">
                {filteredContacts.map((contact) => (
                  <Card
                    key={contact.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1">
                              <h3 className="font-medium text-lg truncate">
                                {contact.name}
                              </h3>
                              <Badge
                                className={getStageColor(contact.stage)}
                                variant="secondary"
                              >
                                {getStageName(contact.stage)}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {contact.position} at {contact.company}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                <span className="truncate">
                                  {contact.email}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {contact.phone}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-3 w-3" />$
                                {contact.value.toLocaleString()}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {contact.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
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
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pipeline" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {pipelineStages.map((stage) => {
                  const stageContacts = mockContacts.filter(
                    (c) => c.stage === stage.id,
                  );
                  const stageValue = stageContacts.reduce(
                    (sum, c) => sum + c.value,
                    0,
                  );

                  return (
                    <Card key={stage.id}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">
                          {stage.name}
                        </CardTitle>
                        <CardDescription>
                          {stageContacts.length} contacts • $
                          {stageValue.toLocaleString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {stageContacts.map((contact) => (
                            <div
                              key={contact.id}
                              className="p-3 bg-muted/30 rounded border"
                            >
                              <div className="font-medium text-sm">
                                {contact.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {contact.company}
                              </div>
                              <div className="text-xs font-medium mt-1">
                                ${contact.value.toLocaleString()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="activities" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>
                    Latest interactions and updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center space-x-3 pb-4 border-b border-border/30 last:border-0"
                      >
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          {activity.type === "call" && (
                            <Phone className="h-4 w-4" />
                          )}
                          {activity.type === "email" && (
                            <Mail className="h-4 w-4" />
                          )}
                          {activity.type === "meeting" && (
                            <Calendar className="h-4 w-4" />
                          )}
                          {activity.type === "note" && (
                            <Edit className="h-4 w-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">
                            {activity.contact}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {activity.description}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {activity.timestamp}
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

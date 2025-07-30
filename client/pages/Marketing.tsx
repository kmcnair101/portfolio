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
  Mail,
  Search,
  Plus,
  TrendingUp,
  TrendingDown,
  Users,
  MousePointer,
  Eye,
  Send,
  Calendar,
  Target,
  Filter,
  Play,
  Pause,
  MoreHorizontal,
  Edit,
  Copy,
  Trash2,
  BarChart3,
  Settings,
  Zap,
} from "lucide-react";

// Mock data for campaigns
const mockCampaigns = [
  {
    id: "CAMP-001",
    name: "Welcome Series",
    type: "automation",
    status: "active",
    subject: "Welcome to our community!",
    audience: "New Subscribers",
    audienceSize: 245,
    sent: 1250,
    opens: 1115,
    clicks: 223,
    conversions: 45,
    revenue: 4500,
    openRate: 89.2,
    clickRate: 17.8,
    conversionRate: 3.6,
    createdDate: "2024-01-01",
    lastSent: "2024-01-15",
  },
  {
    id: "CAMP-002",
    name: "Product Launch Announcement",
    type: "campaign",
    status: "sent",
    subject: "🚀 New Feature: Advanced Analytics Dashboard",
    audience: "All Customers",
    audienceSize: 1850,
    sent: 1850,
    opens: 1332,
    clicks: 266,
    conversions: 32,
    revenue: 8500,
    openRate: 72.0,
    clickRate: 14.4,
    conversionRate: 1.7,
    createdDate: "2024-01-10",
    lastSent: "2024-01-12",
  },
  {
    id: "CAMP-003",
    name: "Monthly Newsletter",
    type: "campaign",
    status: "scheduled",
    subject: "Your Monthly Digest - January 2024",
    audience: "Newsletter Subscribers",
    audienceSize: 3200,
    sent: 0,
    opens: 0,
    clicks: 0,
    conversions: 0,
    revenue: 0,
    openRate: 0,
    clickRate: 0,
    conversionRate: 0,
    createdDate: "2024-01-14",
    lastSent: null,
    scheduledDate: "2024-01-20",
  },
  {
    id: "CAMP-004",
    name: "Re-engagement Campaign",
    type: "automation",
    status: "draft",
    subject: "We miss you! Special offer inside",
    audience: "Inactive Users",
    audienceSize: 580,
    sent: 0,
    opens: 0,
    clicks: 0,
    conversions: 0,
    revenue: 0,
    openRate: 0,
    clickRate: 0,
    conversionRate: 0,
    createdDate: "2024-01-13",
    lastSent: null,
  },
  {
    id: "CAMP-005",
    name: "Black Friday Sale",
    type: "campaign",
    status: "sent",
    subject: "🔥 50% OFF Everything - Limited Time!",
    audience: "All Subscribers",
    audienceSize: 4100,
    sent: 4100,
    opens: 3198,
    clicks: 1023,
    conversions: 156,
    revenue: 23400,
    openRate: 78.0,
    clickRate: 24.9,
    conversionRate: 3.8,
    createdDate: "2023-11-23",
    lastSent: "2023-11-24",
  },
];

// Mock audience segments
const mockAudiences = [
  { id: 1, name: "All Subscribers", size: 4100, growth: "+12%" },
  { id: 2, name: "New Subscribers", size: 245, growth: "+8%" },
  { id: 3, name: "Active Customers", size: 1850, growth: "+15%" },
  { id: 4, name: "Newsletter Subscribers", size: 3200, growth: "+5%" },
  { id: 5, name: "Inactive Users", size: 580, growth: "-3%" },
  { id: 6, name: "VIP Customers", size: 125, growth: "+22%" },
];

// Mock automation workflows
const mockAutomations = [
  {
    id: "AUTO-001",
    name: "Welcome Series",
    trigger: "New Subscription",
    status: "active",
    emails: 3,
    subscribers: 245,
    openRate: 89.2,
    clickRate: 17.8,
    conversions: 45,
  },
  {
    id: "AUTO-002",
    name: "Abandoned Cart Recovery",
    trigger: "Cart Abandonment",
    status: "active",
    emails: 2,
    subscribers: 156,
    openRate: 65.4,
    clickRate: 23.1,
    conversions: 28,
  },
  {
    id: "AUTO-003",
    name: "Birthday Campaign",
    trigger: "Birthday Date",
    status: "paused",
    emails: 1,
    subscribers: 89,
    openRate: 82.0,
    clickRate: 15.6,
    conversions: 12,
  },
];

const statusColors = {
  active: "bg-green-100 text-green-700",
  sent: "bg-blue-100 text-blue-700",
  scheduled: "bg-yellow-100 text-yellow-700",
  draft: "bg-gray-100 text-gray-700",
  paused: "bg-orange-100 text-orange-700",
};

const typeColors = {
  campaign: "bg-purple-100 text-purple-700",
  automation: "bg-cyan-100 text-cyan-700",
};

export default function Marketing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredCampaigns = mockCampaigns.filter((campaign) => {
    const matchesSearch =
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || campaign.status === statusFilter;
    const matchesType = typeFilter === "all" || campaign.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  // Calculate overall metrics
  const totalSent = mockCampaigns.reduce((sum, camp) => sum + camp.sent, 0);
  const totalOpens = mockCampaigns.reduce((sum, camp) => sum + camp.opens, 0);
  const totalClicks = mockCampaigns.reduce((sum, camp) => sum + camp.clicks, 0);
  const totalRevenue = mockCampaigns.reduce(
    (sum, camp) => sum + camp.revenue,
    0,
  );
  const overallOpenRate =
    totalSent > 0 ? ((totalOpens / totalSent) * 100).toFixed(1) : 0;
  const overallClickRate =
    totalSent > 0 ? ((totalClicks / totalSent) * 100).toFixed(1) : 0;
  const totalSubscribers = 4100; // Mock total

  const formatDate = (dateString) => {
    if (!dateString) return "Not sent";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
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
                <Mail className="h-8 w-8 mr-3 text-muted-foreground" />
                Marketing Automation
              </h1>
              <p className="text-muted-foreground mt-2">
                Create, automate, and optimize your email marketing campaigns
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Create Automation
              </Button>
              <Button className="flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Subscribers
                    </p>
                    <p className="text-2xl font-light">
                      {totalSubscribers.toLocaleString()}
                    </p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +12% this month
                    </p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Open Rate</p>
                    <p className="text-2xl font-light">{overallOpenRate}%</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +2.3% from last month
                    </p>
                  </div>
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Click Rate</p>
                    <p className="text-2xl font-light">{overallClickRate}%</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +1.8% from last month
                    </p>
                  </div>
                  <MousePointer className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Revenue Generated
                    </p>
                    <p className="text-2xl font-light">
                      ${totalRevenue.toLocaleString()}
                    </p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +18% from last month
                    </p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="campaigns" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="automations">Automations</TabsTrigger>
              <TabsTrigger value="audiences">Audiences</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="campaigns" className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search campaigns..."
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
                    <SelectItem value="sent">Sent</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="campaign">Campaigns</SelectItem>
                    <SelectItem value="automation">Automations</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Campaigns List */}
              <div className="grid grid-cols-1 gap-4">
                {filteredCampaigns.map((campaign) => (
                  <Card
                    key={campaign.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <Mail className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="font-medium text-lg">
                                {campaign.name}
                              </h3>
                              <Badge
                                className={statusColors[campaign.status]}
                                variant="secondary"
                              >
                                {campaign.status.charAt(0).toUpperCase() +
                                  campaign.status.slice(1)}
                              </Badge>
                              <Badge
                                className={typeColors[campaign.type]}
                                variant="secondary"
                              >
                                {campaign.type.charAt(0).toUpperCase() +
                                  campaign.type.slice(1)}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2 italic">
                              "{campaign.subject}"
                            </p>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center gap-1">
                                <Target className="h-3 w-3" />
                                {campaign.audience} (
                                {campaign.audienceSize.toLocaleString()})
                              </div>
                              {campaign.sent > 0 && (
                                <>
                                  <div className="flex items-center gap-1">
                                    <Send className="h-3 w-3" />
                                    {campaign.sent.toLocaleString()} sent
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Eye className="h-3 w-3" />
                                    {campaign.openRate}% open rate
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MousePointer className="h-3 w-3" />
                                    {campaign.clickRate}% click rate
                                  </div>
                                </>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Created {formatDate(campaign.createdDate)} •
                              {campaign.scheduledDate
                                ? ` Scheduled for ${formatDate(campaign.scheduledDate)}`
                                : campaign.lastSent
                                  ? ` Last sent ${formatDate(campaign.lastSent)}`
                                  : " Not sent yet"}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <BarChart3 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Copy className="h-4 w-4" />
                          </Button>
                          {campaign.status === "active" && (
                            <Button variant="ghost" size="sm">
                              <Pause className="h-4 w-4" />
                            </Button>
                          )}
                          {campaign.status === "draft" && (
                            <Button variant="ghost" size="sm">
                              <Send className="h-4 w-4" />
                            </Button>
                          )}
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

            <TabsContent value="automations" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {mockAutomations.map((automation) => (
                  <Card
                    key={automation.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <Zap className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="font-medium text-lg">
                                {automation.name}
                              </h3>
                              <Badge
                                className={statusColors[automation.status]}
                                variant="secondary"
                              >
                                {automation.status.charAt(0).toUpperCase() +
                                  automation.status.slice(1)}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              Trigger: {automation.trigger}
                            </p>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <div>{automation.emails} emails</div>
                              <div>{automation.subscribers} subscribers</div>
                              <div>{automation.openRate}% open rate</div>
                              <div>{automation.clickRate}% click rate</div>
                              <div>{automation.conversions} conversions</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          {automation.status === "active" ? (
                            <Button variant="ghost" size="sm">
                              <Pause className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button variant="ghost" size="sm">
                              <Play className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="audiences" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockAudiences.map((audience) => (
                  <Card key={audience.id}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-medium">
                        {audience.name}
                      </CardTitle>
                      <CardDescription>
                        {audience.size.toLocaleString()} subscribers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Growth this month
                        </div>
                        <div
                          className={`text-sm font-medium ${audience.growth.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                        >
                          {audience.growth}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Performance</CardTitle>
                    <CardDescription>
                      Overall metrics across all campaigns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Total Emails Sent
                        </span>
                        <span className="font-medium">
                          {totalSent.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Total Opens
                        </span>
                        <span className="font-medium">
                          {totalOpens.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Total Clicks
                        </span>
                        <span className="font-medium">
                          {totalClicks.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-sm font-medium">
                          Revenue Generated
                        </span>
                        <span className="font-medium text-green-600">
                          ${totalRevenue.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Campaigns</CardTitle>
                    <CardDescription>
                      Highest converting campaigns this month
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockCampaigns
                        .filter((c) => c.sent > 0)
                        .sort((a, b) => b.conversionRate - a.conversionRate)
                        .slice(0, 3)
                        .map((campaign) => (
                          <div
                            key={campaign.id}
                            className="flex justify-between items-center"
                          >
                            <div>
                              <div className="font-medium text-sm">
                                {campaign.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {campaign.conversionRate}% conversion rate
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-sm">
                                ${campaign.revenue.toLocaleString()}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {campaign.conversions} conversions
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

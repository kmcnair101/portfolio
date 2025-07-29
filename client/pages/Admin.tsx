import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  CreditCard, 
  Mail, 
  FileText,
  Settings,
  TrendingUp,
  DollarSign,
  MessageSquare,
  Calendar
} from "lucide-react";

const adminTools = [
  {
    icon: Users,
    title: "CRM",
    description: "Manage customers and sales pipeline",
    href: "/crm",
    color: "bg-blue-500/10 text-blue-600",
    stats: "127 contacts",
    growth: "+12%"
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Invoicing and payment processing",
    href: "/payments",
    color: "bg-green-500/10 text-green-600",
    stats: "$24,580 MTD",
    growth: "+8%"
  },
  {
    icon: Mail,
    title: "Marketing",
    description: "Automated campaigns and outreach",
    href: "/marketing",
    color: "bg-purple-500/10 text-purple-600",
    stats: "89.2% open rate",
    growth: "+5%"
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Business insights and reporting",
    href: "/analytics",
    color: "bg-orange-500/10 text-orange-600",
    stats: "15.3K visitors",
    growth: "+18%"
  },
  {
    icon: FileText,
    title: "Client Portal",
    description: "Manage client portal settings",
    href: "/portal",
    color: "bg-pink-500/10 text-pink-600",
    stats: "23 active clients",
    growth: "+3%"
  }
];

const quickStats = [
  {
    title: "Monthly Revenue",
    value: "$24,580",
    change: "+12%",
    icon: DollarSign,
    color: "text-green-600"
  },
  {
    title: "New Leads",
    value: "34",
    change: "+8%",
    icon: TrendingUp,
    color: "text-blue-600"
  },
  {
    title: "Active Projects",
    value: "12",
    change: "+2%",
    icon: FileText,
    color: "text-orange-600"
  },
  {
    title: "Client Messages",
    value: "7",
    change: "New",
    icon: MessageSquare,
    color: "text-purple-600"
  }
];

const recentActivity = [
  {
    action: "New client signed contract",
    client: "Acme Corp",
    time: "2 hours ago",
    type: "contract"
  },
  {
    action: "Payment received",
    client: "Tech Startup Inc",
    time: "4 hours ago",
    type: "payment"
  },
  {
    action: "Email campaign sent",
    client: "Newsletter subscribers",
    time: "1 day ago",
    type: "marketing"
  },
  {
    action: "Project milestone completed",
    client: "Design Agency",
    time: "2 days ago",
    type: "project"
  }
];

export default function Admin() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight flex items-center">
                <Settings className="h-8 w-8 mr-3 text-primary" />
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your business operations and client relationships
              </p>
            </div>
            <Button asChild>
              <Link to="/">
                Back to Portfolio
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="mt-4">
                      <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                      <span className="text-sm text-muted-foreground"> from last month</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Business Tools */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Business Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {adminTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Card key={tool.title} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-lg ${tool.color} flex items-center justify-center`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{tool.stats}</div>
                            <div className="text-xs text-green-600">{tool.growth}</div>
                          </div>
                        </div>
                        <CardTitle className="text-xl">{tool.title}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Link to={tool.href}>
                            Open Tool
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.client}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

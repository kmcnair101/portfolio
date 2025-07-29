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
          <div className="flex items-center justify-between mb-12 pb-8 border-b border-border/50">
            <div>
              <h1 className="text-3xl font-light tracking-tight">
                Admin
              </h1>
              <p className="text-muted-foreground mt-2">
                Business operations
              </p>
            </div>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Portfolio
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-light mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground mb-1">{stat.title}</div>
                <div className="text-xs text-muted-foreground">{stat.change}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Business Tools */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-light mb-8">Tools</h2>
              <div className="space-y-6">
                {adminTools.map((tool) => (
                  <div key={tool.title} className="border-b border-border/50 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium mb-1">{tool.title}</h3>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm mb-1">{tool.stats}</div>
                        <Link
                          to={tool.href}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Open →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
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

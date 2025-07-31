import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
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
    href: "/admin/crm",
    color: "bg-blue-500/10 text-blue-600",
    stats: "127 contacts",
    growth: "+12%"
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Invoicing and payment processing",
    href: "/admin/payments",
    color: "bg-green-500/10 text-green-600",
    stats: "$24,580 MTD",
    growth: "+8%"
  },
  {
    icon: Mail,
    title: "Marketing",
    description: "Automated campaigns and outreach",
    href: "/admin/marketing",
    color: "bg-purple-500/10 text-purple-600",
    stats: "89.2% open rate",
    growth: "+5%"
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Business insights and reporting",
    href: "/admin/analytics",
    color: "bg-orange-500/10 text-orange-600",
    stats: "15.3K visitors",
    growth: "+18%"
  },
  {
    icon: FileText,
    title: "Client Portal",
    description: "Manage client portal settings",
    href: "/admin/portal",
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
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

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
            <div className="flex gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ← Portfolio
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Logout
              </button>
            </div>
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
              <h2 className="text-2xl font-light mb-8">Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="border-b border-border/30 pb-4 last:border-b-0">
                    <div className="text-sm mb-1">{activity.action}</div>
                    <div className="text-xs text-muted-foreground">{activity.client}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

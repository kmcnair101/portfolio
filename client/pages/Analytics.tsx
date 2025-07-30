import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { 
  BarChart3, 
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Eye,
  MousePointer,
  ShoppingCart,
  Calendar,
  Download,
  Filter,
  Target,
  Clock,
  Mail,
  Phone,
  Globe,
  Smartphone,
  Monitor,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

// Mock analytics data
const mockAnalytics = {
  overview: {
    revenue: {
      current: 47800,
      previous: 38200,
      growth: 25.1
    },
    customers: {
      current: 127,
      previous: 98,
      growth: 29.6
    },
    orders: {
      current: 89,
      previous: 76,
      growth: 17.1
    },
    conversionRate: {
      current: 3.8,
      previous: 3.2,
      growth: 18.8
    }
  },
  traffic: {
    totalVisitors: 15420,
    uniqueVisitors: 12380,
    pageViews: 45680,
    bounceRate: 42.3,
    avgSessionDuration: "3:24",
    sources: [
      { name: "Direct", visitors: 5420, percentage: 35.1 },
      { name: "Google Search", visitors: 4380, percentage: 28.4 },
      { name: "Social Media", visitors: 2890, percentage: 18.7 },
      { name: "Email", visitors: 1650, percentage: 10.7 },
      { name: "Referral", visitors: 1080, percentage: 7.0 }
    ]
  },
  devices: [
    { type: "Desktop", users: 8950, percentage: 58.0 },
    { type: "Mobile", users: 5470, percentage: 35.5 },
    { type: "Tablet", users: 1000, percentage: 6.5 }
  ],
  topPages: [
    { page: "/", views: 12400, bounceRate: 38.2 },
    { page: "/about", views: 8900, bounceRate: 45.1 },
    { page: "/portfolio", views: 7200, bounceRate: 41.8 },
    { page: "/contact", views: 4500, bounceRate: 52.3 },
    { page: "/blog", views: 3200, bounceRate: 36.7 }
  ],
  revenueByMonth: [
    { month: "Aug", revenue: 28500 },
    { month: "Sep", revenue: 32100 },
    { month: "Oct", revenue: 29800 },
    { month: "Nov", revenue: 38200 },
    { month: "Dec", revenue: 42300 },
    { month: "Jan", revenue: 47800 }
  ],
  customerAcquisition: [
    { source: "Website", customers: 45, cost: 1250, cac: 27.8 },
    { source: "Social Media", customers: 32, cost: 890, cac: 27.8 },
    { source: "Email Marketing", customers: 28, cost: 420, cac: 15.0 },
    { source: "Referrals", customers: 15, cost: 0, cac: 0 },
    { source: "Paid Ads", customers: 7, cost: 650, cac: 92.9 }
  ],
  projectMetrics: [
    { name: "Active Projects", value: 12, change: "+3", trend: "up" },
    { name: "Completed This Month", value: 8, change: "+2", trend: "up" },
    { name: "Average Project Value", value: "$15,200", change: "+$1,800", trend: "up" },
    { name: "Client Satisfaction", value: "98%", change: "+2%", trend: "up" },
    { name: "On-Time Delivery", value: "94%", change: "-1%", trend: "down" },
    { name: "Repeat Clients", value: "76%", change: "0%", trend: "neutral" }
  ]
};

const timeRanges = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
  { value: "1y", label: "Last year" }
];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("30d");

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="h-3 w-3 text-green-600" />;
      case "down":
        return <ArrowDown className="h-3 w-3 text-red-600" />;
      default:
        return <Minus className="h-3 w-3 text-gray-600" />;
    }
  };

  const getTrendColor = (value) => {
    if (value > 0) return "text-green-600";
    if (value < 0) return "text-red-600";
    return "text-gray-600";
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(value);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
            <div>
              <h1 className="text-3xl font-light tracking-tight flex items-center">
                <BarChart3 className="h-8 w-8 mr-3 text-muted-foreground" />
                Analytics Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Comprehensive insights into your business performance and growth
              </p>
            </div>
            <div className="flex gap-2">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-48">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timeRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-light">{formatCurrency(mockAnalytics.overview.revenue.current)}</p>
                    <p className={`text-xs flex items-center mt-1 ${getTrendColor(mockAnalytics.overview.revenue.growth)}`}>
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +{mockAnalytics.overview.revenue.growth}% vs last month
                    </p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Customers</p>
                    <p className="text-2xl font-light">{mockAnalytics.overview.customers.current}</p>
                    <p className={`text-xs flex items-center mt-1 ${getTrendColor(mockAnalytics.overview.customers.growth)}`}>
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +{mockAnalytics.overview.customers.growth}% vs last month
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
                    <p className="text-sm text-muted-foreground">Orders</p>
                    <p className="text-2xl font-light">{mockAnalytics.overview.orders.current}</p>
                    <p className={`text-xs flex items-center mt-1 ${getTrendColor(mockAnalytics.overview.orders.growth)}`}>
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +{mockAnalytics.overview.orders.growth}% vs last month
                    </p>
                  </div>
                  <ShoppingCart className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Conversion Rate</p>
                    <p className="text-2xl font-light">{mockAnalytics.overview.conversionRate.current}%</p>
                    <p className={`text-xs flex items-center mt-1 ${getTrendColor(mockAnalytics.overview.conversionRate.growth)}`}>
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +{mockAnalytics.overview.conversionRate.growth}% vs last month
                    </p>
                  </div>
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Trend</CardTitle>
                    <CardDescription>Monthly revenue over the last 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockAnalytics.revenueByMonth.map((month, index) => (
                        <div key={month.month} className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{month.month} 2024</span>
                          <span className="font-medium">{formatCurrency(month.revenue)}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Sources</CardTitle>
                    <CardDescription>Where your visitors are coming from</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockAnalytics.traffic.sources.map((source) => (
                        <div key={source.name} className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{source.name}</span>
                          <div className="text-right">
                            <span className="font-medium">{source.visitors.toLocaleString()}</span>
                            <span className="text-xs text-muted-foreground ml-2">({source.percentage}%)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Revenue Performance</CardTitle>
                    <CardDescription>Monthly revenue breakdown and growth analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockAnalytics.revenueByMonth.map((month, index) => {
                        const prevMonth = index > 0 ? mockAnalytics.revenueByMonth[index - 1] : null;
                        const growth = prevMonth ? ((month.revenue - prevMonth.revenue) / prevMonth.revenue * 100).toFixed(1) : null;
                        return (
                          <div key={month.month} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                            <span className="text-sm text-muted-foreground">{month.month} 2024</span>
                            <div className="text-right">
                              <span className="font-medium">{formatCurrency(month.revenue)}</span>
                              {growth && (
                                <span className={`text-xs ml-2 ${getTrendColor(parseFloat(growth))}`}>
                                  {growth > 0 ? '+' : ''}{growth}%
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Customer Acquisition</CardTitle>
                    <CardDescription>Cost and sources of new customers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockAnalytics.customerAcquisition.map((item) => (
                        <div key={item.source} className="space-y-1 pb-3 border-b border-border/30 last:border-0">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{item.source}</span>
                            <span className="font-medium">{item.customers} customers</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">CAC: {formatCurrency(item.cac)}</span>
                            <span className="text-muted-foreground">Cost: {formatCurrency(item.cost)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="traffic" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Visitors</p>
                        <p className="text-2xl font-light">{mockAnalytics.traffic.totalVisitors.toLocaleString()}</p>
                      </div>
                      <Eye className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Unique Visitors</p>
                        <p className="text-2xl font-light">{mockAnalytics.traffic.uniqueVisitors.toLocaleString()}</p>
                      </div>
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Page Views</p>
                        <p className="text-2xl font-light">{mockAnalytics.traffic.pageViews.toLocaleString()}</p>
                      </div>
                      <MousePointer className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Bounce Rate</p>
                        <p className="text-2xl font-light">{mockAnalytics.traffic.bounceRate}%</p>
                      </div>
                      <TrendingDown className="h-8 w-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Pages</CardTitle>
                    <CardDescription>Most visited pages and their performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockAnalytics.topPages.map((page) => (
                        <div key={page.page} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                          <span className="text-sm font-medium">{page.page}</span>
                          <div className="text-right">
                            <div className="text-sm font-medium">{page.views.toLocaleString()} views</div>
                            <div className="text-xs text-muted-foreground">{page.bounceRate}% bounce rate</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Device Breakdown</CardTitle>
                    <CardDescription>Visitor device preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockAnalytics.devices.map((device) => (
                        <div key={device.type} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {device.type === 'Desktop' && <Monitor className="h-4 w-4 text-muted-foreground" />}
                            {device.type === 'Mobile' && <Smartphone className="h-4 w-4 text-muted-foreground" />}
                            {device.type === 'Tablet' && <Monitor className="h-4 w-4 text-muted-foreground" />}
                            <span className="text-sm text-muted-foreground">{device.type}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-medium">{device.users.toLocaleString()}</span>
                            <span className="text-xs text-muted-foreground ml-2">({device.percentage}%)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="customers" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Acquisition Channels</CardTitle>
                    <CardDescription>How customers find your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockAnalytics.customerAcquisition.map((channel) => (
                        <div key={channel.source} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0">
                          <div>
                            <div className="font-medium text-sm">{channel.source}</div>
                            <div className="text-xs text-muted-foreground">
                              CAC: {formatCurrency(channel.cac)} • Cost: {formatCurrency(channel.cost)}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{channel.customers} customers</div>
                            <div className="text-xs text-muted-foreground">
                              {((channel.customers / mockAnalytics.overview.customers.current) * 100).toFixed(1)}% of total
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Customer Engagement</CardTitle>
                    <CardDescription>How customers interact with your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Email Open Rate</span>
                        <span className="font-medium">78.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Email Click Rate</span>
                        <span className="font-medium">19.4%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Return Customer Rate</span>
                        <span className="font-medium">34.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Average Session Duration</span>
                        <span className="font-medium">{mockAnalytics.traffic.avgSessionDuration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Customer Lifetime Value</span>
                        <span className="font-medium">$2,850</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockAnalytics.projectMetrics.map((metric) => (
                  <Card key={metric.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{metric.name}</p>
                          <p className="text-2xl font-light">{metric.value}</p>
                          <p className={`text-xs flex items-center mt-1 ${getTrendColor(metric.trend === 'up' ? 1 : metric.trend === 'down' ? -1 : 0)}`}>
                            {getTrendIcon(metric.trend)}
                            <span className="ml-1">{metric.change} from last month</span>
                          </p>
                        </div>
                        <BarChart3 className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

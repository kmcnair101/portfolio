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
  CreditCard,
  Search,
  Plus,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  FileText,
  Download,
  Eye,
  Edit,
  Send,
  Filter,
  MoreHorizontal,
} from "lucide-react";

// Mock data for invoices
const mockInvoices = [
  {
    id: "INV-001",
    client: "TechCorp Solutions",
    clientEmail: "billing@techcorp.com",
    amount: 15000,
    status: "paid",
    dueDate: "2024-01-15",
    paidDate: "2024-01-12",
    createdDate: "2024-01-01",
    items: [
      {
        description: "Web Application Development",
        quantity: 1,
        rate: 12000,
        amount: 12000,
      },
      { description: "UI/UX Design", quantity: 1, rate: 3000, amount: 3000 },
    ],
  },
  {
    id: "INV-002",
    client: "Startup.io",
    clientEmail: "finance@startup.io",
    amount: 8500,
    status: "pending",
    dueDate: "2024-01-20",
    paidDate: null,
    createdDate: "2024-01-05",
    items: [
      {
        description: "Mobile App Development",
        quantity: 1,
        rate: 8500,
        amount: 8500,
      },
    ],
  },
  {
    id: "INV-003",
    client: "Design Studio",
    clientEmail: "admin@designstudio.com",
    amount: 5200,
    status: "overdue",
    dueDate: "2024-01-10",
    paidDate: null,
    createdDate: "2023-12-20",
    items: [
      {
        description: "Website Redesign",
        quantity: 1,
        rate: 5200,
        amount: 5200,
      },
    ],
  },
  {
    id: "INV-004",
    client: "E-commerce Plus",
    clientEmail: "payments@ecommerce.com",
    amount: 22000,
    status: "draft",
    dueDate: "2024-01-25",
    paidDate: null,
    createdDate: "2024-01-15",
    items: [
      {
        description: "E-commerce Platform",
        quantity: 1,
        rate: 20000,
        amount: 20000,
      },
      {
        description: "Payment Integration",
        quantity: 1,
        rate: 2000,
        amount: 2000,
      },
    ],
  },
  {
    id: "INV-005",
    client: "HealthTech Innovations",
    clientEmail: "billing@healthtech.com",
    amount: 12000,
    status: "paid",
    dueDate: "2024-01-08",
    paidDate: "2024-01-06",
    createdDate: "2023-12-15",
    items: [
      {
        description: "Healthcare Dashboard",
        quantity: 1,
        rate: 12000,
        amount: 12000,
      },
    ],
  },
];

// Mock payment transactions
const mockTransactions = [
  {
    id: "TXN-001",
    invoiceId: "INV-001",
    client: "TechCorp Solutions",
    amount: 15000,
    type: "payment",
    method: "bank_transfer",
    status: "completed",
    date: "2024-01-12",
  },
  {
    id: "TXN-002",
    invoiceId: "INV-005",
    client: "HealthTech Innovations",
    amount: 12000,
    type: "payment",
    method: "credit_card",
    status: "completed",
    date: "2024-01-06",
  },
  {
    id: "TXN-003",
    invoiceId: "INV-002",
    client: "Startup.io",
    amount: 4250,
    type: "partial_payment",
    method: "paypal",
    status: "completed",
    date: "2024-01-10",
  },
  {
    id: "TXN-004",
    invoiceId: "INV-003",
    client: "Design Studio",
    amount: 5200,
    type: "payment",
    method: "credit_card",
    status: "failed",
    date: "2024-01-11",
  },
];

const statusColors = {
  paid: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  overdue: "bg-red-100 text-red-700",
  draft: "bg-gray-100 text-gray-700",
};

const statusIcons = {
  paid: CheckCircle,
  pending: Clock,
  overdue: XCircle,
  draft: FileText,
};

export default function Payments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const filteredInvoices = mockInvoices.filter((invoice) => {
    const matchesSearch =
      invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate metrics
  const totalRevenue = mockInvoices
    .filter((inv) => inv.status === "paid")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const pendingAmount = mockInvoices
    .filter((inv) => inv.status === "pending")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const overdueAmount = mockInvoices
    .filter((inv) => inv.status === "overdue")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const thisMonthRevenue = 27000; // Mock data for this month
  const lastMonthRevenue = 18500; // Mock data for last month
  const revenueGrowth = (
    ((thisMonthRevenue - lastMonthRevenue) / lastMonthRevenue) *
    100
  ).toFixed(1);

  const getStatusIcon = (status) => {
    const Icon = statusIcons[status] || FileText;
    return Icon;
  };

  const formatDate = (dateString) => {
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
                <CreditCard className="h-8 w-8 mr-3 text-muted-foreground" />
                Payments & Invoicing
              </h1>
              <p className="text-muted-foreground mt-2">
                Manage invoices, track payments, and monitor financial
                performance
              </p>
            </div>
            <Button className="flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Create Invoice
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Revenue
                    </p>
                    <p className="text-2xl font-light">
                      ${totalRevenue.toLocaleString()}
                    </p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />+{revenueGrowth}%
                      from last month
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
                    <p className="text-sm text-muted-foreground">
                      Pending Payments
                    </p>
                    <p className="text-2xl font-light">
                      ${pendingAmount.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {
                        mockInvoices.filter((inv) => inv.status === "pending")
                          .length
                      }{" "}
                      invoices
                    </p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Overdue Amount
                    </p>
                    <p className="text-2xl font-light">
                      ${overdueAmount.toLocaleString()}
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      {
                        mockInvoices.filter((inv) => inv.status === "overdue")
                          .length
                      }{" "}
                      overdue invoices
                    </p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">This Month</p>
                    <p className="text-2xl font-light">
                      ${thisMonthRevenue.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {
                        mockInvoices.filter(
                          (inv) =>
                            inv.status === "paid" &&
                            new Date(inv.paidDate) > new Date("2024-01-01"),
                        ).length
                      }{" "}
                      payments received
                    </p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="invoices" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="invoices" className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search invoices..."
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
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Invoices List */}
              <div className="grid grid-cols-1 gap-4">
                {filteredInvoices.map((invoice) => {
                  const StatusIcon = getStatusIcon(invoice.status);
                  return (
                    <Card
                      key={invoice.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                              <FileText className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h3 className="font-medium text-lg">
                                  {invoice.id}
                                </h3>
                                <Badge
                                  className={statusColors[invoice.status]}
                                  variant="secondary"
                                >
                                  <StatusIcon className="h-3 w-3 mr-1" />
                                  {invoice.status.charAt(0).toUpperCase() +
                                    invoice.status.slice(1)}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {invoice.client}
                              </p>
                              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <DollarSign className="h-3 w-3" />$
                                  {invoice.amount.toLocaleString()}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  Due: {formatDate(invoice.dueDate)}
                                </div>
                                {invoice.paidDate && (
                                  <div className="flex items-center gap-1">
                                    <CheckCircle className="h-3 w-3" />
                                    Paid: {formatDate(invoice.paidDate)}
                                  </div>
                                )}
                              </div>
                              <div className="mt-3">
                                <div className="text-xs text-muted-foreground">
                                  {invoice.items.length} item
                                  {invoice.items.length !== 1 ? "s" : ""} •
                                  Created {formatDate(invoice.createdDate)}
                                </div>
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
                              <Download className="h-4 w-4" />
                            </Button>
                            {invoice.status === "draft" && (
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
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>
                    Payment history and transaction details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockTransactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between py-3 border-b border-border/30 last:border-0"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                            <CreditCard className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <div className="font-medium">
                              {transaction.client}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {transaction.invoiceId} •{" "}
                              {transaction.method.replace("_", " ")}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">
                            ${transaction.amount.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                transaction.status === "completed"
                                  ? "default"
                                  : "destructive"
                              }
                              className="text-xs"
                            >
                              {transaction.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {formatDate(transaction.date)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Summary</CardTitle>
                    <CardDescription>Monthly revenue breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          January 2024
                        </span>
                        <span className="font-medium">
                          ${thisMonthRevenue.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          December 2023
                        </span>
                        <span className="font-medium">
                          ${lastMonthRevenue.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-sm font-medium">Growth Rate</span>
                        <span className="font-medium text-green-600">
                          +{revenueGrowth}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Breakdown by payment type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Bank Transfer
                        </span>
                        <span className="font-medium">$15,000 (55.6%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Credit Card
                        </span>
                        <span className="font-medium">$12,000 (44.4%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          PayPal
                        </span>
                        <span className="font-medium">$4,250 (15.7%)</span>
                      </div>
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

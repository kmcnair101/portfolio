import { CreditCard } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

const features = [
  "Invoice creation and customization",
  "Automated payment reminders",
  "Multiple payment gateway integration",
  "Recurring billing and subscriptions",
  "Payment tracking and reconciliation",
  "Tax calculation and compliance",
  "Expense tracking and categorization",
  "Financial reporting and insights",
  "Client payment portal",
  "Multi-currency support"
];

export default function Payments() {
  return (
    <PlaceholderPage
      title="Payments & Invoicing"
      description="Streamline your billing process and get paid faster"
      icon={CreditCard}
      features={features}
    />
  );
}

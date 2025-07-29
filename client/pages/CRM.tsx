import { Users } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

const features = [
  "Contact management with detailed profiles",
  "Lead tracking and pipeline management",
  "Deal stages and opportunity tracking",
  "Activity logging and task management",
  "Email integration and communication history",
  "Custom fields and tags",
  "Advanced search and filtering",
  "Sales reporting and analytics",
  "Team collaboration features",
  "Mobile app for on-the-go access"
];

export default function CRM() {
  return (
    <PlaceholderPage
      title="Customer Relationship Management"
      description="Manage your customers, leads, and sales pipeline all in one place"
      icon={Users}
      features={features}
    />
  );
}

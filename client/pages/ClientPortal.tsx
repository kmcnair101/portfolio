import { FileText } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

const features = [
  "Secure client login and authentication",
  "Project status and milestone tracking",
  "Document sharing and collaboration",
  "Invoice viewing and payment",
  "Communication center and messaging",
  "File upload and download",
  "Time tracking visibility",
  "Approval workflows",
  "Mobile-responsive design",
  "White-label customization options"
];

export default function ClientPortal() {
  return (
    <PlaceholderPage
      title="Client Portal"
      description="Provide your clients with a seamless, professional experience"
      icon={FileText}
      features={features}
    />
  );
}

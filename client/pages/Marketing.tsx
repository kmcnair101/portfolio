import { Mail } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

const features = [
  "Email campaign builder with templates",
  "Marketing automation workflows",
  "Lead nurturing sequences",
  "Audience segmentation and targeting",
  "A/B testing for campaigns",
  "Social media integration",
  "Landing page creation",
  "Performance tracking and analytics",
  "CRM integration for lead scoring",
  "Personalization and dynamic content"
];

export default function Marketing() {
  return (
    <PlaceholderPage
      title="Marketing Automation"
      description="Create, automate, and optimize your marketing campaigns"
      icon={Mail}
      features={features}
    />
  );
}

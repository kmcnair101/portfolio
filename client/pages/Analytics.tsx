import { BarChart3 } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

const features = [
  "Real-time business metrics dashboard",
  "Sales performance tracking",
  "Customer behavior analytics",
  "Revenue forecasting and trends",
  "Marketing campaign ROI analysis",
  "Custom report generation",
  "Data visualization and charts",
  "Goal setting and KPI monitoring",
  "Automated insights and alerts",
  "Export and sharing capabilities"
];

export default function Analytics() {
  return (
    <PlaceholderPage
      title="Analytics Dashboard"
      description="Get deep insights into your business performance"
      icon={BarChart3}
      features={features}
    />
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

export default function PlaceholderPage({
  title,
  description,
  icon: Icon,
  features,
}: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
              <p className="text-muted-foreground mt-1">{description}</p>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
              <CardDescription>
                This feature is currently under development. Here's what we're planning to include:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button variant="outline" className="mr-4">
                  Request Demo
                </Button>
                <Button>Get Notified</Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            Have specific requirements? <button className="text-primary hover:underline">Contact us</button> to discuss your needs.
          </div>
        </div>
      </div>
    </Layout>
  );
}

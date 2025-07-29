import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  CreditCard, 
  Mail, 
  FileText,
  CheckCircle,
  Star,
  ExternalLink,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

const businessFeatures = [
  {
    icon: Users,
    title: "CRM",
    description: "Manage customers and sales pipeline",
    href: "/crm",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Invoicing and payment processing",
    href: "/payments",
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: Mail,
    title: "Marketing",
    description: "Automated campaigns and outreach",
    href: "/marketing",
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Business insights and reporting",
    href: "/analytics",
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    icon: FileText,
    title: "Client Portal",
    description: "Secure client collaboration space",
    href: "/portal",
    color: "bg-pink-500/10 text-pink-600"
  }
];

const portfolioProjects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack online store with payment integration",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for subscription businesses",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind"],
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Mobile App",
    description: "Cross-platform productivity application",
    tech: ["React Native", "Firebase", "Redux", "Expo"],
    image: "/placeholder.svg",
    link: "#"
  }
];

const skills = [
  "Full-Stack Development",
  "React & Next.js",
  "TypeScript",
  "Node.js & Express",
  "Database Design",
  "Cloud Architecture",
  "UI/UX Design",
  "Project Management"
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Available for new projects
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Business Hub &
              <span className="text-primary"> Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive platform combining a professional portfolio with powerful business management tools. 
              Showcase your work while managing clients, payments, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/crm">
                  Explore Business Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <a href="#portfolio" className="flex items-center">
                  View Portfolio
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrated Business Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run your business efficiently, all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link to={feature.href}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of recent work showcasing technical expertise and creative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.link} className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & About */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Expertise</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Full-stack developer with 5+ years of experience building scalable web applications 
                and business management tools. Passionate about creating efficient solutions that drive growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="sm" asChild>
                  <a href="#" className="flex items-center">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" className="flex items-center">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" className="flex items-center">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="inline-block p-8 bg-card rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground mb-6">Years Experience</div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground mb-6">Projects Completed</div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Whether you need custom development work or want to explore the business management tools, 
            let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/crm">
                Try Business Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

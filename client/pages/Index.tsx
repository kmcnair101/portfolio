import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  CheckCircle,
  Star,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const portfolioProjects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack online store with payment integration and inventory management",
    tech: ["React", "Node.js", "Stripe", "MongoDB", "Tailwind CSS"],
    image: "/placeholder.svg",
    link: "#",
    featured: true
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for subscription businesses with real-time metrics",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind", "Chart.js"],
    image: "/placeholder.svg",
    link: "#",
    featured: true
  },
  {
    title: "Mobile App",
    description: "Cross-platform productivity application with offline synchronization",
    tech: ["React Native", "Firebase", "Redux", "Expo"],
    image: "/placeholder.svg",
    link: "#",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio with dark mode and smooth animations",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    image: "/placeholder.svg",
    link: "#",
    featured: false
  },
  {
    title: "API Gateway",
    description: "Microservices architecture with authentication and rate limiting",
    tech: ["Node.js", "Express", "Redis", "JWT", "Docker"],
    image: "/placeholder.svg",
    link: "#",
    featured: false
  },
  {
    title: "Data Visualization Tool",
    description: "Interactive charts and graphs for business intelligence",
    tech: ["D3.js", "React", "Python", "Flask", "PostgreSQL"],
    image: "/placeholder.svg",
    link: "#",
    featured: false
  }
];

const skills = [
  "Frontend Development",
  "Backend Development", 
  "React & Next.js",
  "TypeScript",
  "Node.js & Express",
  "Database Design",
  "Cloud Architecture",
  "UI/UX Design",
  "Mobile Development",
  "DevOps & CI/CD"
];

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    price: "Starting at $2,500"
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android",
    price: "Starting at $5,000"
  },
  {
    title: "API Development",
    description: "RESTful APIs and backend services with robust architecture",
    price: "Starting at $1,500"
  },
  {
    title: "Consulting",
    description: "Technical consultation and code reviews for existing projects",
    price: "$150/hour"
  }
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Available for new projects
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Full-Stack
                <span className="text-primary"> Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I create scalable web applications and digital experiences that drive business growth. 
                Specializing in React, Node.js, and modern web technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <a href="#contact" className="flex items-center">
                    Get In Touch
                    <Mail className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <a href="#portfolio" className="flex items-center">
                    View Work
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </div>
                <div className="p-6 bg-card rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground text-sm">Projects Completed</div>
                </div>
                <div className="p-6 bg-card rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                </div>
                <div className="p-6 bg-card rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of recent work showcasing technical expertise and creative solutions.
            </p>
          </div>
          
          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {portfolioProjects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    {project.title}
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.link} className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
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

          {/* All Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-lg">
                    {project.title}
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.link} className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Services */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Full-stack developer with expertise in modern web technologies and best practices.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                      <Badge variant="outline">{service.price}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="text-center p-6">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">hello@yourdomain.com</p>
            </Card>
            <Card className="text-center p-6">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
            </Card>
            <Card className="text-center p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">San Francisco, CA</p>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-8">
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
            
            <Button size="lg" className="text-lg px-8">
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

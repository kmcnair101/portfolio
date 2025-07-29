import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { 
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";

const portfolioProjects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack online store with payment integration",
    tech: ["React", "Node.js", "Stripe"],
    link: "#"
  },
  {
    title: "SaaS Dashboard", 
    description: "Analytics dashboard for subscription businesses",
    tech: ["TypeScript", "Next.js", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Mobile App",
    description: "Cross-platform productivity application", 
    tech: ["React Native", "Firebase"],
    link: "#"
  },
  {
    title: "API Gateway",
    description: "Microservices architecture with authentication",
    tech: ["Node.js", "Express", "Redis"],
    link: "#"
  }
];

const skills = [
  "Frontend Development",
  "Backend Development", 
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "Database Design"
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 pb-5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Full-Stack Developer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              I create scalable web applications and digital experiences.
              Specializing in React, Node.js, and modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="outline" size="lg" className="px-8">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="ghost" size="lg" className="px-8">
                <a href="#work">View Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Image Section */}
      <section className="w-full">
        <div className="aspect-[21/9] w-full bg-gradient-to-r from-muted/30 to-muted/60 flex items-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F10294e35110d4a3bb5c955b2f789c3ad%2F314c614a53d54a36a47ab7ebfac292d5"
            alt="Portfolio showcase"
            className="w-full h-full object-cover"
            style={{ marginTop: '7px' }}
          />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light text-center mb-16">Selected Work</h2>
          
          <div className="space-y-12">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="border-b border-border pb-12 last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs text-muted-foreground border-b border-dotted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.link} className="inline-flex items-center">
                        View
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8">Expertise</h2>
              <div className="grid grid-cols-1 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="text-muted-foreground border-b border-dotted border-muted-foreground/30 pb-1">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-light mb-8">Services</h2>
              <div className="space-y-4">
                <div className="border-b border-dotted border-muted-foreground/30 pb-3">
                  <div className="flex justify-between items-start">
                    <span>Web Development</span>
                    <span className="text-sm text-muted-foreground">From $2,500</span>
                  </div>
                </div>
                <div className="border-b border-dotted border-muted-foreground/30 pb-3">
                  <div className="flex justify-between items-start">
                    <span>Mobile Apps</span>
                    <span className="text-sm text-muted-foreground">From $5,000</span>
                  </div>
                </div>
                <div className="border-b border-dotted border-muted-foreground/30 pb-3">
                  <div className="flex justify-between items-start">
                    <span>API Development</span>
                    <span className="text-sm text-muted-foreground">From $1,500</span>
                  </div>
                </div>
                <div className="border-b border-dotted border-muted-foreground/30 pb-3">
                  <div className="flex justify-between items-start">
                    <span>Consulting</span>
                    <span className="text-sm text-muted-foreground">$150/hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light mb-8">Let's Work Together</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project.
          </p>
          
          <div className="space-y-4 mb-12">
            <div className="text-lg">hello@yourdomain.com</div>
            <div className="text-muted-foreground">+1 (555) 123-4567</div>
            <div className="text-muted-foreground">San Francisco, CA</div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="sm" asChild>
              <a href="#" className="flex items-center">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#" className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#" className="flex items-center">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </a>
            </Button>
          </div>
          
          <Button className="px-8">
            <Mail className="mr-2 h-4 w-4" />
            Start a Project
          </Button>
        </div>
      </section>
    </Layout>
  );
}

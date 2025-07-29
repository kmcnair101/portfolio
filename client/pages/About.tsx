import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F10294e35110d4a3bb5c955b2f789c3ad%2Ff37eff6fa6684969a4edd23b8adbf213"
                alt="Kris McNair"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h1 className="text-4xl font-light mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                About Me
              </h1>
              <div className="space-y-6 text-muted-foreground leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                <p>
                  I'm a full-stack developer with over 5 years of experience creating digital solutions 
                  that bridge the gap between innovative design and robust functionality. My passion lies 
                  in crafting applications that not only look beautiful but perform exceptionally.
                </p>
                <p>
                  Specializing in React, Node.js, and modern web technologies, I've had the privilege 
                  of working with startups and established companies to bring their visions to life. 
                  From e-commerce platforms to complex SaaS applications, I approach each project 
                  with meticulous attention to detail and a commitment to excellence.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or enjoying the great outdoors. I believe that the best 
                  solutions come from understanding both the technical landscape and the human 
                  experience.
                </p>
                <p>
                  I'm always excited to take on new challenges and collaborate with like-minded 
                  individuals who share a passion for creating meaningful digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

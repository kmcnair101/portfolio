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
                Software Engineer based in Miami, Florida&nbsp;
              </h1>
              <div className="space-y-6 text-muted-foreground leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                <p>
                  I'm a Full Stack Software Engineer based in Miami, Florida, with a strong focus on building high-quality web and mobile applications.
                  <br />
                  <br />
                  &nbsp;I specialize in developing end-to-end solutions—from planning and designing intuitive user interfaces to implementing robust backend systems. Whether it's creating a product from scratch or improving an existing one, I bring a problem-solving mindset and a user-centered approach to every project.{" "}
                  <br />
                  <br />
                  My goal is to build applications that are not only functional and scalable but also engaging and easy to use.&nbsp;
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to
                  open-source projects, or enjoying the great outdoors. I believe that the best
                  solutions come from understanding both the technical landscape and the human
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

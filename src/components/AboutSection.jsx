import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:4xl font-bold mb-12 text-center">
          About <span className="text-primary">me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              A highly experienced designer with web developer skills too.
            </h3>

            <p className="text-muted-foreground">
              I adopt a comprehensive approach to a project. From discovery to
              design, development, and deployment, I cover the full process.
            </p>

            <p className="text-muted-foreground">
              I begin by understanding your unique needs and goals, crafting
              intuitive user interfaces while utilising cutting-edge
              technologies such as React & TypeScript.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>

              <a
                href="https://storage.googleapis.com/otta-uploads/candidate-cv/DkpMn3MBvY1sPMrT_9MxpnIntDhJ4THRFmSxV1J3zzw.pdf"
                target="_blank"
                className="px-6 py-2 pb-3 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="size-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="size-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UX/UI design</h4>
                  <p className="text-muted-foreground">
                    Always putting the customer first with every user interface
                    and customer journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project managements</h4>
                  <p className="text-muted-foreground">
                    With over 2 decades of web experience I come with alot of
                    experience and know-how that I'm happy to share.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

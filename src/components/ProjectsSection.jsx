import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Edge AI",
    description: "My first project with React JS.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://edge-ai-xi.vercel.app/",
    githubUrl: "https://github.com/Whirlspin/EdgeAI",
  },
  {
    id: 2,
    title: "Portfolio website",
    description: "Another React project (this one).",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind CSS", "Filtering"],
    demoUrl: "https://cosmic-portfolio-phi.vercel.app/",
    githubUrl: "https://github.com/Whirlspin/cosmic-portfolio",
  },
  {
    id: 3,
    title: "Fitness app",
    description: "Still to come.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    // demoUrl: "#",
    // githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w2xl mx-auto">
          Here are some of my recent React projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                  ) : (
                    ""
                  )}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Whirlspin"
            target="_blank"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

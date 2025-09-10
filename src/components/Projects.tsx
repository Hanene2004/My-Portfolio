import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Watch E-commerce Platform",
      description: "A sophisticated e-commerce platform for luxury watches built with Laravel and MySQL. Features include secure payment processing, inventory management, and an elegant user interface.",
      image: project1Image,
      technologies: ["Laravel", "MySQL", "PHP", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Secure File Sharing Application",
      description: "A secure file sharing application built with Angular, featuring end-to-end encryption, user authentication, and intuitive file management capabilities.",
      image: project2Image,
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Muatamad.tn - Government Platform",
      description: "A government platform promoting Tunisian merchants built with React and TypeScript. Features include merchant profiles, product listings, and administrative dashboard.",
      image: project3Image,
      technologies: ["React", "TypeScript", "Node.js", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 4,
      title: "Habit-Forge",
      description: "A customizable habit tracking application that helps users build and maintain positive habits through gamification and progress tracking.",
      image: project1Image,
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project) => (
              <Card 
                key={project.id}
                className="group overflow-hidden bg-gradient-surface border-border shadow-card hover:shadow-glow transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-portfolio-accent">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button 
                      size="sm"
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <Card 
                key={project.id}
                className="group overflow-hidden bg-gradient-surface border-border shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-portfolio-accent">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-foreground"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

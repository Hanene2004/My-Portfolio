import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useState } from "react";
import imgCurrencyConverter from "@/assets/currency_converter .jpg";
import imgHybridCalc from "@/assets/Hybrid-Calculator-Scientific-Financial- .png";
import imgWeatherApp from "@/assets/weather-app.png";
import imgTechStore from "@/assets/TechStore.png";
import imgExamFlow from "@/assets/ExamFlow.png";
import imgMuatamad from "@/assets/Muatamad.tn.png";
import imgHabitForge from "@/assets/Habit-Forge.png";
import imgEduAngularReact from "@/assets/Educational-Project-Angular-vs-React-for-Beginners.png";
import imgMemoryGame from "@/assets/Memory-Game.png";
import imgTodoList from "@/assets/to-do-list.png";
import imgTicTacToeAI from "@/assets/Tic-Tac-Toe-with-AI.png";
import imgDemo from "@/assets/Demo .png";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  const short = project.description.length > 140
    ? project.description.slice(0, 140) + "..."
    : project.description;

  return (
    <Card 
      className="group overflow-hidden bg-gradient-surface border-border shadow-card hover:shadow-glow transition-all duration-300 h-full flex flex-col min-h-[430px]" data-tilt
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2 text-portfolio-accent">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          {expanded ? project.description : short}
        </p>
        {project.description.length > 140 && (
          <button
            className="self-start text-portfolio-accent text-xs hover:underline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
        <div className="flex flex-wrap gap-1 my-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-2 mt-auto">
          <Button asChild size="sm" variant="outline" className="flex-1 text-xs">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github className="w-3 h-3 mr-1" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "currency_converter",
      description: "Python desktop app with a modern UI for real‑time currency conversion (history, CSV/PDF export).",
      image: imgCurrencyConverter,
      technologies: ["Python", "Tkinter"],
      githubUrl: "https://github.com/Hanene2004/currency_converter",
      featured: true
    },
    {
      id: 2,
      title: "Hybrid-Calculator-Scientific-Financial",
      description: "Angular standalone scientific/financial calculator with gradients, glassmorphism and interactive controls.",
      image: imgHybridCalc,
      technologies: ["Angular", "TypeScript"],
      githubUrl: "https://github.com/Hanene2004/Hybrid-Calculator-Scientific-Financial-",
      featured: true
    },
    {
      id: 3,
      title: "weather-app",
      description: "Modern weather app with real‑time data, 5‑day forecast, geolocation, and dynamic theming.",
      image: imgWeatherApp,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Hanene2004/weather-app",
      featured: false
    },
    {
      id: 4,
      title: "TechStore",
      description: "Interactive e‑commerce front‑end for tech products built with React, TypeScript, Vite, Tailwind CSS.",
      image: imgDemo,
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/Hanene2004/TechStore",
      featured: false
    },
    {
      id: 5,
      title: "ExamFlow",
      description: "Modern exam scheduling and management system with role‑based authentication.",
      image: imgExamFlow,
      technologies: ["TypeScript", "React"],
      githubUrl: "https://github.com/Hanene2004/ExamFlow",
      featured: false
    },
    {
      id: 6,
      title: "Muatamad.tn",
      description: "Platform for management and promotion of Tunisian merchants – admin dashboard, directory, statistics.",
      image: imgMuatamad,
      technologies: ["React", "TypeScript", "Vite"],
      githubUrl: "https://github.com/Hanene2004/Muatamad.tn",
      featured: false
    },
    {
      id: 7,
      title: "Habit-Forge",
      description: "Customizable habit tracker to help users build positive habits and track progress.",
      image: imgHabitForge,
      technologies: ["TypeScript", "React", "CSS"],
      githubUrl: "https://github.com/Hanene2004/Habit-Forge",
      featured: false
    },
    {
      id: 8,
      title: "Educational Project: Angular vs React for Beginners",
      description: "Educational comparison project between Angular and React for building modern web apps.",
      image: imgEduAngularReact,
      technologies: ["Angular", "React", "TypeScript"],
      githubUrl: "https://github.com/Hanene2004/Educational-Project-Angular-vs-React-for-Beginners",
      featured: false
    },
    {
      id: 9,
      title: "Memory-Game",
      description: "Simple web-based memory matching game built with HTML, CSS, and JavaScript.",
      image: imgMemoryGame,
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Hanene2004/Memory-Game",
      featured: false
    },
    {
      id: 10,
      title: "to-do-list",
      description: "Efficient to‑do app with a built‑in Pomodoro timer to boost productivity.",
      image: imgTodoList,
      technologies: ["TypeScript", "React"],
      githubUrl: "https://github.com/Hanene2004/to-do-list",
      featured: false
    },
    {
      id: 11,
      title: "Tic-Tac-Toe-with-AI",
      description: "Tic‑Tac‑Toe game featuring an AI opponent.",
      image: imgTicTacToeAI,
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Hanene2004/Tic-Tac-Toe-with-AI",
      featured: false
    },
    {
      id: 12,
      title: "Demo",
      description: "Miscellaneous demo repository.",
      image: imgTechStore,
      technologies: ["JavaScript"],
      githubUrl: "https://github.com/Hanene2004/Demo",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-stretch">
            {projects.filter(p => p.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {projects.filter(p => !p.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
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
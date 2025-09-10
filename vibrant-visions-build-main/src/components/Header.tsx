import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent inline-block relative">
            <span className="transition-transform duration-300 inline-block hover:scale-[1.03]">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-portfolio-accent transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-portfolio-accent transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-portfolio-accent transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-portfolio-accent transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-portfolio-accent transition-colors duration-300"
            >
              Projects
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-foreground"
            >
              Contact
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<string>(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle theme"
      className="rounded-md border border-border p-2 hover:bg-accent hover:text-accent-foreground transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};
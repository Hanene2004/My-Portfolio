import { Button } from "@/components/ui/button";
 

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-background via-portfolio-surface to-background"></div>
        <div className="absolute inset-0 opacity-40" style={{background:"radial-gradient(800px 400px at 50% -100px, rgba(138,63,252,0.35), transparent 60%)"}}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Parallax accent ring */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-primary opacity-10 blur-3xl"></div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Ghabbara Hanene</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Computer Science Student | Aspiring Full-Stack Developer | Specialized in Java, PHP, Python & JavaScript
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            As a second-year Computer Science student at Isetta University, I blend programming passion with hands-on experience through real-world projects and valuable internships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-foreground font-semibold px-8 py-3 shadow-primary"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-foreground px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-accent">3rd Year</div>
              <div className="text-sm text-muted-foreground">Computer Science Student</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-accent">16+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-accent">4</div>
              <div className="text-sm text-muted-foreground">Languages Spoken</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-portfolio-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-portfolio-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
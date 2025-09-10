import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "Laravel", level: 90 },
        { name: "Angular", level: 85 },
        { name: "React", level: 88 },
        { name: "PHP", level: 82 },
        { name: "JavaScript", level: 92 },
      ]
    },
    {
      title: "Object-Oriented Programming",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
      ]
    },
    {
      title: "Database Management",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "Database Design", level: 82 },
      ]
    },
    {
      title: "UI/UX Development",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "Responsive Design", level: 85 },
      ]
    },
    {
      title: "Graphic Design",
      skills: [
        { name: "Adobe Illustrator", level: 85 },
        { name: "Adobe Photoshop", level: 82 },
        { name: "Canva", level: 88 },
      ]
    }
  ];

  // Remove SkillBar, use bullet points for all cards

  return (
    <section id="skills" className="py-20" data-reveal>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-surface border-border shadow-card hover:shadow-glow transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-portfolio-accent">
                  {category.title}
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill.name}</li>
                  ))}
                </ul>
              </Card>
            ))}
            {/* LANGUAGES Card */}
            <Card className="p-6 bg-gradient-surface border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-accent">Languages</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Arabic: Native language</li>
                <li>French: B2 level</li>
                <li>English: B1 level</li>
                <li>German: A2 – level</li>
              </ul>
            </Card>
            {/* SOFT SKILLS Card */}
            <Card className="p-6 bg-gradient-surface border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-accent">Soft Skills</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Strong organizational and time-management skills</li>
                <li>Exceptional communication and interpersonal skills</li>
                <li>Ability to work independently and as part of a team</li>
                <li>Detail-oriented and able to handle multiple tasks simultaneously</li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-portfolio-accent">
              Technologies I Love Working With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Laravel", "Angular", "React", "Java", "Python", "MySQL",
                "HTML", "CSS", "JavaScript", "PHP", "Git", "Database Design",
                "Responsive Design", "Web Development", "OOP"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-portfolio-accent/10 text-portfolio-accent border border-portfolio-accent/30 rounded-full text-sm hover:bg-portfolio-accent/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
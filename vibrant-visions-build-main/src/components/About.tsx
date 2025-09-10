import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-foreground">About </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-accent">
                Computer Science Student
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I’m a computer science student passionate about programming and eager to learn. I have strong skills in Java, PHP, Python, HTML, CSS, and JavaScript. I enjoy applying my knowledge through hands‑on projects and continuously improving my technical and professional skills.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
                <li>Programming: Java, PHP, Python, JavaScript</li>
                <li>Web: Laravel, Angular, React</li>
                <li>Databases: MySQL</li>
                <li>OS: Windows, Linux</li>
                <li>Design tools: Adobe Illustrator, Adobe Photoshop</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Team Collaboration", "Time Management", "Communication"].map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded-full text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-surface border-border shadow-card">
                <h4 className="text-lg font-semibold mb-4 text-portfolio-accent">Education</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Bachelor's degree in Experimental Science</p>
                    <p className="text-sm text-muted-foreground">Mourouj 1, Ben Arous High School</p>
                  </div>
                  <div>
                    <p className="font-medium">Bachelor's in IT</p>
                    <p className="text-sm text-muted-foreground">Isetta University</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-surface border-border shadow-card">
                <h4 className="text-lg font-semibold mb-4 text-portfolio-accent">Experience</h4>
                <div className="space-y-3">
                  {/* Mutamad.tn experience removed */}
                  <div>
                    <p className="font-medium">Soroubat Group — Worker Internship</p>
                    <p className="text-sm text-muted-foreground">Hands‑on exposure to industrial workflows and teamwork in a professional environment</p>
                  </div>
                  <div>
                    <p className="font-medium">Plasteol (Luis Armand Group) — Worker Internship</p>
                    <p className="text-sm text-muted-foreground">Operational support and process awareness in a manufacturing setting</p>
                  </div>
                  <div>
                    <p className="font-medium">Ministry of Commerce & Export Development — Worker Internship</p>
                    <p className="text-sm text-muted-foreground">Administrative assistance and exposure to public‑sector processes</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-surface border-border shadow-card">
                <h4 className="text-lg font-semibold mb-4 text-portfolio-accent">Certifications & Training</h4>
                <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>BI Level Certificate in English – SmartUp Academy</li>
                  <li>Big Data participation – GoMyCode</li>
                  <li>Communication Skills Workshop – Youth Leaders</li>
                  <li>Worker Internship Certificate – Soroubat Group</li>
                  <li>Worker Internship Certificate – Plasteol (Luis Armand Group)</li>
                  <li>Networking Certificate – Cisco (in progress)</li>
                  <li>JavaScript Certificate – Cisco (in progress)</li>
                  <li>Worker Internship Certificate – Ministry of Commerce & Export Development</li>
                </ul>
              </Card>

              {/* Languages card removed */}
            </div>
          </div>
        </div>
      </div>

      {/* Languages list section removed */}
    </section>
  );
};

export default About;

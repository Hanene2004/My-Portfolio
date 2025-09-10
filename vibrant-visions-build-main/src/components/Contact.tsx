import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-accent">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-portfolio-accent/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-portfolio-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">ghabbara.hanene@email.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-portfolio-accent/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-portfolio-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+216 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-portfolio-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-portfolio-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Tunis, Tunisia</p>
                  </div>
                </div>
              </div>

              {/* Languages section removed */}

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-portfolio-accent">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <Button
                    asChild
                    className="bg-portfolio-accent text-foreground hover:opacity-90"
                  >
                    <a href="https://github.com/Hanene2004" target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-portfolio-accent text-foreground hover:opacity-90"
                  >
                    <a href="https://www.linkedin.com/in/hanane-ghabbara-056047296/" target="_blank" rel="noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-surface border-border shadow-card">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-accent">
                Send Me a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input 
                      placeholder="Your name"
                      className="bg-background border-border focus:border-portfolio-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background border-border focus:border-portfolio-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input 
                    placeholder="Project inquiry"
                    className="bg-background border-border focus:border-portfolio-accent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-background border-border focus:border-portfolio-accent resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-primary"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Download, Terminal, Github, Mail, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgramsList } from "@/components/ProgramsList";
const Index = () => {
  const skills = ["C++ Development", "Python Automation", "Cybersecurity", "Game Development", "UI/UX Design", "System Architecture"];
  return <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center animate-slide-up">
          <div className="mb-8 inline-block">
            
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient">
            KAJZ
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Developer • Creator • Innovator
          </p>
          
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Welcome to my digital realm. I craft cutting-edge software solutions, 
            build innovative tools, and explore the frontiers of technology. 
            Dive into my collection of programs and discover what the future holds.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="glow-cyan group">
              <Download className="mr-2 group-hover:animate-bounce" />
              Download Programs
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:glow-purple">
              <Mail className="mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">ABOUT ME</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card p-8 glow-cyan hover:glow-purple transition-all duration-300">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Developer Journey</h3>
              <p className="text-foreground/70 leading-relaxed">
                With years of experience in software development, I specialize in creating 
                powerful, efficient tools that push the boundaries of what's possible. 
                From system-level programming to elegant user interfaces, I bring ideas to life.
              </p>
            </Card>
            
            <Card className="glass-card p-8 glow-purple hover:glow-cyan transition-all duration-300">
              <Zap className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Innovation Focus</h3>
              <p className="text-foreground/70 leading-relaxed">
                I'm passionate about automation, optimization, and creating tools that make 
                developers' lives easier. Every project is an opportunity to learn, innovate, 
                and deliver exceptional results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">TECH STACK</span>
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => <div key={index} className="glass-card px-6 py-3 border-primary/30 hover:border-primary hover:glow-cyan transition-all duration-300 cursor-pointer" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <span className="text-lg font-semibold">{skill}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">MY PROGRAMS</span>
          </h2>
          
          <ProgramsList />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">GET IN TOUCH</span>
          </h2>
          
          <p className="text-xl text-foreground/70 mb-12">
            Interested in collaboration or have questions? Let's connect!
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <Button size="lg" className="glow-purple">
              <Github className="mr-2" />
              GitHub
            </Button>
            <Button size="lg" className="glow-cyan">
              <Mail className="mr-2" />
              Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Kajz. Crafted with passion in the digital realm.</p>
        </div>
      </footer>
    </div>;
};
export default Index;
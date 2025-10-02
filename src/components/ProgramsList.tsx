import { useState } from "react";
import { Download, Code, Zap, Shield, Terminal, Cpu, Lock, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const programs = [
  {
    name: "CyberTools Pro",
    description: "Advanced automation toolkit with futuristic interface",
    version: "v2.5.1",
    size: "45 MB",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "CodeMatrix",
    description: "Next-gen code analyzer and optimizer",
    version: "v1.8.0",
    size: "32 MB",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "SecureShield",
    description: "Cybersecurity suite for modern developers",
    version: "v3.2.0",
    size: "58 MB",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    name: "TerminalX",
    description: "Enhanced terminal with AI-powered commands",
    version: "v4.1.3",
    size: "28 MB",
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    name: "QuantumCore",
    description: "High-performance computing framework",
    version: "v2.0.5",
    size: "67 MB",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    name: "CryptoVault",
    description: "Military-grade encryption tool",
    version: "v1.5.2",
    size: "41 MB",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    name: "SparkAI",
    description: "AI assistant for developers",
    version: "v3.7.0",
    size: "89 MB",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

export const ProgramsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, programs.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visiblePrograms = programs.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mb-8">
        <Button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          variant="outline"
          size="icon"
          className="glow-cyan disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div className="text-center">
          <p className="text-muted-foreground">
            Showing {currentIndex + 1}-{Math.min(currentIndex + itemsPerPage, programs.length)} of {programs.length}
          </p>
        </div>

        <Button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          variant="outline"
          size="icon"
          className="glow-cyan disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Programs Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {visiblePrograms.map((program, index) => (
          <Card
            key={currentIndex + index}
            className="glass-card p-6 hover:glow-magenta transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
              {program.icon}
            </div>

            <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
            <p className="text-foreground/70 mb-4">{program.description}</p>

            <div className="flex justify-between text-sm text-muted-foreground mb-6">
              <span>{program.version}</span>
              <span>{program.size}</span>
            </div>

            <Button className="w-full glow-cyan group">
              <Download className="mr-2 group-hover:animate-bounce" />
              Download
            </Button>
          </Card>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-primary w-8 glow-cyan"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

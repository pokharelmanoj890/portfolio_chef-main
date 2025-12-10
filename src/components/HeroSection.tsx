import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Fresh culinary ingredients"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Floating decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-olive-light/30 rounded-full blur-2xl animate-blob" style={{ animationDelay: "-8s" }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up opacity-0 stagger-1">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">
              Personal Trainer Chef • Kathmandu, Nepal
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-8 text-foreground animate-fade-up opacity-0 stagger-2">
            Transforming
            <span className="text-gradient block mt-2">Food & Fitness</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0 stagger-3">
            I blend culinary creativity with science-backed training principles
            to help you build sustainable habits for a healthier, happier you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-4">
            <Button variant="hero" size="xl" asChild className="group shadow-glow">
              <a href="#services">
                View My Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="glass hover:bg-primary/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-20 max-w-xl mx-auto animate-fade-up opacity-0 stagger-4" style={{ animationDelay: "0.5s" }}>
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Clients Trained" },
              { value: "15+", label: "Cuisines Mastered" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-gradient font-semibold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-7 h-12 rounded-full border-2 border-foreground/20 flex justify-center pt-2 glass">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
}

import { Award, Utensils, Heart } from "lucide-react";
import chefAsim from "@/assets/chef-asim.png";

const highlights = [
  { icon: Award, label: "Executive Chef" },
  { icon: Utensils, label: "15+ Cuisines" },
  { icon: Heart, label: "Wellness Focus" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated relative">
              <img
                src={chefAsim}
                alt="Chef Asim Khanal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-olive-light rounded-3xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-terracotta-light rounded-3xl -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
            
            {/* Floating badge */}
            <div className="absolute -right-4 top-1/4 glass rounded-2xl p-4 shadow-card hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Certified</p>
                  <p className="text-sm text-muted-foreground">Trainer Chef</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-medium text-sm">About Me</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground leading-tight">
              Chef Asim <span className="text-gradient">Khanal</span>
            </h2>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 shadow-soft"
                >
                  <item.icon className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                As a former Executive Chef, I've spent years mastering the art
                of cooking diverse cuisines—from continental to Asian, Middle
                Eastern to fusion. But my journey didn't stop in the kitchen. I
                realized that true transformation comes when we combine culinary
                expertise with fitness principles.
              </p>
              <p>
                With a Bachelor's degree in Management, I bring a business-minded
                approach to personal training and nutrition. Since 2022, I've been
                training newcomers at a prestigious HR company, helping them build
                confidence and develop sustainable habits.
              </p>
            </div>

            <blockquote className="mt-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />
              <p className="text-foreground font-serif text-xl italic pl-6">
                "Healthy eating doesn't have to be boring or complicated. My
                mission is to show you that with the right guidance, you can
                enjoy delicious food while achieving your fitness goals."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Dumbbell, UtensilsCrossed, ChefHat, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description:
      "Tailored fitness programs integrated with nutritional guidance. I design workouts that complement your dietary goals, ensuring a holistic approach to your health journey.",
    features: ["Customized workout plans", "Progress tracking", "Nutritional integration"],
    color: "primary",
  },
  {
    icon: UtensilsCrossed,
    title: "Meal Planning",
    description:
      "Customized, practical meal plans that fit busy lifestyles. Drawing from my experience with international cuisines, I create menus that are both healthy and delicious.",
    features: ["Weekly meal prep guides", "Diverse cuisine options", "Macro-balanced recipes"],
    color: "secondary",
  },
  {
    icon: ChefHat,
    title: "Cooking Classes",
    description:
      "Hands-on mentorship to build confidence in the kitchen. Learn techniques for preparing healthy, flavorful meals that will become staples in your routine.",
    features: ["One-on-one sessions", "Group workshops", "Technique mastery"],
    color: "primary",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary font-medium text-sm">What I Offer</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            My <span className="text-gradient">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-3 border border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color === 'primary' ? 'from-primary/5' : 'from-secondary/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Animated corner decoration */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl ${service.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary' : 'bg-secondary/10 group-hover:bg-secondary'} flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className={`w-8 h-8 ${service.color === 'primary' ? 'text-primary group-hover:text-primary-foreground' : 'text-secondary group-hover:text-secondary-foreground'} transition-colors duration-300`} />
                </div>

                <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground" />
                </h3>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${service.color === 'primary' ? 'bg-primary' : 'bg-secondary'} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" asChild className="shadow-glow">
            <a href="#contact">
              Start Your Journey
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

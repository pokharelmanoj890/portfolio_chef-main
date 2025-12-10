import { Globe, Users, ChefHat, Flame } from "lucide-react";

const expertiseAreas = [
  {
    icon: Globe,
    title: "Cooking Different Cuisines",
    description:
      "From continental European to vibrant Asian flavors, Middle Eastern spices to innovative fusion dishes—I bring global culinary expertise to your kitchen.",
    highlights: ["Continental", "Asian", "Middle Eastern", "Fusion"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "With years of experience training newcomers and building teams, I focus on developing your skills through patient guidance and practical demonstrations.",
    highlights: ["One-on-One Coaching", "Team Training", "Skill Development", "Confidence Building"],
    gradient: "from-secondary/20 to-secondary/5",
  },
];

const stats = [
  { icon: ChefHat, value: "15+", label: "Cuisines" },
  { icon: Users, value: "500+", label: "Students" },
  { icon: Flame, value: "10+", label: "Years" },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-medium text-sm">Core Competencies</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Combining culinary mastery with coaching excellence to deliver transformative experiences.
          </p>
        </div>

        {/* Stats bar */}
        <div className="glass rounded-3xl p-8 mb-16 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="font-serif text-3xl text-foreground font-semibold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group relative bg-card rounded-3xl p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-500 overflow-hidden ${index === 0 ? 'md:translate-y-8' : ''}`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <area.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
                  {area.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {area.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-4 py-2 bg-background/80 backdrop-blur-sm text-foreground text-sm rounded-full font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

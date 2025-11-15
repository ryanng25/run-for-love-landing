import { Card } from "@/components/ui/card";
import { Heart, Music, Users, Trophy, Footprints, Sparkles } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Footprints,
      title: "5K Fun Run",
      description: "A colorful, energetic 5K through the city! Walk, jog, or run - all fitness levels welcome. Wear your brightest colors!",
      color: "text-fun-orange",
      gradient: "from-fun-orange to-fun-yellow",
    },
    {
      icon: Music,
      title: "Live Concert",
      description: "Dance the night away with incredible live performances from top artists. Music, energy, and love!",
      color: "text-secondary",
      gradient: "from-secondary to-love-purple",
    },
    {
      icon: Sparkles,
      title: "Color & Energy",
      description: "Get ready for colorful surprises, photo moments, and an atmosphere full of joy and excitement!",
      color: "text-fun-green",
      gradient: "from-fun-green to-fun-blue",
    },
    {
      icon: Trophy,
      title: "Prizes & Fun",
      description: "Compete for amazing prizes, enjoy giveaways, and create unforgettable memories with friends and family.",
      color: "text-fun-yellow",
      gradient: "from-fun-yellow to-fun-orange",
    },
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="bg-gradient-love bg-clip-text text-transparent">Run For Love</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An extraordinary event that combines the thrill of running with the energy of live music. 
            It's not just an event—it's an experience you'll never forget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="space-y-4 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-love rounded-3xl shadow-glow animate-pulse-glow">
            <Heart className="w-12 h-12 text-white animate-heart-beat mx-auto mb-4" />
            <p className="text-white text-lg font-semibold max-w-2xl">
              Powered by Pacepoint - Your trusted partner for seamless event registration and management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

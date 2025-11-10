import { Button } from "@/components/ui/button";
import { Heart, Music, Users } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="Run For Love 2025" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 text-primary/20 w-12 h-12 animate-float" style={{ animationDelay: "0s" }} />
        <Heart className="absolute top-40 right-20 text-accent/20 w-16 h-16 animate-float" style={{ animationDelay: "1s" }} />
        <Heart className="absolute bottom-40 left-1/4 text-secondary/20 w-10 h-10 animate-float" style={{ animationDelay: "2s" }} />
        <Heart className="absolute bottom-20 right-1/3 text-primary/20 w-14 h-14 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="bg-gradient-love bg-clip-text text-transparent">
                Run For Love
              </span>
            </h1>
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              2025
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Powered by Pacepoint
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 py-8">
            <div className="flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-card">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold">Fun Run</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-card">
              <Music className="w-5 h-5 text-secondary" />
              <span className="font-semibold">Live Concert</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-card">
              <Heart className="w-5 h-5 text-accent animate-heart-beat" />
              <span className="font-semibold">Love & Music</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              variant="cta" 
              size="lg"
              className="px-12 py-8 rounded-2xl"
              onClick={() => {
                document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Register Now
              <Heart className="w-6 h-6 fill-current" />
            </Button>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
            Join us for an unforgettable day of running, music, and spreading love. 
            Experience the perfect blend of fitness and entertainment!
          </p>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;

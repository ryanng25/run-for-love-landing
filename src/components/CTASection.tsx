import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-love relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-10 left-10 text-white/20 w-8 h-8 animate-float" />
        <Sparkles className="absolute bottom-20 right-20 text-white/20 w-10 h-10 animate-float" style={{ animationDelay: "1s" }} />
        <Heart className="absolute top-1/2 left-20 text-white/10 w-24 h-24 animate-pulse-glow" />
        <Heart className="absolute top-20 right-10 text-white/10 w-16 h-16 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Don't Miss Out — Join the
              <br />
              <span className="text-white/90">Run For Love Experience!</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Limited spots available. Secure your place now and be part of something extraordinary.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-black text-white mb-2">5K+</div>
              <div className="text-white/80 font-medium">Expected Runners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-black text-white mb-2">12+</div>
              <div className="text-white/80 font-medium">Live Performances</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-black text-white mb-2">1 Day</div>
              <div className="text-white/80 font-medium">Unforgettable</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-xl px-10 py-7 text-lg font-bold rounded-2xl group"
              onClick={() => {
                document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Register Now with Pacepoint
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Pacepoint Logo Placeholder */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Powered by Pacepoint</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Secure Registration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Easy Check-in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

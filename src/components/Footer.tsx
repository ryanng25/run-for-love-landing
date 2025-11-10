import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-6">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-8 h-8 text-primary fill-primary animate-heart-beat" />
            <h3 className="text-3xl font-black">Run For Love 2025</h3>
          </div>

          {/* Description */}
          <p className="text-background/70 max-w-md mx-auto">
            Powered by Pacepoint - Creating unforgettable experiences through running, music, and love.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Contact Us
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 text-sm">
              © 2025 Run For Love. All rights reserved. Powered by Pacepoint.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RegistrationSection from "@/components/RegistrationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <RegistrationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

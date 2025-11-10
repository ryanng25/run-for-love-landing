import { Card } from "@/components/ui/card";
import { QrCode, UserPlus, Download, Mail } from "lucide-react";

const RegistrationSection = () => {
  const steps = [
    {
      icon: QrCode,
      number: "01",
      title: "Scan QR Code",
      description: "Scan the QR code or click 'Register Now' button to get started with your registration.",
    },
    {
      icon: UserPlus,
      number: "02",
      title: "Register via Pacepoint",
      description: "Complete your registration through the Pacepoint platform. Fill in your details and select your participation options.",
    },
    {
      icon: Download,
      number: "03",
      title: "Download QR & Tickets",
      description: "Once registered, download your personal QR code and event tickets directly from Pacepoint.",
    },
    {
      icon: Mail,
      number: "04",
      title: "Payment Confirmation",
      description: "Receive instant payment confirmation via email. Keep it safe for event day access!",
    },
  ];

  return (
    <section id="registration" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            How to <span className="bg-gradient-energy bg-clip-text text-transparent">Register</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started is easy! Follow these simple steps to secure your spot at Run For Love 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className="p-8 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border/50">
                <div className="space-y-4">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-black text-primary/20">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-xl bg-gradient-love flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
              
              {/* Connecting Arrow (except for last item on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary z-10" />
              )}
            </div>
          ))}
        </div>

        {/* QR Code Placeholder */}
        <div className="max-w-md mx-auto">
          <Card className="p-8 text-center space-y-6 shadow-card bg-card">
            <div className="w-64 h-64 mx-auto bg-muted rounded-2xl flex items-center justify-center border-4 border-dashed border-primary/30">
              <div className="text-center space-y-3">
                <QrCode className="w-20 h-20 mx-auto text-primary" />
                <p className="text-sm text-muted-foreground font-medium">
                  Scan to Register
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Quick Registration</h3>
              <p className="text-muted-foreground">
                Scan this QR code with your phone camera to start your registration journey with Pacepoint
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;

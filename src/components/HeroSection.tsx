import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/lovable-uploads/ab8210f9-38bf-4b49-8467-cbb98dd469a9.png')` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* 3D Abstract Element */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full opacity-30">
        <img 
          src="/lovable-uploads/Testimonies.png" 
          alt="3D Abstract"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Brand Line */}
          <div className="mb-8">
            <span className="text-brand-blue text-lg font-semibold tracking-wider uppercase">
              XANEGLOBAL
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            THE NARRATIVE
            <br />
            TO EXECUTION
            <br />
            <span className="text-text-secondary">ECOSYSTEM</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl leading-relaxed">
            We turn narratives into trades by uniting market insight, execution tools, and an active trading community, making your product part of every move.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="premium" size="lg" className="px-8 py-4 text-lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg">
              About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "At XaneGlobal, our success is measured by the growth, trust, and results our members experience. Here's what traders, analysts, and partners have to say about working with us.",
      author: "Trader Community"
    },
    {
      quote: "The narrative approach completely changed how I view the crypto market. XaneGlobal taught me to think beyond charts and trade with conviction.",
      author: "Sarah Chen"
    },
    {
      quote: "The community and tools provided by XaneGlobal have elevated my trading to levels I never thought possible. The support is incredible.",
      author: "Mike Rodriguez"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations (subtle shapes) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-20 top-20 w-32 h-32 rounded-full border border-white/20"></div>
        <div className="absolute right-20 bottom-20 w-24 h-24 rounded-full border border-white/20"></div>
        <div className="absolute left-1/2 top-1/2 w-48 h-48 rounded-full border border-white/10 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-6xl font-bold text-text-secondary/20">04</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimonies
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Description with Background Image */}
            <div className="relative flex items-center min-h-[300px] lg:min-h-[400px]">
              {/* Background image */}
              <img
                src="/lovable-uploads/Testimonies.png"
                alt="Background Image"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />

              {/* Overlay text */}
              <div className="relative z-10 max-w-xl text-left text-text-secondary leading-relaxed text-lg px-6">
                <p>
                  At XaneGlobal, our success is measured by the growth, trust, 
                  and results our members experience.
                </p>
                <br />
                <p>
                  Here's what traders, analysts, and partners have to say about working with us.
                </p>
              </div>
            </div>

            {/* Right Side - Testimonial Card */}
            <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-lg p-8 relative">
              <div className="mb-6">
                <div className="w-16 h-16 bg-text-secondary/20 rounded-full mx-auto mb-6"></div>
                <p className="text-text-secondary leading-relaxed text-center text-lg">
                  {testimonials[currentTestimonial].quote}
                </p>
                <p className="text-brand-blue font-semibold text-center mt-4">
                  - {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12">Our Partners</h3>
          <div className="flex justify-center items-center space-x-12">
            <img 
              src="/Images/fliotrades.png" 
              alt="Partner Logo"
              className="h-40 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src="/Images/inextai-logo.png" 
              alt="Partner Logo"
              className="h-40 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

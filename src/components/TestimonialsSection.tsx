import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Add CSS animation for infinite scroll
  const scrollStyle = {
    animation: 'scroll 20s linear infinite',
  };

  const keyframesStyle = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;
  
  const testimonials = [
    {
    quote: "24/7 might not be as hyped as the classes on CTNG, but I believe there’s more to it and it can even be better than those hyped ones. Looking at the results so far, I don’t think any degen class has produced the kind of massive results these students have shown",
    author: "SammyVerse",
    profile: "/Images/SammyVerse.jpg", 
    },
    {
        quote: "24/7 completely reshaped how I see trading, from understanding the fundamentals to the deeper narrative of degening and the entire ecosystem. The tutors weren’t just teachers; they were guides, friendly, unbiased, and making sure no one was left behind.",
    author: "VD",
    profile: "/Images/VD.jpg",
    },
    {
      quote: "The community and tools provided by XaneGlobal have elevated my trading to levels I never thought possible. The support is incredible.",
      author: "Mike Rodriguez",
      profile: "/Images/profile3.png",
    }
  ];

  const partners = [
    { name: "FlioTrades", logo: "/Images/fliotrades.png" },
    { name: "InextAI", logo: "/Images/inextai-logo.png" },
    { name: "Partner 3", logo: "/Images/partner3.png" },
    { name: "Partner 4", logo: "/Images/partner4.png" },
    { name: "Partner 5", logo: "/Images/partner5.png" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <style>{keyframesStyle}</style>
      {/* Background decorations (subtle shapes) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-20 top-20 w-32 h-32 rounded-full border border-white/20"></div>
        <div className="absolute right-20 bottom-20 w-24 h-24 rounded-full border border-white/20"></div>
        <div className="absolute left-1/2 top-1/2 w-48 h-48 rounded-full border border-white/10 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-6xl font-bold text-text-secondary/20"></span>
          <h2 className="text-4xl md:text-8xl font-bold text-foreground mb-4">
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
                <img
                  src={testimonials[currentTestimonial].profile}
                  alt={testimonials[currentTestimonial].author}
                  className="w-16 h-16 rounded-full mx-auto mb-6 object-cover"
                />

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

        {/* Partners Section - Clean Infinite Scroll */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Our Partners</h3>
          
          <div className="relative overflow-hidden max-w-5xl mx-auto">
            {/* Infinite scrolling container */}
            <div className="flex space-x-16" style={scrollStyle}>
              {/* First set of partners */}
              <img 
                src="/Images/fliotrades.png" 
                alt="FlioTrades"
                className="h-16 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
              />
              <img 
                src="/Images/inextai-logo.png" 
                alt="InextAI"
                className="h-16 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
              />
              {/* Duplicate for seamless loop */}
              <img 
                src="/Images/fliotrades.png" 
                alt="FlioTrades"
                className="h-16 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
              />
              <img 
                src="/Images/inextai-logo.png" 
                alt="InextAI"
                className="h-16 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
              />
              <img 
                src="/Images/fliotrades.png" 
                alt="FlioTrades"
                className="h-16 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
              />
              <img 
                src="/Images/inextai-logo.png" 
                alt="InextAI"
                className="h-16 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
              />
            </div>
            
            {/* Gradient overlays for smooth fade */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
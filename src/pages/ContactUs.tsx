import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/lovable-uploads/c56ffcf9-b485-4403-9bab-5858b65f710c.png" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 tracking-wider">
              CONTACT
              <br />
              XANE<span className="text-brand-blue">GLOBAL</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              We're here to help you on your crypto trading and Web3 journey.
              <br />
              Whether you have questions, want to join a cohort, or
              <br />
              explore partnerships, reach out, we'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Join Communities Section */}
      

      <Footer />
    </div>
  );
};

export default ContactUs;
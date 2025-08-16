import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Name",
      position: "Position",
      image: null
    },
    {
      name: "Goodness",
      position: "CEO",
      image: "/lovable-uploads/cba3d26b-aeb9-4723-9ee4-6d187283f7fb.png" // This will be a placeholder
    },
    {
      name: "Web3Degen",
      position: "Fundamental Analyst",
      image: "/lovable-uploads/cba3d26b-aeb9-4723-9ee4-6d187283f7fb.png" // This will be a placeholder
    },
    {
      name: "Tobias",
      position: "Technical Expert",
      image: "/lovable-uploads/cba3d26b-aeb9-4723-9ee4-6d187283f7fb.png" // This will be a placeholder
    },
    {
      name: "Dice",
      position: "Narrative Analyst",
      image: "/lovable-uploads/cba3d26b-aeb9-4723-9ee4-6d187283f7fb.png" // This will be a placeholder
    },
    {
      name: "Name",
      position: "Position",
      image: null
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/lovable-uploads/c56ffcf9-b485-4403-9bab-5858b65f710c.png" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 tracking-wider">
            MEET THE
            <br />
            XANEGLOBAL <span className="text-brand-blue">TEAM</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-16">
            We're a passionate group of traders, builders, and innovators
            <br />
            shaping the future of crypto and Web3
            <br />
            Together, we create, learn, and push the limits to help
            <br />
            you trade smarter and build better
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-text-secondary/20">
                  {member.image ? (
                    <div className="w-full h-full bg-gradient-to-br from-brand-blue/30 to-text-secondary/30 flex items-center justify-center">
                      <div className="w-32 h-32 bg-text-secondary/40 rounded-full"></div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-text-secondary/20"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <div className="bg-brand-blue text-white px-4 py-2 rounded-full inline-block">
                  {member.position}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Team;
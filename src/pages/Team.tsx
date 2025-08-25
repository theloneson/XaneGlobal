import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Team = () => {
  const teamMembers = [
    { name: "Allen Yonda", position: "Founder", image: "/Images/five.jpg" },
    { name: "Goodness", position: "CEO", image: "/Images/four.jpg" },
    { name: "Web3Degen", position: "Fundamental Analyst", image: "/Images/one.jpg" },
    { name: "Tobias", position: "Technical Expert", image: "/Images/two.jpg" },
    { name: "Dice", position: "Narrative Analyst", image: "/Images/three.jpg" },
    { name: "Flio", position: "Trading Psychologist", image: "/Images/six.png" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/lovable-uploads/c56ffcf9-b485-4403-9bab-5858b65f710c.png" 
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            MEET THE
            <br />
            XANEGLOBAL <span className="text-brand-blue">TEAM</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-16">
            We’re a passionate group of traders, builders, and innovators shaping the future of crypto and Web3. 
            Together, we create, learn, and push the limits to help you trade smarter and build better.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                
                {/* Image with white card look */}
                <div className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-4 bg-white shadow-lg rounded-2xl p-2 flex items-center justify-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted rounded-xl" />
                  )}
                </div>

                {/* Name */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>

                {/* Position */}
                <div className="bg-brand-blue text-white px-4 py-2 rounded-lg inline-block text-sm md:text-base">
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

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Goodness",
      role: "CEO",
      description: "Visionary leader driving the strategic direction of XaneGlobal's narrative-driven trading ecosystem."
    },
    {
      name: "Web3Degen", 
      role: "Fundamental Analyst",
      description: "Expert in blockchain fundamentals and market analysis, providing deep insights into crypto narratives."
    },
    {
      name: "Tobias",
      role: "Technical Expert", 
      description: "Technical analysis specialist focused on chart patterns, market timing, and execution strategies."
    },
    {
      name: "Dice",
      role: "Narrative Analyst",
      description: "Master of market storytelling, identifying emerging narratives before they become mainstream."
    }
  ];

  return (
    <section id="team" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Meet the experts behind XaneGlobal's success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-lg p-6 mb-4 group-hover:bg-brand-blue/20 transition-colors">
                <div className="w-20 h-20 bg-text-secondary/20 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-brand-blue font-semibold mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
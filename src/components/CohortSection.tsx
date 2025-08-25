const CohortSection = () => {
  return (
    <section id="cohorts" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-6xl font-bold text-text-secondary/20"></span>
          <h2 className="text-4xl md:text-[120px] font-bold text-foreground mb-4">
            Our Cohort
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Trade beyond charts, powered by stories and tools
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-lg p-8 md:p-12">
            {/* Video Placeholder */}
            <div className="bg-background/50 rounded-lg p-8 mb-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Video Slide</h3>
              <div className="w-full h-64 bg-background/20 rounded-lg flex items-center justify-center">
                <span className="text-text-secondary">Video Content Here</span>
              </div>
            </div>

            {/* Description */}
            <div className="text-center">
              <p className="text-text-secondary leading-relaxed">
                Our inaugural cohort was a deep dive into real-world crypto trading, focused on mastering market narratives and executing with precision. Over several weeks, traders transformed their skills, mindset, and confidence, proving that hands-on, community-driven learning leads to results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CohortSection;
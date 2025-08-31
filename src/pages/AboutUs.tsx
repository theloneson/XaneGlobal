import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUs = () => {
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
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-brand-white mb-8 tracking-wider">
              ABOUT US
            </h1>
            <p className="text-base sm:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              XaneGlobal is a team of crypto traders and Web3 builders.
              <br />
              We help people learn how to trade smartly and use the latest tools,
              <br />
              turning ideas into real results.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div className="relative">
              <span className="block mb-4 text-6xl md:text-9xl font-bold text-text-secondary/20 md:absolute md:-top-8 md:left-0">
                01
              </span>
              <div className="pt-10 sm:pt-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
                  Who we are
                </h2>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                At XaneGlobal, we are a diverse collective of crypto and forex 
                traders, Web3 developers, builders, and founders, united by a 
                shared mission, to reshape the financial and blockchain landscape. 
                Our combined experience has not only shaped us but redefined the 
                way trading and Web3 innovation, come together.
              </p>
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                We have built thriving communities, trained generations of traders 
                and Web3 creators, and launched our groundbreaking first cohort, 
                "24/7 In the Trenches," where some of the sharpest minds took the 
                leap from theory into action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Right Side (Number + Heading) – first on mobile */}
            <div className="relative order-1 lg:order-2">
              <span className="block mb-4 text-6xl md:text-9xl font-bold text-text-secondary/20 md:absolute md:-top-8 md:right-0">
                02
              </span>
              <div className="pt-10 sm:pt-20 text-left sm:text-right">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue">
                  The Results We
                  <br />
                  Have Achieved
                </h2>
              </div>
            </div>

            {/* Left Side (List) – second on mobile */}
            <div className="bg-white/10 rounded-2xl p-8 order-2 lg:order-1">
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Trained our inaugural cohort of radical traders who actively trade with confidence.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Built a growing community of traders and Web3 builders.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Integrated advanced tools and trading strategies to empower our members.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Created a platform where market narratives turn into real trades.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div className="relative">
              <span className="block mb-4 text-6xl md:text-9xl font-bold text-text-secondary/20 md:absolute md:-top-8 md:left-0">
                03
              </span>
              <div className="pt-10 sm:pt-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
                  Our Vision
                </h2>
              </div>
            </div>

            {/* Right Side */}
            <div className="bg-brand-blue rounded-2xl p-8 text-white">
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                To become the leading global platform where crypto narratives meet cutting-edge execution, transforming retail traders into informed, confident, and successful market participants.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                We envision a world where every trader has access to the right tools, real-time market insights, and a supportive community to navigate the ever-changing crypto landscape with clarity and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Lead Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Right Side (Number + Heading) – first on mobile */}
            <div className="relative order-1 lg:order-2">
              <span className="block mb-4 text-6xl md:text-9xl font-bold text-text-secondary/20 md:absolute md:-top-8 md:right-0">
                04
              </span>
              <div className="pt-10 sm:pt-20 text-left sm:text-right">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                  Why We Lead
                </h2>
              </div>
            </div>

            {/* Left Side (features) – second on mobile */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Experienced Team:</h3>
                  <p className="text-text-secondary">Traders, developers, and founders with real-world skills.</p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Narrative-Driven:</h3>
                  <p className="text-text-secondary">Trading based on market stories, not just numbers.</p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Community Focused:</h3>
                  <p className="text-text-secondary">Grow with a supportive, active network.</p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Hands-On Learning:</h3>
                  <p className="text-text-secondary">Training that turns theory into action.</p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Tool Integration:</h3>
                  <p className="text-text-secondary">Access to wallets, bots, and trading platforms.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

import { Activity, Navigation, Wrench, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      title: "LIVE MARKET ACTION",
      description: "Execute trades in real time and turn crypto narratives into profit.",
      icon: Activity
    },
    {
      number: "02",
      title: "NARRATIVE NAVIGATION",
      description: "Master the art of spotting and riding market-moving stories.",
      icon: Navigation
    },
    {
      number: "03",
      title: "INTEGRATED TOOLS",
      description: "Use partner wallets and bots seamlessly within your trading flow.",
      icon: Wrench
    },
    {
      number: "04",
      title: "COMMUNITY POWER",
      description: "Connect with like-minded traders and share alpha in real-time.",
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/54803049-ddb9-4c25-b14e-5ff160608f89.png"
                alt="Trading Tools"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <span className="text-6xl font-bold text-text-secondary/20">02</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                More Than Just
                <br />
                <span className="text-brand-blue">Trading</span>
              </h2>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center border border-brand-blue/20">
                      <span className="text-brand-blue font-bold">{feature.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
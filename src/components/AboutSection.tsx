import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Triangle, Square, Circle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Our Story */}
          <Card className="bg-brand-blue border-0 text-foreground">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Triangle className="w-6 h-6 mr-3 fill-current" />
                <h3 className="text-2xl font-bold">Our Story</h3>
              </div>
              <p className="text-sm leading-relaxed">
                At XaneGlobal, we began with a simple but powerful idea: trading isn't just about charts, it's about narratives, timing, and execution. Our first cohort, "24/7 In the Trenches," transformed Newbies from passive observers into active narrative-driven traders.
              </p>
            </CardContent>
          </Card>

          {/* Our Mission */}
          <Card className="bg-brand-blue border-0 text-foreground">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Square className="w-6 h-6 mr-3 fill-current" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-sm leading-relaxed">
                To empower crypto traders worldwide by bridging the gap between market narratives and real-time execution tools. We strive to provide a fully integrated ecosystem where traders can discover stories early, deploy capital smartly, and grow within a vibrant community fueled by alpha and trust.
              </p>
            </CardContent>
          </Card>

          {/* Our Vision */}
          <Card className="bg-brand-blue border-0 text-foreground">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Circle className="w-6 h-6 mr-3 fill-current" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-sm leading-relaxed">
                To become the leading global platform where crypto narratives meet cutting-edge execution, transforming retail traders into informed, confident, and successful market participants. We envision a world where every trader has access to the right tools, real-time insights, and a supportive community to navigate the ever-changing crypto landscape with clarity and precision.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Join Community CTA */}
        <div className="text-center">
          <Button className="bg-brand-blue hover:bg-brand-blue-light px-12 py-4 text-lg">
            Join our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
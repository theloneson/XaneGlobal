import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is XaneGlobal?",
      answer: "XaneGlobal is a hub for training, tools, and insights, empowering traders to think beyond charts and master real-world crypto strategies."
    },
    {
      question: "Who can join?",
      answer: "Anyone with a passion for trading, crypto, and growth, whether you're just starting out or already experienced."
    },
    {
      question: "What makes you different?",
      answer: "We don't just teach strategies; we immerse you in narratives, hands-on training, and tools that help you think, trade, and act differently."
    },
    {
      question: "How do I get started?",
      answer: "Sign up for the available cohort, or contact us by sending a mail, or joining our community."
    },
    {
      question: "Is there a cost?",
      answer: "Some resources are free. Advanced training, mentorship, and tools are part of our premium offerings."
    },
    {
      question: "What do you mean by 'crypto radical traders'?",
      answer: "They're traders who challenge the norm, act with calculated risk, and use innovation to stay ahead in the fast-changing crypto space."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-6xl font-bold text-text-secondary/20"></span>
          <h2 className="text-4xl md:text-[120px] font-bold text-foreground mb-4">
            FAQs
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 bg-card border border-brand-blue/20 rounded-lg hover:bg-brand-blue/5 transition-colors text-left"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {index + 1}. {faq.question}
                </span>
                {openFAQ === index ? (
                  <Minus className="w-6 h-6 text-brand-blue flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-brand-blue flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="mt-2 p-6 bg-brand-blue/10 border border-brand-blue/20 rounded-lg animate-fade-in">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
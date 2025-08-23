import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Twitter, Send, Instagram, Music } from "lucide-react"; // icons (X, Telegram, TikTok, Instagram)

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 relative bg-background">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-black/30 border border-brand-blue/40 rounded-xl p-8 shadow-lg backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                FULLNAME
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="bg-brand-blue/10 border-brand-blue/30 placeholder:text-gray-400"
                placeholder="Enter your fullname"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                EMAIL
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-brand-blue/10 border-brand-blue/30 placeholder:text-gray-400"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                SUBJECT
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="bg-brand-blue/10 border-brand-blue/30 placeholder:text-gray-400"
                placeholder="Message Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                MESSAGE
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="bg-brand-blue/10 border-brand-blue/30 placeholder:text-gray-400 min-h-[120px]"
                placeholder="Your message"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue-light px-12 py-4 text-lg"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

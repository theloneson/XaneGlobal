const Footer = () => {
  return (
    <footer className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Join Communities Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Communities
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Join XaneGlobal to trade smarter, build better, and be part of the future of crypto investing.
          </p>
          
          {/* Social Bar with full background */}
          <div 
            className="bg-cover bg-center rounded-2xl p-8 max-w-4xl mx-auto"
            style={{ backgroundImage: `url('/lovable-uploads/bgimg.png')` }}
          >
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-16 h-16 rounded-full overflow-hidden hover:scale-110 transition-transform">
                <img 
                  src="/lovable-uploads/95ce1587-eb85-46fb-8c89-b5684cfc8e08.png" 
                  alt="X (Twitter)"
                  className="w-full h-full object-cover"
                />
              </a>
              <a href="#" className="w-16 h-16 rounded-full overflow-hidden hover:scale-110 transition-transform">
                <img 
                  src="/lovable-uploads/09a84a18-183c-4c91-a050-25161bdef08d.png" 
                  alt="Telegram"
                  className="w-full h-full object-cover"
                />
              </a>
              <a href="#" className="w-16 h-16 rounded-full overflow-hidden hover:scale-110 transition-transform">
                <img 
                  src="/lovable-uploads/0404749a-5762-4f10-b87f-6bfc1ad13e3c.png" 
                  alt="TikTok"
                  className="w-full h-full object-cover"
                />
              </a>
              <a href="#" className="w-16 h-16 rounded-full overflow-hidden hover:scale-110 transition-transform">
                <img 
                  src="/lovable-uploads/67ec036b-3134-4290-bb00-113821233ebc.png" 
                  alt="Instagram"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-brand-blue/20">
          <p className="text-text-secondary">
            All Copyright (C) 2025 Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

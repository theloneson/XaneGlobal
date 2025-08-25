const Footer = () => {
  return (
    <footer className="relative bg-footer-bg border-t border-foreground/10 shadow-inner mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
          
          {/* Logo + Short Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/6b3efde7-da06-4423-a452-e6e26ae343e4.png" 
                alt="XaneGlobal Logo"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-foreground">XaneGlobal</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Empowering traders and builders in the Web3 and crypto space with tools, education, and communities.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 uppercase tracking-wider text-sm">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-secondary hover:text-foreground transition-colors">XaneLabs</a></li>
              <li><a href="#" className="text-text-secondary hover:text-foreground transition-colors">XaneVersity</a></li>
              <li><a href="#" className="text-text-secondary hover:text-foreground transition-colors">Builder Hubs</a></li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 uppercase tracking-wider text-sm">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-secondary hover:text-foreground transition-colors">Help page</a></li>
              <li><a href="#" className="text-text-secondary hover:text-foreground transition-colors">Customer support</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-secondary hover:text-foreground transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-text-secondary hover:text-foreground transition-colors">Terms of service</a></li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-6 h-6 hover:scale-110 transition-transform">
                <img 
                  src="/lovable-uploads/67ec036b-3134-4290-bb00-113821233ebc.png" 
                  alt="Instagram"
                  className="w-full h-full object-cover rounded"
                />
              </a>
              <a href="#" className="w-6 h-6 hover:scale-110 transition-transform">
                <img 
                  src="/lovable-uploads/95ce1587-eb85-46fb-8c89-b5684cfc8e08.png" 
                  alt="X (Twitter)"
                  className="w-full h-full object-cover rounded"
                />
              </a>
              <a href="#" className="w-6 h-6 hover:scale-110 transition-transform">
                <img 
                  src="/lovable-uploads/09a84a18-183c-4c91-a050-25161bdef08d.png" 
                  alt="Telegram"
                  className="w-full h-full object-cover rounded"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-text-secondary/20 pt-6 text-center">
          <p className="text-text-secondary text-sm">
            © 2025 XaneGlobal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

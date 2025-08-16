import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-brand-blue/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/6b3efde7-da06-4423-a452-e6e26ae343e4.png" 
              alt="XaneGlobal Logo"
              className="w-8 h-8 mr-3"
            />
            <span className="text-xl font-bold text-foreground">XaneGlobal</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-brand-blue transition-colors">
              Home
            </Link>
            <a href="#cohorts" className="text-foreground hover:text-brand-blue transition-colors">
              Cohorts
            </a>
            <Link to="/team" className="text-foreground hover:text-brand-blue transition-colors">
              Team
            </Link>
            <Link to="/about-us" className="text-foreground hover:text-brand-blue transition-colors">
              About us
            </Link>
            <Link to="/contact-us" className="text-foreground hover:text-brand-blue transition-colors">
              Contact-Us
            </Link>
            <Button variant="default" className="bg-brand-blue hover:bg-brand-blue-light">
              Check Next Cohort
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-brand-blue/20">
              <Link
                to="/"
                className="block px-3 py-2 text-foreground hover:text-brand-blue transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <a
                href="#cohorts"
                className="block px-3 py-2 text-foreground hover:text-brand-blue transition-colors"
                onClick={toggleMenu}
              >
                Cohorts
              </a>
              <Link
                to="/team"
                className="block px-3 py-2 text-foreground hover:text-brand-blue transition-colors"
                onClick={toggleMenu}
              >
                Team
              </Link>
              <Link
                to="/about-us"
                className="block px-3 py-2 text-foreground hover:text-brand-blue transition-colors"
                onClick={toggleMenu}
              >
                About us
              </Link>
              <Link
                to="/contact-us"
                className="block px-3 py-2 text-foreground hover:text-brand-blue transition-colors"
                onClick={toggleMenu}
              >
                Contact-Us
              </Link>
              <div className="px-3 pt-2">
                <Button variant="default" className="w-full bg-brand-blue hover:bg-brand-blue-light">
                  Check Next Cohort
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
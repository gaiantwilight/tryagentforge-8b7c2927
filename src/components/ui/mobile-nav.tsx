import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";

interface MobileNavProps {
  onBookDemo?: () => void;
}

export function MobileNav({ onBookDemo }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBookDemo = () => {
    setIsOpen(false);
    if (onBookDemo) {
      onBookDemo();
    } else {
      setTimeout(() => {
        const demoSection = document.getElementById('demo');
        if (demoSection) {
          demoSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const isWellnessPage = location.pathname === '/wellness';

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Fullscreen Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-lg lg:hidden"
          aria-hidden="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-line">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                isWellnessPage ? 'bg-gradient-to-br from-aqua to-aqua-glow' : 'bg-gradient-ember'
              }`}>
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-sora font-bold text-xl">AgentForge</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 space-y-2" role="navigation" aria-label="Mobile navigation">
            <Link
              to="/"
              className="block py-4 px-4 text-lg font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link
              to="/wellness"
              className={`block py-4 px-4 text-lg font-medium rounded-lg transition-colors ${
                isWellnessPage 
                  ? 'text-aqua bg-aqua/10' 
                  : 'hover:bg-muted'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Wellness
            </Link>

            <Link
              to="/blockchain"
              className="block py-4 px-4 text-lg font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blockchain
            </Link>

            {location.pathname === '/' && (
              <>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left py-4 px-4 text-lg font-medium hover:bg-muted rounded-lg transition-colors"
                >
                  How it Works
                </button>
                
                <button
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left py-4 px-4 text-lg font-medium hover:bg-muted rounded-lg transition-colors"
                >
                  Features
                </button>
                
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left py-4 px-4 text-lg font-medium hover:bg-muted rounded-lg transition-colors"
                >
                  Pricing
                </button>
              </>
            )}

            <Link
              to="/affiliate"
              className="block py-4 px-4 text-lg font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Affiliate
            </Link>

            {/* CTA Buttons */}
            <div className="pt-6 space-y-3">
              <Button
                onClick={handleBookDemo}
                className={`w-full ${
                  isWellnessPage 
                    ? 'bg-aqua hover:bg-aqua-glow text-background' 
                    : 'bg-gradient-ember hover:opacity-90 text-white'
                }`}
                size="lg"
              >
                Get a Demo
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                asChild
              >
                <a href="tel:+1-714-475-7502">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
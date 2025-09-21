import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { Button } from "./button";

interface AnnouncementBannerProps {
  theme?: "ember" | "aqua";
  onBookNow?: () => void;
}

export function AnnouncementBanner({ theme = "ember", onBookNow }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed in the last 7 days
    const dismissedAt = localStorage.getItem('announcement-banner-dismissed');
    const now = Date.now();
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    
    if (!dismissedAt || (now - parseInt(dismissedAt)) > sevenDays) {
      setIsVisible(true);
    }

    // Handle scroll for compact mode
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsCompact(true);
      } else if (currentScrollY < lastScrollY) {
        setIsCompact(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('announcement-banner-dismissed', Date.now().toString());
  };

  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow();
    } else {
      const demoSection = document.getElementById('demo');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!isVisible) return null;

  const gradientClass = theme === "aqua" 
    ? "bg-gradient-to-r from-aqua/90 to-aqua-glow/90" 
    : "bg-gradient-ember";

  return (
    <div className={`
      sticky top-0 z-[60] w-full 
      ${gradientClass}
      transition-all duration-300 ease-in-out
      ${isCompact ? 'h-10' : 'h-12 sm:h-14'}
    `}>
      <div className="container-premium h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            <p className={`
              text-white font-medium text-sm sm:text-base 
              ${isCompact ? 'text-xs' : ''}
              truncate
            `}>
              Founding client pricing — 30% off monthly. Book a 15-min demo.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 ml-4">
            <Button 
              onClick={handleBookNow}
              size={isCompact ? "sm" : "default"}
              variant="secondary"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs sm:text-sm"
            >
              Book now
            </Button>
            <Button 
              variant="ghost" 
              size={isCompact ? "sm" : "default"}
              className="text-white hover:bg-white/10 text-xs sm:text-sm"
              asChild
            >
              <a href="tel:+1-XXX-XXX-XXXX">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Call
              </a>
            </Button>
            <button
              onClick={handleDismiss}
              className="p-1 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
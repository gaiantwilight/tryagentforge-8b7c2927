import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Zap, MessageSquare } from "lucide-react";
import { Button } from "./button";

interface ChatMessage {
  id: number;
  text: string;
  isAgent: boolean;
  timestamp: string;
}

const chatPanels = [
  {
    title: "Customer Inquiries",
    messages: [
      { id: 1, text: "Hi! What are your hours?", isAgent: false, timestamp: "2:14 PM" },
      { id: 2, text: "We're open 24/7! How can I help you today?", isAgent: true, timestamp: "2:14 PM" },
      { id: 3, text: "Perfect! I need to reschedule my appointment", isAgent: false, timestamp: "2:15 PM" },
      { id: 4, text: "I can help with that! Let me pull up your booking...", isAgent: true, timestamp: "2:15 PM" }
    ]
  },
  {
    title: "Smart Booking",
    messages: [
      { id: 1, text: "I'd like to book a consultation", isAgent: false, timestamp: "3:22 PM" },
      { id: 2, text: "Great! I have availability this week. What day works best?", isAgent: true, timestamp: "3:22 PM" },
      { id: 3, text: "Thursday afternoon if possible", isAgent: false, timestamp: "3:23 PM" },
      { id: 4, text: "Perfect! I have 2 PM or 4 PM available. Which do you prefer?", isAgent: true, timestamp: "3:23 PM" }
    ]
  },
  {
    title: "Lead Conversion",
    messages: [
      { id: 1, text: "Tell me about your pricing", isAgent: false, timestamp: "4:15 PM" },
      { id: 2, text: "I'd be happy to help! What type of service are you interested in?", isAgent: true, timestamp: "4:15 PM" },
      { id: 3, text: "Looking to scale our customer support", isAgent: false, timestamp: "4:16 PM" },
      { id: 4, text: "Excellent! Our Growth plan is perfect for that. Let me schedule a demo to show you exactly how it works.", isAgent: true, timestamp: "4:16 PM" }
    ]
  }
];

interface ScrollableChatDemoProps {
  theme?: "ember" | "aqua";
}

export function ScrollableChatDemo({ theme = "ember" }: ScrollableChatDemoProps) {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const agentBubbleClass = theme === "aqua" 
    ? "bg-gradient-to-r from-aqua to-aqua-glow text-background" 
    : "bg-gradient-ember text-white shadow-glow";

  // Handle reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsAutoScrolling(false);
    }
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentPanel((prev) => (prev + 1) % chatPanels.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Smooth scroll to current panel
  useEffect(() => {
    if (scrollContainerRef.current) {
      const panelWidth = scrollContainerRef.current.offsetWidth / 3;
      scrollContainerRef.current.scrollTo({
        left: currentPanel * panelWidth,
        behavior: 'smooth'
      });
    }
  }, [currentPanel]);

  const goToPrevious = () => {
    setIsAutoScrolling(false);
    setCurrentPanel((prev) => (prev - 1 + chatPanels.length) % chatPanels.length);
  };

  const goToNext = () => {
    setIsAutoScrolling(false);
    setCurrentPanel((prev) => (prev + 1) % chatPanels.length);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            theme === "aqua" ? "bg-gradient-to-r from-aqua to-aqua-glow shadow-aqua/50 shadow-lg" : "bg-gradient-ember shadow-ember/50 shadow-lg"
          }`}>
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-sora font-bold">Live AI Conversations</h3>
            <p className="text-sm text-muted-foreground">Real interactions, instant responses</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={goToPrevious}
            className="w-8 h-8 p-0 hover:bg-muted/50"
            aria-label="Previous conversation"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={goToNext}
            className="w-8 h-8 p-0 hover:bg-muted/50"
            aria-label="Next conversation"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Scrollable Chat Panels */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-card/30 shadow-premium border border-line/50">
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none"></div>
        
        <div 
          ref={scrollContainerRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentPanel * 33.333}%)`, width: `${chatPanels.length * 100}%` }}
        >
          {chatPanels.map((panel, panelIndex) => (
            <div key={panelIndex} className="flex-shrink-0 p-6" style={{ width: `${100 / chatPanels.length}%` }}>
              <div className="space-y-4">
                {/* Panel Header */}
                <div className="text-center border-b border-line/30 pb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                    theme === "aqua" ? "bg-aqua/10 text-aqua" : "bg-ember/10 text-ember"
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      theme === "aqua" ? "bg-aqua" : "bg-ember"
                    } animate-pulse`}></div>
                    <span>{panel.title}</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 h-64 overflow-y-auto">
                  {panel.messages.map((message, index) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.isAgent ? 'justify-start' : 'justify-end'} animate-fade-in`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-end space-x-2 max-w-[85%]">
                        {message.isAgent && (
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            theme === "aqua" ? "bg-gradient-to-r from-aqua to-aqua-glow" : "bg-gradient-ember"
                          }`}>
                            <Zap className="w-3 h-3 text-white" />
                          </div>
                        )}
                        
                        <div 
                          className={`
                            px-3 py-2 rounded-lg text-sm leading-relaxed
                            ${
                              message.isAgent
                                ? `${agentBubbleClass} rounded-bl-sm`
                                : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 rounded-br-sm border border-line/50'
                            }
                          `}
                        >
                          <p>{message.text}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {message.timestamp}
                          </p>
                        </div>

                        {!message.isAgent && (
                          <div className="w-6 h-6 bg-muted/80 rounded-full flex items-center justify-center flex-shrink-0 border border-line/50">
                            <span className="text-xs font-medium text-muted-foreground">U</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {chatPanels.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAutoScrolling(false);
              setCurrentPanel(i);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentPanel === i 
                ? (theme === "aqua" ? 'bg-aqua w-8 shadow-aqua/50 shadow-lg' : 'bg-ember w-8 shadow-ember/50 shadow-lg') 
                : 'bg-muted hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to ${chatPanels[i].title}`}
          />
        ))}
      </div>
    </div>
  );
}
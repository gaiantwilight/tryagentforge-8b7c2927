import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface ChatMessage {
  id: number;
  text: string;
  isAgent: boolean;
  timestamp: string;
}

const sampleMessages: ChatMessage[] = [
  { id: 1, text: "Hi! I'm interested in booking a consultation.", isAgent: false, timestamp: "2:14 PM" },
  { id: 2, text: "I'd be happy to help you schedule that! What type of service are you looking for?", isAgent: true, timestamp: "2:14 PM" },
  { id: 3, text: "I need help with digital marketing strategy", isAgent: false, timestamp: "2:15 PM" },
  { id: 4, text: "Perfect! I can connect you with our strategy team. What's your current monthly marketing budget?", isAgent: true, timestamp: "2:15 PM" },
  { id: 5, text: "Around $5,000 per month", isAgent: false, timestamp: "2:16 PM" },
  { id: 6, text: "Great! Based on your budget, I recommend our Growth package. Would you like me to schedule a call with Sarah, our strategy director?", isAgent: true, timestamp: "2:16 PM" },
  { id: 7, text: "Yes, that would be perfect!", isAgent: false, timestamp: "2:17 PM" },
  { id: 8, text: "Excellent! I've sent you a calendar link via SMS. The next available slot is Thursday at 2 PM. Does that work?", isAgent: true, timestamp: "2:17 PM" }
];

interface ChatShowcaseProps {
  messages?: ChatMessage[];
  theme?: "ember" | "aqua";
}

export function ChatShowcase({ messages = sampleMessages, theme = "ember" }: ChatShowcaseProps) {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const agentBubbleClass = theme === "aqua" 
    ? "bg-aqua text-background" 
    : "bg-gradient-ember text-white";

  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, messages.length]);

  // Update visible messages when currentIndex changes
  useEffect(() => {
    const newVisibleMessages = [];
    for (let i = 0; i < 4; i++) {
      const messageIndex = (currentIndex + i) % messages.length;
      newVisibleMessages.push(messages[messageIndex]);
    }
    setVisibleMessages(newVisibleMessages);
  }, [currentIndex, messages]);

  // Scroll to current message group
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollPosition = Math.floor(currentIndex / 4) * scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const goToNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-sora font-bold">Live Chat Demo</h3>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={goToPrevious}
            className="w-8 h-8 p-0"
            aria-label="Previous messages"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={goToNext}
            className="w-8 h-8 p-0"
            aria-label="Next messages"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-line bg-card/30 p-6">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-card/30 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-card/30 to-transparent z-10 pointer-events-none"></div>
        
        <div 
          ref={scrollContainerRef}
          className="space-y-4 h-80 overflow-hidden"
        >
          {visibleMessages.map((message, index) => (
            <div 
              key={`${message.id}-${currentIndex}`}
              className={`flex ${message.isAgent ? 'justify-start' : 'justify-end'} animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className={`
                  max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed
                  ${
                    message.isAgent
                      ? `${agentBubbleClass} ml-8 rounded-br-md`
                      : 'bg-muted text-foreground mr-8 rounded-bl-md'
                  }
                `}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-2 opacity-70`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: Math.ceil(messages.length / 4) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i * 4)}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / 4) === i 
                ? (theme === "aqua" ? 'bg-aqua' : 'bg-ember') 
                : 'bg-muted'
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';

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
  { id: 8, text: "Excellent! I've sent you a calendar link via SMS. The next available slot is Thursday at 2 PM. Does that work?", isAgent: true, timestamp: "2:17 PM" },
];

export const ChatShowcase = () => {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();

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

    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % sampleMessages.length;
        return nextIndex;
      });
    }, 3000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling]);

  // Update visible messages based on current index
  useEffect(() => {
    const messagesToShow = 4; // Show 4 messages at a time
    const start = currentIndex;
    const messages = [];
    
    for (let i = 0; i < messagesToShow; i++) {
      const index = (start + i) % sampleMessages.length;
      messages.push(sampleMessages[index]);
    }
    
    setVisibleMessages(messages);
  }, [currentIndex]);

  // Scroll to show current messages
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: currentIndex * 320, // Approximate width of message group
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev - 1 + sampleMessages.length) % sampleMessages.length);
  };

  const goToNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev + 1) % sampleMessages.length);
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
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={goToNext}
            className="w-8 h-8 p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient masks for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {visibleMessages.map((message) => (
            <div 
              key={`${message.id}-${currentIndex}`}
              className={`flex-shrink-0 snap-start ${message.isAgent ? 'justify-start' : 'justify-end'} flex`}
            >
              <div 
                className={`max-w-xs p-4 rounded-2xl ${
                  message.isAgent 
                    ? 'bg-primary text-white' 
                    : 'bg-muted text-muted-foreground'
                } shadow-card`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-2 ${
                  message.isAgent 
                    ? 'text-white/70' 
                    : 'text-muted-foreground/70'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: Math.ceil(sampleMessages.length / 2) }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAutoScrolling(false);
              setCurrentIndex(i * 2);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / 2) === i 
                ? 'bg-primary' 
                : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
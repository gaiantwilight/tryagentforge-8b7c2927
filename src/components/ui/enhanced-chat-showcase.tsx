import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Zap, MessageSquare, Send } from "lucide-react";
import { Button } from "./button";

interface ChatMessage {
  id: number;
  text: string;
  isAgent: boolean;
  timestamp: string;
  showTyping?: boolean;
}

const businessChatMessages: ChatMessage[] = [
  { id: 1, text: "Hi! I'm looking to scale my customer support team.", isAgent: false, timestamp: "2:14 PM" },
  { id: 2, text: "Perfect timing! Our AI agents can handle 80% of common inquiries instantly. What's your current support volume?", isAgent: true, timestamp: "2:14 PM" },
  { id: 3, text: "About 200 tickets per day, mostly booking questions and basic info", isAgent: false, timestamp: "2:15 PM" },
  { id: 4, text: "We can definitely help! Our Growth plan handles 3,000 conversations monthly. You'd see immediate relief on your team while improving response times. Want to see a quick demo?", isAgent: true, timestamp: "2:15 PM" },
  { id: 5, text: "Yes, absolutely! How quickly can we get started?", isAgent: false, timestamp: "2:16 PM" },
  { id: 6, text: "Most clients go live within 7-10 days! I'll send you a calendar link to book a personalized demo. Our team will show you exactly how it works with your specific use case.", isAgent: true, timestamp: "2:16 PM" },
  { id: 7, text: "That sounds perfect. Looking forward to it!", isAgent: false, timestamp: "2:17 PM" },
  { id: 8, text: "Excellent! 🚀 Just sent the link via SMS. You'll love how much time this saves your team. Any other questions before your demo?", isAgent: true, timestamp: "2:17 PM" }
];

interface ChatShowcaseProps {
  messages?: ChatMessage[];
  theme?: "ember" | "aqua";
}

export function ChatShowcase({ messages = businessChatMessages, theme = "ember" }: ChatShowcaseProps) {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [typingMessage, setTypingMessage] = useState<string>("");
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);

  const agentBubbleClass = theme === "aqua" 
    ? "bg-gradient-to-r from-aqua to-aqua-glow text-background" 
    : "bg-gradient-ember text-white";

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsAutoScrolling(false);
    }
  }, []);

  // Auto-scroll logic with typing simulation
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % messages.length;
      const nextMessage = messages[nextIndex];
      
      if (nextMessage.isAgent) {
        // Show typing indicator before agent message
        setShowTypingIndicator(true);
        setTypingMessage("");
        
        // Simulate typing
        setTimeout(() => {
          setShowTypingIndicator(false);
          setCurrentIndex(nextIndex);
        }, 1200);
      } else {
        setCurrentIndex(nextIndex);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, currentIndex, messages.length]);

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

  const handleResumeAutoScroll = () => {
    setIsAutoScrolling(true);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            theme === "aqua" ? "bg-gradient-to-r from-aqua to-aqua-glow" : "bg-gradient-ember"
          }`}>
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-sora font-bold">Live Chat Demo</h3>
            <p className="text-sm text-muted-foreground">See our AI in action</p>
          </div>
        </div>
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
          {!isAutoScrolling && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleResumeAutoScroll}
              className="text-xs px-2 h-8"
            >
              Auto
            </Button>
          )}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-background to-card/50 shadow-lg">
        {/* Header */}
        <div className="bg-card/80 backdrop-blur-sm border-b border-line p-4">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${
              theme === "aqua" ? "bg-aqua" : "bg-ember"
            } animate-pulse`}></div>
            <span className="font-medium text-sm">AgentForge Assistant</span>
            <span className="text-xs text-muted-foreground">• Online</span>
          </div>
        </div>

        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-16 bottom-16 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-16 bottom-16 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <div 
          ref={scrollContainerRef}
          className="space-y-4 h-80 overflow-hidden p-6"
        >
          {visibleMessages.map((message, index) => (
            <div 
              key={`${message.id}-${currentIndex}`}
              className={`flex ${message.isAgent ? 'justify-start' : 'justify-end'} animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-end space-x-2 max-w-[85%]">
                {message.isAgent && (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    theme === "aqua" ? "bg-gradient-to-r from-aqua to-aqua-glow" : "bg-gradient-ember"
                  }`}>
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div 
                  className={`
                    px-4 py-3 rounded-2xl text-sm leading-relaxed relative
                    ${
                      message.isAgent
                        ? `${agentBubbleClass} rounded-bl-md shadow-lg`
                        : 'bg-muted text-foreground rounded-br-md border border-line'
                    }
                  `}
                >
                  {message.isAgent && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 animate-pulse rounded-2xl"></div>
                  )}
                  <p className="relative z-10">{message.text}</p>
                  <p className={`text-xs mt-2 opacity-70 relative z-10`}>
                    {message.timestamp}
                  </p>
                </div>

                {!message.isAgent && (
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-muted-foreground">U</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {showTypingIndicator && (
            <div className="flex justify-start animate-fade-in">
              <div className="flex items-end space-x-2 max-w-[85%]">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  theme === "aqua" ? "bg-gradient-to-r from-aqua to-aqua-glow" : "bg-gradient-ember"
                }`}>
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className={`px-4 py-3 rounded-2xl rounded-bl-md ${agentBubbleClass}`}>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-card/80 backdrop-blur-sm border-t border-line p-4">
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-background border border-line rounded-lg px-3 py-2">
              <span className="text-muted-foreground text-sm">Type your message...</span>
            </div>
            <Button size="sm" className={theme === "aqua" ? "bg-aqua hover:bg-aqua-glow" : ""}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: Math.ceil(messages.length / 4) }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAutoScrolling(false);
              setCurrentIndex(i * 4);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / 4) === i 
                ? (theme === "aqua" ? 'bg-aqua w-8' : 'bg-ember w-8') 
                : 'bg-muted hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
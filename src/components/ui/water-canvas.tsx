import { useEffect, useRef } from "react";

interface WaterCanvasProps {
  className?: string;
}

export function WaterCanvas({ className = "" }: WaterCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Create water ripples
    const createRipples = () => {
      const rippleCount = Math.min(8, Math.floor(window.innerWidth / 150));
      
      for (let i = 0; i < rippleCount; i++) {
        const ripple = document.createElement("div");
        ripple.className = "water-ripple";
        
        // Random position
        ripple.style.left = Math.random() * 100 + "%";
        ripple.style.top = Math.random() * 100 + "%";
        
        // Random delay and duration
        const delay = Math.random() * 10 + "s";
        const duration = (Math.random() * 4 + 6) + "s";
        
        ripple.style.animationDelay = delay;
        ripple.style.animationDuration = duration;
        
        canvas.appendChild(ripple);
      }
    };

    createRipples();

    // Cleanup on unmount
    return () => {
      if (canvas) {
        canvas.innerHTML = "";
      }
    };
  }, []);

  return (
    <div 
      ref={canvasRef}
      className={`water-canvas ${className}`}
      aria-hidden="true"
    />
  );
}
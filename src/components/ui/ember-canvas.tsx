import { useEffect, useRef } from "react";

interface EmberCanvasProps {
  className?: string;
}

export function EmberCanvas({ className = "" }: EmberCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(12, Math.floor(window.innerWidth / 100));
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "ember-particle";
        
        // Random position
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        
        // Random delay
        particle.style.animationDelay = Math.random() * 8 + "s";
        
        canvas.appendChild(particle);
      }
    };

    createParticles();

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
      className={`ember-canvas ${className}`}
      aria-hidden="true"
    />
  );
}
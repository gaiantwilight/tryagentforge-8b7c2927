import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './button';

interface VideoHeroProps {
  videoSrc: string;
  posterSrc?: string;
  title?: string;
  className?: string;
}

export function VideoHero({ videoSrc, posterSrc, title = "Hero Video", className = "" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    // Check localStorage for sound preference
    const savedSoundPreference = localStorage.getItem('heroVideoSound');
    if (savedSoundPreference === 'enabled') {
      setSoundEnabled(true);
      setIsMuted(false);
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return; // Don't autoplay if user prefers reduced motion
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Start playing when visible
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                // Autoplay failed - this is expected in many browsers
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  const toggleSound = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      videoRef.current.muted = newMutedState;
      
      // Save preference to localStorage
      localStorage.setItem('heroVideoSound', newMutedState ? 'disabled' : 'enabled');
      setSoundEnabled(!newMutedState);
    }
  };

  return (
    <div className={`relative aspect-video rounded-2xl overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        poster={posterSrc}
        aria-label={title}
      >
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Sound toggle button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={toggleSound}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </Button>
      
      {/* Skip to content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to content
      </a>
    </div>
  );
}
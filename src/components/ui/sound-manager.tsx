import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface SoundManagerProps {
  children: React.ReactNode;
}

export const SoundManager = ({ children }: SoundManagerProps) => {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('agentforge-sound-enabled');
    return saved === null ? false : saved === 'true';
  });
  
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    localStorage.setItem('agentforge-sound-enabled', soundEnabled.toString());
  }, [soundEnabled]);

  // Initialize audio context on user interaction
  const initAudioContext = () => {
    if (!audioContextRef.current && soundEnabled) {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (error) {
        console.warn('Web Audio API not supported');
      }
    }
  };

  // Play subtle beep sound
  const playBeep = (frequency = 800, duration = 150) => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !soundEnabled) return;

    initAudioContext();
    
    if (!audioContextRef.current) return;

    try {
      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
      
      oscillator.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContextRef.current.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + duration / 1000);
      
      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + duration / 1000);
    } catch (error) {
      console.warn('Error playing sound:', error);
    }
  };

  // Provide sound context to children
  const contextValue = {
    playBeep,
    soundEnabled
  };

  useEffect(() => {
    // Make sound functions globally available
    (window as any).agentForgeSounds = contextValue;
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      // Play a test beep when enabling
      setTimeout(() => playBeep(600, 100), 100);
    }
  };

  return (
    <div>
      {children}
      
      {/* Sound toggle in footer */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleSound}
          className="flex items-center space-x-2 px-3 py-2 bg-card/80 backdrop-blur-sm border border-line rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
          title={`Sound: ${soundEnabled ? 'On' : 'Off'}`}
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
          <span>Sound: {soundEnabled ? 'On' : 'Off'}</span>
        </button>
      </div>
    </div>
  );
};
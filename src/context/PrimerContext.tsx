import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { PrimerData, ViewMode } from '../types';
import { PRIMERS } from '../data/primers';

interface PrimerContextValue {
  // State
  currentIndex: number;
  currentPrimer: PrimerData;
  viewMode: ViewMode;
  isTransitioning: boolean;
  
  // Actions
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  setViewMode: (mode: ViewMode) => void;
}

const PrimerContext = createContext<PrimerContextValue | null>(null);

/**
 * Hook to access Primer context
 */
export const usePrimer = (): PrimerContextValue => {
  const context = useContext(PrimerContext);
  if (!context) {
    throw new Error('usePrimer must be used within a PrimerProvider');
  }
  return context;
};

interface PrimerProviderProps {
  children: ReactNode;
  initialIndex?: number;
}

/**
 * Provider component for Primer state management
 */
export const PrimerProvider: React.FC<PrimerProviderProps> = ({ 
  children, 
  initialIndex = 0 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [viewMode, setViewMode] = useState<ViewMode>('immersive');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentPrimer = PRIMERS[currentIndex];

  // Apply CSS variables to root element when Primer changes
  useEffect(() => {
    const root = document.documentElement;
    const p = currentPrimer;

    // Palette
    root.style.setProperty('--color-background', p.palette.background);
    root.style.setProperty('--color-surface', p.palette.surface);
    root.style.setProperty('--color-text-main', p.palette.textMain);
    root.style.setProperty('--color-text-muted', p.palette.textMuted);
    root.style.setProperty('--color-primary', p.palette.primary);
    root.style.setProperty('--color-secondary', p.palette.secondary || p.palette.primary);
    root.style.setProperty('--color-accent', p.palette.accent || p.palette.primary);

    // Typography
    root.style.setProperty('--font-display', p.typography.displayFont);
    root.style.setProperty('--font-body', p.typography.bodyFont);
    if (p.typography.monoFont) {
      root.style.setProperty('--font-mono', p.typography.monoFont);
    }

    // CSS Rules
    root.style.setProperty('--radius', p.cssRules.borderRadius);
    root.style.setProperty('--shadow', p.cssRules.boxShadow);
    root.style.setProperty('--transition', p.cssRules.transition);

    // Set data attribute for primer-specific CSS
    root.setAttribute('data-primer', p.id);

  }, [currentPrimer]);

  // Navigation with transition
  const navigate = useCallback((newIndex: number) => {
    if (newIndex === currentIndex || isTransitioning) return;
    if (viewMode === 'anatomy') return; // No navigation in anatomy mode

    setIsTransitioning(true);
    
    // Short delay for fade out, then switch
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  }, [currentIndex, isTransitioning, viewMode]);

  const next = useCallback(() => {
    navigate((currentIndex + 1) % PRIMERS.length);
  }, [currentIndex, navigate]);

  const prev = useCallback(() => {
    navigate((currentIndex - 1 + PRIMERS.length) % PRIMERS.length);
  }, [currentIndex, navigate]);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < PRIMERS.length) {
      navigate(index);
    }
  }, [navigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setViewMode('immersive');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  // Scroll/wheel navigation (throttled)
  useEffect(() => {
    let lastScrollTime = 0;
    const THROTTLE_MS = 1000;

    const handleWheel = (e: WheelEvent) => {
      if (viewMode === 'anatomy') return;
      
      const now = Date.now();
      if (now - lastScrollTime < THROTTLE_MS) return;

      if (e.deltaY > 50) {
        next();
        lastScrollTime = now;
      } else if (e.deltaY < -50) {
        prev();
        lastScrollTime = now;
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [next, prev, viewMode]);

  const value: PrimerContextValue = {
    currentIndex,
    currentPrimer,
    viewMode,
    isTransitioning,
    next,
    prev,
    goTo,
    setViewMode,
  };

  return (
    <PrimerContext.Provider value={value}>
      {children}
    </PrimerContext.Provider>
  );
};

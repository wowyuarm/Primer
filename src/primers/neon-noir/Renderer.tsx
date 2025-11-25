import React from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * NEON-NOIR: The Light in Darkness
 * 
 * Philosophy: "In darkness, light creates guidance and mood."
 * Constraint: Light-to-dark ratio minimum 1:7. Dark dominates.
 * 
 * This renderer is cyberpunk noir: deep blacks, glowing neon,
 * and the promise of a digital future.
 */
export const RendererNeon: React.FC<RendererProps> = ({ primer: _primer }) => {
  return (
    <div 
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Ambient glow effect */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          backgroundColor: 'var(--color-primary)',
          top: '20%',
          right: '20%',
        }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          backgroundColor: 'var(--color-secondary)',
          bottom: '20%',
          left: '20%',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Neon Sign */}
        <div className="mb-12">
          <h1 
            className="text-7xl md:text-9xl font-bold mb-2"
            style={{ 
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
              textShadow: `
                0 0 10px var(--color-primary),
                0 0 20px var(--color-primary),
                0 0 40px var(--color-primary),
                0 0 80px var(--color-primary)
              `,
            }}
          >
            OPEN
          </h1>
          
          {/* Flickering element */}
          <span 
            className="text-2xl md:text-3xl tracking-[0.5em] uppercase"
            style={{ 
              fontFamily: 'var(--font-display)',
              color: 'var(--color-accent)',
              textShadow: `
                0 0 5px var(--color-accent),
                0 0 10px var(--color-accent)
              `,
              animation: 'flicker 3s infinite',
            }}
          >
            24/7
          </span>
        </div>

        {/* Subtitle */}
        <p 
          className="text-sm tracking-[0.3em] uppercase mb-12"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Welcome to the future
        </p>

        {/* Neon buttons */}
        <div className="flex gap-6 justify-center">
          <button 
            className="px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all"
            style={{ 
              backgroundColor: 'transparent',
              color: 'var(--color-primary)',
              border: '2px solid var(--color-primary)',
              boxShadow: `
                0 0 10px var(--color-primary),
                inset 0 0 10px rgba(0, 240, 255, 0.1)
              `,
              cursor: 'pointer',
            }}
          >
            Jack In
          </button>
          <button 
            className="px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all"
            style={{ 
              backgroundColor: 'transparent',
              color: 'var(--color-secondary)',
              border: '2px solid var(--color-secondary)',
              boxShadow: `
                0 0 10px var(--color-secondary),
                inset 0 0 10px rgba(255, 0, 255, 0.1)
              `,
              cursor: 'pointer',
            }}
          >
            Ghost
          </button>
        </div>
      </div>

      {/* Scan lines overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`,
        }}
      />

      {/* CSS for flicker animation */}
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          41% { opacity: 1; }
          42% { opacity: 0.8; }
          43% { opacity: 1; }
          45% { opacity: 0.3; }
          46% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

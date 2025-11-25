import React from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * ANDERSON-SYMMETRY: The Curated Nostalgia
 * 
 * Philosophy: "Curated nostalgia within a centered universe."
 * Constraint: Strict symmetry. All major components must align to the central axis.
 * 
 * This renderer creates the world of Wes Anderson: centered frames,
 * pastel tones, and a sense of precious, curated whimsy.
 */
export const RendererAnderson: React.FC<RendererProps> = ({ primer }) => {
  return (
    <div 
      className="w-full h-screen flex flex-col items-center justify-center p-8"
      style={{
        border: '12px solid var(--color-surface)',
        margin: '16px',
        borderRadius: '8px',
        outline: '1px solid var(--color-primary)',
        outlineOffset: '-6px',
        boxSizing: 'border-box',
        height: 'calc(100vh - 32px)',
        width: 'calc(100vw - 32px)',
      }}
    >
      <div className="text-center max-w-2xl">
        {/* Decorative bar - centered */}
        <div 
          className="w-24 h-1 mx-auto mb-8"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />
        
        {/* Main title - absolutely centered */}
        <h1 
          className="text-5xl md:text-6xl uppercase tracking-[0.15em] mb-4"
          style={{ 
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text-main)',
          }}
        >
          Grand Budapest
        </h1>
        
        {/* Subtitle - italic, serif */}
        <p 
          className="text-xl md:text-2xl italic mb-12"
          style={{ 
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-muted)',
          }}
        >
          "Rudeness is merely the expression of fear."
        </p>

        {/* Symmetric button row */}
        <div className="flex justify-center gap-8 items-center">
          <button 
            className="px-8 py-2 border uppercase text-xs tracking-widest transition-colors"
            style={{ 
              fontFamily: 'var(--font-display)',
              borderColor: 'var(--color-text-main)',
              color: 'var(--color-text-main)',
              backgroundColor: 'transparent',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Lobby
          </button>
          
          {/* Center dot */}
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
          
          <button 
            className="px-8 py-2 uppercase text-xs tracking-widest transition-transform hover:-translate-y-0.5"
            style={{ 
              fontFamily: 'var(--font-display)',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              borderRadius: '4px',
              border: 'none',
              boxShadow: '0 4px 12px rgba(92, 75, 81, 0.2)',
              cursor: 'pointer',
            }}
          >
            Concierge
          </button>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center items-center gap-4">
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--color-text-muted)' }} />
          <span className="text-xs tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
            ✦ EST. 1932 ✦
          </span>
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--color-text-muted)' }} />
        </div>
      </div>
    </div>
  );
};

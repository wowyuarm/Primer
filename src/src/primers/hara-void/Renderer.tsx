import React from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * HARA-VOID: The Power of Emptiness
 * 
 * Signature Scene: Disappearing object in radial void
 * Constraint: No brand colors. Expression through absence.
 */
export const RendererHara: React.FC<RendererProps> = ({ primer }) => {
  return (
    <div 
      className="w-full h-screen flex items-center justify-center relative"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Radial fade — the void breathing */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, transparent 0%, var(--color-background) 70%)`,
        }}
      />

      {/* The Disappearing Object */}
      <div className="relative z-10 text-center">
        <div 
          className="w-24 h-32 mx-auto mb-12 opacity-50 transition-opacity duration-1000 hover:opacity-20"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-text-muted)',
          }}
        />
        
        {/* Whispered text */}
        <span 
          className="block text-6xl tracking-[0.3em] uppercase opacity-20 mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 200 }}
        >
          空
        </span>
        
        <p className="text-xs tracking-[0.2em] uppercase opacity-20">
          Emptiness
        </p>
      </div>
    </div>
  );
};

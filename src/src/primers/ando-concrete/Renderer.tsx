import React from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * ANDO-CONCRETE: The Poetry of Light and Shadow
 * 
 * Signature Scene: Church of Light cross
 * Constraint: Surfaces strictly grayscale. Color only for text/interaction.
 */
export const RendererAndo: React.FC<RendererProps> = ({ primer }) => {
  return (
    <div 
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Concrete Wall with Light Cross */}
      <div className="relative">
        <div 
          className="w-72 h-52 md:w-96 md:h-72 relative overflow-hidden"
          style={{
            backgroundColor: 'var(--color-surface)',
            boxShadow: 'inset 0 0 80px rgba(0,0,0,0.2)',
          }}
        >
          {/* Vertical Light Slit */}
          <div 
            className="absolute left-1/2 top-0 w-1.5 h-full -translate-x-1/2"
            style={{
              backgroundColor: '#FFFFF8',
              boxShadow: '0 0 60px 15px rgba(255,255,248,0.8)',
            }}
          />
          {/* Horizontal Light Slit */}
          <div 
            className="absolute top-1/2 left-1/4 w-1/2 h-1.5 -translate-y-1/2"
            style={{
              backgroundColor: '#FFFFF8',
              boxShadow: '0 0 60px 15px rgba(255,255,248,0.8)',
            }}
          />
        </div>
        
        {/* Caption */}
        <p 
          className="text-center text-xs uppercase tracking-widest mt-6 opacity-30"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Church of Light · Ibaraki · 1989
        </p>
      </div>
    </div>
  );
};

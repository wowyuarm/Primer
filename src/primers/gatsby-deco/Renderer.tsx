import React from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * GATSBY-DECO: The Geometry of Glamour
 * 
 * Philosophy: "Geometric precision, golden luxury, ritual and elegance."
 * Constraint: Gold for decoration only. Never as background or primary action.
 * 
 * This renderer evokes the Jazz Age: deep blues, golden accents,
 * symmetrical arches, and ceremonial elegance.
 */
export const RendererGatsby: React.FC<RendererProps> = ({ primer: _primer }) => {
  return (
    <div 
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Radial sunburst pattern (subtle) */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: `repeating-conic-gradient(
            from 0deg,
            var(--color-primary) 0deg 2deg,
            transparent 2deg 15deg
          )`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg">
        {/* Art Deco Arch */}
        <div 
          className="mx-auto mb-8 flex flex-col items-center justify-end pb-8 relative overflow-hidden"
          style={{
            width: '200px',
            height: '280px',
            border: '2px solid var(--color-primary)',
            borderRadius: '100px 100px 0 0',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          {/* Inner arch */}
          <div 
            className="absolute opacity-40"
            style={{
              width: '170px',
              height: '170px',
              border: '2px solid var(--color-primary)',
              borderRadius: '85px 85px 0 0',
              borderBottom: 'none',
              top: '10px',
            }}
          />
          
          {/* Decorative lines */}
          <div 
            className="absolute opacity-30"
            style={{
              width: '60%',
              height: '50px',
              top: '40px',
              background: `repeating-linear-gradient(
                to right,
                var(--color-primary) 0,
                var(--color-primary) 2px,
                transparent 2px,
                transparent 12px
              )`,
            }}
          />
          
          {/* Year */}
          <span 
            className="text-3xl tracking-[0.3em]"
            style={{ 
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
            }}
          >
            1925
          </span>
        </div>

        {/* Title */}
        <h1 
          className="text-5xl md:text-6xl mb-4"
          style={{ 
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text-main)',
          }}
        >
          Gatsby
        </h1>
        
        <p 
          className="text-lg italic mb-8"
          style={{ color: 'var(--color-text-muted)' }}
        >
          "So we beat on, boats against the current..."
        </p>

        {/* Diamond decorators + Button */}
        <div className="flex items-center justify-center gap-4">
          <span style={{ color: 'var(--color-primary)' }}>◆</span>
          <button 
            className="px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-background)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Enter the Party
          </button>
          <span style={{ color: 'var(--color-primary)' }}>◆</span>
        </div>
      </div>

      {/* Corner decorations */}
      <div 
        className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2"
        style={{ borderColor: 'var(--color-primary)' }}
      />
      <div 
        className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2"
        style={{ borderColor: 'var(--color-primary)' }}
      />
      <div 
        className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2"
        style={{ borderColor: 'var(--color-primary)' }}
      />
      <div 
        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2"
        style={{ borderColor: 'var(--color-primary)' }}
      />
    </div>
  );
};

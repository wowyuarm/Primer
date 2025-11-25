import React from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * MONDRIAN-NEOPLAST: The Abstraction of Essence
 * 
 * Philosophy: "The world needs only vertical, horizontal, and primary colors."
 * Constraint: Primary colors only. No curves, no diagonals.
 * 
 * This renderer is a living Mondrian composition: asymmetric grids,
 * primary color blocks, and pure orthogonal relationships.
 */
export const RendererMondrian: React.FC<RendererProps> = ({ primer: _primer }) => {
  return (
    <div 
      className="w-full h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Mondrian Grid Composition */}
      <div 
        className="w-full max-w-2xl aspect-[4/3] grid p-1 gap-1"
        style={{
          backgroundColor: '#000000',
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: '1fr 2fr 1fr',
        }}
      >
        {/* Cell 1: Large Red */}
        <div 
          className="flex items-end p-4"
          style={{ 
            backgroundColor: 'var(--color-primary)', // Red
            gridColumn: '1',
            gridRow: '1 / 3',
          }}
        >
          <span 
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: '#FFFFFF' }}
          >
            Primary
          </span>
        </div>
        
        {/* Cell 2: White */}
        <div 
          style={{ 
            backgroundColor: 'var(--color-background)',
            gridColumn: '2',
            gridRow: '1',
          }}
        />
        
        {/* Cell 3: Small Yellow */}
        <div 
          style={{ 
            backgroundColor: 'var(--color-accent)', // Yellow
            gridColumn: '3',
            gridRow: '1',
          }}
        />
        
        {/* Cell 4: Large White - Main content area */}
        <div 
          className="flex flex-col justify-center items-center p-8"
          style={{ 
            backgroundColor: 'var(--color-background)',
            gridColumn: '2 / 4',
            gridRow: '2',
          }}
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            De Stijl
          </h1>
          <p 
            className="text-sm text-center mb-6 max-w-xs"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Reduction to the essential. Only primaries, only orthogonals.
          </p>
          <button 
            className="px-6 py-2 text-xs font-bold uppercase tracking-widest"
            style={{ 
              backgroundColor: '#000000',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Compose
          </button>
        </div>
        
        {/* Cell 5: Bottom White */}
        <div 
          style={{ 
            backgroundColor: 'var(--color-background)',
            gridColumn: '1 / 3',
            gridRow: '3',
          }}
        />
        
        {/* Cell 6: Blue */}
        <div 
          className="flex items-center justify-center"
          style={{ 
            backgroundColor: 'var(--color-secondary)', // Blue
            gridColumn: '3',
            gridRow: '3',
          }}
        >
          <span 
            className="text-xs font-bold"
            style={{ color: '#FFFFFF' }}
          >
            1920
          </span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * MEMPHIS-81: The Rebellion Against Good Taste
 * 
 * Philosophy: "A radical, humorous subversion of 'good taste'."
 * Constraint: Anti-alignment. Elements should float, overlap, and defy the grid.
 * 
 * This renderer embodies Memphis Group chaos: clashing colors,
 * floating shapes, intentional disorder, and playful defiance.
 */
export const RendererMemphis: React.FC<RendererProps> = ({ primer }) => {
  return (
    <div 
      className="w-full h-screen relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Floating Shape 1: Circle */}
      <div 
        className="absolute top-20 left-20 w-32 h-32 rounded-full border-4"
        style={{
          borderColor: 'var(--color-accent)',
          borderTopColor: 'transparent',
          transform: 'rotate(-45deg)',
        }}
      />

      {/* Floating Shape 2: Squiggle line */}
      <div 
        className="absolute bottom-32 left-16 w-40 h-2"
        style={{
          backgroundColor: 'var(--color-secondary)',
          transform: 'rotate(15deg)',
        }}
      />

      {/* Floating Shape 3: Triangle */}
      <div 
        className="absolute bottom-20 right-32"
        style={{
          width: 0,
          height: 0,
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderBottom: '86px solid var(--color-primary)',
          transform: 'rotate(12deg)',
        }}
      />

      {/* Floating Shape 4: Small squares */}
      <div 
        className="absolute top-40 right-20 w-8 h-8"
        style={{ backgroundColor: 'var(--color-accent)', transform: 'rotate(25deg)' }}
      />
      <div 
        className="absolute top-52 right-32 w-6 h-6"
        style={{ backgroundColor: 'var(--color-secondary)', transform: 'rotate(-15deg)' }}
      />

      {/* Main Card - Tilted, breaking the grid */}
      <div 
        className="relative z-10 p-8 border-4 max-w-md"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#000000',
          boxShadow: '12px 12px 0px var(--color-primary)',
          transform: 'rotate(-3deg)',
        }}
      >
        <h1 
          className="text-5xl font-black mb-4"
          style={{ 
            fontFamily: 'var(--font-display)',
            color: '#000000',
          }}
        >
          BAD
          <br />
          <span style={{ color: 'var(--color-accent)' }}>TASTE</span>
        </h1>
        
        <p 
          className="text-lg font-bold leading-tight mb-8 inline-block px-2"
          style={{ 
            fontFamily: 'var(--font-body)',
            backgroundColor: 'var(--color-background)',
          }}
        >
          Functionality is boring. Let's dance.
        </p>
        
        {/* Chaotic button row */}
        <div className="flex gap-4">
          <button 
            className="flex-1 py-4 font-bold uppercase transition-transform hover:scale-110 hover:rotate-2"
            style={{ 
              backgroundColor: '#000000',
              color: '#FFFFFF',
              fontFamily: 'monospace',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Accept
          </button>
          <button 
            className="flex-1 py-4 font-bold uppercase rounded-full transition-transform hover:scale-110 hover:-rotate-2"
            style={{ 
              backgroundColor: 'var(--color-accent)',
              color: '#FFFFFF',
              fontFamily: 'monospace',
              border: '4px solid #000000',
              cursor: 'pointer',
            }}
          >
            Reject
          </button>
        </div>
      </div>

      {/* More chaos: zigzag line */}
      <svg 
        className="absolute top-1/4 right-1/4 w-32 h-16 opacity-40"
        viewBox="0 0 100 30"
      >
        <polyline 
          points="0,15 20,5 40,25 60,5 80,25 100,15" 
          fill="none" 
          stroke="var(--color-secondary)" 
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

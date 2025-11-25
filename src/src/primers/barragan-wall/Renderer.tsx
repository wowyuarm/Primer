import React from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * BARRAGÁN-WALL: The Emotion of Color
 * 
 * Signature Scene: 3D color walls
 * Constraint: No gradients. Color blocks with hard edges only.
 */
export const RendererBarragan: React.FC<RendererProps> = ({ primer }) => {
  return (
    <div 
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Color Walls - 3D perspective */}
      <div className="relative w-80 h-60 md:w-96 md:h-72 flex gap-0" style={{ perspective: '800px' }}>
        {/* Wall 1: Background */}
        <div 
          className="flex-[1.2] h-full"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            transform: 'rotateY(2deg)',
            transformOrigin: 'right center',
          }}
        />
        
        {/* Wall 2: Primary - the protagonist */}
        <div 
          className="flex-[0.5] h-full z-10"
          style={{ 
            backgroundColor: 'var(--color-primary)',
            boxShadow: '-8px 0 24px rgba(0,0,0,0.15)',
          }}
        />
        
        {/* Wall 3: Background */}
        <div 
          className="flex-1 h-full"
          style={{ 
            backgroundColor: 'var(--color-background)',
            transform: 'rotateY(-2deg)',
            transformOrigin: 'left center',
            border: '1px solid var(--color-text-muted)',
          }}
        />
      </div>
    </div>
  );
};

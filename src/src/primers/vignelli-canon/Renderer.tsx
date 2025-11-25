import React from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * VIGNELLI-CANON: The Discipline of Information
 * 
 * Signature Scene: Metro wayfinding map
 * Constraint: Single typeface family only
 */
export const RendererVignelli: React.FC<RendererProps> = ({ primer }) => {
  return (
    <div 
      className="w-full h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="w-full max-w-2xl">
        {/* Metro Map */}
        <div className="relative h-64 mb-12">
          {/* Horizontal Line (Red) */}
          <div 
            className="absolute h-2 left-[10%] right-[20%]"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
          
          {/* Vertical Line (Black) */}
          <div 
            className="absolute w-2"
            style={{ 
              backgroundColor: 'var(--color-text-main)',
              left: '35%',
              top: '20%',
              height: '50%',
            }}
          />

          {/* Stations */}
          <Station label="A" top="50%" left="10%" />
          <Station label="B" top="50%" left="35%" />
          <Station label="C" top="20%" left="35%" />
          <Station label="D" top="50%" left="70%" />

          {/* Route Label */}
          <div 
            className="absolute text-2xl font-bold tracking-wider"
            style={{ 
              fontFamily: 'var(--font-display)',
              bottom: '15%',
              right: '20%',
              color: 'var(--color-text-main)',
            }}
          >
            14th St
          </div>
        </div>

        {/* Info Bar */}
        <div 
          className="border-t-4 pt-8"
          style={{ borderColor: 'var(--color-text-main)' }}
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <InfoBlock title="System" value="24" subtext="Lines" />
            <InfoBlock title="Stations" value="472" subtext="Active" />
            <InfoBlock title="Year" value="1972" subtext="Designed" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Station: React.FC<{ label: string; top: string; left: string }> = ({ label, top, left }) => (
  <div 
    className="absolute w-8 h-8 rounded-full border-4 flex items-center justify-center text-xs font-bold"
    style={{ 
      top,
      left,
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'var(--color-background)',
      borderColor: 'var(--color-text-main)',
    }}
  >
    {label}
  </div>
);

const InfoBlock: React.FC<{ title: string; value: string; subtext: string }> = ({ title, value, subtext }) => (
  <div>
    <div className="text-xs uppercase tracking-widest mb-1 opacity-50">{title}</div>
    <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{value}</div>
    <div className="text-xs opacity-50">{subtext}</div>
  </div>
);

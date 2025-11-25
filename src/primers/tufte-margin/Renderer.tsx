import React from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * TUFTE-MARGIN: The Data Speaks
 * 
 * Philosophy: "Above all else, show the data."
 * Constraint: No large background colors. Content only, minimal chrome.
 * 
 * This renderer embodies Tufte's principles: high data density,
 * sidenotes, sparklines, and invisible interface.
 */
export const RendererTufte: React.FC<RendererProps> = ({ primer: _primer }) => {
  return (
    <div 
      className="w-full min-h-screen flex justify-center py-16 px-8"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="w-full max-w-4xl grid grid-cols-12 gap-4">
        {/* Main column */}
        <div className="col-span-12 md:col-span-8">
          <article>
            <h1 
              className="text-3xl md:text-4xl mb-8 leading-tight"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-main)',
              }}
            >
              The Visual Display of Quantitative Information
            </h1>
            
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--color-text-main)',
              }}
            >
              Excellence in statistical graphics consists of complex ideas 
              communicated with clarity, precision, and efficiency. Graphical 
              displays should:
            </p>
            
            <ul className="mb-8 space-y-2" style={{ color: 'var(--color-text-main)' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                <span>Show the data</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                <span>Induce the viewer to think about substance</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                <span>Avoid distorting what the data have to say</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                <span>Present many numbers in a small space</span>
              </li>
            </ul>

            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--color-text-main)',
              }}
            >
              The representation of numbers, as physically measured on the 
              surface of the graphic itself, should be directly proportional 
              to the numerical quantities represented.
              <sup 
                className="text-xs ml-0.5"
                style={{ color: 'var(--color-primary)' }}
              >
                1
              </sup>
            </p>

            {/* Sparkline inline */}
            <div className="flex items-center gap-4 my-8 py-4 border-y" style={{ borderColor: 'var(--color-text-muted)' }}>
              <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Data-ink ratio trend:
              </span>
              <svg viewBox="0 0 100 30" className="w-24 h-8">
                <polyline 
                  points="0,25 15,20 30,22 45,15 60,18 75,10 90,12 100,5" 
                  fill="none" 
                  stroke="var(--color-primary)" 
                  strokeWidth="2"
                />
              </svg>
              <span className="text-sm font-bold">↑ 47%</span>
            </div>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--color-text-main)',
              }}
            >
              Clear, detailed, and thorough labeling should be used to defeat 
              graphical distortion and ambiguity. Write out explanations of 
              the data on the graphic itself. Label important events in the data.
            </p>
          </article>
        </div>

        {/* Margin column (sidenotes) */}
        <div className="col-span-12 md:col-span-4 md:pl-8">
          <div 
            className="sticky top-16 space-y-8 text-sm"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {/* Sidenote 1 */}
            <div className="border-l-2 pl-4" style={{ borderColor: 'var(--color-primary)' }}>
              <span className="font-bold" style={{ color: 'var(--color-primary)' }}>1</span>
              <p className="mt-1">
                Tufte, Edward. <em>The Visual Display of Quantitative Information</em>, 
                1983. Graphics Press.
              </p>
            </div>

            {/* Mini data visualization */}
            <div className="p-4 border" style={{ borderColor: 'var(--color-text-muted)' }}>
              <p className="text-xs uppercase tracking-widest mb-3">
                Data-Ink Ratio
              </p>
              <div className="flex items-end gap-1 h-16">
                {[0.3, 0.5, 0.4, 0.7, 0.6, 0.8, 0.9].map((h, i) => (
                  <div 
                    key={i}
                    className="flex-1"
                    style={{ 
                      height: `${h * 100}%`,
                      backgroundColor: i === 6 ? 'var(--color-primary)' : 'var(--color-text-muted)',
                      opacity: i === 6 ? 1 : 0.3,
                    }}
                  />
                ))}
              </div>
              <p className="text-xs mt-2 text-center">1983–2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

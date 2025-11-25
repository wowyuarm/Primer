import React from 'react';
import type { PrimerData } from '../types';

interface AnatomyOverlayProps {
  primer: PrimerData;
  onClose: () => void;
}

/**
 * Anatomy Overlay: The dissection view of a Primer
 * Left: Philosophy and narrative
 * Right: Visual breakdown of palette, typography, spacing
 */
export const AnatomyOverlay: React.FC<AnatomyOverlayProps> = ({ primer, onClose }) => {
  
  const downloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(primer, null, 2));
    const anchor = document.createElement('a');
    anchor.setAttribute("href", dataStr);
    anchor.setAttribute("download", `${primer.id}.json`);
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const copyCSS = async () => {
    const cssContent = `
:root {
  /* ${primer.name} - ${primer.philosophy} */
  
  /* Palette */
  --color-background: ${primer.palette.background};
  --color-surface: ${primer.palette.surface};
  --color-text-main: ${primer.palette.textMain};
  --color-text-muted: ${primer.palette.textMuted};
  --color-primary: ${primer.palette.primary};
  --color-secondary: ${primer.palette.secondary || primer.palette.primary};
  --color-accent: ${primer.palette.accent || primer.palette.primary};
  
  /* Typography */
  --font-display: ${primer.typography.displayFont};
  --font-body: ${primer.typography.bodyFont};
  
  /* Rules */
  --radius: ${primer.cssRules.borderRadius};
  --shadow: ${primer.cssRules.boxShadow};
  --transition: ${primer.cssRules.transition};
}
    `.trim();
    
    await navigator.clipboard.writeText(cssContent);
    alert('CSS Variables copied to clipboard.');
  };

  // Extract palette entries for display
  const paletteEntries = Object.entries(primer.palette).filter(
    ([key]) => !['textColor'].includes(key)
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 backdrop-blur-xl animate-fade-in"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-6xl max-h-[90vh] shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Left Column: Philosophy */}
        <div className="w-full md:w-1/3 bg-gray-50 p-8 md:p-12 overflow-y-auto border-r border-gray-100 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 left-6 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition-colors text-gray-600"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="mt-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Narrative Core
            </h2>
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              {primer.name}
            </h1>
            
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700 mb-8">
              {primer.philosophy}
            </p>
            
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Description
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {primer.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Inspiration
              </h3>
              <p className="text-sm text-gray-600">
                {primer.inspiration}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Signature Constraint
              </h3>
              <div className="p-4 bg-red-50 border-l-2 border-red-500 text-red-900 text-sm font-medium">
                {primer.constraint}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {primer.keywords.map((keyword, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Anatomy */}
        <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto bg-white">
          
          {/* Section: Palette */}
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
              Palette
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {paletteEntries.map(([key, value]) => (
                <div key={key} className="group">
                  <div 
                    className="h-20 w-full rounded shadow-sm border border-black/5 mb-2"
                    style={{ backgroundColor: value as string }}
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-gray-500">{key}</span>
                    <span className="text-xs font-bold text-gray-900">{value as string}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Typography */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Display Font
              </h3>
              <div 
                className="text-3xl border-b border-gray-100 pb-2 mb-2" 
                style={{ fontFamily: primer.typography.displayFont }}
              >
                Aa Bb Cc
              </div>
              <p className="text-xs text-gray-500 font-mono break-all">
                {primer.typography.displayFont}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Body Font
              </h3>
              <div 
                className="text-lg border-b border-gray-100 pb-2 mb-2" 
                style={{ fontFamily: primer.typography.bodyFont }}
              >
                The quick brown fox jumps over the lazy dog.
              </div>
              <p className="text-xs text-gray-500 font-mono break-all">
                {primer.typography.bodyFont}
              </p>
            </div>
          </div>

          {/* Section: Scale & Spacing */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Type Scale
              </h3>
              <p className="text-sm text-gray-700">{primer.typography.scaleRatio}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Spacing System
              </h3>
              <p className="text-sm text-gray-700">{primer.spacing.system}</p>
              <p className="text-xs text-gray-500 mt-1">Base unit: {primer.spacing.baseUnit}px</p>
            </div>
          </div>

          {/* Section: CSS Rules */}
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              CSS Rules
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-500 mb-1">border-radius</p>
                <p className="text-sm font-mono">{primer.cssRules.borderRadius}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-500 mb-1">transition</p>
                <p className="text-sm font-mono break-all">{primer.cssRules.transition}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-500 mb-1">box-shadow</p>
                <p className="text-sm font-mono break-all">{primer.cssRules.boxShadow}</p>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8">
            <button 
              onClick={downloadJSON}
              className="flex-1 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Download JSON
            </button>
            <button 
              onClick={copyCSS}
              className="flex-1 py-4 border border-black text-black font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
            >
              Copy CSS Variables
            </button>
            <div className="flex-1 py-4 bg-gray-100 text-gray-500 font-mono text-sm text-center border border-transparent flex items-center justify-center">
              npx primer-cli add {primer.id}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

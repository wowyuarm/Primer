import React from 'react';
import { usePrimer } from '../context/PrimerContext';
import { PRIMERS } from '../data/primers';

/**
 * Navigation Component
 * 
 * - Dots at bottom using theme PRIMARY color for active
 * - Arrow buttons on sides
 * - Dissect trigger at bottom center
 */
export const Navigation: React.FC = () => {
  const { currentIndex, goTo, next, prev, setViewMode, currentPrimer } = usePrimer();

  return (
    <>
      {/* Side Arrow: Previous */}
      <button
        onClick={prev}
        className="
          fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-30
          w-12 h-20 flex items-center justify-center
          opacity-40 hover:opacity-100
          transition-all duration-300
          hover:bg-[var(--color-text-main)] hover:text-[var(--color-background)]
        "
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-text-muted)',
          color: 'var(--color-text-main)',
        }}
        aria-label="Previous Primer"
      >
        <span className="text-2xl">←</span>
      </button>

      {/* Side Arrow: Next */}
      <button
        onClick={next}
        className="
          fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-30
          w-12 h-20 flex items-center justify-center
          opacity-40 hover:opacity-100
          transition-all duration-300
          hover:bg-[var(--color-text-main)] hover:text-[var(--color-background)]
        "
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-text-muted)',
          color: 'var(--color-text-main)',
        }}
        aria-label="Next Primer"
      >
        <span className="text-2xl">→</span>
      </button>

      {/* Bottom: Navigation Dots */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4">
        {/* Dissect Trigger */}
        <button
          onClick={() => setViewMode('anatomy')}
          className="
            flex items-center gap-2 
            px-5 py-3
            text-sm font-medium
            opacity-60 hover:opacity-100
            transition-all duration-300
            hover:-translate-y-0.5
          "
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-text-muted)',
            color: 'var(--color-text-main)',
            borderRadius: 'var(--radius, 0)',
          }}
          aria-label={`Dissect ${currentPrimer.name}`}
        >
          <span className="text-lg font-bold">+</span>
          <span className="hidden sm:inline">Dissect</span>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {PRIMERS.map((primer, idx) => (
            <button
              key={primer.id}
              onClick={() => goTo(idx)}
              className="
                w-3 h-3
                transition-all duration-300
              "
              style={{
                background: idx === currentIndex 
                  ? 'var(--color-primary)' 
                  : 'var(--color-text-muted)',
                opacity: idx === currentIndex ? 1 : 0.3,
                transform: idx === currentIndex ? 'scale(1.2)' : 'scale(1)',
              }}
              aria-label={`Go to ${primer.name}`}
              aria-current={idx === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

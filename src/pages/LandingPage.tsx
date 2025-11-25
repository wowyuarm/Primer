import React from 'react';
import { PRIMERS } from '../data/primers';

interface LandingPageProps {
  onEnter: (randomIndex: number) => void;
}

/**
 * Landing Page — The Manifesto
 * 
 * Pure typography, no theme colors. Black and white only.
 * This is the ceremonial entry into the Primer universe.
 */
export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const handleExplore = () => {
    const randomIndex = Math.floor(Math.random() * PRIMERS.length);
    onEnter(randomIndex);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] text-[#1A1A1A] p-6 md:p-12">
      <article className="max-w-xl text-center">
        
        {/* Header */}
        <header className="mb-16">
          <h1 
            className="text-6xl md:text-7xl font-semibold tracking-tight leading-none mb-3"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Primer
          </h1>
          <p className="text-sm font-normal tracking-[0.2em] uppercase opacity-50">
            Beyond the Gradient
          </p>
        </header>

        {/* Statement */}
        <section className="mb-16">
          <p className="text-lg md:text-xl leading-relaxed opacity-80">
            The blue-purple gradient has become<br/>
            synonymous with mediocrity.<br/>
            Primer is a silent protest against aesthetic inertia.
          </p>
        </section>

        {/* Principles */}
        <section className="mb-20 text-left">
          <Principle 
            number="01" 
            title="Narrative Core" 
            description="Where does the soul come from"
          />
          <Principle 
            number="02" 
            title="Systemic Rules" 
            description="How structure supports philosophy"
          />
          <Principle 
            number="03" 
            title="Signature Constraint" 
            description="Defined by what it refuses to do"
            isLast
          />
        </section>

        {/* CTA */}
        <section className="mb-20">
          <button
            onClick={handleExplore}
            className="
              inline-flex items-center gap-3 
              px-10 py-4 
              bg-[#1A1A1A] text-[#FAFAFA]
              text-base font-medium
              transition-all duration-300
              hover:gap-5 hover:bg-black
              group
            "
          >
            <span>Explore</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
          <p className="mt-4 text-xs opacity-40">
            Enter a random design universe
          </p>
        </section>

        {/* Footer */}
        <footer className="opacity-30 text-sm flex flex-col items-center gap-2">
          <p>Code with Intention.</p>
          <a 
            href="#about" 
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            About
          </a>
        </footer>
      </article>
    </div>
  );
};

/**
 * Principle component — numbered item with title and description
 */
const Principle: React.FC<{
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}> = ({ number, title, description, isLast = false }) => (
  <div 
    className={`
      flex items-baseline gap-5 
      pb-6 
      ${!isLast ? 'border-b border-black/10 mb-6' : ''}
    `}
  >
    <span className="text-xs font-medium opacity-40 tabular-nums">
      {number}
    </span>
    <div className="flex flex-col gap-1">
      <strong className="text-base font-semibold">{title}</strong>
      <span className="text-sm opacity-60">{description}</span>
    </div>
  </div>
);

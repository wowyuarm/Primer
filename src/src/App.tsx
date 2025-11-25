import React, { useState } from 'react';
import { PrimerProvider, usePrimer } from './context/PrimerContext';
import { PrimerRenderer } from './primers/PrimerRenderer';
import { AnatomyOverlay } from './components/AnatomyOverlay';
import { Navigation } from './components/Navigation';
import { LandingPage } from './pages/LandingPage';

type AppView = 'landing' | 'explore';

/**
 * Main application shell
 */
const AppContent: React.FC<{ onGoHome: () => void }> = ({ onGoHome }) => {
  const { currentPrimer, currentIndex, viewMode, setViewMode, isTransitioning } = usePrimer();

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden transition-colors duration-700 ease-in-out"
      style={{ 
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text-main)',
      }}
    >
      {/* Header: Minimal, shows primer identity */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-40 flex justify-between items-start pointer-events-none">
        <div className="flex items-baseline gap-3 pointer-events-auto">
          <span 
            className="text-sm font-mono opacity-50"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <h1 
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {currentPrimer.name}
          </h1>
        </div>
        <button 
          onClick={onGoHome}
          className="text-sm pointer-events-auto opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span>←</span>
          <span>Home</span>
        </button>
      </header>

      {/* Main Canvas: The Primer's Universe */}
      <main 
        className={`
          w-full min-h-screen flex items-center justify-center
          transition-opacity duration-300
          ${isTransitioning ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <PrimerRenderer primer={currentPrimer} />
      </main>

      {/* Navigation: Arrows + Dots + Dissect */}
      <Navigation />

      {/* Anatomy Overlay */}
      {viewMode === 'anatomy' && (
        <AnatomyOverlay 
          primer={currentPrimer} 
          onClose={() => setViewMode('immersive')} 
        />
      )}
    </div>
  );
};

/**
 * App wrapper with Landing + Explore flow
 */
const App: React.FC = () => {
  const [view, setView] = useState<AppView>('landing');
  const [initialIndex, setInitialIndex] = useState(0);

  const handleEnterExplore = (randomIndex: number) => {
    setInitialIndex(randomIndex);
    setView('explore');
  };

  const handleGoHome = () => {
    setView('landing');
  };

  if (view === 'landing') {
    return <LandingPage onEnter={handleEnterExplore} />;
  }

  return (
    <PrimerProvider initialIndex={initialIndex}>
      <AppContent onGoHome={handleGoHome} />
    </PrimerProvider>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * BRUTALIST-TERMINAL: The Raw Interface
 * 
 * Philosophy: "This is a terminal. You are the operator."
 * Constraint: No icons, no illustrations. Text and borders only.
 * 
 * This renderer is pure terminal: monospace everything, command prompts,
 * blinking cursors, and the honesty of a text interface.
 */
export const RendererBrutalist: React.FC<RendererProps> = ({ primer }) => {
  const [showCursor, setShowCursor] = useState(true);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="w-full h-screen flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Terminal window */}
      <div 
        className="w-full max-w-3xl border"
        style={{ 
          borderColor: 'var(--color-text-muted)',
          fontFamily: 'var(--font-body)',
        }}
      >
        {/* Terminal header */}
        <div 
          className="px-4 py-2 border-b flex items-center gap-4"
          style={{ borderColor: 'var(--color-text-muted)' }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
            PRIMER v2.0.0
          </span>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            —
          </span>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            /usr/local/bin/primer
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-4 md:p-6 space-y-4" style={{ color: 'var(--color-text-main)' }}>
          {/* Welcome message */}
          <div className="space-y-1">
            <p>Welcome to <span style={{ color: 'var(--color-primary)' }}>Primer</span>.</p>
            <p style={{ color: 'var(--color-text-muted)' }}>An opinionated anti-library for AI-driven design.</p>
          </div>

          {/* Command history */}
          <div className="space-y-2 mt-6">
            <TerminalLine prompt="$" command="primer list" />
            <p style={{ color: 'var(--color-text-muted)' }}>Found 12 primers.</p>
            <p>[01] rams-60</p>
            <p>[02] vignelli-canon</p>
            <p>[03] hara-void</p>
            <p style={{ color: 'var(--color-text-muted)' }}>... (9 more)</p>
          </div>

          <div className="space-y-2 mt-4">
            <TerminalLine prompt="$" command="primer info brutalist-terminal" />
            <div className="pl-4 border-l-2 mt-2" style={{ borderColor: 'var(--color-primary)' }}>
              <p><span style={{ color: 'var(--color-text-muted)' }}>name:</span> Brutalist-Terminal</p>
              <p><span style={{ color: 'var(--color-text-muted)' }}>constraint:</span> No icons, no illustrations</p>
              <p><span style={{ color: 'var(--color-text-muted)' }}>philosophy:</span> Anti-UI, pro-text</p>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <TerminalLine prompt="$" command="primer use brutalist-terminal --global" />
            <p style={{ color: 'var(--color-primary)' }}>✓ Applied brutalist-terminal to current session.</p>
          </div>

          {/* Current prompt */}
          <div className="flex items-center gap-2 mt-6">
            <span style={{ color: 'var(--color-primary)' }}>$</span>
            <span className="flex-1">
              <span 
                className="inline-block w-2 h-5 -mb-1"
                style={{ 
                  backgroundColor: showCursor ? 'var(--color-primary)' : 'transparent',
                }}
              />
            </span>
          </div>
        </div>

        {/* Terminal footer */}
        <div 
          className="px-4 py-2 border-t flex justify-between text-xs"
          style={{ 
            borderColor: 'var(--color-text-muted)',
            color: 'var(--color-text-muted)',
          }}
        >
          <span>UTF-8</span>
          <span>80×24</span>
          <span>bash</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Terminal line component
 */
const TerminalLine: React.FC<{ prompt: string; command: string }> = ({ prompt, command }) => (
  <p>
    <span style={{ color: 'var(--color-primary)' }}>{prompt}</span>{' '}
    <span>{command}</span>
  </p>
);

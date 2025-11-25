import React, { useState } from 'react';
import type { PrimerData } from '../../types';

interface RendererProps {
  primer: PrimerData;
}

/**
 * RAMS-60: The Restraint of Function
 * 
 * Philosophy: "Weniger, aber besser." — Less, but better.
 * Constraint: Zero decorative properties. No shadows, no gradients, no border-radius.
 * 
 * This renderer embodies Dieter Rams' 10 principles:
 * - Functional calculator (like Braun ET66)
 * - 12-column grid system
 * - Zero hover effects
 * - No decorative elements whatsoever
 */
export const RendererRams: React.FC<RendererProps> = ({ primer }) => {
  const [display, setDisplay] = useState('0.00');
  const [currentValue, setCurrentValue] = useState(0);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0.00' || display === '0' ? digit : display + digit);
    }
  };

  const inputOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);
    if (operator && !waitingForOperand) {
      const result = calculate(currentValue, inputValue, operator);
      setDisplay(String(result));
      setCurrentValue(result);
    } else {
      setCurrentValue(inputValue);
    }
    setOperator(nextOperator);
    setWaitingForOperand(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '−': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const performCalculation = () => {
    if (operator) {
      const inputValue = parseFloat(display);
      const result = calculate(currentValue, inputValue, operator);
      setDisplay(result.toFixed(2));
      setCurrentValue(result);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('0.00');
    setCurrentValue(0);
    setOperator(null);
    setWaitingForOperand(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 md:p-16">
      {/* Two-column layout: Calculator + Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left: Braun Calculator (Signature Scene) */}
        <div className="flex flex-col items-center">
          {/* Calculator Display */}
          <div 
            className="w-52 mb-4 px-4 py-3 text-right text-2xl font-mono"
            style={{ 
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-text-muted)',
              color: 'var(--color-text-main)',
            }}
          >
            {display}
          </div>
          
          {/* Calculator Grid */}
          <div 
            className="grid gap-1"
            style={{ gridTemplateColumns: 'repeat(4, 48px)' }}
          >
            {['7', '8', '9', '÷'].map(btn => (
              <CalcButton 
                key={btn} 
                label={btn} 
                isOperator={btn === '÷'}
                onClick={() => btn === '÷' ? inputOperator(btn) : inputDigit(btn)}
              />
            ))}
            {['4', '5', '6', '×'].map(btn => (
              <CalcButton 
                key={btn} 
                label={btn} 
                isOperator={btn === '×'}
                onClick={() => btn === '×' ? inputOperator(btn) : inputDigit(btn)}
              />
            ))}
            {['1', '2', '3', '−'].map(btn => (
              <CalcButton 
                key={btn} 
                label={btn} 
                isOperator={btn === '−'}
                onClick={() => btn === '−' ? inputOperator(btn) : inputDigit(btn)}
              />
            ))}
            <CalcButton label="0" onClick={() => inputDigit('0')} />
            <CalcButton label="." onClick={() => inputDigit('.')} />
            <CalcButton label="=" isAccent onClick={performCalculation} />
            <CalcButton label="+" isOperator onClick={() => inputOperator('+')} />
          </div>

          {/* Clear button */}
          <button 
            onClick={clear}
            className="mt-4 text-xs uppercase tracking-widest"
            style={{ 
              color: 'var(--color-text-muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Clear
          </button>
        </div>

        {/* Right: Philosophy & Functional Info */}
        <div className="flex flex-col gap-8">
          <div>
            <p 
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Narrative Core
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Weniger,<br/>aber besser.
            </h2>
          </div>

          <p 
            className="text-base leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Good design is innovative. Good design makes a product useful. 
            Good design is aesthetic. Good design makes a product understandable.
          </p>

          {/* Constraint Box - No decoration */}
          <div 
            className="p-4 flex items-center gap-3"
            style={{ 
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-text-muted)',
            }}
          >
            <span 
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Constraint
            </span>
            <span 
              className="font-medium"
              style={{ color: 'var(--color-primary)' }}
            >
              Zero decorative properties
            </span>
          </div>

          {/* Functional Data Grid */}
          <div className="grid grid-cols-2 gap-4">
            <DataBlock label="Model" value="ET 66" />
            <DataBlock label="Year" value="1987" />
            <DataBlock label="Designer" value="D. Rams" />
            <DataBlock label="Brand" value="Braun" />
          </div>

          {/* Component Preview: Buttons without hover effects */}
          <div className="flex gap-3 flex-wrap">
            <button 
              className="px-6 py-2 text-sm font-medium uppercase tracking-wider"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)',
                border: 'none',
              }}
            >
              Primary
            </button>
            <button 
              className="px-6 py-2 text-sm font-medium uppercase tracking-wider"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-main)',
                border: '1px solid var(--color-text-muted)',
              }}
            >
              Secondary
            </button>
          </div>
        </div>
      </div>

      {/* Footer: Grid System Visualization */}
      <div 
        className="mt-16 pt-8"
        style={{ borderTop: '1px solid var(--color-text-muted)' }}
      >
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i}
              className="h-1"
              style={{ 
                backgroundColor: i % 4 === 0 ? 'var(--color-primary)' : 'var(--color-text-muted)',
                opacity: i % 4 === 0 ? 1 : 0.3,
              }}
            />
          ))}
        </div>
        <p 
          className="text-xs mt-3 uppercase tracking-widest"
          style={{ color: 'var(--color-text-muted)' }}
        >
          12-Column Grid · 4px Base Unit
        </p>
      </div>
    </div>
  );
};

/**
 * Calculator Button — No hover effects (Rams constraint)
 */
const CalcButton: React.FC<{
  label: string;
  isOperator?: boolean;
  isAccent?: boolean;
  onClick: () => void;
}> = ({ label, isOperator, isAccent, onClick }) => (
  <button
    onClick={onClick}
    className="w-12 h-12 flex items-center justify-center text-base font-medium"
    style={{
      backgroundColor: isAccent 
        ? 'var(--color-primary)' 
        : isOperator 
          ? 'var(--color-secondary)' 
          : 'var(--color-surface)',
      color: (isAccent || isOperator) 
        ? 'var(--color-background)' 
        : 'var(--color-text-main)',
      border: '1px solid var(--color-text-muted)',
      cursor: 'pointer',
      // No border-radius, no shadow, no transition — Rams constraint
    }}
  >
    {label}
  </button>
);

/**
 * Data block component — functional, no decoration
 */
const DataBlock: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <div 
      className="text-xs uppercase tracking-widest mb-1"
      style={{ color: 'var(--color-text-muted)' }}
    >
      {label}
    </div>
    <div className="text-lg font-bold">{value}</div>
  </div>
);

/**
 * Core type definitions for the Primer design system.
 * Each Primer is a complete philosophical universe with its own visual language.
 */

export interface Palette {
  background: string;
  surface: string;
  textMain: string;
  textMuted: string;
  primary: string;
  secondary?: string;
  accent?: string;
  // Extended colors (Primer-specific)
  [key: string]: string | undefined;
}

export interface Typography {
  displayFont: string;
  bodyFont: string;
  monoFont?: string;
  scaleRatio: string; // e.g., "1.25 (Major Third)"
}

export interface Spacing {
  baseUnit: number; // e.g., 4, 8
  system: string;   // Description of the spacing philosophy
}

export interface CSSRules {
  borderRadius: string;
  transition: string;
  boxShadow: string;
}

export interface PrimerData {
  id: string;
  name: string;
  order: number;
  philosophy: string;         // The "Narrative Core"
  description: string;        // Extended description
  constraint: string;         // The "Signature Constraint"
  inspiration: string;        // Historical/cultural reference
  keywords: string[];
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  cssRules: CSSRules;
}

export type ViewMode = 'immersive' | 'anatomy';

export type PrimerId = 
  | 'rams-60'
  | 'vignelli-canon'
  | 'hara-void'
  | 'ando-concrete'
  | 'barragan-wall'
  | 'mondrian-neoplast'
  | 'memphis-81'
  | 'anderson-symmetry'
  | 'gatsby-deco'
  | 'neon-noir'
  | 'tufte-margin'
  | 'brutalist-terminal';

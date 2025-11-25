import React from 'react';
import type { PrimerData } from '../types';

// Individual Primer Renderers
import { RendererRams } from './rams-60/Renderer';
import { RendererVignelli } from './vignelli-canon/Renderer';
import { RendererHara } from './hara-void/Renderer';
import { RendererAndo } from './ando-concrete/Renderer';
import { RendererBarragan } from './barragan-wall/Renderer';
import { RendererMondrian } from './mondrian-neoplast/Renderer';
import { RendererMemphis } from './memphis-81/Renderer';
import { RendererAnderson } from './anderson-symmetry/Renderer';
import { RendererGatsby } from './gatsby-deco/Renderer';
import { RendererNeon } from './neon-noir/Renderer';
import { RendererTufte } from './tufte-margin/Renderer';
import { RendererBrutalist } from './brutalist-terminal/Renderer';

interface PrimerRendererProps {
  primer: PrimerData;
}

/**
 * Router component that renders the appropriate Primer universe
 * based on the current Primer's ID.
 * 
 * Each Primer has its own Renderer — a complete, unique visual experience
 * that embodies its design philosophy.
 */
export const PrimerRenderer: React.FC<PrimerRendererProps> = ({ primer }) => {
  switch (primer.id) {
    case 'rams-60':
      return <RendererRams primer={primer} />;
    case 'vignelli-canon':
      return <RendererVignelli primer={primer} />;
    case 'hara-void':
      return <RendererHara primer={primer} />;
    case 'ando-concrete':
      return <RendererAndo primer={primer} />;
    case 'barragan-wall':
      return <RendererBarragan primer={primer} />;
    case 'mondrian-neoplast':
      return <RendererMondrian primer={primer} />;
    case 'memphis-81':
      return <RendererMemphis primer={primer} />;
    case 'anderson-symmetry':
      return <RendererAnderson primer={primer} />;
    case 'gatsby-deco':
      return <RendererGatsby primer={primer} />;
    case 'neon-noir':
      return <RendererNeon primer={primer} />;
    case 'tufte-margin':
      return <RendererTufte primer={primer} />;
    case 'brutalist-terminal':
      return <RendererBrutalist primer={primer} />;
    default:
      return <RendererRams primer={primer} />;
  }
};

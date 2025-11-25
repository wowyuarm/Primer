import type { PrimerData } from '../types';

/**
 * The complete manifest of all 12 Primers.
 * Each Primer is a complete philosophical universe — not a theme, but a worldview.
 * 
 * Order reflects the journey: from functionalist restraint (Rams) 
 * to digital brutalism (Terminal).
 */
export const PRIMERS: PrimerData[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 01. RAMS-60: The Restraint of Function
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'rams-60',
    name: 'Rams-60',
    order: 1,
    philosophy: '"Weniger, aber besser." — Less, but better.',
    description: 'A functionalist manifesto. Order, rationality, and clarity above all. Color is a functional signal, not an emotion. Every element must earn its place.',
    constraint: 'Zero decorative properties. No shadows, no gradients, no border-radius.',
    inspiration: 'Dieter Rams / Braun / 1960s Industrial Design',
    keywords: ['Functionalism', 'Precision', 'Honesty', 'Timelessness'],
    palette: {
      background: '#F5F5F5',
      surface: '#FFFFFF',
      textMain: '#212121',
      textMuted: '#757575',
      primary: '#E64A19',   // Braun Orange
      secondary: '#757575',
      accent: '#424242',
    },
    typography: {
      displayFont: '"Inter", "Helvetica Neue", Arial, sans-serif',
      bodyFont: '"Inter", "Helvetica Neue", Arial, sans-serif',
      monoFont: '"SF Mono", "Consolas", monospace',
      scaleRatio: '1.200 (Minor Third)',
    },
    spacing: {
      baseUnit: 4,
      system: 'Linear: 4, 8, 12, 16, 24, 32, 48',
    },
    cssRules: {
      borderRadius: '0px',
      transition: 'none',
      boxShadow: 'none',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 02. VIGNELLI-CANON: The Discipline of Information
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'vignelli-canon',
    name: 'Vignelli-Canon',
    order: 2,
    philosophy: '"Design is not art. It is a discipline." — The unity of information architecture.',
    description: 'Swiss precision meets American scale. Wayfinding systems, grid supremacy, typographic hierarchy. One typeface, infinite possibilities.',
    constraint: 'Single typeface family only. No decorative fonts.',
    inspiration: 'Massimo Vignelli / NYC Subway / Swiss Style',
    keywords: ['Information Design', 'Wayfinding', 'Grid', 'Timeless'],
    palette: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      textMain: '#000000',
      textMuted: '#666666',
      primary: '#FF0000',   // Signal Red
      secondary: '#000000',
    },
    typography: {
      displayFont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      bodyFont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      scaleRatio: '1.333 (Perfect Fourth)',
    },
    spacing: {
      baseUnit: 8,
      system: 'Grid Multiples: 8, 16, 24, 32, 48, 64',
    },
    cssRules: {
      borderRadius: '0px',
      transition: 'none',
      boxShadow: 'none',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 03. HARA-VOID: The Container of Possibility
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'hara-void',
    name: 'Hara-Void',
    order: 3,
    philosophy: '"This is empty." — Emptiness is the container of possibility.',
    description: 'Japanese minimalism. The beauty of nothingness. Not absence, but potential. White space is not passive — it speaks.',
    constraint: 'No brand colors. Only natural, neutral tones.',
    inspiration: 'Kenya Hara / MUJI / Japanese Aesthetics',
    keywords: ['Void', 'Natural', 'Simplicity', 'White Space'],
    palette: {
      background: '#F7F6F3',
      surface: '#FFFEF9',
      textMain: '#2D2D2D',
      textMuted: '#6B5344',
      primary: '#6B5344',   // Raw Wood Brown
      secondary: '#D4C9B0', // Bamboo
      accent: '#9A9590',    // Stone
    },
    typography: {
      displayFont: '"Hiragino Mincho Pro", "Georgia", serif',
      bodyFont: '"Hiragino Sans", "Inter", sans-serif',
      scaleRatio: '1.125 (Major Second)',
    },
    spacing: {
      baseUnit: 8,
      system: 'Breathing Rhythm: generous margins, ample white space',
    },
    cssRules: {
      borderRadius: '2px',
      transition: 'opacity 0.8s ease',
      boxShadow: 'none',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 04. ANDO-CONCRETE: The Poetry of Light and Shadow
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ando-concrete',
    name: 'Ando-Concrete',
    order: 4,
    philosophy: '"The poetic dialogue of light, shadow, and concrete."',
    description: 'Minimalism through materiality. Surfaces speak. Light carves space. Silence has weight. Architecture as meditation.',
    constraint: 'Color for text and interaction only. Surfaces must be strictly grayscale.',
    inspiration: 'Tadao Ando / Church of Light / Brutalist Architecture',
    keywords: ['Structure', 'Negative Space', 'Silence', 'Materiality'],
    palette: {
      background: '#C9C9C9',
      surface: '#D8D8D8',
      textMain: '#2A2A2A',
      textMuted: '#5A5A5A',
      primary: '#3D7EAA',   // Muted Water Blue
      secondary: '#8A8A8A',
    },
    typography: {
      displayFont: '"Cormorant Garamond", Georgia, serif',
      bodyFont: '"Inter", "Avenir Next", sans-serif',
      scaleRatio: '1.414 (Augmented Fourth)',
    },
    spacing: {
      baseUnit: 8,
      system: 'Geometric: 8, 16, 32, 64, 128',
    },
    cssRules: {
      borderRadius: '0px',
      transition: 'opacity 0.5s ease-in-out',
      boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 05. BARRAGÁN-WALL: The Architecture of Emotion
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'barragan-wall',
    name: 'Barragán-Wall',
    order: 5,
    philosophy: '"Building emotional spaces with blocks of color."',
    description: 'Mexican modernism. Bold, sculptural, emotional. Color is not decoration — it is architecture. Walls define space, color defines feeling.',
    constraint: 'No opacity, no gradients. Colors must be solid, monumental walls.',
    inspiration: 'Luis Barragán / Casa Gilardi / Mexican Modernism',
    keywords: ['Bold', 'Emotional', 'Sculptural', 'Saturation'],
    palette: {
      background: '#ED3D95', // Mexican Pink
      surface: '#F5A623',    // Sun Orange
      textMain: '#FFFFFF',
      textMuted: 'rgba(255,255,255,0.8)',
      primary: '#0057A8',    // Klein Blue
      secondary: '#7B2D8E',  // Violet
      accent: '#C75B39',     // Terracotta
    },
    typography: {
      displayFont: '"Montserrat", sans-serif',
      bodyFont: '"Montserrat", sans-serif',
      scaleRatio: '1.618 (Golden Ratio)',
    },
    spacing: {
      baseUnit: 10,
      system: 'Rhythmic: 10, 20, 40, 80',
    },
    cssRules: {
      borderRadius: '0px',
      transition: 'none',
      boxShadow: '8px 8px 0px rgba(0,0,0,0.2)',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 06. MONDRIAN-NEOPLAST: The Abstraction of Essence
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'mondrian-neoplast',
    name: 'Mondrian-Neoplast',
    order: 6,
    philosophy: '"Abstracted to essence. The world needs only vertical, horizontal, and primary colors."',
    description: 'De Stijl purity. Reduce until you cannot reduce further. Only primaries, only orthogonals. Composition as philosophy.',
    constraint: 'Primary colors only. No curves, no diagonals.',
    inspiration: 'Piet Mondrian / De Stijl / Neoplasticism',
    keywords: ['Abstract', 'Primary', 'Geometric', 'Pure'],
    palette: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      textMain: '#000000',
      textMuted: '#666666',
      primary: '#DD0100',   // Mondrian Red
      secondary: '#0000FF', // Primary Blue
      accent: '#FECB00',    // Mondrian Yellow
    },
    typography: {
      displayFont: '"Futura PT", "Futura", sans-serif',
      bodyFont: '"Futura PT", "Futura", sans-serif',
      scaleRatio: '1.5 (Perfect Fifth)',
    },
    spacing: {
      baseUnit: 10,
      system: 'Grid Division: asymmetric but balanced',
    },
    cssRules: {
      borderRadius: '0px',
      transition: 'none',
      boxShadow: 'none',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 07. MEMPHIS-81: The Rebellion Against Good Taste
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'memphis-81',
    name: 'Memphis-81',
    order: 7,
    philosophy: '"A radical, humorous subversion of \'good taste\'."',
    description: 'Postmodern chaos. If modernism said "less is more," Memphis says "more is more." Clash, pattern, humor. Anti-design as design.',
    constraint: 'Anti-alignment. Elements should float, overlap, and defy the grid.',
    inspiration: 'Ettore Sottsass / Memphis Group / Postmodernism',
    keywords: ['Rebellion', 'Playful', 'Pop', '80s'],
    palette: {
      background: '#FDE849', // Electric Yellow
      surface: '#FFFFFF',
      textMain: '#000000',
      textMuted: '#444444',
      primary: '#26ABE2',    // Cyan
      secondary: '#F15A24',  // Orange
      accent: '#ED1E79',     // Neon Pink
    },
    typography: {
      displayFont: '"Space Grotesk", sans-serif',
      bodyFont: '"Poppins", sans-serif',
      monoFont: '"Courier Prime", monospace',
      scaleRatio: 'Irregular (intentionally breaking rules)',
    },
    spacing: {
      baseUnit: 8,
      system: 'Chaotic: intentionally irregular',
    },
    cssRules: {
      borderRadius: '40px 10px 40px 10px',
      transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: '8px 8px 0px #000000',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 08. ANDERSON-SYMMETRY: The Curated Nostalgia
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'anderson-symmetry',
    name: 'Anderson-Symmetry',
    order: 8,
    philosophy: '"Curated nostalgia within a centered universe."',
    description: 'Cinematic precision. Every frame is a painting. Strict center-alignment, pastel tones, a sense of preciousness and whimsy.',
    constraint: 'Strict symmetry. All major components must align to the central axis.',
    inspiration: 'Wes Anderson / Grand Budapest Hotel / Cinematic Palette',
    keywords: ['Symmetry', 'Nostalgia', 'Whimsy', 'Centered'],
    palette: {
      background: '#F3E5AB', // Retro Cream
      surface: '#E6D4A0',
      textMain: '#5C4B51',   // Dark Brown
      textMuted: '#A28C7D',
      primary: '#D1495B',    // Faded Red
      secondary: '#6B9080',  // Sage Green
      accent: '#A8C5D9',     // Powder Blue
    },
    typography: {
      displayFont: '"Futura PT", "Jost", sans-serif',
      bodyFont: '"Libre Baskerville", "Playfair Display", serif',
      scaleRatio: '1.250 (Major Third)',
    },
    spacing: {
      baseUnit: 5,
      system: 'Regular: precise measurements, 5px base',
    },
    cssRules: {
      borderRadius: '4px',
      transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      boxShadow: '0 4px 12px rgba(92, 75, 81, 0.15)',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 09. GATSBY-DECO: The Geometry of Glamour
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gatsby-deco',
    name: 'Gatsby-Deco',
    order: 9,
    philosophy: '"Geometric precision, golden luxury, ritual and elegance."',
    description: 'Art Deco opulence. The Roaring Twenties digitized. Symmetry, sunbursts, and gold as accent. Celebration through constraint.',
    constraint: 'Gold for decoration only. Never as background or primary action.',
    inspiration: 'Art Deco / Jazz Age / Chrysler Building',
    keywords: ['Luxury', 'Geometric', 'Gold', 'Jazz Age'],
    palette: {
      background: '#0A1628', // Deep Night Blue
      surface: '#132238',    // Midnight Blue
      textMain: '#F5F5F0',   // Ivory
      textMuted: '#8A94A6',
      primary: '#D4AF37',    // Gold
      secondary: '#8B4D6E',  // Wine
      accent: '#2C7A7B',     // Peacock Teal
    },
    typography: {
      displayFont: '"Playfair Display", Georgia, serif',
      bodyFont: '"Lato", "Inter", sans-serif',
      scaleRatio: '1.414 (Augmented Fourth)',
    },
    spacing: {
      baseUnit: 8,
      system: 'Symmetric Grid: balanced, ceremonial',
    },
    cssRules: {
      borderRadius: '0px',
      transition: 'all 0.4s ease',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 10. NEON-NOIR: The Light in Darkness
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'neon-noir',
    name: 'Neon-Noir',
    order: 10,
    philosophy: '"In darkness, light creates guidance and mood."',
    description: 'Cyberpunk aesthetic. High contrast, neon glow, urban night. Light is precious — use it to guide, to warn, to mesmerize.',
    constraint: 'Light-to-dark ratio minimum 1:7. Dark dominates.',
    inspiration: 'Cyberpunk / Blade Runner / Syd Mead',
    keywords: ['Cyberpunk', 'Neon', 'Dark', 'Future'],
    palette: {
      background: '#0D0D0D', // Deep Space Black
      surface: '#141414',    // Night
      textMain: '#E8E8E8',   // Cold White
      textMuted: '#666666',
      primary: '#00F0FF',    // Cyan Neon
      secondary: '#FF00FF',  // Magenta Neon
      accent: '#FF3366',     // Red Neon
    },
    typography: {
      displayFont: '"Orbitron", sans-serif',
      bodyFont: '"Inter", sans-serif',
      scaleRatio: '1.414 (Augmented Fourth)',
    },
    spacing: {
      baseUnit: 8,
      system: 'Modular: 8px base, tech-grid',
    },
    cssRules: {
      borderRadius: '2px',
      transition: 'all 0.3s ease',
      boxShadow: '0 0 20px var(--color-primary)',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 11. TUFTE-MARGIN: The Data Speaks
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'tufte-margin',
    name: 'Tufte-Margin',
    order: 11,
    philosophy: '"Above all else, show the data." — Data speaks, interface recedes.',
    description: 'Information visualization philosophy. High data density, sidenotes, sparklines. The interface is invisible — the content is everything.',
    constraint: 'No large background colors. Content only, minimal chrome.',
    inspiration: 'Edward Tufte / Sparklines / Academic Typography',
    keywords: ['Information', 'Marginalia', 'Data Density', 'Academic'],
    palette: {
      background: '#FFFFF8', // Ivory
      surface: '#FFFFF8',
      textMain: '#111111',   // Near Black
      textMuted: '#444444',
      primary: '#A00000',    // Deep Red
      secondary: '#444444',
    },
    typography: {
      displayFont: '"Palatino Linotype", "Palatino", Georgia, serif',
      bodyFont: '"Palatino Linotype", "Palatino", Georgia, serif',
      scaleRatio: '1.125 (Major Second)',
    },
    spacing: {
      baseUnit: 8,
      system: 'Scholarly: wide margins for sidenotes',
    },
    cssRules: {
      borderRadius: '0px',
      transition: 'none',
      boxShadow: 'none',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 12. BRUTALIST-TERMINAL: The Raw Interface
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'brutalist-terminal',
    name: 'Brutalist-Terminal',
    order: 12,
    philosophy: '"This is a terminal. You are the operator." — Anti-UI, pro-text.',
    description: 'Digital brutalism. The web stripped bare. No icons, no illustrations, just text and function. The interface is honest about what it is: a machine.',
    constraint: 'No icons, no illustrations. Text and borders only.',
    inspiration: 'VT220 Terminal / man pages / Brutalist Web Design',
    keywords: ['Terminal', 'Monospace', 'Anti-UI', 'Raw'],
    palette: {
      background: '#0C0C0C', // Terminal Black
      surface: '#121212',
      textMain: '#CCCCCC',   // Soft White
      textMuted: '#666666',
      primary: '#FFB000',    // Amber
      secondary: '#666666',
    },
    typography: {
      displayFont: '"IBM Plex Mono", "Consolas", monospace',
      bodyFont: '"IBM Plex Mono", "Consolas", monospace',
      monoFont: '"IBM Plex Mono", "Consolas", monospace',
      scaleRatio: 'Flat (nearly uniform)',
    },
    spacing: {
      baseUnit: 8,
      system: 'Character-based: 80ch width, line-height driven',
    },
    cssRules: {
      borderRadius: '0px',
      transition: 'none',
      boxShadow: 'none',
    },
  },
];

/**
 * Get a Primer by its ID
 */
export const getPrimerById = (id: string): PrimerData | undefined => {
  return PRIMERS.find(p => p.id === id);
};

/**
 * Get the index of a Primer by its ID
 */
export const getPrimerIndex = (id: string): number => {
  return PRIMERS.findIndex(p => p.id === id);
};

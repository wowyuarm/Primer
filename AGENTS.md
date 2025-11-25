# AGENTS.md

> Cognitive Framework for AI Agents and Contributors  
> Last updated: 2025-11-25 | Revision: 2.0 (React Refactor)

---

## Project Philosophy

### Core Identity

Primer is an **anti-library** — a curated collection of opinionated design systems that reject AI-generated aesthetic mediocrity. The project's tagline captures its essence:

> "Beyond the Gradient. Code with Intention."

The blue-purple gradient has become shorthand for thoughtless AI output. Primer exists as a counter-movement: each design system ("Primer") is a complete philosophical universe with internal logic, not a palette of interchangeable parts.

### Design Principles

- **Constraint-Driven Design**: Each Primer defines itself by what it *refuses* to do. The "Signature Constraint" is non-negotiable.
  - *Why*: Constraints force creative coherence and prevent aesthetic drift
  - *Manifests as*: CSS variables that enforce limits (e.g., `--border-radius: 0`)

- **Narrative Over Randomness**: Every Primer answers three questions:
  1. **Narrative Core** — Where does its soul come from? (e.g., Dieter Rams, Tadao Ando)
  2. **Systemic Rules** — How does structure support philosophy?
  3. **Signature Constraint** — What is explicitly forbidden?

- **Roles, Not Just Values**: Colors have semantic roles (`text-main`, `text-muted`, `primary`), not just hex codes. This makes theming meaningful rather than decorative.

### Engineering Values

- **React + Vite + TailwindCSS**: Modern, fast, component-based architecture.
  - Each Primer has its own dedicated Renderer component
  - Global state managed via React Context

- **CSS Variables as Core Abstraction**: The entire design system is expressed through CSS custom properties.
  - Theme switching: `document.documentElement.setAttribute('data-primer', id)`
  - Variables applied dynamically via `PrimerContext`

- **Immersive First, Details on Demand**: 
  - Main view: Full-screen signature scene for each Primer
  - Dissect view: Consistent overlay showing detailed breakdown

### Intentional Constraints

- **We don't**: Use gradients, blurs, or decorative shadows in the site chrome
  - *Reason*: The site must practice what it preaches

- **We don't**: Make Primers "flexible" or "customizable"
  - *Reason*: A Primer is a complete worldview; diluting constraints defeats the purpose

---

## Architecture Mental Model

### System Conceptual Model

Primer treats design systems as **immutable philosophical packages**. Each Primer is a triplet:

```
Primer = (Philosophy, Token System, Constraint)
```

The website is a showcase that lets users:
1. Experience each Primer as a full-screen immersive environment (unique Renderer)
2. "Dissect" it to see the underlying structure (consistent AnatomyOverlay)
3. Acquire it (copy CSS variables, download JSON)

### Key Architectural Decisions

- **React + Vite for SPA**
  - *Rationale*: Component-based; each Primer gets its own Renderer
  - *Implications*: State management via Context; dynamic CSS variable injection

- **CSS Custom Properties as Single Source of Truth**
  - *Rationale*: CSS variables work everywhere; no build step for theme consumption
  - *Implications*: `PrimerContext` applies variables to `:root` on primer change

- **One Renderer Per Primer**
  - *Rationale*: Each Primer deserves a unique visual expression
  - *Implications*: `src/primers/<slug>/Renderer.tsx` is a full-screen immersive scene

### Module Organization Logic

```
src/
├── src/
│   ├── primers/              # One folder per Primer
│   │   ├── PrimerRenderer.tsx    # Router: maps primer ID to Renderer
│   │   └── <slug>/
│   │       └── Renderer.tsx      # Unique immersive scene
│   ├── components/
│   │   ├── Navigation.tsx        # Dots + Arrows + Dissect trigger
│   │   └── AnatomyOverlay.tsx    # Consistent dissect view
│   ├── context/
│   │   └── PrimerContext.tsx     # Global state: current primer, view mode
│   ├── data/
│   │   └── primers.ts            # All 12 Primer definitions
│   ├── pages/
│   │   └── LandingPage.tsx       # Manifesto entry page
│   ├── types.ts                  # TypeScript interfaces
│   ├── App.tsx                   # Main app shell
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json

public/primers/                   # Simplified tokens for external download
```

**Boundaries**:
- `src/data/primers.ts` = Single source of truth for all primer metadata
- `src/primers/<slug>/Renderer.tsx` = Unique immersive scene per Primer
- `src/components/AnatomyOverlay.tsx` = Consistent dissect view (shared)
- `public/primers/*/tokens.json` = Simplified tokens for external use

### Critical Dependencies

- **React** (`^18.2.0`) — Component architecture
- **Vite** (`^5.0.0`) — Fast dev server and build
- **TailwindCSS** (`^3.4.0`) — Utility-first styling
- **TypeScript** (`^5.3.0`) — Type safety

---

## Development Workflow

### First-Time Setup

```bash
git clone <repo-url>
cd primer
cd src && npm install
npm run dev
```

Or from root:
```bash
npm install
npm run dev
```

### Common Commands

- `npm run dev` — Start Vite dev server (http://localhost:3000)
- `npm run build` — Production build (`tsc && vite build`)
- `npm run preview` — Preview production build

### Testing Philosophy

No automated tests. The product is visual and experiential.

- *What to verify*:
  1. Landing page renders with "Explore" button
  2. Each Primer's Renderer displays correctly
  3. Theme switching transitions smoothly
  4. Dissect overlay shows correct data
  5. Navigation (arrows, dots) works
  6. Selection color uses theme `--color-primary`

---

## Code Style & Conventions

### Naming Conventions

- **Primer IDs**: `kebab-case` (e.g., `rams-60`, `ando-concrete`)
- **CSS Variables**: `--category-name` pattern (e.g., `--color-background`)
- **Components**: `PascalCase.tsx` (e.g., `Renderer.tsx`, `Navigation.tsx`)

### Adding a New Primer

1. Add entry to `src/data/primers.ts`:
   ```typescript
   {
     id: 'new-primer',
     name: 'New Primer',
     order: 13,
     philosophy: 'Philosophy statement',
     description: 'Extended description',
     constraint: 'Signature constraint',
     inspiration: 'Source / Movement',
     keywords: ['keyword1', 'keyword2'],
     palette: { background: '#...', surface: '#...', ... },
     typography: { displayFont: '...', bodyFont: '...', scaleRatio: '...' },
     spacing: { baseUnit: 4, system: '...' },
     cssRules: { borderRadius: '0', transition: '...', boxShadow: '...' },
   }
   ```

2. Create `src/primers/<slug>/Renderer.tsx`:
   ```tsx
   export const RendererNewPrimer: React.FC<{ primer: PrimerData }> = ({ primer }) => {
     return (
       <div className="w-full h-screen flex items-center justify-center">
         {/* Unique signature scene */}
       </div>
     );
   };
   ```

3. Register in `src/primers/PrimerRenderer.tsx`:
   ```tsx
   import { RendererNewPrimer } from './new-primer/Renderer';
   // Add to switch statement
   ```

4. (Optional) Add `public/primers/<slug>/tokens.json` for download

### Anti-Patterns to Avoid

- **Breaking Primer Constraints**: If a Primer says "no gradients", never add gradients
- **Inconsistent Renderers**: Each Renderer should be full-screen immersive
- **Duplicating AnatomyOverlay logic**: Dissect view is shared; don't customize per-primer

---

## Hidden Knowledge

### Common Debugging Patterns

- **Theme not switching?** Check `PrimerContext.tsx` — CSS variables applied to `:root`
- **Selection color wrong?** Check `index.css` — `::selection` uses `var(--color-primary)`
- **Renderer not showing?** Check `PrimerRenderer.tsx` switch statement

### Key Files

| File | Purpose |
|------|---------|
| `src/data/primers.ts` | All 12 Primer definitions |
| `src/context/PrimerContext.tsx` | Global state + CSS variable injection |
| `src/primers/PrimerRenderer.tsx` | Routes primer ID → Renderer component |
| `src/components/AnatomyOverlay.tsx` | Shared dissect view |
| `src/components/Navigation.tsx` | Arrows + Dots + Dissect trigger |
| `src/pages/LandingPage.tsx` | Manifesto entry page |

---

## Maintaining This Document

Update AGENTS.md when:
- Adding a new Primer
- Changing the architecture significantly
- Discovering a new pattern worth documenting

---

*This document captures the living philosophy of Primer. When in doubt, ask: "Does this change honor or dilute the Primer's constraints?"*

# AGENTS.md

> Cognitive Framework for AI Agents and Contributors  
> Last updated: 2025 | Revision: 1.0

---

## Project Philosophy

### Core Identity

Primer is an **anti-library** - a curated collection of opinionated design systems that reject AI-generated aesthetic mediocrity. The project's tagline captures its essence:

> "Beyond the Gradient. Code with Intention."

The blue-purple gradient has become shorthand for thoughtless AI output. Primer exists as a counter-movement: each design system ("Primer") is a complete philosophical universe with internal logic, not a palette of interchangeable parts.

### Design Principles

- **Constraint-Driven Design**: Each Primer defines itself by what it *refuses* to do. The "Signature Constraint" is non-negotiable.
  - *Why*: Constraints force creative coherence and prevent aesthetic drift
  - *Manifests as*: CSS variables that enforce limits (e.g., `--border-radius: 0`, `--opacity: 1`)

- **Narrative Over Randomness**: Every Primer answers three questions:
  1. **Narrative Core** - Where does its soul come from? (e.g., Dieter Rams, Tadao Ando)
  2. **Systemic Rules** - How does structure support philosophy?
  3. **Signature Constraint** - What is explicitly forbidden?

- **Roles, Not Just Values**: Colors have semantic roles (`text-main`, `text-muted`, `primary`), not just hex codes. This makes theming meaningful rather than decorative.

### Engineering Values

- **Boring Technology Stack**: Astro with zero additional dependencies. No state management, no CSS-in-JS, no build complexity.
  - *Example*: Single vanilla JS controller file handles all interactivity

- **CSS Variables as Core Abstraction**: The entire design system is expressed through CSS custom properties. This is the project's fundamental data structure.
  - *Example*: Theme switching is just `document.documentElement.setAttribute('data-primer', slug)`

- **Duplication Over Abstraction**: The `src/primers/` and `public/primers/` folders contain overlapping data. This is intentional - public tokens are simplified for external consumption.

### Intentional Constraints

- **We don't**: Add JavaScript frameworks beyond vanilla JS
  - *Reason*: The showcase itself should embody "less, but better"

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
1. Experience each Primer as a full-screen immersive environment
2. "Dissect" it to see the underlying structure (palette, typography, spacing)
3. Acquire it (copy CSS, download JSON, CLI command)

### Key Architectural Decisions

- **Astro for Static Generation**
  - *Rationale*: Zero client-side framework overhead; HTML-first philosophy
  - *Implications*: All interactivity is vanilla JS; no component state management

- **CSS Custom Properties as Single Source of Truth**
  - *Rationale*: CSS variables work everywhere; no build step for theme consumption
  - *Implications*: Theme files (`theme.css`) must be self-contained and copy-pasteable

- **Bilingual Content (Chinese + English)**
  - *Rationale*: Project originated for Chinese-speaking designers
  - *Implications*: Keep philosophical text in Chinese; technical terms in English

### Module Organization Logic

```
src/
├── primers/           # Each Primer is a directory
│   └── <name>/
│       ├── index.md   # Philosophy, metadata, use cases
│       ├── theme.css  # CSS Variables (the actual deliverable)
│       └── tokens.json # Structured data for programmatic use
├── layouts/           # Single BaseLayout.astro
├── pages/             # index.astro (showcase), about.astro
├── styles/            # Site chrome styles (not Primer themes)
└── scripts/           # primer-controller.js (all JS logic)

public/primers/        # Simplified tokens for download (subset of src)
```

**Boundaries**:
- `src/primers/*/theme.css` = What users download; must work standalone
- `src/styles/` = Site's own visual identity; independent of Primers
- `primer-controller.js` = All interactivity in one file; no module splitting

### Critical Dependencies

- **Astro** (`^5.16.0`)
  - *Why*: Static-first, minimal runtime, excellent CSS handling
  - *Usage*: Standard Astro patterns; `<style is:global>` for theme imports

- **Google Fonts** (external)
  - *Why*: Each Primer specifies exact typefaces tied to its philosophy
  - *Usage*: All fonts loaded in `BaseLayout.astro`; Primers reference by name

---

## Development Workflow

### First-Time Setup

```bash
git clone <repo-url>
cd primer
npm install
npm run dev
```

### Common Commands

- `npm run dev` - Local development server (Astro dev mode)
  - *Use when*: Iterating on design, testing theme switching
  - *Note*: Hot reload works for CSS and Astro files

- `npm run build` - Production build
  - *Use when*: Preparing for deployment
  - *Output*: Static files in `dist/`

- `npm run preview` - Preview production build locally
  - *Use when*: Final check before deploy

### Testing Philosophy

There are no automated tests in this project.

- *Why*: The product is visual and experiential; testing is manual inspection
- *What to verify*:
  1. Theme switching transitions smoothly (600ms cubic-bezier)
  2. Each Primer's constraint is visually enforced
  3. "Acquire Primer" actions work (copy CSS, download JSON)
  4. Keyboard navigation (arrow keys) and scroll wheel work

---

## Code Style & Conventions

### Formatting

- **Indentation**: 2 spaces (consistent with Astro defaults)
- **CSS Comments**: Use section headers with `/* === Section Name === */`

### Naming Conventions

- **Primer slugs**: `kebab-case` (e.g., `rams-60`, `ando-concrete`)
- **CSS Variables**: `--category-name` pattern (e.g., `--color-background`, `--font-size-lg`)
- **Files**: 
  - `theme.css`, `tokens.json`, `index.md` (always these exact names per Primer)
  - Astro components in `PascalCase.astro`

### Code Organization Patterns

**Adding a New Primer**:

1. Create directory: `src/primers/<slug>/`
2. Add `index.md` with frontmatter:
   ```yaml
   name: Display Name
   slug: kebab-case-slug
   order: N
   author: Primer Collective
   inspiration: Source of Design Philosophy
   keywords: [list, of, keywords]
   ```
3. Add `theme.css` with CSS variables under `:root[data-primer="<slug>"]`
4. Add `tokens.json` with structured version of the same data
5. Register in `index.astro`'s `primers` array
6. Add theme import in `BaseLayout.astro`
7. Create `public/primers/<slug>/` with simplified tokens for download

**CSS Variable Categories** (follow existing pattern):
```css
/* === Color Palette === */
/* === Typography === */
/* === Spacing === */
/* === Layout === */
/* === Interaction === */
/* === Surface Treatment === */
```

### Anti-Patterns to Avoid

- **Breaking Primer Constraints**: If a Primer says "no gradients", never add gradients to its theme
- **Adding dependencies**: The project intentionally has one dependency (Astro)
- **Abstracting prematurely**: Each Primer is meant to be self-contained; don't extract "shared" utilities
- **Inconsistent variable naming**: Follow existing `--category-name` pattern exactly

---

## Hidden Knowledge

### Common Debugging Patterns

- **Theme not switching?** Check that `data-primer` attribute is set on `:root` (not `body`)
- **CSS variables not applied?** Verify the selector specificity: `:root[data-primer="slug"]`
- **Fonts not loading?** Check Google Fonts link in `BaseLayout.astro`

### Performance Considerations

- **Hot path**: Theme transitions use `var(--theme-transition)` (600ms). All transitioned properties should be listed explicitly to avoid layout thrashing.
- **Cold path**: The dissect overlay populates palette/typography dynamically. Not performance-critical.

### Security Mental Model

This is a static site with no user input beyond clipboard interactions:
- **Clipboard API**: Used for "Copy CSS Variables" and "Copy CLI Command"
- **Fetch**: Only to `/primers/<slug>/` (same-origin static assets)

No untrusted data; no sanitization needed.

### Intentional Oddities

- **Duplicate data in src/ and public/**: 
  - `src/primers/*/tokens.json` has rich metadata (roles, descriptions)
  - `public/primers/*/tokens.json` is simplified for external use
  - This is intentional duplication, not a sync bug

- **Hardcoded Primer data in primer-controller.js**:
  - `PRIMER_DATA` object duplicates some token information
  - *Why*: Avoids async fetch for dissect view; trades DRY for simplicity

- **Chinese text in code**:
  - Comments and content are bilingual
  - Philosophy/narrative content stays in Chinese; this is a design choice

---

## Maintaining This Document

Update AGENTS.md when:
- Adding a new Primer (update "Adding a New Primer" section if process changes)
- Changing the architecture significantly
- Discovering a new "gotcha" worth documenting

Do not update for:
- Minor CSS tweaks
- Content changes within existing Primers
- Bug fixes that don't change patterns

---

*This document captures the living philosophy of Primer. It is a cognitive framework, not a style guide. When in doubt, ask: "Does this change honor or dilute the Primer's constraints?"*

# Primer

**An Opinionated Anti-Library for AI-driven Design.**

> "Beyond the Gradient. Code with Intention."

---

## Philosophy

In an era dominated by AI-generated content, the blue-purple gradient has become synonymous with mediocrity and thoughtlessness. Primer exists as a silent protest against aesthetic inertia.

We don't "pick" styles — we **distill** them. Each Primer is a complete world — a micro-universe with its own internal logic and emotional stance.

---

## Design Systems (12 Primers)

| Primer | Philosophy | Constraint |
|--------|-----------|------------|
| **Rams-60** | "Less, but better." | Zero decorative properties |
| **Vignelli-Canon** | Design is discipline, not self-expression | Single typeface family only |
| **Hara-Void** | Emptiness is the container of possibility | No brand colors |
| **Ando-Concrete** | Poetic dialogue of light, shadow, and concrete | Color only for text & interaction |
| **Barragán-Wall** | Building emotional spaces with color blocks | No opacity, no gradients |
| **Mondrian-Neoplast** | The world needs only vertical, horizontal, and primary | Primary colors only |
| **Memphis-81** | Radical subversion of "good taste" | Anti-alignment required |
| **Anderson-Symmetry** | Curated symmetry and nostalgic tones | Strict center alignment |
| **Gatsby-Deco** | Geometric precision, golden luxury | Gold for decoration only |
| **Neon-Noir** | Using light to guide mood in darkness | Light-dark ratio min 1:7 |
| **Tufte-Margin** | Data speaks, interface recedes | No large background colors |
| **Brutalist-Terminal** | Anti-UI, pro-text | No icons or illustrations |

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/primer.git
cd primer

# Install dependencies (from src directory)
cd src && npm install

# Start development server
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

---

## Project Structure

```
primer/
├── src/                      # React application
│   ├── src/
│   │   ├── primers/          # One Renderer per Primer
│   │   │   ├── rams-60/
│   │   │   ├── ando-concrete/
│   │   │   └── ...
│   │   ├── components/       # Navigation, AnatomyOverlay
│   │   ├── context/          # PrimerContext (state)
│   │   ├── data/             # primers.ts (all definitions)
│   │   ├── pages/            # LandingPage
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
├── public/
│   └── primers/              # Tokens for download
└── package.json              # Root (proxies to src/)
```

---

## Usage

### Web Experience

1. Open the site and click **Explore** to enter a random Primer
2. Use arrow buttons or bottom navigation dots to switch Primers
3. Click **Dissect** to view detailed design specifications
4. Use **Acquire Primer** to get CSS Variables or download JSON

### In Your Project

```css
/* Use CSS Variables directly */
:root {
  --color-background: #F5F5F5;
  --color-primary: #E64A19;
  --font-display: "Helvetica Neue", sans-serif;
  /* ... */
}
```

---

## Design Principles

Every Primer must answer three core questions:

1. **Narrative Core** — Where does its soul come from?
2. **Systemic Rules** — How does structure support philosophy?
3. **Signature Constraint** — What does it refuse to do?

---

## Tech Stack

- **React** — Component architecture
- **Vite** — Fast build tool
- **TailwindCSS** — Utility-first styling
- **TypeScript** — Type safety

---

## License

MIT © Primer Collective

---

*Depth over shallowness. Narrative over randomness. Intention over inertia.*

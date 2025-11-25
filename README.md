# Primer

**An Opinionated Anti-Library for AI-driven Design.**

> "Beyond the Gradient. Code with Intention."

---

## Philosophy

在一个被AI直出内容统治的时代，蓝紫渐变已经成为平庸与无意识的代名词。Primer的存在，是对这种审美惯性的无声抗议。

我们不"挑选"风格，我们**蒸馏**它们。每一个Primer都是一个完整的世界——一个有其内在逻辑和情感主张的微型宇宙。

---

## Design Systems

| Primer | Philosophy | Constraint |
|--------|-----------|------------|
| **Rams-60** | "Weniger, aber besser." | 零装饰属性 |
| **Ando-Concrete** | 光、影与混凝土的诗意对话 | 色彩仅用于文本与交互 |
| **Barragán-Wall** | 用色彩的体块，构建情感的空间 | 无透明度，无渐变 |
| **Anderson-Symmetry** | 精心编排的对称与怀旧色调 | 严格居中对称 |
| **Memphis-81** | 对"好品味"规则的激进颠覆 | 禁止常规对齐 |

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

# Install dependencies
npm install

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
/src
├── /primers/              # Design system definitions
│   ├── /rams-60/
│   │   ├── index.md       # Philosophy & metadata
│   │   ├── theme.css      # CSS variables
│   │   └── tokens.json    # Structured data
│   ├── /ando-concrete/
│   ├── /barragan-wall/
│   ├── /anderson-symmetry/
│   └── /memphis-81/
├── /layouts/              # Page layouts
├── /pages/                # Routes (index, about)
├── /styles/               # Global styles
└── /scripts/              # Interaction scripts

/public
└── /primers/              # Static assets for download
```

---

## Usage

### Web Experience

1. 打开网站，直接进入第一个设计体系的全屏渲染
2. 使用 `←` `→` 方向键或滚轮切换设计体系
3. 点击 `+` 按钮进入"解剖视图"查看详细设计规格
4. 通过 "Acquire Primer" 获取 CSS Variables 或 JSON

### In Your Project

```css
/* 直接使用 CSS Variables */
:root {
  --color-background: #F5F5F5;
  --color-primary: #E64A19;
  /* ... */
}
```

```bash
# 或使用 CLI (coming soon)
npx primer-cli add rams-60
```

---

## Design Principles

每个Primer都必须能回答三个核心问题：

1. **叙事核心 (Narrative Core)** — 它的灵魂来自哪里？
2. **系统规则 (Systemic Rules)** — 它的骨架如何支撑灵魂？
3. **标志性约束 (Signature Constraint)** — 它通过"不做什么"来定义自己？

---

## License

MIT © Primer Collective

---

*用深度对抗浅薄，用叙事对抗随机，用意图对抗惯性。*

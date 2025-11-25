/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // CSS variables are injected dynamically per-primer
      colors: {
        'primer-bg': 'var(--color-background)',
        'primer-surface': 'var(--color-surface)',
        'primer-text': 'var(--color-text-main)',
        'primer-muted': 'var(--color-text-muted)',
        'primer-primary': 'var(--color-primary)',
        'primer-accent': 'var(--color-accent)',
      },
      fontFamily: {
        'display': 'var(--font-display)',
        'body': 'var(--font-body)',
      },
      borderRadius: {
        'primer': 'var(--radius)',
      },
      transitionTimingFunction: {
        'primer': 'var(--transition-timing)',
      },
    },
  },
  plugins: [],
};

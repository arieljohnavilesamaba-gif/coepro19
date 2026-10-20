/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: 'var(--bg)',
          card: 'var(--surface)',
          surface: 'var(--surface-subtle)',
          border: 'var(--border)',
          text: 'var(--text-primary)',
          muted: 'var(--text-muted)',
        },
        theme: {
          bg: 'var(--bg)',
          'bg-subtle': 'var(--bg-subtle)',
          surface: 'var(--surface)',
          'surface-subtle': 'var(--surface-subtle)',
          'surface-hover': 'var(--surface-hover)',
          text: 'var(--text-primary)',
          'text-secondary': 'var(--text-secondary)',
          'text-muted': 'var(--text-muted)',
          border: 'var(--border)',
          'border-strong': 'var(--border-strong)',
          'border-subtle': 'var(--border-subtle)',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

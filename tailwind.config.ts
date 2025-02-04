import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
        },
        success: {
          DEFAULT: '#22c55e',
          light: '#4ade80',
        },
        warning: {
          DEFAULT: '#eab308',
          light: '#facc15',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#f87171',
        },
        info: {
          DEFAULT: '#6b7280',
          light: '#9ca3af',
        },
      },
      fontFamily: {
        archivo: ['var(--font-archivo)'],
        // 'geist-mono': ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
} satisfies Config

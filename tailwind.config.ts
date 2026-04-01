import type { Config } from 'tailwindcss';

// Custom color palette - Warm & Cozy Theme
const colors = {
  // Primary - Warm Coral
  primary: {
    DEFAULT: '#E8A598',
    dark: '#D4847A',
    light: '#F8D4CC',
  },
  // Secondary - Sage Mint
  secondary: {
    DEFAULT: '#A8D5BA',
    dark: '#8BC4A0',
    light: '#C8E8D4',
  },
  // Accent - Warm Amber
  accent: {
    DEFAULT: '#F4A261',
    dark: '#E8914D',
    alt: '#E76F51',
  },
  // Backgrounds
  background: {
    DEFAULT: '#FDF8F5',
    warm: '#FEF3EE',
    surface: '#FFFFFF',
  },
  // Text
  text: {
    DEFAULT: '#4A3728',
    muted: '#8B7355',
    light: '#FFFFFF',
  },
  // Border
  border: {
    DEFAULT: '#E8DDD5',
    light: '#F5EDE8',
  },
  // Footer
  footer: {
    bg: '#4A3728',
    text: '#FDF8F5',
  },
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        heading: ['Varela Round', 'system-ui', 'sans-serif'],
        body: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(74, 55, 40, 0.05)',
        'md': '0 4px 12px rgba(74, 55, 40, 0.08)',
        'lg': '0 8px 24px rgba(74, 55, 40, 0.12)',
        'xl': '0 12px 32px rgba(74, 55, 40, 0.16)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
};

export default config;

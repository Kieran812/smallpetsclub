/**
 * Exotic Pet Care - Design System Configuration
 *
 * This file exports all design tokens for the project.
 * Used with Tailwind CSS v4 via CSS custom properties.
 */

// Color Palette - Warm & Cozy Theme
export const colors = {
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
} as const;

// Typography
export const typography = {
  fontFamily: {
    heading: ['Varela Round', 'system-ui', 'sans-serif'],
    body: ['Nunito Sans', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '4rem',     // 64px
  },
} as const;

// Spacing
export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
} as const;

// Border Radius
export const borderRadius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
} as const;

// Shadows
export const shadows = {
  sm: '0 1px 2px rgba(74, 55, 40, 0.05)',
  md: '0 4px 12px rgba(74, 55, 40, 0.08)',
  lg: '0 8px 24px rgba(74, 55, 40, 0.12)',
  xl: '0 12px 32px rgba(74, 55, 40, 0.16)',
  'inner-light': 'inset 0 2px 4px rgba(255, 255, 255, 0.8)',
  'inner-dark': 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
} as const;

// Transitions
export const transitions = {
  fast: '150ms ease',
  base: '200ms ease',
  slow: '300ms ease',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-Index Scale
export const zIndex = {
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  toast: 50,
} as const;

// Pet Category Colors
export const petCategories = {
  hamster: {
    name: 'Hamster',
    slug: 'hamster',
    color: '#F8B4A0',
    bgGradient: 'linear-gradient(145deg, #FEF3EE 0%, #FDF8F5 100%)',
  },
  chinchilla: {
    name: 'Chinchilla',
    slug: 'chinchilla',
    color: '#B8C5D6',
    bgGradient: 'linear-gradient(145deg, #F0F4F8 0%, #E8EEF2 100%)',
  },
  hedgehog: {
    name: 'Hedgehog',
    slug: 'hedgehog',
    color: '#E8D4B8',
    bgGradient: 'linear-gradient(145deg, #FDF8F5 0%, #F5EDE5 100%)',
  },
  'fancy-rat': {
    name: 'Fancy Rat',
    slug: 'fancy-rat',
    color: '#C5D6B8',
    bgGradient: 'linear-gradient(145deg, #F5F9F2 0%, #EDF4E8 100%)',
  },
} as const;

// Trust Signals
export const trustSignals = [
  {
    icon: 'stethoscope',
    label: 'Expert Guides',
    description: 'Written by pet care specialists',
  },
  {
    icon: 'calendar',
    label: 'Updated Weekly',
    description: 'Fresh content every week',
  },
  {
    icon: 'badge-check',
    label: 'Vet Reviewed',
    description: 'Approved by veterinarians',
  },
  {
    icon: 'heart',
    label: 'Community Loved',
    description: '10,000+ happy readers',
  },
] as const;

// Export all tokens as CSS custom properties string
export const cssVariables = `
  :root {
    /* Colors */
    --color-primary: ${colors.primary.DEFAULT};
    --color-primary-dark: ${colors.primary.dark};
    --color-primary-light: ${colors.primary.light};
    --color-secondary: ${colors.secondary.DEFAULT};
    --color-secondary-dark: ${colors.secondary.dark};
    --color-secondary-light: ${colors.secondary.light};
    --color-accent: ${colors.accent.DEFAULT};
    --color-accent-dark: ${colors.accent.dark};
    --color-accent-alt: ${colors.accent.alt};
    --color-background: ${colors.background.DEFAULT};
    --color-background-warm: ${colors.background.warm};
    --color-surface: ${colors.background.surface};
    --color-text: ${colors.text.DEFAULT};
    --color-text-muted: ${colors.text.muted};
    --color-text-light: ${colors.text.light};
    --color-border: ${colors.border.DEFAULT};
    --color-border-light: ${colors.border.light};
    --color-footer-bg: ${colors.footer.bg};
    --color-footer-text: ${colors.footer.text};

    /* Spacing */
    --space-xs: ${spacing.xs};
    --space-sm: ${spacing.sm};
    --space-md: ${spacing.md};
    --space-lg: ${spacing.lg};
    --space-xl: ${spacing.xl};
    --space-2xl: ${spacing['2xl']};
    --space-3xl: ${spacing['3xl']};
    --space-4xl: ${spacing['4xl']};

    /* Border Radius */
    --radius-sm: ${borderRadius.sm};
    --radius-md: ${borderRadius.md};
    --radius-lg: ${borderRadius.lg};
    --radius-xl: ${borderRadius.xl};
    --radius-2xl: ${borderRadius['2xl']};
    --radius-full: ${borderRadius.full};

    /* Shadows */
    --shadow-sm: ${shadows.sm};
    --shadow-md: ${shadows.md};
    --shadow-lg: ${shadows.lg};
    --shadow-xl: ${shadows.xl};

    /* Transitions */
    --transition-fast: ${transitions.fast};
    --transition-base: ${transitions.base};
    --transition-slow: ${transitions.slow};

    /* Z-Index */
    --z-dropdown: ${zIndex.dropdown};
    --z-sticky: ${zIndex.sticky};
    --z-overlay: ${zIndex.overlay};
    --z-modal: ${zIndex.modal};
    --z-toast: ${zIndex.toast};
  }
`.trim();

# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Exotic Pet Care
**Generated:** 2026-03-31 20:39:44
**Category:** Exotic Pet Care Content Website (Blog/Care Guides)
**Target Audience:** 18-35 year old women, mobile-first, warm/cozy aesthetic
**Location:** `/2.独立站/design-system/`

---

## File Structure

```
design-system/
├── MASTER.md          # This file - Global design rules
└── pages/
    ├── homepage.md    # Homepage specific rules
    └── blog.md       # Blog listing page rules
```

## Global Rules

### Color Palette (Warm & Cozy Theme)

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Primary | `#E8A598` | `--color-primary` | Warm coral - main brand color, pet-friendly warmth |
| Primary Dark | `#D4847A` | `--color-primary-dark` | Hover states, emphasis |
| Secondary | `#A8D5BA` | `--color-secondary` | Sage mint - nature, calm, pet health |
| Accent | `#F4A261` | `--color-accent` | Warm amber - CTAs, highlights |
| Accent Alt | `#E76F51` | `--color-accent-alt` | Coral red - badges, notifications |
| Background | `#FDF8F5` | `--color-background` | Warm cream - main background |
| Surface | `#FFFFFF` | `--color-surface` | Cards, elevated surfaces |
| Surface Alt | `#FEF3EE` | `--color-surface-alt` | Slightly warm surface |
| Text | `#4A3728` | `--color-text` | Warm dark brown - body text |
| Text Muted | `#8B7355` | `--color-text-muted` | Muted brown - secondary text |
| Border | `#E8DDD5` | `--color-border` | Warm light gray |

**Color Notes:** Warm coral + sage mint create a nurturing, pet-friendly atmosphere. The palette avoids harsh colors in favor of soft, approachable tones that match the target audience (young women interested in cute pets).

**Accessibility:** All text meets 4.5:1 contrast ratio minimum. Primary colors on white/pass-light backgrounds are accessible.

### Typography

- **Heading Font:** Varela Round
- **Body Font:** Nunito Sans
- **Mood:** soft, rounded, friendly, approachable, warm, gentle
- **Google Fonts:** [Varela Round + Nunito Sans](https://fonts.google.com/share?selection.family=Nunito+Sans:wght@300;400;500;600;700|Varela+Round)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Varela+Round&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button - Warm Coral */
.btn-primary {
  background: linear-gradient(135deg, #E8A598 0%, #D4847A 100%);
  color: white;
  padding: 14px 28px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 200ms ease;
  box-shadow: 0 4px 12px rgba(232, 165, 152, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232, 165, 152, 0.5);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Secondary Button - Outline */
.btn-secondary {
  background: transparent;
  color: #E8A598;
  border: 2px solid #E8A598;
  padding: 12px 24px;
  border-radius: 16px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #FEF3EE;
  border-color: #D4847A;
  color: #D4847A;
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: #4A3728;
  padding: 12px 24px;
  border-radius: 16px;
  font-weight: 500;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-ghost:hover {
  background: #FEF3EE;
}
```

### Cards (Claymorphism Style)

```css
/* Base Card */
.card {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 24px;
  box-shadow:
    8px 8px 16px rgba(0, 0, 0, 0.06),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
  transition: all 200ms ease;
  cursor: pointer;
  border: 1px solid #E8DDD5;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow:
    12px 12px 24px rgba(0, 0, 0, 0.08),
    -8px -8px 16px rgba(255, 255, 255, 0.9);
}

/* Pet Category Card - Extra Padded */
.card-pet {
  background: linear-gradient(145deg, #FEF3EE 0%, #FDF8F5 100%);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  border: 3px solid transparent;
  transition: all 200ms ease;
  cursor: pointer;
}

.card-pet:hover {
  border-color: #E8A598;
  transform: translateY(-4px) scale(1.02);
}

/* Blog Post Card */
.card-post {
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(74, 55, 40, 0.08);
  transition: all 200ms ease;
  cursor: pointer;
}

.card-post:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(74, 55, 40, 0.12);
}
```

### Inputs

```css
.input {
  padding: 14px 18px;
  border: 2px solid #E8DDD5;
  border-radius: 14px;
  font-size: 16px;
  background: #FFFFFF;
  transition: all 200ms ease;
}

.input:focus {
  border-color: #E8A598;
  outline: none;
  box-shadow: 0 0 0 4px rgba(232, 165, 152, 0.15);
}

/* Search Input */
.input-search {
  padding: 14px 18px 14px 48px;
  border: 2px solid #E8DDD5;
  border-radius: 24px;
  font-size: 16px;
  background: #FFFFFF url("data:image/svg+xml,...") no-repeat 16px center;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(74, 55, 40, 0.4);
  backdrop-filter: blur(8px);
}

.modal {
  background: #FFFFFF;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(74, 55, 40, 0.2);
  max-width: 500px;
  width: 90%;
}

/* Navigation Dropdown */
.nav-dropdown {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 16px;
  box-shadow:
    0 10px 40px rgba(74, 55, 40, 0.15),
    0 0 0 1px #E8DDD5;
}
```

---

## Style Guidelines

**Style:** Claymorphism

**Keywords:** Soft 3D, chunky, playful, toy-like, bubbly, thick borders (3-4px), double shadows, rounded (16-24px)

**Best For:** Educational apps, children's apps, SaaS platforms, creative tools, fun-focused, onboarding, casual games

**Key Effects:** Inner+outer shadows (subtle, no hard lines), soft press (200ms ease-out), fluffy elements, smooth transitions

### Page Pattern

**Pattern Name:** Social Proof-Focused + Trust

- **CTA Placement:** Above fold
- **Section Order:** Hero > Features > CTA

---

## Anti-Patterns (Do NOT Use)

- ❌ Generic design
- ❌ Hidden services

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile

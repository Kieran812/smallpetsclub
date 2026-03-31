# Homepage Design Specification

> **Overrides:** This page follows specific rules below. For global rules, see `MASTER.md`.

---

## Page Overview

**Page:** Homepage (`/`)
**Purpose:** First impression, showcase pet categories, highlight featured content
**Mobile-First:** Yes (designed for 375px first, scales up)

---

## Layout Structure

### Mobile Layout (< 640px)

```
┌─────────────────────────┐
│ Announcement Bar        │ 40px
├─────────────────────────┤
│ Header (Logo + Search)  │ 64px
├─────────────────────────┤
│ Hamburger Menu          │
├─────────────────────────┤
│ Hero Banner            │ 100vh or 70vh
│ - Headline             │
│ - Subtext              │
│ - CTA Button           │
├─────────────────────────┤
│ Pet Category Grid      │ auto
│ - 2x2 Grid             │
│ - 4 Pet Cards          │
├─────────────────────────┤
│ Featured Articles      │ auto
│ - "Latest Guides"      │
│ - 1 Column Cards       │
├─────────────────────────┤
│ Trust Signals Bar      │ auto
│ - 4 Icons + Text      │
├─────────────────────────┤
│ About Snippet          │ auto
├─────────────────────────┤
│ Footer                 │
└─────────────────────────┘
```

### Desktop Layout (≥ 1024px)

```
┌────────────────────────────────────────────────────────────┐
│ Announcement Bar (100% width)                    40px      │
├────────────────────────────────────────────────────────────┤
│ Header: Logo | Nav Links | Search Icon          72px      │
├────────────────────────────────────────────────────────────┤
│ Hero Banner (Full Width with Illustration)       80vh      │
├────────────────────────────────────────────────────────────┤
│ Pet Category Grid (4 Columns)                  auto      │
├────────────────────────────────────────────────────────────┤
│ Featured Articles (3 Column Cards)              auto      │
├────────────────────────────────────────────────────────────┤
│ Trust Signals Bar (4 Columns)                  auto      │
├────────────────────────────────────────────────────────────┤
│ About Snippet (2 Column: Text + Image)         auto      │
├────────────────────────────────────────────────────────────┤
│ Footer (3 Column + Social)                     auto      │
└────────────────────────────────────────────────────────────┘
```

---

## Section Specifications

### 1. Announcement Bar

| Property | Mobile | Desktop |
|----------|--------|---------|
| Height | 40px | 40px |
| Background | `#F4A261` | `#F4A261` |
| Text Color | `#FFFFFF` | `#FFFFFF` |
| Font | Nunito Sans, 14px | Nunito Sans, 14px |
| Animation | Carousel rotation 5s | Carousel rotation 5s |

**Content Examples:**
- "New: Complete Hamster Care Guide just added!"
- "Join 10,000+ pet parents in our community"
- "Free shipping on orders over $50"

### 2. Header

| Property | Mobile | Desktop |
|----------|--------|---------|
| Height | 64px | 72px |
| Background | `#FDF8F5` | `#FDF8F5` |
| Border Bottom | 1px `#E8DDD5` | 1px `#E8DDD5` |
| Position | Sticky | Sticky |
| Shadow | None (on scroll: shadow-sm) | None (on scroll: shadow-sm) |

**Logo:**
- Left aligned
- Size: 40px height (mobile), 48px height (desktop)
- SVG or PNG

**Navigation:**
- Mobile: Hamburger icon (right), opens slide-out drawer
- Desktop: Horizontal nav links with mega-menu on hover

**Nav Items:**
- Home (link)
- Care Guides (dropdown trigger) → Mega menu
- Blog (link)
- About (link)
- Search icon (right)

**Search:**
- Mobile: Opens full-screen overlay
- Desktop: Opens search dropdown

### 3. Hero Banner

| Property | Mobile | Desktop |
|----------|--------|---------|
| Height | 70vh | 80vh |
| Background | Gradient `#FEF3EE` to `#FDF8F5` | Gradient `#FEF3EE` to `#FDF8F5` |
| Illustration | Pet illustration (centered, 50% width) | Pet illustration (right, 40% width) |
| Content Alignment | Center | Left |

**Content (Left Side on Desktop):**
- Eyebrow Text: "Your Pet's Health Matters" (optional)
- Headline (H1): "Expert Care Guides for Your Furry Friends" (48px mobile / 64px desktop)
- Subtext: "From hamsters to chinchillas, find everything you need to give your exotic pets the love and care they deserve." (18px, muted color)
- CTA Button: "Explore Care Guides" → links to /blog

**Typography:**
- Headline: Varela Round, Bold
- Subtext: Nunito Sans, Regular

### 4. Pet Category Grid

| Property | Mobile | Desktop |
|----------|--------|---------|
| Grid | 2x2 | 4x1 |
| Gap | 16px | 24px |
| Padding | 24px | 48px |
| Background | `#FDF8F5` | `#FDF8F5` |

**Section Header:**
- Text: "Browse by Pet"
- Style: Centered, H2, Varela Round
- Subtext: "Choose your little companion"

**Pet Cards:**

| Pet | Icon/Illustration | Color Accent |
|-----|------------------|--------------|
| Hamster | Cute hamster illustration | `#F8B4A0` (soft coral) |
| Chinchilla | Chinchilla illustration | `#B8C5D6` (soft blue-gray) |
| Hedgehog | Hedgehog illustration | `#E8D4B8` (soft tan) |
| Fancy Rat | Rat illustration | `#C5D6B8` (soft sage) |

**Card Content:**
- Pet illustration (120px mobile, 160px desktop)
- Pet name (H3, centered)
- Subtitle: "X Care Guides" (muted text)

**Interaction:**
- Hover: Scale 1.02, border highlight
- Click: Navigate to `/category/[pet-slug]`

### 5. Featured Articles

| Property | Mobile | Desktop |
|----------|--------|---------|
| Grid | 1 column | 3 columns |
| Gap | 16px | 24px |
| Padding | 24px | 48px |
| Background | `#FFFFFF` | `#FFFFFF` |

**Section Header:**
- Text: "Latest Guides"
- Link: "View All →" (right aligned)
- Style: H2 + link

**Article Cards:**

```
┌──────────────────────────────────┐
│ [Featured Image - 16:9 ratio]   │
├──────────────────────────────────┤
│ [Category Badge]  [Read Time]   │
│                                  │
│ Article Title                   │
│ Short excerpt of the article...  │
│                                  │
│ [Author] · [Date]               │
└──────────────────────────────────┘
```

**Card Specs:**
- Image: 16:9 aspect ratio, rounded top corners (16px)
- Category Badge: Pill shape, background `#E8A598`, text white
- Title: H3, 2 lines max, Varela Round
- Excerpt: 2 lines max, Nunito Sans, muted
- Meta: Author name + date, small text

### 6. Trust Signals Bar

| Property | Value |
|----------|-------|
| Background | `#FEF3EE` |
| Padding | 32px vertical |
| Items | 4 columns (mobile: 2x2) |
| Gap | 24px |

**Icons + Text:**

| Icon | Label | Description |
|------|-------|-------------|
| 🩺 (stethoscope) | Expert Guides | Written by pet care specialists |
| 📅 (calendar) | Updated Weekly | Fresh content every week |
| ✓ (checkmark) | Vet Reviewed | Approved by veterinarians |
| 💚 (heart) | Community Loved | 10,000+ happy readers |

**Icon Specs:**
- Size: 48px container
- Icon: 32px, color `#E8A598`
- Label: 16px, bold
- Description: 14px, muted

### 7. About Snippet

| Property | Mobile | Desktop |
|----------|--------|---------|
| Layout | Stacked | 2 columns |
| Padding | 48px | 64px |
| Background | `#FFFFFF` | `#FFFFFF` |

**Content:**
- Headline: "About Exotic Pet Care"
- Text: Brief intro about the mission (3-4 sentences)
- CTA: "Learn More About Us →"

**Image (Desktop):**
- Optional team or pet photo
- Rounded corners (24px)
- Shadow

### 8. Footer

| Property | Value |
|----------|-------|
| Background | `#4A3728` (dark warm brown) |
| Text Color | `#FDF8F5` (cream) |
| Padding | 64px top, 32px bottom |

**Layout (3 Columns + Bottom):**

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Pet Care | Resources | Legal |
| - Hamster Care | - About Us | - Privacy Policy |
| - Chinchilla Care | - Blog | - Terms of Use |
| - Hedgehog Care | - Contact | - Cookie Policy |
| - Fancy Rat Care | - FAQs | |

**Bottom Section:**
- Logo
- Social Icons: Instagram, Pinterest, YouTube, TikTok
- Copyright: "© 2026 Exotic Pet Care. All rights reserved."

**Mobile Footer:**
- Accordion style, each column collapsible
- Expanded by default on load

---

## Component States

### Announcement Bar Carousel

```css
.carousel {
  animation: slide 5s infinite;
}

@keyframes slide {
  0%, 20% { transform: translateY(0); }
  25%, 45% { transform: translateY(-100%); }
  50%, 70% { transform: translateY(-200%); }
  75%, 100% { transform: translateY(0); }
}
```

### Navigation Dropdown (Mega Menu)

**Trigger:** Hover or click on "Care Guides"
**Animation:** Fade in + slide down, 200ms ease-out
**Shadow:** `0 10px 40px rgba(74, 55, 40, 0.15)`

### Mobile Navigation Drawer

**Width:** 85% of viewport
**Animation:** Slide in from right, 300ms ease-out
**Overlay:** Semi-transparent dark background

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|---------------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640px - 1023px | 2-column grids, simplified nav |
| Desktop | 1024px - 1279px | Full nav, 3-column grids |
| Wide | ≥ 1280px | Max-width container (1280px) |

---

## Accessibility

- All images have descriptive alt text
- Focus states visible on all interactive elements
- Keyboard navigation supported throughout
- Color contrast meets WCAG AA (4.5:1)
- Touch targets minimum 44x44px
- `prefers-reduced-motion` respected

---

## Implementation Notes

1. Use Next.js `Image` component for all images with proper srcset
2. All icons from Lucide React (no emojis)
3. Use CSS custom properties from MASTER.md
4. Implement as server components where possible
5. Mobile menu uses client component with React state

# Blog Listing Page Design Specification

> **Overrides:** This page follows specific rules below. For global rules, see `MASTER.md`.

---

## Page Overview

**Page:** Blog Listing (`/blog`)
**Purpose:** Display all blog posts with filtering capabilities
**Mobile-First:** Yes

---

## Layout Structure

### Mobile Layout (< 640px)

```
┌─────────────────────────┐
│ Header                 │ (shared layout)
├─────────────────────────┤
│ Page Title             │ "Blog"
│ Meta: X articles       │
├─────────────────────────┤
│ Category Filter        │ Horizontal scroll
│ [All][Hamster][Chin]...│
├─────────────────────────┤
│ Search Bar             │ Full width
├─────────────────────────┤
│ Post Grid              │ 1 column
│ ┌─────────────────────┐│
│ │ Post Card           ││
│ └─────────────────────┘│
│ ┌─────────────────────┐│
│ │ Post Card           ││
│ └─────────────────────┘│
├─────────────────────────┤
│ Pagination             │
├─────────────────────────┤
│ Footer                 │
└─────────────────────────┘
```

### Desktop Layout (≥ 1024px)

```
┌────────────────────────────────────────────────────────────┐
│ Header (shared)                                sticky     │
├────────────────────────────────────────────────────────────┤
│ Page Title + Meta                    left     |  Search   │
├────────────────────────────────────────────────────────────┤
│ Category Filter Pills (horizontal, centered)               │
├────────────────────────────────────────────────────────────┤
│ Post Grid (3 columns)                                      │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐                       │
│ │ Card    │ │ Card    │ │ Card    │                       │
│ └─────────┘ └─────────┘ └─────────┘                       │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐                       │
│ │ Card    │ │ Card    │ │ Card    │                       │
│ └─────────┘ └─────────┘ └─────────┘                       │
├────────────────────────────────────────────────────────────┤
│ Pagination                                                 │
├────────────────────────────────────────────────────────────┤
│ Footer                                                     │
└────────────────────────────────────────────────────────────┘
```

---

## Section Specifications

### 1. Page Header

| Property | Mobile | Desktop |
|----------|--------|---------|
| Padding | 24px | 48px |
| Background | `#FDF8F5` | `#FDF8F5` |

**Content:**
- Page Title: H1, "Blog" or "Care Guides"
- Meta: "Showing X articles" (muted text)

### 2. Search Bar

| Property | Mobile | Desktop |
|----------|--------|---------|
| Width | 100% | 320px (right side) |
| Position | Below title | Inline with title |
| Placeholder | "Search articles..." | "Search articles..." |

**Style:**
- Rounded pill shape (24px radius)
- Search icon on left
- Clear button on right when has value
- Background: white
- Border: 2px `#E8DDD5`
- Focus: border `#E8A598`

### 3. Category Filter

| Property | Mobile | Desktop |
|----------|--------|---------|
| Layout | Horizontal scroll | Flex wrap, centered |
| Gap | 8px | 12px |
| Padding | 16px horizontal | 24px horizontal |

**Pill Style:**
- Default: bg `#FEF3EE`, text `#4A3728`
- Active: bg `#E8A598`, text white
- Hover: bg `#F8D4CC`
- Padding: 10px 20px
- Border Radius: 24px
- Font: Nunito Sans, 14px, medium weight

**Categories:**
- All
- Hamster
- Chinchilla
- Hedgehog
- Fancy Rat

### 4. Post Grid

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Columns | 1 | 2 | 3 |
| Gap | 16px | 20px | 24px |
| Padding | 0 24px | 0 32px | 0 48px |

### 5. Post Card Component

```
┌────────────────────────────────────┐
│ [Featured Image - 16:9 ratio]     │
│                                    │
│ ┌────────────────────────────────┐│
│ │ [Category Badge]               ││
│ └────────────────────────────────┘│
├────────────────────────────────────┤
│ [Read Time Badge]                  │
│                                    │
│ Article Title Goes Here           │
│                                    │
│ Short excerpt text describing the │
│ article content...                 │
│                                    │
│ [Avatar] Author Name  ·  Mar 28  │
└────────────────────────────────────┘
```

**Card Specs:**

| Element | Style |
|---------|-------|
| Image | 16:9 ratio, rounded corners 16px, hover: subtle scale |
| Category Badge | Position absolute on image, bottom-left, pill shape |
| Read Time | Top-right of content area, muted text + clock icon |
| Title | H3, Varela Round, 2 lines max, hover: color change to primary |
| Excerpt | Nunito Sans, 2 lines max, muted color |
| Author | Avatar (32px circle) + name + date |
| Card Background | White |
| Card Shadow | Subtle on hover |
| Card Radius | 20px |

### 6. Empty State

**When no posts match filter:**
```
┌─────────────────────────────────┐
│                                 │
│      🐾 (SVG icon)              │
│                                 │
│   No articles found            │
│                                 │
│   Try a different category     │
│   or search term               │
│                                 │
│   [Clear Filters]              │
│                                 │
└─────────────────────────────────┘
```

### 7. Pagination

| Property | Mobile | Desktop |
|----------|--------|---------|
| Style | Simple | With page numbers |
| Gap | 8px | 8px |

**Mobile Style:**
```
← Previous    Page 1 of 10    Next →
```

**Desktop Style:**
```
← Previous    1  2  3  ...  10    Next →
```

**Page Number:**
- Default: text only
- Active: bg primary, text white, pill shape
- Hover: bg light

### 8. Mobile Navigation Drawer

**Same as homepage for consistency**

---

## Component States

### Category Pill

| State | Background | Text Color |
|-------|------------|------------|
| Default | `#FEF3EE` | `#4A3728` |
| Hover | `#F8D4CC` | `#4A3728` |
| Active | `#E8A598` | `#FFFFFF` |
| Disabled | `#E8DDD5` | `#8B7355` |

### Post Card

| State | Shadow | Transform |
|-------|--------|-----------|
| Default | `0 2px 8px rgba(74,55,40,0.06)` | none |
| Hover | `0 8px 24px rgba(74,55,40,0.12)` | `translateY(-4px)` |
| Focus | 3px outline `#E8A598` | none |

### Search Input

| State | Border | Shadow |
|-------|--------|--------|
| Default | `#E8DDD5` | none |
| Focus | `#E8A598` | `0 0 0 4px rgba(232,165,152,0.15)` |
| With Value | `#E8DDD5` | none |

---

## Accessibility

- Category filter uses proper radio/button semantics for screen readers
- Search has proper label
- Pagination has proper nav/aria-label
- Focus visible on all interactive elements
- Post images have descriptive alt text

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|---------------|
| Mobile | < 640px | Single column, horizontal scroll filter |
| Tablet | 640px - 1023px | 2-column grid |
| Desktop | 1024px - 1279px | 3-column grid |
| Wide | ≥ 1280px | Max-width 1280px |

---

## Implementation Notes

1. Category filter uses client-side filtering for instant response
2. Search debounced (300ms) to avoid excessive queries
3. Images use Next.js Image with responsive srcset
4. Pagination uses URL params for shareable/bookmarkable URLs
5. Post cards are server components, filter UI is client component

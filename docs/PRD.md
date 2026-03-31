# PRD: Exotic Pet Care Website

> Product Requirements Document v1.0
> Last Updated: 2026-03-31

---

## 1. Product Overview

### 1.1 Project Summary

Build an English-language exotic pet care content website, targeting 18-35 year old young women. The site provides care guides, daily nurturing tips, and blog content for exotic pets including hamsters, chinchillas, hedgehogs, and fancy rats.

### 1.2 Project Goals

- **Phase 1 (MVP)**: Launch a content-first website with blog, care resources, and category pages, managed via an admin dashboard
- **Phase 2**: Add e-commerce (online store with Stripe payments)
- **Phase 3**: Add community features (forums, user-generated content, newsletter)

### 1.3 Target Audience

| Attribute | Detail |
|-----------|--------|
| Age | 18-35 years old |
| Gender | Primarily female |
| Language | English |
| Interests | Exotic pet care, small animal welfare, pet lifestyle |
| Behavior | Mobile-first browsing, social media active, values cute/warm aesthetics |

### 1.4 Reference Site Analysis

Reference: [shop.smallpetselect.com](https://shop.smallpetselect.com/) (Shopify-based small pet supplies store)

**Key takeaways to adopt:**

| Feature | Reference Site | Our Adaptation |
|---------|---------------|----------------|
| Navigation | Mega-menu organized by pet type (Rabbits, Guinea Pigs, Chinchillas, etc.) with product sub-categories | Mega-menu organized by pet type with care topic sub-categories |
| Announcement Bar | Rotating messages (shipping info, reviews count, free shipping threshold) | Rotating messages (new articles, care tips, community highlights) |
| Homepage | Hero banner + product grid + featured collections + social proof | Hero banner + pet category grid + featured articles + trust signals |
| Content | Care Resources page + Blog section | Core focus — rich blog/care guide system with category filtering |
| Social Proof | 120,000+ reviews, Yotpo UGC gallery, testimonials page | Reader testimonials, article view counts, community stats |
| Search | Predictive search with rotating placeholder text | Full-text blog search with category suggestions |
| Mobile | Hamburger menu, stacked layouts, collapsible sections | Mobile-first responsive design with slide-out navigation |
| Footer | 3-column layout: Shop links, Resources, Legal + social media icons | 3-column layout: Pet Categories, Resources, Legal + social media |

**Features to defer:**
- Product listings, shopping cart, checkout (Phase 2)
- Rewards/loyalty program (Phase 3)
- Auto-ship/subscription (Phase 3)
- Wholesale portal (Phase 3)

---

## 2. Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 15 (App Router, TypeScript) | SSR/SSG, routing, API routes |
| Database | Supabase (PostgreSQL) | Data storage, RLS, real-time |
| Styling | TailwindCSS v4 + Shadcn/UI | UI components, responsive design |
| Auth | Clerk | User authentication, role management |
| Payments | Stripe | Online payments (Phase 2) |
| Email | Resend | Transactional & marketing emails |
| Storage | Cloudflare R2 | Image/media file storage |
| Hosting | Vercel | Deployment, CDN, serverless |
| Rich Text Editor | Tiptap v2 | Headless editor for admin CMS |
| Validation | Zod | Schema validation |
| Icons | Lucide React | Icon library |

---

## 3. Information Architecture

### 3.1 Sitemap

```
Homepage (/)
├── Blog (/blog)
│   ├── Blog Post (/blog/[slug])
│   └── Blog filtered by category (/blog?category=[slug])
├── Care Guides by Pet Type
│   └── Category Page (/category/[slug])
├── About Us (/about)
├── Static Pages (/[slug])
│   ├── Privacy Policy
│   ├── Terms of Service
│   └── Contact
├── Auth (Clerk-managed)
│   ├── Sign In (/sign-in)
│   └── Sign Up (/sign-up)
└── Admin Dashboard (/admin) [Protected]
    ├── Dashboard Overview (/admin)
    ├── Posts Management (/admin/posts)
    │   ├── Create Post (/admin/posts/new)
    │   └── Edit Post (/admin/posts/[id]/edit)
    ├── Categories (/admin/categories)
    ├── Menu Editor (/admin/menus)
    ├── Media Library (/admin/media)
    ├── Pages (/admin/pages)
    │   └── Edit Page (/admin/pages/[id]/edit)
    └── Settings (/admin/settings)
```

### 3.2 Pet Categories (Initial)

| Pet | Slug | Care Topics |
|-----|------|-------------|
| Hamster | `hamster` | Housing, diet, health, behavior, grooming, enrichment |
| Chinchilla | `chinchilla` | Housing, diet, dust baths, temperature, socialization |
| Hedgehog | `hedgehog` | Housing, diet, handling, health, hibernation prevention |
| Fancy Rat | `fancy-rat` | Housing, diet, socialization, health, training |

> Categories are expandable — more pet types (sugar gliders, ferrets, rabbits, guinea pigs, etc.) can be added via the admin dashboard at any time.

---

## 4. Page Specifications

### 4.1 Public Layout (Header + Footer)

**Header:**

```
┌─────────────────────────────────────────────────────────────────┐
│ [Announcement Bar - rotating messages]                          │
├─────────────────────────────────────────────────────────────────┤
│ [Logo]    [Nav: Home | Care Guides ▾ | Blog | About]  [Search] │
│           ┌─────────────────────────────────┐                   │
│           │ Care Guides ▾                   │                   │
│           │  ├─ Hamsters                    │                   │
│           │  │   ├─ Housing & Setup         │                   │
│           │  │   ├─ Diet & Nutrition        │                   │
│           │  │   └─ Health & Wellness       │                   │
│           │  ├─ Chinchillas                 │                   │
│           │  ├─ Hedgehogs                   │                   │
│           │  └─ Fancy Rats                  │                   │
│           └─────────────────────────────────┘                   │
└─────────────────────────────────────────────────────────────────┘
```

- Navigation supports up to **3 levels** of nesting
- All menu items are managed from admin dashboard
- Mobile: collapses into hamburger menu with slide-out drawer
- Sticky header on scroll (optional, configurable)
- Search icon opens a search overlay with predictive results

**Footer:**

```
┌─────────────────────────────────────────────────────────────────┐
│  [Column 1: Pet Care]    [Column 2: Resources]  [Column 3: Legal]│
│  - Hamster Care          - About Us              - Privacy Policy │
│  - Chinchilla Care       - Blog                  - Terms of Use   │
│  - Hedgehog Care         - Contact Us            - Cookie Policy   │
│  - Fancy Rat Care        - FAQs                                   │
├─────────────────────────────────────────────────────────────────┤
│  [Logo]  [Social: Instagram | Pinterest | YouTube | TikTok]     │
│  © 2026 Exotic Pet Care. All rights reserved.                   │
└─────────────────────────────────────────────────────────────────┘
```

- Footer menu items managed from admin (same system as header)
- Social media links configurable in site settings
- Mobile: columns stack vertically with collapsible accordion

### 4.2 Homepage

| Section | Description | Priority |
|---------|-------------|----------|
| Announcement Bar | Rotating text messages (new article alerts, tips, etc.) | P0 |
| Hero Banner | Full-width image/illustration with headline + CTA ("Explore Care Guides") | P0 |
| Pet Category Grid | 4 cards (Hamster, Chinchilla, Hedgehog, Fancy Rat) with cute illustrations, linking to category pages | P0 |
| Featured Articles | 3-6 featured blog posts in card grid (image, title, excerpt, category tag) | P0 |
| Trust Signals Bar | Icon row: "Expert Guides" / "Updated Weekly" / "Vet Reviewed" / "Community Loved" | P1 |
| About Snippet | Brief intro paragraph + "Learn More" link to About page | P1 |

### 4.3 Blog Listing Page (`/blog`)

| Element | Description |
|---------|-------------|
| Page Title | "Blog" with meta description for SEO |
| Category Filter | Horizontal pill/tag bar showing all categories, click to filter |
| Search Bar | Full-text search across post titles and excerpts |
| Post Grid | Responsive grid of post cards (2 cols mobile, 3 cols tablet, 4 cols desktop) |
| Post Card | Featured image, category badge, title, excerpt (120 chars), reading time, published date |
| Pagination | Page-based pagination with "Previous / Next" + page numbers |
| Empty State | Friendly message when no posts match filter/search |

**Post Card Component:**

```
┌──────────────────────┐
│ [Featured Image]     │
│ ┌──────────────────┐ │
│ │ 🏷 Hamster Care  │ │
│ │                  │ │
│ │ How to Set Up    │ │
│ │ the Perfect      │ │
│ │ Hamster Habitat  │ │
│ │                  │ │
│ │ Learn everything │ │
│ │ about creating...│ │
│ │                  │ │
│ │ 📖 5 min read    │ │
│ │ Mar 28, 2026     │ │
│ └──────────────────┘ │
└──────────────────────┘
```

### 4.4 Blog Detail Page (`/blog/[slug]`)

| Element | Description |
|---------|-------------|
| Breadcrumb | Home > Blog > [Category] > [Title] |
| Article Header | Title (H1), author name, published date, reading time, category tags |
| Featured Image | Full-width hero image with alt text |
| Article Body | Rendered Tiptap HTML content (supports headings, lists, images, links, blockquotes, code blocks) |
| Table of Contents | Auto-generated from H2/H3 headings, sticky sidebar on desktop |
| Related Posts | 3 related articles from same category at bottom |
| Social Share | Share buttons for Twitter, Facebook, Pinterest, copy link |
| JSON-LD | Article structured data for Google rich snippets |

### 4.5 Category Page (`/category/[slug]`)

| Element | Description |
|---------|-------------|
| Category Header | Category name (H1), description, optional hero image |
| Sub-categories | If any child categories exist, show as filter chips |
| Post Grid | All published posts in this category, same card layout as blog listing |
| Pagination | Same as blog listing |
| SEO | Unique meta title/description per category |

### 4.6 About Us Page (`/about`)

| Element | Description |
|---------|-------------|
| Hero Section | Team/brand image with mission statement |
| Our Story | Rich text content about the brand (managed from admin Pages) |
| Our Values | Icon grid: Love for Animals, Expert Knowledge, Community First, etc. |
| Team Section | Optional team member cards (photo, name, role, bio) |
| CTA | "Start Reading Our Guides" button linking to blog |

### 4.7 Search Results

| Element | Description |
|---------|-------------|
| Search Input | Pre-filled with search query, clearable |
| Results Count | "X results for [query]" |
| Results List | Same post card grid as blog listing |
| No Results | Friendly empty state with suggested categories |

---

## 5. Admin Dashboard

### 5.1 Access Control

| Role | Permissions |
|------|-------------|
| **Admin** | Full access: posts, categories, menus, media, pages, settings, user management |
| **Editor** | Posts (own + all), categories, media uploads. No access to: menus, settings, user management |

- Authentication via Clerk
- Role stored in Supabase `user_roles` table
- Admin routes protected by Clerk middleware (`/admin/*`)

### 5.2 Admin Layout

```
┌──────────────────────────────────────────────────────┐
│ [Logo] Admin Dashboard                    [User ▾]   │
├────────────┬─────────────────────────────────────────┤
│            │                                         │
│ Dashboard  │  [Main Content Area]                    │
│ Posts      │                                         │
│ Categories │                                         │
│ Menus      │                                         │
│ Media      │                                         │
│ Pages      │                                         │
│ Settings   │                                         │
│            │                                         │
│ ─────────  │                                         │
│ View Site→ │                                         │
│            │                                         │
└────────────┴─────────────────────────────────────────┘
```

### 5.3 Post Management

**Post List (`/admin/posts`):**

| Feature | Description |
|---------|-------------|
| Table View | Title, status (badge), categories, author, published date, updated date |
| Filters | Status (All / Draft / Published / Archived), Category dropdown |
| Search | Search by title |
| Sorting | By date (default newest), title, status |
| Bulk Actions | Delete selected, change status |
| Quick Actions | Edit, view on site, duplicate, delete per row |

**Post Editor (`/admin/posts/new` & `/admin/posts/[id]/edit`):**

| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| Title | Text input | Required, max 200 chars | H1 of the article |
| Slug | Text input | Required, unique, auto-generated from title | URL path, editable |
| Excerpt | Textarea | Max 300 chars | Used in post cards and meta description fallback |
| Content | Tiptap Rich Text Editor | Required | Supports: headings (H2-H4), bold, italic, lists, links, images (R2 upload), blockquotes, code blocks, tables |
| Featured Image | Image upload | Recommended | Upload to R2, displays in post cards and hero |
| Categories | Multi-select | At least 1 required | Choose from existing categories |
| Status | Dropdown | Required | Draft / Published / Archived |
| Is Featured | Toggle | Default off | Shows on homepage featured section |
| Published At | Date picker | Auto-set on first publish | Editable for scheduling |

**SEO Fields (collapsible section in post editor):**

| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| Meta Title | Text input | Max 60 chars | Defaults to post title if empty |
| Meta Description | Textarea | Max 160 chars | Defaults to excerpt if empty |
| OG Image | Image upload | Optional | Defaults to featured image |
| Canonical URL | URL input | Optional | For cross-posted content |

### 5.4 Category Management (`/admin/categories`)

| Feature | Description |
|---------|-------------|
| Tree View | Drag-and-drop category tree showing hierarchy |
| Create | Name, slug (auto-gen), description, parent category (optional), position |
| Edit | Inline edit or modal |
| Delete | With confirmation, prevents deletion if posts are assigned |
| Limits | Up to 2 levels of nesting (parent → child) |

### 5.5 Menu Editor (`/admin/menus`)

| Feature | Description |
|---------|-------------|
| Location Tabs | Switch between Header menu and Footer menu |
| Tree View | Visual tree showing menu hierarchy with drag-and-drop reorder |
| Add Item | Label (display text), URL (internal path or external URL), open in new tab toggle |
| Nesting | Drag items to nest, **max 3 levels deep** |
| Visibility | Toggle to hide/show individual menu items without deleting |
| Preview | Live preview of how the menu renders on the site |

**Menu Item Fields:**

| Field | Type | Notes |
|-------|------|-------|
| Label | Text | Required, displayed in navigation |
| URL | Text | Required, internal path (`/blog`) or full URL |
| Open in New Tab | Toggle | Default: off |
| Is Visible | Toggle | Default: on |
| Position | Auto | Determined by drag-and-drop order |
| Parent | Auto | Determined by nesting level |

### 5.6 Media Library (`/admin/media`)

| Feature | Description |
|---------|-------------|
| Grid View | Thumbnail grid of all uploaded images |
| Upload | Drag-and-drop or click to upload, supports JPG/PNG/WebP/GIF, max 10MB |
| Details | Click to view: filename, dimensions, file size, alt text (editable), upload date, uploader |
| Delete | With confirmation |
| Copy URL | Quick copy R2 public URL |
| Search | By filename or alt text |

### 5.7 Pages Management (`/admin/pages`)

Same editor as Posts, but for static pages (About, Privacy, Terms, Contact). Fields:

| Field | Type | Notes |
|-------|------|-------|
| Title | Text | Required |
| Slug | Text | Required, unique |
| Content | Tiptap Editor | Rich text |
| Meta Title | Text | SEO |
| Meta Description | Textarea | SEO |
| Is Published | Toggle | Default: draft |

### 5.8 Site Settings (`/admin/settings`)

| Setting | Type | Description |
|---------|------|-------------|
| Site Name | Text | Displayed in header, footer, meta tags |
| Site Description | Textarea | Default meta description |
| Logo | Image upload | Header and footer logo |
| Favicon | Image upload | Browser tab icon |
| Social Links | URL fields | Instagram, Pinterest, YouTube, TikTok, Twitter |
| Announcement Bar | Text + Toggle | Announcement message and enable/disable |
| Google Analytics ID | Text | GA4 measurement ID |

---

## 6. Database Schema

### 6.1 Entity Relationship

```
┌──────────────┐     ┌─────────────────┐     ┌──────────────┐
│   categories │     │ post_categories │     │    posts     │
│──────────────│     │─────────────────│     │──────────────│
│ id (PK)      │◄────│ category_id(FK) │────►│ id (PK)      │
│ name         │     │ post_id (FK)    │     │ title        │
│ slug (UQ)    │     └─────────────────┘     │ slug (UQ)    │
│ description  │                              │ excerpt      │
│ parent_id(FK)│──┐                           │ content      │
│ position     │  │                           │ content_html │
│ created_at   │◄─┘ (self-ref)               │ featured_img │
└──────────────┘                              │ status       │
                                              │ is_featured  │
┌──────────────┐                              │ meta_title   │
│ user_roles   │                              │ meta_desc    │
│──────────────│                              │ og_image_url │
│ id (PK)      │                              │ canonical_url│
│ clerk_user_id│                              │ reading_time │
│ role         │                              │ author_id    │
│ display_name │                              │ published_at │
│ created_at   │                              │ created_at   │
└──────────────┘                              │ updated_at   │
                                              └──────────────┘
┌──────────────────┐
│ navigation_menus │     ┌──────────────┐     ┌──────────────┐
│──────────────────│     │    media     │     │    pages     │
│ id (PK)          │     │──────────────│     │──────────────│
│ label            │     │ id (PK)      │     │ id (PK)      │
│ url              │     │ filename     │     │ title        │
│ location         │     │ url          │     │ slug (UQ)    │
│ parent_id (FK)   │──┐  │ file_size    │     │ content      │
│ position         │  │  │ mime_type    │     │ content_html │
│ open_in_new_tab  │◄─┘  │ width        │     │ meta_title   │
│ is_visible       │     │ height       │     │ meta_desc    │
│ created_at       │     │ alt_text     │     │ is_published │
└──────────────────┘     │ uploaded_by  │     │ created_at   │
                         │ created_at   │     │ updated_at   │
┌──────────────┐         └──────────────┘     └──────────────┘
│site_settings │
│──────────────│
│ key (PK)     │
│ value (JSONB)│
│ updated_at   │
└──────────────┘
```

### 6.2 Table Details

**`posts`**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK, default gen_random_uuid() | Primary key |
| title | TEXT | NOT NULL | Article title |
| slug | TEXT | NOT NULL, UNIQUE | URL-friendly identifier |
| excerpt | TEXT | | Short description for cards |
| content | JSONB | | Tiptap JSON content |
| content_html | TEXT | | Pre-rendered HTML for public display |
| featured_image_url | TEXT | | R2 image URL |
| status | TEXT | NOT NULL, CHECK (draft/published/archived) | Publication status |
| is_featured | BOOLEAN | DEFAULT false | Display on homepage |
| meta_title | TEXT | | SEO title (max 60 chars) |
| meta_description | TEXT | | SEO description (max 160 chars) |
| og_image_url | TEXT | | Open Graph image |
| canonical_url | TEXT | | Canonical URL for cross-posts |
| reading_time | INT | | Estimated minutes, auto-calculated |
| author_id | TEXT | NOT NULL | Clerk user ID |
| published_at | TIMESTAMPTZ | | Publication timestamp |
| created_at | TIMESTAMPTZ | DEFAULT now() | Creation timestamp |
| updated_at | TIMESTAMPTZ | DEFAULT now() | Auto-updated via trigger |

**`categories`**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Primary key |
| name | TEXT | NOT NULL | Display name |
| slug | TEXT | NOT NULL, UNIQUE | URL-friendly identifier |
| description | TEXT | | Category description |
| parent_id | UUID | FK → categories(id) ON DELETE SET NULL | Parent for sub-categories |
| position | INT | DEFAULT 0 | Sort order |
| created_at | TIMESTAMPTZ | DEFAULT now() | Creation timestamp |

**`post_categories`**

| Column | Type | Constraints |
|--------|------|-------------|
| post_id | UUID | FK → posts(id) ON DELETE CASCADE |
| category_id | UUID | FK → categories(id) ON DELETE CASCADE |
| | | PRIMARY KEY (post_id, category_id) |

**`navigation_menus`**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Primary key |
| label | TEXT | NOT NULL | Display text |
| url | TEXT | NOT NULL | Link URL |
| location | TEXT | NOT NULL, CHECK (header/footer) | Menu location |
| parent_id | UUID | FK → self ON DELETE CASCADE | Parent item (max 3 levels) |
| position | INT | DEFAULT 0 | Sort order within level |
| open_in_new_tab | BOOLEAN | DEFAULT false | Link target |
| is_visible | BOOLEAN | DEFAULT true | Visibility toggle |
| created_at | TIMESTAMPTZ | DEFAULT now() | Creation timestamp |

**`media`**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Primary key |
| filename | TEXT | NOT NULL | Original filename |
| url | TEXT | NOT NULL | R2 public URL |
| file_size | INT | | File size in bytes |
| mime_type | TEXT | | MIME type |
| width | INT | | Image width in pixels |
| height | INT | | Image height in pixels |
| alt_text | TEXT | | Accessibility alt text |
| uploaded_by | TEXT | NOT NULL | Clerk user ID |
| created_at | TIMESTAMPTZ | DEFAULT now() | Upload timestamp |

**`pages`**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Primary key |
| title | TEXT | NOT NULL | Page title |
| slug | TEXT | NOT NULL, UNIQUE | URL path |
| content | JSONB | | Tiptap JSON content |
| content_html | TEXT | | Pre-rendered HTML |
| meta_title | TEXT | | SEO title |
| meta_description | TEXT | | SEO description |
| is_published | BOOLEAN | DEFAULT false | Publication status |
| created_at | TIMESTAMPTZ | DEFAULT now() | |
| updated_at | TIMESTAMPTZ | DEFAULT now() | |

**`user_roles`**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Primary key |
| clerk_user_id | TEXT | NOT NULL, UNIQUE | Clerk user identifier |
| role | TEXT | NOT NULL, CHECK (admin/editor) | User role |
| display_name | TEXT | | Name for bylines |
| created_at | TIMESTAMPTZ | DEFAULT now() | |

**`site_settings`**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| key | TEXT | PK | Setting identifier |
| value | JSONB | | Setting value (flexible) |
| updated_at | TIMESTAMPTZ | DEFAULT now() | |

### 6.3 Indexes

| Index | Columns | Purpose |
|-------|---------|---------|
| posts_slug_idx | posts(slug) UNIQUE | Fast slug lookup |
| posts_status_published_idx | posts(status, published_at DESC) | Blog listing queries |
| posts_featured_idx | posts(is_featured) WHERE is_featured = true | Homepage featured posts |
| categories_slug_idx | categories(slug) UNIQUE | Category page lookup |
| nav_menus_location_idx | navigation_menus(location, parent_id, position) | Menu tree queries |
| media_uploaded_by_idx | media(uploaded_by, created_at DESC) | User's media listing |

### 6.4 RLS Policies

| Table | Policy | Condition |
|-------|--------|-----------|
| posts | Public read | WHERE status = 'published' |
| categories | Public read | All rows |
| navigation_menus | Public read | WHERE is_visible = true |
| pages | Public read | WHERE is_published = true |
| media | Public read | All rows (public URLs) |
| site_settings | Public read | All rows |
| user_roles | No public access | Admin only via service-role |

> Admin operations use the Supabase service-role key, which bypasses RLS entirely.

---

## 7. Technical Architecture

### 7.1 Project Structure

```
2.独立站/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout (Clerk, fonts, analytics)
│   │   ├── page.tsx                      # Homepage
│   │   ├── (public)/                     # Public route group
│   │   │   ├── layout.tsx                # Header + Footer from DB
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx              # Blog listing + filters
│   │   │   │   └── [slug]/page.tsx       # Blog detail (SSG + ISR)
│   │   │   ├── category/
│   │   │   │   └── [slug]/page.tsx       # Category page
│   │   │   ├── about/page.tsx            # About us
│   │   │   ├── search/page.tsx           # Search results
│   │   │   └── [slug]/page.tsx           # Dynamic static pages
│   │   ├── (admin)/                      # Admin route group (Clerk protected)
│   │   │   ├── layout.tsx                # Admin layout (sidebar)
│   │   │   └── admin/
│   │   │       ├── page.tsx              # Dashboard overview
│   │   │       ├── posts/
│   │   │       │   ├── page.tsx          # Post list
│   │   │       │   ├── new/page.tsx      # Create post
│   │   │       │   └── [id]/edit/page.tsx
│   │   │       ├── categories/page.tsx
│   │   │       ├── menus/page.tsx
│   │   │       ├── media/page.tsx
│   │   │       ├── pages/
│   │   │       │   ├── page.tsx
│   │   │       │   └── [id]/edit/page.tsx
│   │   │       └── settings/page.tsx
│   │   └── api/
│   │       ├── upload/route.ts           # R2 file upload
│   │       ├── revalidate/route.ts       # On-demand ISR
│   │       └── webhooks/clerk/route.ts   # Clerk user sync
│   ├── components/
│   │   ├── ui/                           # Shadcn/UI components
│   │   ├── layout/                       # header, footer, mobile-nav, admin-sidebar
│   │   ├── blog/                         # post-card, post-content, category-filter
│   │   ├── admin/                        # post-editor, seo-fields, menu-tree
│   │   └── shared/                       # pagination, search, breadcrumb
│   ├── lib/
│   │   ├── supabase/                     # client.ts, server.ts, admin.ts
│   │   ├── r2.ts                         # R2 upload/delete
│   │   ├── resend.ts                     # Email client
│   │   └── utils.ts                      # cn(), slug generation, reading time calc
│   ├── hooks/                            # Custom React hooks
│   └── types/                            # TypeScript types
├── supabase/migrations/                  # SQL migration files
├── public/                               # Static assets
├── middleware.ts                          # Clerk auth middleware
└── .env.local.example                    # Environment variable template
```

### 7.2 Rendering Strategy

| Page | Strategy | Revalidation |
|------|----------|-------------|
| Homepage | ISR | 3600s + on-demand |
| Blog Listing | ISR | 3600s + on-demand |
| Blog Detail | SSG + ISR | 3600s + on-demand via `revalidatePath()` |
| Category Page | ISR | 3600s + on-demand |
| About Page | ISR | 3600s + on-demand |
| Admin Pages | SSR (dynamic) | No caching |
| Search Results | SSR (dynamic) | No caching |

### 7.3 Caching & Revalidation

- Blog content uses `revalidateTag('posts')` and `revalidateTag('post-[slug]')`
- Navigation menus use `revalidateTag('navigation')`
- Admin mutations trigger targeted revalidation via Server Actions
- API route `/api/revalidate` for external webhook triggers (future use)

### 7.4 Authentication Flow

```
User visits /admin/*
  → Clerk middleware intercepts
  → Not signed in? Redirect to /sign-in
  → Signed in? Check user_roles table
    → Has admin/editor role? Allow access
    → No role? Show "Access Denied" page
```

---

## 8. SEO Specifications

### 8.1 Meta Tags (per page)

Every public page must output:

```html
<title>{meta_title || title} | {site_name}</title>
<meta name="description" content="{meta_description || excerpt}" />
<link rel="canonical" href="{canonical_url || current_url}" />

<!-- Open Graph -->
<meta property="og:title" content="{meta_title || title}" />
<meta property="og:description" content="{meta_description || excerpt}" />
<meta property="og:image" content="{og_image_url || featured_image_url}" />
<meta property="og:url" content="{canonical_url || current_url}" />
<meta property="og:type" content="article" /> <!-- or "website" for non-article pages -->
<meta property="og:site_name" content="{site_name}" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{meta_title || title}" />
<meta name="twitter:description" content="{meta_description || excerpt}" />
<meta name="twitter:image" content="{og_image_url || featured_image_url}" />
```

### 8.2 Structured Data (JSON-LD)

**Blog Post (Article):**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post Title",
  "description": "Post excerpt",
  "image": "featured_image_url",
  "author": { "@type": "Person", "name": "Author Name" },
  "publisher": {
    "@type": "Organization",
    "name": "Site Name",
    "logo": { "@type": "ImageObject", "url": "logo_url" }
  },
  "datePublished": "2026-03-28",
  "dateModified": "2026-03-30"
}
```

**Breadcrumb:**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "/blog" },
    { "@type": "ListItem", "position": 3, "name": "Post Title" }
  ]
}
```

**Organization (homepage):**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Site Name",
  "url": "https://example.com",
  "logo": "logo_url",
  "sameAs": ["instagram_url", "pinterest_url", "youtube_url"]
}
```

### 8.3 Technical SEO

| Item | Implementation |
|------|---------------|
| Sitemap | Dynamic `src/app/sitemap.ts` — all published posts, categories, pages |
| Robots | `src/app/robots.ts` — allow all, disallow `/admin/*` |
| Canonical URLs | Auto-generated, overridable per post |
| Image Alt Text | Required field in media library, enforced in editor |
| Semantic HTML | `<article>`, `<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>` |
| Heading Hierarchy | One H1 per page, logical H2-H4 nesting |
| URL Structure | Clean slugs: `/blog/hamster-housing-guide` |
| Page Speed | Next.js Image optimization, ISR, code splitting, minimal client JS |
| Mobile | Mobile-first responsive, passes Core Web Vitals |

---

## 9. Responsive Design

### 9.1 Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column, hamburger nav, stacked cards |
| Tablet | 640px - 1023px | 2-column grid, condensed nav |
| Desktop | 1024px - 1279px | 3-column grid, full mega-menu nav |
| Wide | ≥ 1280px | 4-column grid, max-width container |

### 9.2 Mobile-Specific Behaviors

- Header: hamburger icon → slide-out drawer with accordion menu (3-level support)
- Post grid: single column on mobile, 2 columns on tablet
- Footer: accordion-style collapsible columns
- Search: full-screen overlay on mobile
- Admin: responsive sidebar that collapses to bottom tab bar or hamburger on mobile
- Images: responsive `srcset` via Next.js Image component
- Touch: minimum 44px tap targets for all interactive elements

---

## 10. Non-Functional Requirements

### 10.1 Performance

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 90 |
| Lighthouse SEO | ≥ 95 |
| Largest Contentful Paint (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to First Byte (TTFB) | < 200ms (Vercel Edge) |

### 10.2 Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigable throughout
- Screen reader compatible (proper ARIA labels)
- Color contrast ratio ≥ 4.5:1
- Focus indicators on all interactive elements
- Alt text on all images

### 10.3 Security

- All admin routes protected by Clerk authentication + role check
- Supabase RLS policies on all tables
- Input validation with Zod on all forms
- CSRF protection (Next.js built-in)
- File upload: validate MIME type and file size server-side
- Environment variables: never expose server-side keys to client

### 10.4 Scalability

- Stateless architecture (Vercel serverless)
- Database connection pooling via Supabase
- Image CDN via Cloudflare R2 public access
- ISR ensures minimal database hits for public pages
- Architecture supports adding new route groups without refactoring

---

## 11. Future Extensibility

### Phase 2: E-Commerce

| Component | Implementation |
|-----------|---------------|
| New route group | `(shop)/*` — product listing, detail, cart, checkout |
| New DB tables | `products`, `product_categories`, `orders`, `order_items`, `cart` |
| Payment | Stripe Checkout or Stripe Elements |
| Inventory | Product variants, stock tracking |
| Shipping | Shipping rate calculation |

### Phase 3: Community & Growth

| Component | Implementation |
|-----------|---------------|
| Forums | `topics`, `replies`, `forum_categories` tables, Clerk user profiles |
| Newsletter | Resend audience management, email templates, campaign scheduling |
| User Profiles | Public profiles, saved articles, pet profiles |
| Reviews | Product reviews with ratings (for e-commerce) |
| Rewards | Points system, referral program |
| i18n | `[locale]` route segment, content translation system |

---

## 12. Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=            # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=       # Supabase anon/public key
SUPABASE_SERVICE_ROLE_KEY=           # Supabase service role key (server-only)

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=   # Clerk publishable key
CLERK_SECRET_KEY=                    # Clerk secret key (server-only)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Cloudflare R2
R2_ACCOUNT_ID=                       # Cloudflare account ID
R2_ACCESS_KEY_ID=                    # R2 access key
R2_SECRET_ACCESS_KEY=                # R2 secret key
R2_BUCKET_NAME=                      # R2 bucket name
R2_PUBLIC_URL=                       # R2 public access URL

# Resend
RESEND_API_KEY=                      # Resend API key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=                   # Google Analytics 4 measurement ID
```

---

## 13. Service Setup Guide

### Supabase
1. Create account at [supabase.com](https://supabase.com)
2. Create new project → note project URL and keys from Settings > API
3. Run migration SQL in SQL Editor or via Supabase CLI (`supabase db push`)

### Clerk
1. Create account at [clerk.com](https://clerk.com)
2. Create new application → enable Email + Google sign-in
3. Copy publishable key and secret key
4. Configure sign-in/sign-up URLs

### Cloudflare R2
1. Log into Cloudflare Dashboard → R2 Object Storage
2. Create bucket (e.g., `exotic-pet-media`)
3. Enable public access on the bucket
4. Create API token with R2 read/write permissions
5. Note account ID, access key ID, secret access key

### Resend
1. Create account at [resend.com](https://resend.com)
2. Add and verify your domain
3. Copy API key

### Vercel
1. Install CLI: `npm i -g vercel`
2. Link project: `vercel link`
3. Add all env vars in Vercel Dashboard → Settings → Environment Variables
4. Deploy: `vercel --prod`

---

## 14. Acceptance Criteria

### Phase 1 MVP Launch Checklist

- [ ] Homepage renders with hero, pet category grid, and featured articles
- [ ] Blog listing page shows published posts with category filtering and pagination
- [ ] Blog detail page renders article content with correct SEO meta tags and JSON-LD
- [ ] Category pages filter posts correctly
- [ ] About page renders content from admin
- [ ] Header displays 3-level navigation menu from database
- [ ] Footer displays menu links from database
- [ ] Mobile navigation works (hamburger → slide-out drawer)
- [ ] All pages are mobile responsive (tested at 375px, 768px, 1024px, 1440px)
- [ ] Admin login works via Clerk with role-based access
- [ ] Admin can create, edit, publish, and archive posts
- [ ] Admin can manage categories (create, edit, delete, reorder)
- [ ] Admin can manage header and footer menus (up to 3 levels)
- [ ] Admin can upload images to R2 via media library
- [ ] Admin can manage static pages
- [ ] Admin can configure site settings (name, logo, social links)
- [ ] Sitemap.xml includes all published content
- [ ] Robots.txt blocks /admin/*
- [ ] Lighthouse scores: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 90
- [ ] All pages have unique meta title and description
- [ ] Search functionality returns relevant results
- [ ] Site deployed to Vercel and accessible via custom domain

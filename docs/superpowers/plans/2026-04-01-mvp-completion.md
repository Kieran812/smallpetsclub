# MVP Completion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成所有缺失功能和样式修复，使网站匹配 design-preview.html 设计稿

**Architecture:**
- 使用 Next.js 15 App Router，采用 (public) 和 (admin) route groups
- 共享组件放在 `src/components/layout/` 下
- Admin API 通过 Supabase client 进行数据操作
- Clerk 用于 admin 路由保护

**Tech Stack:** Next.js 15, TailwindCSS v4, Supabase, Clerk, TypeScript

---

## File Structure

```
src/
├── app/
│   ├── (public)/
│   │   ├── layout.tsx           # Shared public layout (Header + Footer)
│   │   ├── page.tsx            # Homepage
│   │   ├── blog/
│   │   │   ├── page.tsx       # Blog listing
│   │   │   └── [slug]/page.tsx # Blog detail (REFACTOR to use shared layout)
│   │   ├── category/
│   │   │   └── [slug]/page.tsx # Category page (NEW)
│   │   ├── about/page.tsx      # About page (NEW)
│   │   ├── contact/page.tsx    # Contact page (NEW)
│   │   ├── faq/page.tsx        # FAQ page (NEW)
│   │   ├── privacy/page.tsx    # Privacy policy (NEW)
│   │   ├── terms/page.tsx      # Terms of use (NEW)
│   │   └── cookies/page.tsx    # Cookie policy (NEW)
│   └── (admin)/
│       └── admin/
│           ├── layout.tsx       # Admin layout with auth check
│           ├── posts/
│           │   ├── page.tsx    # Posts list with Supabase integration
│           │   ├── new/page.tsx # Create post
│           │   └── [id]/edit/page.tsx # Edit post
│           └── categories/page.tsx # Category management (NEW)
├── components/
│   └── layout/
│       ├── header.tsx           # ADD: mega-menu dropdown
│       ├── footer.tsx           # ADD: social icons
│       ├── mobile-menu.tsx      # Already exists
│       └── announcement-bar.tsx # Already exists
└── lib/
    ├── supabase/
    │   ├── client.ts           # Browser client
    │   └── server.ts           # Server client
    └── utils.ts                # cn() utility
```

---

## Task 1: Fix Header - Add Mega Menu Dropdown

**Files:**
- Modify: `src/components/layout/header.tsx`

**Reference:** design-preview.html lines 1095-1145 (mega-menu implementation)

- [ ] **Step 1: Read current header.tsx implementation**
- [ ] **Step 2: Add useState for dropdown visibility**
- [ ] **Step 3: Implement mega-menu dropdown with pets data**
- [ ] **Step 4: Add hover/focus animation styles**
- [ ] **Step 5: Test in browser**

---

## Task 2: Fix Footer - Add Social Icons

**Files:**
- Modify: `src/components/layout/footer.tsx`

**Reference:** design-preview.html lines 1438-1459 (social icons)

- [ ] **Step 1: Read current footer.tsx implementation**
- [ ] **Step 2: Add social icons (Instagram, Pinterest, YouTube, TikTok)**
- [ ] **Step 3: Apply correct styling per design spec**
- [ ] **Step 4: Test in browser**

---

## Task 3: Refactor Blog Detail Page to Use Shared Layout

**Files:**
- Modify: `src/app/(public)/blog/[slug]/page.tsx`
- Remove inline header/footer, use shared layout components

- [ ] **Step 1: Read current blog detail page**
- [ ] **Step 2: Remove inline header (lines 209-246)**
- [ ] **Step 3: Remove inline footer (lines 484-535)**
- [ ] **Step 4: Wrap content with shared layout**
- [ ] **Step 5: Test in browser**

---

## Task 4: Create Category Page

**Files:**
- Create: `src/app/(public)/category/[slug]/page.tsx`
- Create: `src/components/category/category-header.tsx` (optional)
- Create: `src/components/category/post-grid.tsx` (optional)

**Reference:** design-system/pages/homepage.md (section 5 - Featured Articles grid)

- [ ] **Step 1: Create category/[slug]/page.tsx with mock data**
- [ ] **Step 2: Display category header with name and description**
- [ ] **Step 3: Create post grid component**
- [ ] **Step 4: Add category filtering**
- [ ] **Step 5: Connect to Supabase when ready**
- [ ] **Step 6: Test in browser**

---

## Task 5: Create About Page

**Files:**
- Create: `src/app/(public)/about/page.tsx`

**Reference:** design-preview.html and homepage.md (About Snippet section)

- [ ] **Step 1: Create about/page.tsx with section layout**
- [ ] **Step 2: Add hero section with title**
- [ ] **Step 3: Add mission/story section**
- [ ] **Step 4: Add team section (optional)**
- [ ] **Step 5: Test in browser**

---

## Task 6: Create Contact Page

**Files:**
- Create: `src/app/(public)/contact/page.tsx`

- [ ] **Step 1: Create contact/page.tsx**
- [ ] **Step 2: Add contact form (name, email, message)**
- [ ] **Step 3: Add contact info section**
- [ ] **Step 4: Test in browser**

---

## Task 7: Create FAQ Page

**Files:**
- Create: `src/app/(public)/faq/page.tsx`

- [ ] **Step 1: Create faq/page.tsx**
- [ ] **Step 2: Add accordion-style FAQ items**
- [ ] **Step 3: Test in browser**

---

## Task 8: Create Legal Pages (Privacy, Terms, Cookies)

**Files:**
- Create: `src/app/(public)/privacy/page.tsx`
- Create: `src/app/(public)/terms/page.tsx`
- Create: `src/app/(public)/cookies/page.tsx`

- [ ] **Step 1: Create privacy/page.tsx with privacy policy content**
- [ ] **Step 2: Create terms/page.tsx with terms of use**
- [ ] **Step 3: Create cookies/page.tsx with cookie policy**
- [ ] **Step 4: Test all pages in browser**

---

## Task 9: Admin Posts List with Supabase Integration

**Files:**
- Modify: `src/app/(admin)/admin/posts/page.tsx`
- Create: `src/lib/supabase/admin-queries.ts` (CRUD operations)

**Reference:** supabase/migrations/001_initial_schema.sql (posts table schema)

- [ ] **Step 1: Create admin-queries.ts with Supabase CRUD functions**
- [ ] **Step 2: Refactor posts/page.tsx to use Supabase client**
- [ ] **Step 3: Add loading and error states**
- [ ] **Step 4: Test CRUD operations**

---

## Task 10: Admin Post Create/Edit Pages

**Files:**
- Modify: `src/app/(admin)/admin/posts/new/page.tsx`
- Modify: `src/app/(admin)/admin/posts/[id]/edit/page.tsx`
- Create: `src/components/admin/post-form.tsx`

- [ ] **Step 1: Create post-form.tsx shared component**
- [ ] **Step 2: Implement new/page.tsx with form**
- [ ] **Step 3: Implement [id]/edit/page.tsx with pre-filled data**
- [ ] **Step 4: Test create and edit flow**

---

## Task 11: Admin Auth Protection with Clerk

**Files:**
- Modify: `src/app/(admin)/layout.tsx`
- Modify: `src/middleware.ts`

**Reference:** Clerk documentation, existing middleware.ts

- [ ] **Step 1: Read existing middleware.ts**
- [ ] **Step 2: Add Clerk auth check to admin layout**
- [ ] **Step 3: Redirect unauthenticated users**
- [ ] **Step 4: Test auth flow**

---

## Task 12: Category Management Admin Page

**Files:**
- Create: `src/app/(admin)/admin/categories/page.tsx`
- Create: `src/lib/supabase/category-queries.ts`

- [ ] **Step 1: Create category-queries.ts**
- [ ] **Step 2: Create categories/page.tsx with CRUD**
- [ ] **Step 3: Test category management**

---

## Testing Checklist

After all tasks:
- [ ] Homepage loads correctly at localhost:3000
- [ ] Header mega-menu works on hover
- [ ] Footer displays with social icons
- [ ] Blog listing page at /blog
- [ ] Blog detail page at /blog/[slug] uses shared layout
- [ ] Category page at /category/hamster
- [ ] About page at /about
- [ ] Contact page at /contact
- [ ] FAQ page at /faq
- [ ] Privacy page at /privacy
- [ ] Terms page at /terms
- [ ] Cookies page at /cookies
- [ ] Admin posts list with real data from Supabase
- [ ] Admin create post functionality
- [ ] Admin edit post functionality
- [ ] Admin protected routes require auth

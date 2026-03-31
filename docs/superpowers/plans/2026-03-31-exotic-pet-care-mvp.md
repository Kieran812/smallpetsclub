# Exotic Pet Care Website - MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Phase 1 MVP of exotic pet care content website with blog, care guides, category pages, and admin dashboard.

**Architecture:** Next.js 15 App Router with server components, Supabase for database, Clerk for auth, TailwindCSS for styling. Public pages use ISR, admin pages use SSR. Mobile-first responsive design.

**Tech Stack:** Next.js 15, Supabase (PostgreSQL), TailwindCSS v4, Shadcn/UI, Clerk, Lucide React, Tiptap v2, Zod

---

## Phase 1: Project Setup & Design System

### 1.1 Initialize Next.js Project

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `.env.local.example`

- [ ] **Step 1: Create package.json with all dependencies**

```json
{
  "name": "exotic-pet-care",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@clerk/nextjs": "^6.0.0",
    "@supabase/supabase-js": "^2.0.0",
    "@supabase/ssr": "^0.5.0",
    "lucide-react": "^0.460.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "zod": "^3.0.0",
    "@tiptap/react": "^2.0.0",
    "@tiptap/starter-kit": "^2.0.0",
    "@tiptap/extension-image": "^2.0.0",
    "@tiptap/extension-link": "^2.0.0",
    "@tiptap/extension-placeholder": "^2.0.0"
  }
}
```

- [ ] **Step 2: Create next.config.ts**

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Create .env.local.example**

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Cloudflare R2 (for future use)
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=
R2_PUBLIC_URL=

# Resend (for future use)
RESEND_API_KEY=
```

---

### 1.2 Setup Tailwind CSS v4

**Files:**
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Create postcss.config.js**

```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

- [ ] **Step 2: Create tailwind.config.ts**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#E8A598', dark: '#D4847A', light: '#F8D4CC' },
        secondary: { DEFAULT: '#A8D5BA', dark: '#8BC4A0', light: '#C8E8D4' },
        accent: { DEFAULT: '#F4A261', dark: '#E8914D', alt: '#E76F51' },
        background: { DEFAULT: '#FDF8F5', warm: '#FEF3EE', surface: '#FFFFFF' },
        text: { DEFAULT: '#4A3728', muted: '#8B7355', light: '#FFFFFF' },
        border: { DEFAULT: '#E8DDD5', light: '#F5EDE8' },
        footer: { bg: '#4A3728', text: '#FDF8F5' },
      },
      fontFamily: {
        heading: ['Varela Round', 'system-ui', 'sans-serif'],
        body: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: { sm: '8px', md: '12px', lg: '16px', xl: '20px', '2xl': '24px' },
      boxShadow: {
        sm: '0 1px 2px rgba(74, 55, 40, 0.05)',
        md: '0 4px 12px rgba(74, 55, 40, 0.08)',
        lg: '0 8px 24px rgba(74, 55, 40, 0.12)',
        xl: '0 12px 32px rgba(74, 55, 40, 0.16)',
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 3: Update src/app/globals.css**

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Varela+Round&display=swap');
@import "tailwindcss";

:root {
  --color-primary: #E8A598;
  --color-primary-dark: #D4847A;
  --color-secondary: #A8D5BA;
  --color-accent: #F4A261;
  --color-background: #FDF8F5;
  --color-text: #4A3728;
  --color-text-muted: #8B7355;
  --color-border: #E8DDD5;
}

body {
  font-family: 'Nunito Sans', system-ui, sans-serif;
  background-color: var(--color-background);
  color: var(--color-text);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Varela Round', system-ui, sans-serif;
}
```

---

### 1.3 Create Design System Utilities

**Files:**
- Create: `src/lib/utils.ts` - cn() helper
- Create: `src/components/ui/button.tsx` - Button component
- Create: `src/components/ui/card.tsx` - Card components
- Create: `src/components/ui/input.tsx` - Input components

- [ ] **Step 1: Create src/lib/utils.ts**

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Create src/components/ui/button.tsx**

```typescript
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
          variant === 'primary' && 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-md hover:shadow-lg hover:-translate-y-0.5',
          variant === 'secondary' && 'border-2 border-primary text-primary hover:bg-background-warm',
          variant === 'ghost' && 'text-text hover:bg-background-warm',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
```

- [ ] **Step 3: Create src/components/ui/card.tsx**

```typescript
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn('bg-white rounded-3xl p-6 shadow-md border border-border/50', className)}>
      {children}
    </div>
  );
}

export function PetCard({ className, children }: CardProps) {
  return (
    <div className={cn('bg-gradient-to-b from-background-warm to-background rounded-3xl p-8 text-center border-2 border-transparent hover:border-primary transition-all duration-200 cursor-pointer hover:-translate-y-1', className)}>
      {children}
    </div>
  );
}

export function PostCard({ className, children }: CardProps) {
  return (
    <div className={cn('bg-white rounded-3xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-200 cursor-pointer hover:-translate-y-1', className)}>
      {children}
    </div>
  );
}
```

---

## Phase 2: Database & Supabase Setup

### 2.1 Create Database Schema

**Files:**
- Create: `supabase/migrations/001_initial_schema.sql`

- [ ] **Step 1: Create migration file with all tables**

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  position INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Posts table
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content JSONB,
  content_html TEXT,
  featured_image_url TEXT,
  status TEXT NOT NULL CHECK (status IN ('draft', 'published', 'archived')),
  is_featured BOOLEAN DEFAULT false,
  meta_title TEXT,
  meta_description TEXT,
  og_image_url TEXT,
  canonical_url TEXT,
  reading_time INT,
  author_id TEXT NOT NULL,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Post categories junction table
CREATE TABLE post_categories (
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- Navigation menus table
CREATE TABLE navigation_menus (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  location TEXT NOT NULL CHECK (location IN ('header', 'footer')),
  parent_id UUID REFERENCES navigation_menus(id) ON DELETE CASCADE,
  position INT DEFAULT 0,
  open_in_new_tab BOOLEAN DEFAULT false,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Media table
CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  filename TEXT NOT NULL,
  url TEXT NOT NULL,
  file_size INT,
  mime_type TEXT,
  width INT,
  height INT,
  alt_text TEXT,
  uploaded_by TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pages table
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content JSONB,
  content_html TEXT,
  meta_title TEXT,
  meta_description TEXT,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User roles table
CREATE TABLE user_roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  clerk_user_id TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('admin', 'editor')),
  display_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Site settings table
CREATE TABLE site_settings (
  key TEXT PRIMARY KEY,
  value JSONB,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_status ON posts(status, published_at DESC);
CREATE INDEX idx_posts_featured ON posts(is_featured) WHERE is_featured = true;
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_nav_location ON navigation_menus(location, parent_id, position);
CREATE INDEX idx_media_uploaded_by ON media(uploaded_by, created_at DESC);

-- RLS Policies (public read for most tables)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_menus ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public can read published posts" ON posts FOR SELECT USING (status = 'published');
CREATE POLICY "Public can read all categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public can read visible menus" ON navigation_menus FOR SELECT USING (is_visible = true);
CREATE POLICY "Public can read published pages" ON pages FOR SELECT USING (is_published = true);
CREATE POLICY "Public can read media" ON media FOR SELECT USING (true);
CREATE POLICY "Public can read settings" ON site_settings FOR SELECT USING (true);
```

---

### 2.2 Create Supabase Client Files

**Files:**
- Create: `src/lib/supabase/client.ts`
- Create: `src/lib/supabase/server.ts`
- Create: `src/lib/supabase/admin.ts`

- [ ] **Step 1: Create src/lib/supabase/client.ts**

```typescript
import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```

- [ ] **Step 2: Create src/lib/supabase/server.ts**

```typescript
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Component - ignore
          }
        },
      },
    }
  );
}
```

- [ ] **Step 3: Create src/lib/supabase/admin.ts**

```typescript
import { createClient } from '@supabase/supabase-js';

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
```

---

## Phase 3: Layout Components (Header & Footer)

### 3.1 Header Component

**Files:**
- Create: `src/components/layout/header.tsx`
- Create: `src/components/layout/mobile-menu.tsx`
- Create: `src/components/layout/announcement-bar.tsx`

- [ ] **Step 1: Create announcement-bar.tsx**

```typescript
'use client';

import { useState, useEffect } from 'react';

const announcements = [
  'New: Complete Hamster Care Guide just added!',
  'Join 10,000+ pet parents in our community',
  'Free care tips delivered weekly',
];

export function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-accent text-white py-2.5 px-4 text-center text-sm">
      <p className="animate-pulse">{announcements[current]}</p>
    </div>
  );
}
```

- [ ] **Step 2: Create mobile-menu.tsx**

```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const petCategories = [
  { name: 'Hamster', slug: 'hamster', color: '#F8B4A0' },
  { name: 'Chinchilla', slug: 'chinchilla', color: '#B8C5D6' },
  { name: 'Hedgehog', slug: 'hedgehog', color: '#E8D4B8' },
  { name: 'Fancy Rat', slug: 'fancy-rat', color: '#C5D6B8' },
];

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={cn('fixed inset-0 bg-black/40 z-40 lg:hidden', isOpen ? 'block' : 'hidden')}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 transform transition-transform duration-300 lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-4 border-b border-border flex justify-between items-center">
          <span className="font-heading font-bold text-lg text-text">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-background-warm rounded-full cursor-pointer">
            <X className="w-5 h-5 text-text" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          <Link href="/" className="block px-4 py-3 rounded-xl bg-background-warm text-primary font-medium" onClick={onClose}>
            Home
          </Link>
          <div className="px-4 py-3">
            <p className="font-medium text-text mb-2">Care Guides</p>
            <div className="pl-4 space-y-1">
              {petCategories.map((pet) => (
                <Link
                  key={pet.slug}
                  href={`/category/${pet.slug}`}
                  className="flex items-center gap-2 py-2 text-text-muted hover:text-primary"
                  onClick={onClose}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pet.color }} />
                  {pet.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/blog" className="block px-4 py-3 rounded-xl text-text hover:bg-background-warm font-medium" onClick={onClose}>
            Blog
          </Link>
          <Link href="/about" className="block px-4 py-3 rounded-xl text-text hover:bg-background-warm font-medium" onClick={onClose}>
            About
          </Link>
        </nav>
      </div>
    </>
  );
}
```

- [ ] **Step 3: Create header.tsx**

```typescript
import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { AnnouncementBar } from './announcement-bar';
import { MobileMenu } from './mobile-menu';
import { createClient } from '@/lib/supabase/server';

export async function Header() {
  const supabase = await createClient();
  const { data: menus } = await supabase
    .from('navigation_menus')
    .select('*')
    .eq('location', 'header')
    .eq('is_visible', true)
    .order('position');

  return (
    <header className="sticky top-0 z-30 bg-background border-b border-border">
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-heading font-bold">EP</span>
            </div>
            <span className="font-heading font-bold text-xl text-text hidden sm:block">
              Exotic Pet Care
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-text hover:text-primary font-medium transition-colors">
              Home
            </Link>
            {/* Add Care Guides dropdown - simplified for now */}
            <Link href="/category/hamster" className="text-text hover:text-primary font-medium transition-colors">
              Care Guides
            </Link>
            <Link href="/blog" className="text-text hover:text-primary font-medium transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-text hover:text-primary font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-background-warm rounded-full transition-colors cursor-pointer" aria-label="Search">
              <Search className="w-5 h-5 text-text" />
            </button>
            <button className="lg:hidden p-2 hover:bg-background-warm rounded-full transition-colors cursor-pointer" aria-label="Menu">
              <Menu className="w-5 h-5 text-text" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={false} onClose={() => {}} />
    </header>
  );
}
```

---

### 3.2 Footer Component

**Files:**
- Create: `src/components/layout/footer.tsx`

- [ ] **Step 1: Create footer.tsx**

```typescript
import Link from 'next/link';

const petCategories = [
  { name: 'Hamster Care', slug: 'hamster' },
  { name: 'Chinchilla Care', slug: 'chinchilla' },
  { name: 'Hedgehog Care', slug: 'hedgehog' },
  { name: 'Fancy Rat Care', slug: 'fancy-rat' },
];

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQs', href: '/faq' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Pet Care */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Pet Care</h4>
            <ul className="space-y-2.5">
              {petCategories.map((item) => (
                <li key={item.slug}>
                  <Link href={`/category/${item.slug}`} className="text-footer-text/70 hover:text-footer-text transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-footer-text/70 hover:text-footer-text transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-footer-text/70 hover:text-footer-text transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-footer-text/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-heading font-bold">EP</span>
              </div>
              {/* Social Icons */}
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-footer-text/10 flex items-center justify-center hover:bg-footer-text/20 transition-colors cursor-pointer" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-footer-text/10 flex items-center justify-center hover:bg-footer-text/20 transition-colors cursor-pointer" aria-label="Pinterest">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-footer-text/10 flex items-center justify-center hover:bg-footer-text/20 transition-colors cursor-pointer" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-footer-text/10 flex items-center justify-center hover:bg-footer-text/20 transition-colors cursor-pointer" aria-label="TikTok">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
              </div>
            </div>
            <p className="text-sm text-footer-text/60">
              © 2026 Exotic Pet Care. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

### 3.3 Public Layout

**Files:**
- Create: `src/app/(public)/layout.tsx`

- [ ] **Step 1: Create public layout**

```typescript
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```

---

## Phase 4: Homepage

### 4.1 Homepage Implementation

**Files:**
- Create: `src/app/(public)/page.tsx`
- Create: `src/components/home/pet-category-grid.tsx`
- Create: `src/components/home/featured-articles.tsx`
- Create: `src/components/home/trust-signals.tsx`

- [ ] **Step 1: Create pet-category-grid.tsx**

```typescript
import Link from 'next/link';
import { PetCard } from '@/components/ui/card';

const pets = [
  { name: 'Hamster', slug: 'hamster', guides: 24, color: '#F8B4A0' },
  { name: 'Chinchilla', slug: 'chinchilla', guides: 18, color: '#B8C5D6' },
  { name: 'Hedgehog', slug: 'hedgehog', guides: 15, color: '#E8D4B8' },
  { name: 'Fancy Rat', slug: 'fancy-rat', guides: 21, color: '#C5D6B8' },
];

export function PetCategoryGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text mb-3">
            Browse by Pet
          </h2>
          <p className="text-text-muted">Choose your little companion</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {pets.map((pet) => (
            <Link key={pet.slug} href={`/category/${pet.slug}`}>
              <PetCard className="group">
                <div
                  className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: pet.color + '40' }}
                >
                  <div
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full"
                    style={{ backgroundColor: pet.color }}
                  />
                </div>
                <h3 className="font-heading text-lg lg:text-xl font-bold text-text">
                  {pet.name}
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  {pet.guides} Care Guides
                </p>
              </PetCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create featured-articles.tsx**

```typescript
import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { PostCard } from '@/components/ui/card';

const articles = [
  {
    id: 1,
    title: 'How to Set Up the Perfect Hamster Habitat',
    excerpt: 'Creating a safe and enriching environment for your furry friend starts with the right habitat setup.',
    category: 'Hamster',
    categoryColor: '#F8B4A0',
    readTime: 5,
    date: 'Mar 28, 2026',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=400&fit=crop',
    slug: 'how-to-set-up-perfect-hamster-habitat',
  },
  {
    id: 2,
    title: 'Chinchilla Dust Baths: Everything You Need to Know',
    excerpt: 'Your chinchilla needs regular dust baths to maintain their beautiful coat and skin health.',
    category: 'Chinchilla',
    categoryColor: '#B8C5D6',
    readTime: 4,
    date: 'Mar 25, 2026',
    image: 'https://images.unsplash.com/photo-1591382386627-349b692688ff?w=600&h=400&fit=crop',
    slug: 'chinchilla-dust-baths-guide',
  },
  {
    id: 3,
    title: 'Taming Your Hedgehog: A Step-by-Step Guide',
    excerpt: 'Building trust with your hedgehog takes patience, but the bond you will create is worth it.',
    category: 'Hedgehog',
    categoryColor: '#E8D4B8',
    readTime: 6,
    date: 'Mar 22, 2026',
    image: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=600&h=400&fit=crop',
    slug: 'taming-your-hedgehog-guide',
  },
];

export function FeaturedArticles() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text">
              Latest Guides
            </h2>
            <p className="text-text-muted mt-2">Fresh care tips for your exotic pets</p>
          </div>
          <Link href="/blog" className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-1">
            View All <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`}>
              <PostCard>
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="w-full h-48 lg:h-56 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span
                    className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: article.categoryColor }}
                  >
                    {article.category}
                  </span>
                </div>
                <div className="p-5 lg:p-6">
                  <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime} min read</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text group-hover:text-primary transition-colors line-clamp-2 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">EP</span>
                    </div>
                    <span className="text-sm font-medium text-text">Exotic Pet Care</span>
                  </div>
                </div>
              </PostCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create trust-signals.tsx**

```typescript
import { Shield, Calendar, BadgeCheck, Heart } from 'lucide-react';

const signals = [
  { icon: Shield, label: 'Expert Guides', desc: 'Written by pet care specialists' },
  { icon: Calendar, label: 'Updated Weekly', desc: 'Fresh content every week' },
  { icon: BadgeCheck, label: 'Vet Reviewed', desc: 'Approved by veterinarians' },
  { icon: Heart, label: 'Community Loved', desc: '10,000+ happy readers' },
];

export function TrustSignals() {
  return (
    <section className="py-12 lg:py-16 bg-background-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {signals.map((signal) => (
            <div key={signal.label} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <signal.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-text mb-1">{signal.label}</h4>
              <p className="text-sm text-text-muted">{signal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create homepage page.tsx**

```typescript
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PetCategoryGrid } from '@/components/home/pet-category-grid';
import { FeaturedArticles } from '@/components/home/featured-articles';
import { TrustSignals } from '@/components/home/trust-signals';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background-warm to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
                Expert Care Guides for Your{' '}
                <span className="text-primary">Furry Friends</span>
              </h1>
              <p className="mt-6 text-lg text-text-muted max-w-xl mx-auto lg:mx-0">
                From hamsters to chinchillas, find everything you need to give your exotic pets the love and care they deserve.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" asChild>
                  <Link href="/blog">Explore Care Guides</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
                <Image
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&h=500&fit=crop"
                  alt="Happy hamster"
                  width={600}
                  height={500}
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                  priority
                />
                <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl p-4 shadow-lg border border-border flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">10,000+</p>
                    <p className="text-xs text-text-muted">Happy Readers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PetCategoryGrid />
      <FeaturedArticles />
      <TrustSignals />

      {/* About Snippet */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text mb-6">
                About Exotic Pet Care
              </h2>
              <p className="text-text-muted text-lg mb-4">
                We are a team of passionate pet lovers and animal care experts dedicated to providing the best possible care information for exotic pet owners.
              </p>
              <p className="text-text-muted mb-8">
                Our guides are thoroughly researched, vet-approved, and regularly updated to ensure your furry (or spiky) friends get the love and care they deserve.
              </p>
              <Link href="/about" className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-1 inline-flex">
                Learn More About Us <span>→</span>
              </Link>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                <Image
                  src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&h=400&fit=crop"
                  alt="Team caring for pets"
                  width={500}
                  height={400}
                  className="relative rounded-3xl shadow-xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

---

## Phase 5: Blog Pages

### 5.1 Blog Listing Page

**Files:**
- Create: `src/app/(public)/blog/page.tsx`
- Create: `src/components/blog/post-card.tsx`
- Create: `src/components/blog/category-filter.tsx`

### 5.2 Blog Detail Page

**Files:**
- Create: `src/app/(public)/blog/[slug]/page.tsx`

### 5.3 Category Pages

**Files:**
- Create: `src/app/(public)/category/[slug]/page.tsx`

---

## Phase 6: Admin Dashboard

### 6.1 Admin Layout & Auth

**Files:**
- Create: `src/app/(admin)/layout.tsx`
- Create: `src/middleware.ts` (Clerk)

### 6.2 Admin Dashboard Overview

**Files:**
- Create: `src/app/(admin)/admin/page.tsx`

### 6.3 Posts Management

**Files:**
- Create: `src/app/(admin)/admin/posts/page.tsx`
- Create: `src/app/(admin)/admin/posts/new/page.tsx`
- Create: `src/app/(admin)/admin/posts/[id]/edit/page.tsx`

---

## Phase 7: Testing & Deployment

### 7.1 Environment Setup

### 7.2 Deployment to Vercel

---

## File Structure Summary

```
2.独立站/
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── .env.local.example
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── (public)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   └── category/[slug]/page.tsx
│   │   └── (admin)/
│   │       ├── layout.tsx
│   │       └── admin/
│   │           ├── page.tsx
│   │           └── posts/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── input.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── mobile-menu.tsx
│   │   │   └── announcement-bar.tsx
│   │   └── home/
│   │       ├── pet-category-grid.tsx
│   │       ├── featured-articles.tsx
│   │       └── trust-signals.tsx
│   └── lib/
│       ├── utils.ts
│       └── supabase/
│           ├── client.ts
│           ├── server.ts
│           └── admin.ts
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql
└── design-system/
    ├── MASTER.md
    └── pages/
        ├── homepage.md
        └── blog.md
```

---

## Notes

- This is Phase 1 MVP only (content website + admin)
- E-commerce (Phase 2) and Community (Phase 3) deferred
- All icons from Lucide React (no emojis)
- Follow design-system/MASTER.md for all styling
- Mobile-first responsive breakpoints: 640px / 768px / 1024px / 1280px

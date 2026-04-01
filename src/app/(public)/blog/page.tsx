'use client';

import { Suspense, useState } from 'react';
import { BlogContent } from '@/components/blog/blog-content';

// Mock data for posts (slugs must match blog detail page)
const mockPosts = [
  {
    id: '1',
    title: 'Complete Hamster Care Guide for Beginners',
    slug: 'complete-hamster-care-guide',
    excerpt: 'Everything you need to know about caring for your new hamster friend, from cage setup to daily feeding routines.',
    featured_image_url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600',
    category: 'Hamster',
    read_time: 8,
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah' },
    published_at: '2026-03-28',
  },
  {
    id: '2',
    title: 'Chinchilla Dust Baths: Everything You Need to Know',
    slug: 'chinchilla-dust-baths',
    excerpt: 'Your chinchilla needs regular dust baths to maintain their beautiful coat and skin health.',
    featured_image_url: 'https://images.unsplash.com/photo-1591382386627-349b692688ff?w=600',
    category: 'Chinchilla',
    read_time: 4,
    author: { name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/100?u=mike' },
    published_at: '2026-03-25',
  },
  {
    id: '3',
    title: 'Taming Your Hedgehog: A Step-by-Step Guide',
    slug: 'taming-your-hedgehog',
    excerpt: 'Building trust with your hedgehog takes patience, but the bond you will create is worth it.',
    featured_image_url: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=600',
    category: 'Hedgehog',
    read_time: 6,
    author: { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/100?u=emily' },
    published_at: '2026-03-22',
  },
  {
    id: '4',
    title: 'Fancy Rat Training: From Basics to Cool Tricks',
    slug: 'fancy-rat-training',
    excerpt: 'Rats are incredibly intelligent creatures that can learn amazing tricks. Here is how to train your fancy rat step by step.',
    featured_image_url: 'https://images.unsplash.com/photo-1557148869-0c2ddc9c7e91?w=600',
    category: 'Fancy Rat',
    read_time: 7,
    author: { name: 'Alex Thompson', avatar: 'https://i.pravatar.cc/100?u=alex' },
    published_at: '2026-03-20',
  },
  {
    id: '5',
    title: 'Best Wheel Options for Hamsters: A Comprehensive Review',
    slug: 'best-hamster-wheels-review',
    excerpt: 'Comparing different hamster wheel types, sizes, and materials to find the perfect exercise solution.',
    featured_image_url: 'https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?w=600',
    category: 'Hamster',
    read_time: 5,
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah' },
    published_at: '2026-03-18',
  },
  {
    id: '6',
    title: 'Setting Up the Perfect Chinchilla Habitat',
    slug: 'perfect-chinchilla-cage-setup',
    excerpt: 'Learn about the ideal cage conditions, temperature control, and enrichment activities for your chinchilla.',
    featured_image_url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600',
    category: 'Chinchilla',
    read_time: 6,
    author: { name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/100?u=mike' },
    published_at: '2026-03-15',
  },
  {
    id: '7',
    title: 'Creating the Ultimate Hedgehog Enclosure',
    slug: 'ultimate-hedgehog-enclosure',
    excerpt: 'Design the perfect living space for your hedgehog with proper heating, bedding, and enrichment.',
    featured_image_url: 'https://images.unsplash.com/photo-1517427294543-507a671f2827?w=600',
    category: 'Hedgehog',
    read_time: 9,
    author: { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/100?u=emily' },
    published_at: '2026-03-12',
  },
  {
    id: '8',
    title: 'Rat Proofing Your Home: A Complete Guide',
    slug: 'rat-proofing-your-home',
    excerpt: 'Essential tips for keeping your fancy rat safe when they have free roam time outside their cage.',
    featured_image_url: 'https://images.unsplash.com/photo-1559285607-bcad6ca7e90d?w=600',
    category: 'Fancy Rat',
    read_time: 6,
    author: { name: 'Alex Thompson', avatar: 'https://i.pravatar.cc/100?u=alex' },
    published_at: '2026-03-10',
  },
  {
    id: '9',
    title: 'Hamster Nutrition: What to Feed Your Furry Friend',
    slug: 'hamster-nutrition-guide',
    excerpt: 'A comprehensive guide to hamster diet, including recommended foods, treats, and foods to avoid.',
    featured_image_url: 'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?w=600',
    category: 'Hamster',
    read_time: 7,
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah' },
    published_at: '2026-03-08',
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'Hamster', name: 'Hamster' },
  { id: 'Chinchilla', name: 'Chinchilla' },
  { id: 'Hedgehog', name: 'Hedgehog' },
  { id: 'Fancy Rat', name: 'Fancy Rat' },
];

function BlogLoading() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-background py-8 md:py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="h-12 w-32 bg-background-warm rounded animate-pulse mb-2" />
              <div className="h-5 w-40 bg-background-warm rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BlogPage() {
  const [filteredCount, setFilteredCount] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-background py-8 md:py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl text-text mb-2">Blog</h1>
          <p className="text-text-muted">
            Showing {filteredCount} articles
          </p>
        </div>
      </section>

      {/* Blog Content with Filters - wrapped in Suspense for useSearchParams */}
      <Suspense fallback={<BlogLoading />}>
        <BlogContent categories={categories} posts={mockPosts} onFilteredCountChange={setFilteredCount} />
      </Suspense>
    </div>
  );
}

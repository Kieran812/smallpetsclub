import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, ChevronLeft, ChevronRight, User } from 'lucide-react';
import PostCard from '@/components/blog/post-card';

// Category data
const categories = [
  { name: 'Hamster', slug: 'hamster', color: '#F8B4A0', description: 'Everything you need to know about caring for your furry hamster friend.' },
  { name: 'Chinchilla', slug: 'chinchilla', color: '#B8C5D6', description: 'Learn about dust baths, diet, and keeping your chinchilla happy.' },
  { name: 'Hedgehog', slug: 'hedgehog', color: '#E8D4B8', description: 'Essential guides for taming and caring for your spiky companion.' },
  { name: 'Fancy Rat', slug: 'fancy-rat', color: '#C5D6B8', description: 'Training tips, cage setup, and health care for your clever rat.' },
];

// Mock posts data
const allPosts = [
  {
    id: '1',
    title: 'Complete Hamster Care Guide for Beginners',
    slug: 'complete-hamster-care-guide',
    excerpt: 'Everything you need to know about caring for your new hamster friend, from habitat setup to daily nutrition and enrichment activities.',
    featured_image_url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=400&fit=crop',
    category: 'Hamster',
    categoryColor: '#F8B4A0',
    read_time: 8,
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah' },
    published_at: '2026-03-28',
  },
  {
    id: '2',
    title: 'Chinchilla Dust Baths: Everything You Need to Know',
    slug: 'chinchilla-dust-baths',
    excerpt: 'Your chinchilla needs regular dust baths to maintain their beautiful coat and skin health. Learn the proper techniques and frequency.',
    featured_image_url: 'https://images.unsplash.com/photo-1591382386627-349b692688ff?w=600&h=400&fit=crop',
    category: 'Chinchilla',
    categoryColor: '#B8C5D6',
    read_time: 5,
    author: { name: 'Dr. Emily Watson', avatar: 'https://i.pravatar.cc/100?u=emily' },
    published_at: '2026-03-25',
  },
  {
    id: '3',
    title: 'Taming Your Hedgehog: A Step-by-Step Guide',
    slug: 'taming-your-hedgehog',
    excerpt: 'Building trust with your hedgehog takes patience, but the bond you will create is worth every moment of effort.',
    featured_image_url: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=600&h=400&fit=crop',
    category: 'Hedgehog',
    categoryColor: '#E8D4B8',
    read_time: 6,
    author: { name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/100?u=mike' },
    published_at: '2026-03-22',
  },
  {
    id: '4',
    title: 'Fancy Rat Training: From Basics to Cool Tricks',
    slug: 'fancy-rat-training',
    excerpt: 'Rats are incredibly intelligent creatures that can learn amazing tricks. Here is how to train your fancy rat step by step.',
    featured_image_url: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=600&h=400&fit=crop',
    category: 'Fancy Rat',
    categoryColor: '#C5D6B8',
    read_time: 7,
    author: { name: 'Lisa Park', avatar: 'https://i.pravatar.cc/100?u=lisa' },
    published_at: '2026-03-20',
  },
  {
    id: '5',
    title: 'Best Hamster Wheels: A Comprehensive Guide',
    slug: 'best-hamster-wheels',
    excerpt: 'Not all hamster wheels are created equal. Discover which wheels are safest and most engaging for your furry friend.',
    featured_image_url: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&h=400&fit=crop',
    category: 'Hamster',
    categoryColor: '#F8B4A0',
    read_time: 4,
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah' },
    published_at: '2026-03-18',
  },
  {
    id: '6',
    title: 'Creating the Perfect Chinchilla Cage Setup',
    slug: 'chinchilla-cage-setup',
    excerpt: 'Your chinchilla deserves the best. Learn how to create a spacious, safe, and enriching cage environment.',
    featured_image_url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=400&fit=crop',
    category: 'Chinchilla',
    categoryColor: '#B8C5D6',
    read_time: 6,
    author: { name: 'Dr. Emily Watson', avatar: 'https://i.pravatar.cc/100?u=emily' },
    published_at: '2026-03-15',
  },
  {
    id: '7',
    title: 'Hedgehog Diet: What to Feed Your Spiky Friend',
    slug: 'hedgehog-diet',
    excerpt: 'A proper diet is essential for your hedgehog is health. Learn about nutrition, treats, and foods to avoid.',
    featured_image_url: 'https://images.unsplash.com/photo-1509621451012-8e1d3f6aae45?w=600&h=400&fit=crop',
    category: 'Hedgehog',
    categoryColor: '#E8D4B8',
    read_time: 5,
    author: { name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/100?u=mike' },
    published_at: '2026-03-12',
  },
  {
    id: '8',
    title: 'Rat Proofing Your Home: Free Roam Safety',
    slug: 'rat-proofing-home',
    excerpt: 'Allowing your rats to free roam is great for their health, but your home needs to be safe first.',
    featured_image_url: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=600&h=400&fit=crop',
    category: 'Fancy Rat',
    categoryColor: '#C5D6B8',
    read_time: 6,
    author: { name: 'Lisa Park', avatar: 'https://i.pravatar.cc/100?u=lisa' },
    published_at: '2026-03-10',
  },
];

// Pagination settings
const POSTS_PER_PAGE = 6;

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// Generate metadata for each category
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: 'Category Not Found | Exotic Pet Care',
    };
  }

  return {
    title: `${category.name} Care Guides | Exotic Pet Care`,
    description: category.description,
    openGraph: {
      title: `${category.name} Care Guides`,
      description: category.description,
      type: 'website',
    },
  };
}

// Get category info
function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

// Get posts by category
function getPostsByCategory(categoryName: string) {
  return allPosts.filter((post) => post.category === categoryName);
}

// Get adjacent categories for navigation
function getAdjacentCategories(currentSlug: string) {
  const currentIndex = categories.findIndex((c) => c.slug === currentSlug);
  const prevCategory = currentIndex > 0 ? categories[currentIndex - 1] : null;
  const nextCategory = currentIndex < categories.length - 1 ? categories[currentIndex + 1] : null;

  return { prevCategory, nextCategory };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  const posts = category ? getPostsByCategory(category.name) : [];
  const { prevCategory, nextCategory } = getAdjacentCategories(slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-[#4A3728] mb-4">Category Not Found</h1>
          <Link href="/" className="text-[#E8A598] font-semibold hover:text-[#D4847A] transition-colors cursor-pointer">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#FDF8F5] border-b border-[#E8DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[#E8A598] flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">EP</span>
              </div>
              <span className="font-heading font-bold text-xl text-[#4A3728] hidden sm:block">
                Exotic Pet Care
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-[#4A3728] hover:text-[#E8A598] font-medium transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/blog" className="text-[#4A3728] hover:text-[#E8A598] font-medium transition-colors cursor-pointer">
                Blog
              </Link>
              <Link href="/about" className="text-[#4A3728] hover:text-[#E8A598] font-medium transition-colors cursor-pointer">
                About
              </Link>
            </nav>

            {/* Back to All Categories */}
            <Link
              href="/blog"
              className="flex items-center gap-2 text-[#4A3728] hover:text-[#E8A598] font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2 rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">All Categories</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}05 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#4A3728] font-medium transition-colors mb-8 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Categories</span>
          </Link>

          {/* Category Header */}
          <div className="text-center">
            {/* Category Icon */}
            <div
              className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: category.color + '40' }}
            >
              <div
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full"
                style={{ backgroundColor: category.color }}
              />
            </div>

            {/* Category Name */}
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-[#4A3728] mb-4">
              {category.name} <span className="text-[#E8A598]">Care Guides</span>
            </h1>

            {/* Category Description */}
            <p className="text-lg text-[#8B7355] max-w-2xl mx-auto mb-6">
              {category.description}
            </p>

            {/* Post Count */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#E8DDD5]">
              <span className="text-[#8B7355] text-sm">
                {posts.length} article{posts.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#E8A598]/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#A8D5BA]/10 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />
      </section>

      {/* Category Quick Links */}
      <section className="bg-white border-b border-[#E8DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-sm text-[#8B7355] whitespace-nowrap mr-2">Browse:</span>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2 ${
                  cat.slug === slug
                    ? 'bg-[#E8A598] text-white shadow-md'
                    : 'bg-[#FEF3EE] text-[#4A3728] hover:bg-[#F8D4CC]'
                }`}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-[#FDF8F5] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <>
              {/* Posts Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Category Navigation */}
              <nav className="mt-12 pt-8 border-t border-[#E8DDD5]" aria-label="Category navigation">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Previous Category */}
                  {prevCategory ? (
                    <Link
                      href={`/category/${prevCategory.slug}`}
                      className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#E8DDD5] hover:shadow-md hover:border-[#E8A598] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2"
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: prevCategory.color + '30' }}
                      >
                        <ChevronLeft className="w-5 h-5 text-[#4A3728]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[#8B7355] mb-1">Previous Category</p>
                        <p className="font-heading text-sm font-semibold text-[#4A3728] group-hover:text-[#E8A598] transition-colors truncate">
                          {prevCategory.name}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {/* Next Category */}
                  {nextCategory ? (
                    <Link
                      href={`/category/${nextCategory.slug}`}
                      className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#E8DDD5] hover:shadow-md hover:border-[#E8A598] transition-all duration-200 cursor-pointer sm:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2"
                    >
                      <div className="flex-1 min-w-0 sm:order-2">
                        <p className="text-xs text-[#8B7355] mb-1 sm:text-right">Next Category</p>
                        <p className="font-heading text-sm font-semibold text-[#4A3728] group-hover:text-[#E8A598] transition-colors truncate">
                          {nextCategory.name}
                        </p>
                      </div>
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center sm:order-1"
                        style={{ backgroundColor: nextCategory.color + '30' }}
                      >
                        <ChevronRight className="w-5 h-5 text-[#4A3728]" />
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </nav>
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#FEF3EE] rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-[#E8A598]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#4A3728] mb-2">
                No articles yet
              </h2>
              <p className="text-[#8B7355] mb-6">
                We are working on adding more {category.name.toLowerCase()} care guides. Check back soon!
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E8A598] to-[#D4847A] text-white font-semibold rounded-2xl shadow-lg shadow-[#E8A598]/20 hover:shadow-xl hover:shadow-[#E8A598]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2"
              >
                Browse All Articles
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A3728] text-[#FDF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Pet Care */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Pet Care</h4>
              <ul className="space-y-2.5">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/category/${cat.slug}`}
                      className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2"
                    >
                      {cat.name} Care
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li><Link href="/blog" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2">Blog</Link></li>
                <li><Link href="/about" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2">About Us</Link></li>
                <li><Link href="/contact" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2">Contact</Link></li>
                <li><Link href="/faq" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2">FAQs</Link></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2">Terms of Use</Link></li>
                <li><Link href="/cookies" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-[#FDF8F5]/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Logo + Social */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8A598] flex items-center justify-center">
                  <span className="text-white font-heading font-bold">EP</span>
                </div>
                <p className="text-sm text-[#FDF8F5]/60">
                  © 2026 Exotic Pet Care. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

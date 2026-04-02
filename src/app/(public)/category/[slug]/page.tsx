import { Metadata } from 'next';

export const revalidate = 86400; // 24 hours ISR
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { petCategories } from '@/components/home/design-system';

// Mock posts data (same as blog page for now)
const mockPosts = [
  {
    id: '1',
    title: 'Complete Hamster Care Guide for Beginners',
    slug: 'complete-hamster-care-guide',
    excerpt: 'Everything you need to know about caring for your new hamster friend, from cage setup to daily feeding routines.',
    featured_image_url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600',
    category: 'Hamster',
    categorySlug: 'hamster',
    read_time: 8,
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah' },
    published_at: '2026-03-28',
  },
  {
    id: '2',
    title: 'Setting Up the Perfect Chinchilla Cage',
    slug: 'perfect-chinchilla-cage-setup',
    excerpt: 'Learn about the ideal cage conditions, temperature control, and enrichment activities for your chinchilla.',
    featured_image_url: 'https://images.unsplash.com/photo-1591382386627-349b692688ff?w=600',
    category: 'Chinchilla',
    categorySlug: 'chinchilla',
    read_time: 6,
    author: { name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/100?u=mike' },
    published_at: '2026-03-25',
  },
  {
    id: '3',
    title: 'Hedgehog Health: Common Issues and Prevention',
    slug: 'hedgehog-health-common-issues',
    excerpt: 'Understanding hedgehog health problems, from wobbly hedgehog syndrome to dental care and prevention tips.',
    featured_image_url: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=600',
    category: 'Hedgehog',
    categorySlug: 'hedgehog',
    read_time: 10,
    author: { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/100?u=emily' },
    published_at: '2026-03-22',
  },
  {
    id: '4',
    title: 'Bonding with Your Fancy Rat: A Step-by-Step Guide',
    slug: 'bonding-with-fancy-rat',
    excerpt: 'Build a trusting relationship with your pet rat through these proven socialization techniques.',
    featured_image_url: 'https://images.unsplash.com/photo-1557148869-0c2ddc9c7e91?w=600',
    category: 'Fancy Rat',
    categorySlug: 'fancy-rat',
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
    categorySlug: 'hamster',
    read_time: 5,
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah' },
    published_at: '2026-03-18',
  },
  {
    id: '6',
    title: 'Chinchilla Dust Baths: Everything You Need to Know',
    slug: 'chinchilla-dust-baths-guide',
    excerpt: 'How to properly give your chinchilla dust baths, including frequency, duration, and best dust types.',
    featured_image_url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600',
    category: 'Chinchilla',
    categorySlug: 'chinchilla',
    read_time: 4,
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
    categorySlug: 'hedgehog',
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
    categorySlug: 'fancy-rat',
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
    categorySlug: 'hamster',
    read_time: 7,
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah' },
    published_at: '2026-03-08',
  },
];

// Category metadata and descriptions
const categoryData: Record<string, {
  name: string;
  description: string;
  guideCount: number;
  icon: string;
}> = {
  hamster: {
    name: 'Hamster',
    description: 'Everything you need to know about caring for your adorable hamster companion.',
    guideCount: 24,
    icon: 'hamster',
  },
  chinchilla: {
    name: 'Chinchilla',
    description: 'Learn how to keep your fluffy chinchilla happy and healthy with our expert guides.',
    guideCount: 18,
    icon: 'chinchilla',
  },
  hedgehog: {
    name: 'Hedgehog',
    description: 'Discover the best practices for caring for your spiky little friend.',
    guideCount: 15,
    icon: 'hedgehog',
  },
  'fancy-rat': {
    name: 'Fancy Rat',
    description: 'Expert advice on raising intelligent and affectionate pet rats.',
    guideCount: 21,
    icon: 'rat',
  },
};

// Pet SVG icons as inline components
function PetIcon({ type, className }: { type: string; className?: string }) {
  const iconProps = {
    className: `w-full h-full ${className || ''}`,
    fill: 'currentColor',
    viewBox: '0 0 100 100',
  };

  switch (type) {
    case 'hamster':
      return (
        <svg {...iconProps}>
          <circle cx="50" cy="55" r="35" />
          <circle cx="30" cy="40" r="12" />
          <circle cx="70" cy="40" r="12" />
          <ellipse cx="50" cy="65" rx="8" ry="5" />
          <circle cx="40" cy="52" r="4" fill="#4A3728" />
          <circle cx="60" cy="52" r="4" fill="#4A3728" />
          <circle cx="41" cy="51" r="1.5" fill="white" />
          <circle cx="61" cy="51" r="1.5" fill="white" />
        </svg>
      );
    case 'chinchilla':
      return (
        <svg {...iconProps}>
          <ellipse cx="50" cy="55" rx="30" ry="35" />
          <circle cx="25" cy="35" r="15" />
          <circle cx="75" cy="35" r="15" />
          <ellipse cx="50" cy="60" rx="6" ry="4" />
          <circle cx="40" cy="50" r="3" fill="#4A3728" />
          <circle cx="60" cy="50" r="3" fill="#4A3728" />
        </svg>
      );
    case 'hedgehog':
      return (
        <svg {...iconProps}>
          <ellipse cx="50" cy="60" rx="35" ry="25" />
          <path d="M25 45 L30 25 L35 45 L40 20 L45 45 L50 15 L55 45 L60 20 L65 45 L70 25 L75 45" />
          <ellipse cx="50" cy="65" rx="10" ry="6" />
          <circle cx="42" cy="58" r="3" fill="#4A3728" />
          <circle cx="58" cy="58" r="3" fill="#4A3728" />
        </svg>
      );
    case 'rat':
      return (
        <svg {...iconProps}>
          <ellipse cx="50" cy="55" rx="30" ry="28" />
          <circle cx="25" cy="40" r="12" />
          <circle cx="75" cy="40" r="12" />
          <circle cx="30" cy="38" r="8" />
          <circle cx="70" cy="38" r="8" />
          <ellipse cx="50" cy="70" rx="15" ry="8" />
          <circle cx="42" cy="52" r="4" fill="#4A3728" />
          <circle cx="58" cy="52" r="4" fill="#4A3728" />
          <circle cx="43" cy="51" r="1.5" fill="white" />
          <circle cx="59" cy="51" r="1.5" fill="white" />
        </svg>
      );
    default:
      return null;
  }
}

// Generate static params for all categories
export async function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each category
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryData[slug];

  if (!category) {
    return {
      title: 'Category Not Found | SmallPets Club',
    };
  }

  return {
    title: `${category.name} Care Guides`,
    description: category.description,
    openGraph: {
      title: `${category.name} Care Guides | SmallPets Club`,
      description: category.description,
    },
    alternates: {
      canonical: `/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryData[slug];

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-text mb-4">Category Not Found</h1>
          <Link href="/" className="text-primary font-semibold hover:text-primary-dark transition-colors cursor-pointer">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Filter posts by category slug
  const categoryPosts = mockPosts.filter((post) => post.categorySlug === slug);
  const petColor = petCategories[slug as keyof typeof petCategories]?.color || '#E8A598';

  return (
    <div className="bg-background min-h-screen">
      {/* Back to Blog Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Blog
        </Link>
      </div>

      {/* Category Header */}
      <section className="relative overflow-hidden">
        {/* Background with gradient */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `linear-gradient(145deg, ${petColor}20 0%, #FDF8F5 100%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Pet Icon Circle */}
            <div
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg flex items-center justify-center p-6 transition-transform duration-200 hover:scale-105"
              style={{
                backgroundColor: `${petColor}30`,
                border: `3px solid ${petColor}`,
              }}
            >
              <PetIcon type={category.icon} className="text-text" />
            </div>

            {/* Category Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4">
                {category.name} Care Guides
              </h1>
              <p className="text-lg md:text-xl text-text-muted mb-6 max-w-2xl">
                {category.description}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm">
                <span className="text-text font-semibold">{category.guideCount}</span>
                <span className="text-text-muted">comprehensive guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text">
            Latest {category.name} Guides
          </h2>
          <span className="text-text-muted">
            {categoryPosts.length} {categoryPosts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {/* Grid */}
        {categoryPosts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categoryPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg hover:scale-[1.02] hover:border-primary transition-all duration-200 cursor-pointer hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {/* Featured Image */}
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
                    <Image
                      src={post.featured_image_url}
                      alt={post.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Category Badge */}
                    <span
                      className="absolute bottom-4 left-4 px-3 py-1.5 backdrop-blur-sm text-white text-sm font-medium rounded-full"
                      style={{ backgroundColor: petColor }}
                    >
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5">
                  {/* Read Time */}
                  <div className="flex items-center gap-1.5 text-text-muted text-sm mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{post.read_time} min read</span>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-heading text-xl text-text mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-text-muted text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Author & Date */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <span className="text-sm text-text font-medium">{post.author.name}</span>
                    <span className="text-text-muted text-sm">·</span>
                    <span className="text-sm text-text-muted">
                      {new Date(post.published_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: `${petColor}30` }}
            >
              <PetIcon type={category.icon} className="w-10 h-10 text-text" />
            </div>
            <h2 className="font-heading text-2xl text-text mb-2">No guides yet</h2>
            <p className="text-text-muted mb-6">
              We are working on new {category.name.toLowerCase()} care guides. Check back soon!
            </p>
            <Link
              href="/blog"
              className="px-6 py-3 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-background-warm transition-all duration-200 cursor-pointer"
            >
              Browse All Articles
            </Link>
          </div>
        )}
      </section>

      {/* Browse Other Categories */}
      <section className="bg-background-warm border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-2xl font-bold text-text text-center mb-8">
            Browse Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(categoryData)
              .filter(([key]) => key !== slug)
              .map(([key, data]) => {
                const color = petCategories[key as keyof typeof petCategories]?.color || '#E8A598';
                return (
                  <Link
                    key={key}
                    href={`/category/${key}`}
                    className="group flex flex-col items-center p-6 bg-white rounded-2xl border border-border hover:shadow-lg hover:border-opacity-100 transition-all duration-200 cursor-pointer hover:scale-[1.02]"
                    style={{ '--hover-color': color } as React.CSSProperties}
                  >
                    <div
                      className="w-16 h-16 rounded-full mb-4 flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: `${color}30` }}
                    >
                      <PetIcon type={data.icon} className="w-8 h-8 text-text" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-text group-hover:text-primary transition-colors mb-1">
                      {data.name}
                    </h3>
                    <span className="text-sm text-text-muted">{data.guideCount} guides</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

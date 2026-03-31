import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, ArrowLeft, ChevronLeft, ChevronRight, User } from 'lucide-react';

// Mock data for blog posts
const mockPosts = [
  {
    id: '1',
    title: 'Complete Hamster Care Guide for Beginners',
    slug: 'complete-hamster-care-guide',
    excerpt: 'Everything you need to know about caring for your new hamster friend, from habitat setup to daily nutrition and enrichment activities.',
    content: `
      <h2>Introduction</h2>
      <p>Hamsters are adorable, low-maintenance pets that are perfect for first-time pet owners. These fluffy little creatures bring joy and entertainment to any home with their playful antics and curious nature.</p>
      <p>Before bringing your new furry friend home, it is essential to understand their specific care requirements. Hamsters may be small, but they have big needs when it comes to their habitat, diet, and mental stimulation.</p>

      <h2>Housing Your Hamster</h2>
      <p>Your hamster needs a spacious cage with proper ventilation. The minimum recommended size for a Syrian hamster is 24x12 inches, while Dwarf hamsters can thrive in slightly smaller spaces.</p>
      <p>When selecting a cage, consider these essential features:</p>
      <ul>
        <li>Solid flooring (wire floors can hurt tiny feet)</li>
        <li>Good ventilation to prevent respiratory issues</li>
        <li>Secure latches (hamsters are expert escape artists)</li>
        <li>Room for a proper exercise wheel</li>
      </ul>

      <h2>Bedding and Nesting</h2>
      <p>Choose paper-based bedding or aspen shavings for your hamster is cage. Avoid cedar or pine shavings as they contain harmful oils. Your hamster will also appreciate a cozy hideout where they can nest and feel secure.</p>
      <p>Provide nesting material such as shredded paper or hay so your hamster can create a comfortable burrow.</p>

      <h2>Nutrition and Diet</h2>
      <p>A balanced hamster diet includes:</p>
      <ul>
        <li>High-quality hamster pellets or seed mix</li>
        <li>Fresh vegetables (carrots, broccoli, cucumber)</li>
        <li>Small amounts of fruit (apple, banana, berries)</li>
        <li>Occasional protein (cooked egg, mealworms)</li>
      </ul>
      <p>Always provide fresh water and remove uneaten fresh food within 24 hours to prevent spoilage.</p>

      <h2>Exercise and Enrichment</h2>
      <p>Hamsters are active creatures that need plenty of exercise. An exercise wheel is essential, but make sure it is solid-surfaced to protect their feet. The wheel should be at least 8 inches in diameter for Syrian hamsters.</p>
      <p>Provide tunnels, climbing structures, and chew toys to keep your hamster mentally stimulated. Regular playtime outside the cage in a safe, enclosed area is also beneficial.</p>

      <h2>Health and Wellness</h2>
      <p>Monitor your hamster for signs of illness, including:</p>
      <ul>
        <li>Lethargy or unusual hiding</li>
        <li>Wet or matted fur around the tail</li>
        <li>Loss of appetite or weight loss</li>
        <li>Runny eyes or nose</li>
      </ul>
      <p>With proper care, hamsters typically live 2-3 years. Regular cage cleaning and a healthy diet go a long way in keeping your pet happy and healthy.</p>

      <h2>Final Thoughts</h2>
      <p>Caring for a hamster is a rewarding experience that teaches responsibility and provides endless entertainment. By providing a proper habitat, nutritious diet, and plenty of enrichment, you will ensure your hamster lives a long, happy life.</p>
      <p>Remember, every hamster has its own personality. Take time to observe and learn your pet is preferences and quirks. The bond you build will be truly special!</p>
    `,
    featured_image_url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1200&h=600&fit=crop',
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
    content: `
      <h2>Why Dust Baths Are Essential</h2>
      <p>Chinchillas originate from the Andes Mountains where they roll in volcanic ash to clean their dense fur. This natural behavior is essential for maintaining their famously soft coat.</p>
      <p>Without regular dust baths, chinchillas can develop skin problems, fur rot, and uncomfortable matted fur. The dust absorbs oils and moisture, keeping their coat pristine.</p>

      <h2>Choosing the Right Dust</h2>
      <p>Not all dust is created equal for chinchillas. Use specifically formulated chinchilla dust or bath sand, not regular sandbox sand or dust. The particles need to be fine enough to penetrate the dense fur but not so fine they cause respiratory issues.</p>

      <h2>How Often to Bath</h2>
      <p>Most chinchillas benefit from 2-4 dust baths per week. Over-bathing can dry out their skin, while under-bathing leads to greasy, matted fur. Watch your chinchilla is coat condition to adjust the frequency.</p>

      <h2>Setting Up the Bath</h2>
      <p>Place about 1-2 inches of dust in a shallow container or a chinchilla-specific dust bath house. The container should be large enough for your chinchilla to roll around comfortably. Remove the bath after 10-15 minutes to prevent over-bathing.</p>
    `,
    featured_image_url: 'https://images.unsplash.com/photo-1591382386627-349b692688ff?w=1200&h=600&fit=crop',
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
    content: `
      <h2>Understanding Hedgehog Behavior</h2>
      <p>Hedgehogs are naturally shy creatures with excellent defenses. When threatened, they curl into a ball of spikes - this is not aggression, it is survival instinct. Building trust takes time, but your patience will be rewarded.</p>

      <h2>The First Days Home</h2>
      <p>Give your new hedgehog 2-3 days to adjust to their new environment before attempting to handle them. Place their cage in a quiet area where they can observe daily activities without feeling overwhelmed.</p>

      <h2>Building Trust Gradually</h2>
      <p>Start by placing your hand near the cage so your hedgehog learns your scent. Next, offer treats from your palm. Once they are comfortable with that, you can gently scoop them up from below, supporting their belly.</p>
    `,
    featured_image_url: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=1200&h=600&fit=crop',
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
    content: `
      <h2>Why Rats Are Trainable</h2>
      <p>Fancy rats are among the most intelligent small pets, capable of learning complex tricks and responding to their names. Their social nature and food motivation make them excellent students.</p>

      <h2>Starting with Basics</h2>
      <p>Begin with simple commands like "come" and "up". Use small, healthy treats as rewards. Keep training sessions short (5-10 minutes) to maintain their attention and enthusiasm.</p>

      <h2>Advanced Tricks</h2>
      <p>Once your rat masters the basics, you can teach them to navigate maze, spin, jump hurdles, and even play simple games. The key is patience and consistency.</p>
    `,
    featured_image_url: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=1200&h=600&fit=crop',
    category: 'Fancy Rat',
    categoryColor: '#C5D6B8',
    read_time: 7,
    author: { name: 'Lisa Park', avatar: 'https://i.pravatar.cc/100?u=lisa' },
    published_at: '2026-03-20',
  },
];

// Generate static params for all blog posts
export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = mockPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Exotic Pet Care',
    };
  }

  return {
    title: `${post.title} | Exotic Pet Care`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featured_image_url],
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author.name],
    },
  };
}

// Get related posts by category
function getRelatedPosts(currentSlug: string, category: string) {
  return mockPosts
    .filter((post) => post.category === category && post.slug !== currentSlug)
    .slice(0, 3);
}

// Get previous and next posts
function getAdjacentPosts(currentSlug: string) {
  const currentIndex = mockPosts.findIndex((p) => p.slug === currentSlug);
  const prevPost = currentIndex > 0 ? mockPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < mockPosts.length - 1 ? mockPosts[currentIndex + 1] : null;

  return { prevPost, nextPost };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = mockPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-[#4A3728] mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#E8A598] font-semibold hover:text-[#D4847A] transition-colors cursor-pointer">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(slug, post.category);
  const { prevPost, nextPost } = getAdjacentPosts(slug);

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
              <Link href="/blog" className="text-[#E8A598] font-medium transition-colors cursor-pointer">
                Blog
              </Link>
              <Link href="/about" className="text-[#4A3728] hover:text-[#E8A598] font-medium transition-colors cursor-pointer">
                About
              </Link>
            </nav>

            {/* Back to Blog */}
            <Link
              href="/blog"
              className="flex items-center gap-2 text-[#4A3728] hover:text-[#E8A598] font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2 rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Blog</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        {/* Featured Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
          <Image
            src={post.featured_image_url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A3728]/60 via-transparent to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2"
              style={{ backgroundColor: post.categoryColor }}
            >
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-white border-b border-[#E8DDD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Title */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A3728] leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg sm:text-xl text-[#8B7355] mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pb-8 border-b border-[#E8DDD5]">
            {/* Author */}
            <div className="flex items-center gap-3">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#E8A598]/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-[#E8A598]" />
                </div>
              )}
              <div>
                <p className="font-semibold text-[#4A3728]">{post.author.name}</p>
                <p className="text-sm text-[#8B7355]">Author</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-[#8B7355]">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-2 text-[#8B7355]">
              <Clock className="w-5 h-5" />
              <span>{post.read_time} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Article Content */}
            <article className="lg:col-span-2 max-w-[720px]">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-heading prose-headings:text-[#4A3728]
                  prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-[#4A3728] prose-p:leading-[1.8] prose-p:mb-6
                  prose-ul:text-[#4A3728] prose-ul:leading-[1.8]
                  prose-li:mb-2
                  prose-a:text-[#E8A598] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-[#4A3728] prose-strong:font-semibold
                  [&>h2]:border-b [&>h2]:border-[#E8DDD5] [&>h2]:pb-4"
                style={{
                  '--tw-prose-body': '#4A3728',
                  '--tw-prose-headings': '#4A3728',
                } as React.CSSProperties}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Sidebar - Desktop Only */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-[#FEF3EE] rounded-3xl p-6 border border-[#E8DDD5]">
                    <h3 className="font-heading text-xl font-bold text-[#4A3728] mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2 rounded-xl"
                        >
                          <div className="relative w-full h-32 rounded-xl overflow-hidden mb-2">
                            <Image
                              src={relatedPost.featured_image_url}
                              alt={relatedPost.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <h4 className="font-heading text-sm font-semibold text-[#4A3728] group-hover:text-[#E8A598] transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-[#8B7355] mt-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {relatedPost.read_time} min read
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to Blog Card */}
                <div className="mt-6 bg-white rounded-3xl p-6 border border-[#E8DDD5] shadow-sm">
                  <Link
                    href="/blog"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#E8A598] to-[#D4847A] text-white font-semibold rounded-2xl shadow-lg shadow-[#E8A598]/20 hover:shadow-xl hover:shadow-[#E8A598]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Posts - Mobile Only */}
          {relatedPosts.length > 0 && (
            <div className="lg:hidden mt-8 pt-8 border-t border-[#E8DDD5]">
              <h3 className="font-heading text-xl font-bold text-[#4A3728] mb-4">
                Related Articles
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block group cursor-pointer bg-[#FEF3EE] rounded-2xl p-4 border border-[#E8DDD5] hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2"
                  >
                    <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3">
                      <Image
                        src={relatedPost.featured_image_url}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-heading text-sm font-semibold text-[#4A3728] group-hover:text-[#E8A598] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-xs text-[#8B7355] mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {relatedPost.read_time} min read
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Post Navigation */}
      <section className="bg-[#FEF3EE] border-t border-[#E8DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Previous Post */}
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#E8DDD5] hover:shadow-md hover:border-[#E8A598] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8A598]/10 flex items-center justify-center group-hover:bg-[#E8A598]/20 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-[#E8A598]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#8B7355] mb-1">Previous</p>
                  <p className="font-heading text-sm font-semibold text-[#4A3728] group-hover:text-[#E8A598] transition-colors truncate">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Next Post */}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#E8DDD5] hover:shadow-md hover:border-[#E8A598] transition-all duration-200 cursor-pointer sm:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2"
              >
                <div className="flex-1 min-w-0 sm:order-2">
                  <p className="text-xs text-[#8B7355] mb-1 sm:text-right">Next</p>
                  <p className="font-heading text-sm font-semibold text-[#4A3728] group-hover:text-[#E8A598] transition-colors truncate">
                    {nextPost.title}
                  </p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8A598]/10 flex items-center justify-center group-hover:bg-[#E8A598]/20 transition-colors sm:order-1">
                  <ChevronRight className="w-5 h-5 text-[#E8A598]" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
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
                <li><a href="/category/hamster" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">Hamster Care</a></li>
                <li><a href="/category/chinchilla" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">Chinchilla Care</a></li>
                <li><a href="/category/hedgehog" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">Hedgehog Care</a></li>
                <li><a href="/category/fancy-rat" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">Fancy Rat Care</a></li>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li><a href="/blog" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">Blog</a></li>
                <li><a href="/about" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">About Us</a></li>
                <li><a href="/contact" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">Contact</a></li>
                <li><a href="/faq" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">FAQs</a></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li><a href="/privacy" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">Privacy Policy</a></li>
                <li><a href="/terms" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">Terms of Use</a></li>
                <li><a href="/cookies" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors cursor-pointer">Cookie Policy</a></li>
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

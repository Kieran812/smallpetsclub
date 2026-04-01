import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { PostCard } from '@/components/ui/card';

const articles = [
  {
    id: 1,
    title: 'Complete Hamster Care Guide for Beginners',
    excerpt: 'Everything you need to know about caring for your new hamster friend, from cage setup to daily feeding routines.',
    category: 'Hamster',
    categoryColor: '#F8B4A0',
    readTime: 8,
    date: 'Mar 28, 2026',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=400&fit=crop',
    slug: 'complete-hamster-care-guide',
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
    slug: 'chinchilla-dust-baths',
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
    slug: 'taming-your-hedgehog',
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
                  <h3 className="font-heading text-xl font-bold text-text line-clamp-2 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">EP</span>
                    </div>
                    <span className="text-sm font-medium text-text">SmallPets Club</span>
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
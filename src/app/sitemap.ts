import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.smallpetsclub.com';

// TODO: Replace with Supabase queries when CMS is wired up
// e.g. const posts = await supabase.from('posts').select('slug, updated_at, featured_image_url').eq('status', 'published')
const mockPosts = [
  {
    slug: 'complete-hamster-care-guide',
    updatedAt: '2026-03-28',
    featuredImage: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1200&h=630&fit=crop',
  },
  {
    slug: 'chinchilla-dust-baths',
    updatedAt: '2026-03-25',
    featuredImage: 'https://images.unsplash.com/photo-1591382386627-349b692688ff?w=1200&h=630&fit=crop',
  },
  {
    slug: 'taming-your-hedgehog',
    updatedAt: '2026-03-22',
    featuredImage: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=1200&h=630&fit=crop',
  },
  {
    slug: 'fancy-rat-training',
    updatedAt: '2026-03-20',
    featuredImage: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=1200&h=630&fit=crop',
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const categories: MetadataRoute.Sitemap = ['hamster', 'chinchilla', 'hedgehog', 'fancy-rat'].map((cat) => ({
    url: `${BASE_URL}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const posts: MetadataRoute.Sitemap = mockPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categories, ...posts];
}

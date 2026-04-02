import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/auth/', '/_next/'],
      },
      // Allow AI crawlers for GEO (Generative Engine Optimization)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
    ],
    sitemap: 'https://www.smallpetsclub.com/sitemap.xml',
  };
}

import { HomepageHero } from '@/components/home/homepage-hero';
import { PetCategoryGrid } from '@/components/home/pet-category-grid';
import { FeaturedArticles } from '@/components/home/featured-articles';
import { TrustSignals } from '@/components/home/trust-signals';
import { AboutSnippet } from '@/components/home/about-snippet';
import { JsonLd } from '@/components/seo/JsonLd';

export const revalidate = 3600; // 1 hour ISR

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SmallPets Club',
  url: 'https://www.smallpetsclub.com',
  description:
    'Expert care guides for hamsters, chinchillas, hedgehogs, and fancy rats. Science-backed tips from experienced exotic pet owners.',
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SmallPets Club',
  url: 'https://www.smallpetsclub.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.smallpetsclub.com/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <HomepageHero />
      <PetCategoryGrid />
      <FeaturedArticles />
      <TrustSignals />
      <AboutSnippet />
    </>
  );
}

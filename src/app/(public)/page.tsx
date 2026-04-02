import { HomepageHero } from '@/components/home/homepage-hero';
import { PetCategoryGrid } from '@/components/home/pet-category-grid';
import { FeaturedArticles } from '@/components/home/featured-articles';
import { TrustSignals } from '@/components/home/trust-signals';
import { AboutSnippet } from '@/components/home/about-snippet';

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <PetCategoryGrid />
      <FeaturedArticles />
      <TrustSignals />
      <AboutSnippet />
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
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
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Explore Care Guides
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-background-warm transition-all duration-200"
                >
                  Learn More
                </Link>
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
                About SmallPets Club
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
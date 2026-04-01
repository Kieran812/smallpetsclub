import Link from 'next/link';
import { PetCard } from '@/components/ui/card';

const pets = [
  { name: 'Hamster', slug: 'hamster', guides: 24, color: '#F8B4A0' },
  { name: 'Chinchilla', slug: 'chinchilla', guides: 18, color: '#B8C5D6' },
  { name: 'Hedgehog', slug: 'hedgehog', guides: 15, color: '#E8D4B8' },
  { name: 'Fancy Rat', slug: 'fancy-rat', guides: 21, color: '#C5D6B8' },
];

export function PetCategoryGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text mb-3">
            Browse by Pet
          </h2>
          <p className="text-text-muted">Choose your little companion</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {pets.map((pet) => (
            <Link key={pet.slug} href={`/category/${pet.slug}`}>
              <PetCard className="group">
                <div
                  className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: pet.color + '40' }}
                >
                  <div
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full"
                    style={{ backgroundColor: pet.color }}
                  />
                </div>
                <h3 className="font-heading text-lg lg:text-xl font-bold text-text">
                  {pet.name}
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  {pet.guides} Care Guides
                </p>
              </PetCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
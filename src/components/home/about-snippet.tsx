import Image from 'next/image';
import Link from 'next/link';

export function AboutSnippet() {
  return (
    <section className="bg-white py-16 lg:py-24">
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
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors cursor-pointer"
            >
              Learn More About Us <span aria-hidden="true">→</span>
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
  );
}

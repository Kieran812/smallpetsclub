import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Target, Users, BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | SmallPets Club',
  description: 'Learn about our mission to provide the best care information for exotic pet owners. Meet our team of passionate pet lovers and animal care experts.',
  keywords: ['about exotic pet care', 'our mission', 'pet care experts', 'exotic pet community'],
  openGraph: {
    title: 'About Us | SmallPets Club',
    description: 'Learn about our mission to provide the best care information for exotic pet owners.',
    type: 'website',
    locale: 'en_US',
  },
};

const teamMembers = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & Lead Care Specialist',
    bio: 'Former veterinary technician with 8+ years of experience caring for exotic pets. Sarah founded SmallPets Club after adopting her first hamster and realizing how little reliable information was available.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Dr. James Chen',
    role: 'Veterinary Advisor',
    bio: 'Licensed veterinarian specializing in exotic small animals. Dr. Chen reviews all our health-related content to ensure accuracy and best practices.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Writer & Pet Parent',
    bio: 'Exotic pet enthusiast and owner of three hamsters, two chinchillas, and a very spoiled hedgehog named Biscuit. Emily brings real-world experience to our care guides.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    description: 'Every pet deserves loving, informed care. We treat every creature with the respect and attention it deserves.',
  },
  {
    icon: Target,
    title: 'Evidence-Based',
    description: 'Our guides are thoroughly researched and reviewed by veterinary professionals to ensure accuracy.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'We listen to our readers and continuously improve based on your experiences and questions.',
  },
  {
    icon: BookOpen,
    title: 'Always Learning',
    description: 'Pet care science evolves constantly. We stay current so you always have the best information.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background-warm to-background py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              About{' '}
              <span className="text-primary">SmallPets Club</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed">
              We are a team of passionate pet lovers, veterinary professionals, and devoted pet parents
              on a mission to provide the most reliable, loving care information for exotic pets everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform -rotate-3" />
              <Image
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&h=500&fit=crop"
                alt="Happy hamster being held gently"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-xl w-full object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-text">10,000+</p>
                    <p className="text-sm text-text-muted">Happy Readers</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-6">
                Providing the Best Care Information for Every Little Friend
              </h2>
              <p className="text-text-muted text-lg mb-6 leading-relaxed">
                We believe that every exotic pet deserves the same level of care and attention as any other
                member of the family. Our mission is to empower pet owners with comprehensive, accurate,
                and accessible care information.
              </p>
              <p className="text-text-muted mb-8 leading-relaxed">
                From the moment you bring home a tiny hamster or a spunky hedgehog, we are here to guide
                you through every step of your pet parenting journey with trustworthy advice you can rely on.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background-warm rounded-xl p-4 text-center">
                  <p className="font-heading text-3xl font-bold text-primary mb-1">50+</p>
                  <p className="text-sm text-text-muted">Care Guides</p>
                </div>
                <div className="bg-background-warm rounded-xl p-4 text-center">
                  <p className="font-heading text-3xl font-bold text-primary mb-1">4</p>
                  <p className="text-sm text-text-muted">Pet Species</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-dark font-semibold text-sm rounded-full mb-4">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
              Our Core Values
            </h2>
            <p className="text-text-muted text-lg">
              Everything we do is guided by these principles, ensuring we provide the best possible
              resource for exotic pet owners.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/50"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-text mb-2">{value.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-6">
                How We Started
              </h2>
              <p className="text-text-muted text-lg mb-6 leading-relaxed">
                It all began with a simple question: &ldquo;Why is it so hard to find reliable information
                about caring for exotic pets?&rdquo;
              </p>
              <p className="text-text-muted mb-6 leading-relaxed">
                Our founder, Sarah, adopted her first hamster, Peanut, and quickly discovered that while
                there was plenty of information online, most of it was scattered, outdated, or simply wrong.
                Veterinary visits were expensive, and she wished there was a trustworthy resource she could
                turn to for guidance.
              </p>
              <p className="text-text-muted mb-8 leading-relaxed">
                That frustration sparked a vision — to create a comprehensive, loving, and reliable resource
                for exotic pet owners everywhere. Today, SmallPets Club is proud to serve thousands of pet
                parents who, like us, believe that every small pet deserves big love and the best care possible.
              </p>
              <div className="bg-background-warm rounded-2xl p-6 border-l-4 border-primary">
                <p className="italic text-text-muted">
                  &ldquo;Peanut taught us that great pet care starts with knowledge, compassion, and a
                  community that cares.&rdquo;
                </p>
                <p className="mt-3 font-semibold text-text">— Sarah, Founder</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl transform rotate-3" />
              <Image
                src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=500&fit=crop"
                alt="Team members bonding with pets"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-xl w-full object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
              Meet the Team
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
              The People Behind the Guides
            </h2>
            <p className="text-text-muted text-lg">
              A passionate group of pet lovers, veterinary professionals, and devoted pet parents working
              together to bring you the best care information.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Become part of a growing family of exotic pet enthusiasts. Get exclusive care tips,
            early access to new guides, and connect with fellow pet parents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Care Guides
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

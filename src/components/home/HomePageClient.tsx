'use client';

import { useState } from 'react';
import { Search, Menu, X, ChevronDown, Clock, Heart, BookOpen } from 'lucide-react';

// Pet data
const pets = [
  { name: 'Hamster', slug: 'hamster', guides: 24, color: '#F8B4A0' },
  { name: 'Chinchilla', slug: 'chinchilla', guides: 18, color: '#B8C5D6' },
  { name: 'Hedgehog', slug: 'hedgehog', guides: 15, color: '#E8D4B8' },
  { name: 'Fancy Rat', slug: 'fancy-rat', guides: 21, color: '#C5D6B8' },
];

// Featured posts data
const featuredPosts = [
  {
    id: 1,
    title: 'How to Set Up the Perfect Hamster Habitat',
    excerpt: 'Creating a safe and enriching environment for your furry friend starts with the right habitat setup.',
    category: 'Hamster',
    categoryColor: '#F8B4A0',
    readTime: 5,
    date: 'Mar 28, 2026',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=400&fit=crop',
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
  },
];

// Trust signals data
const trustSignals = [
  { icon: 'stethoscope', label: 'Expert Guides', desc: 'Written by pet care specialists' },
  { icon: 'calendar', label: 'Updated Weekly', desc: 'Fresh content every week' },
  { icon: 'badge-check', label: 'Vet Reviewed', desc: 'Approved by veterinarians' },
  { icon: 'heart', label: 'Community Loved', desc: '10,000+ happy readers' },
];

// Announcement messages
const announcements = [
  'New: Complete Hamster Care Guide just added!',
  'Join 10,000+ pet parents in our community',
  'Free care tips delivered weekly',
];

export default function HomePageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  return (
    <div className="min-h-screen bg-[#FDF8F5] font-body">
      {/* Announcement Bar */}
      <div className="bg-[#F4A261] text-white py-2.5 px-4 text-center text-sm">
        <p className="animate-pulse">{announcements[currentAnnouncement]}</p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#FDF8F5] border-b border-[#E8DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[#E8A598] flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">EP</span>
              </div>
              <span className="font-heading font-bold text-xl text-[#4A3728] hidden sm:block">
                SmallPets Club
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="/" className="text-[#4A3728] hover:text-[#E8A598] font-medium transition-colors">
                Home
              </a>
              <div className="relative group">
                <button className="flex items-center gap-1 text-[#4A3728] hover:text-[#E8A598] font-medium transition-colors">
                  Care Guides
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Mega Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-2xl shadow-lg border border-[#E8DDD5] p-4 w-64">
                    {pets.map((pet) => (
                      <a
                        key={pet.slug}
                        href={`/category/${pet.slug}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#FEF3EE] transition-colors"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: pet.color + '30' }}
                        >
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: pet.color }}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-[#4A3728]">{pet.name}</p>
                          <p className="text-xs text-[#8B7355]">{pet.guides} guides</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <a href="/blog" className="text-[#4A3728] hover:text-[#E8A598] font-medium transition-colors">
                Blog
              </a>
              <a href="/about" className="text-[#4A3728] hover:text-[#E8A598] font-medium transition-colors">
                About
              </a>
            </nav>

            {/* Search + Mobile Menu */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-[#FEF3EE] rounded-full transition-colors cursor-pointer">
                <Search className="w-5 h-5 text-[#4A3728]" />
              </button>
              <button
                className="lg:hidden p-2 hover:bg-[#FEF3EE] rounded-full transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#4A3728]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#4A3728]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E8DDD5]">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <a href="/" className="block px-4 py-3 rounded-xl bg-[#FEF3EE] text-[#E8A598] font-medium">
                Home
              </a>
              <div className="px-4 py-3">
                <p className="font-medium text-[#4A3728] mb-2">Care Guides</p>
                <div className="pl-4 space-y-1">
                  {pets.map((pet) => (
                    <a
                      key={pet.slug}
                      href={`/category/${pet.slug}`}
                      className="flex items-center gap-2 py-2 text-[#8B7355] hover:text-[#E8A598]"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: pet.color }}
                      />
                      {pet.name}
                    </a>
                  ))}
                </div>
              </div>
              <a href="/blog" className="block px-4 py-3 rounded-xl text-[#4A3728] hover:bg-[#FEF3EE] font-medium">
                Blog
              </a>
              <a href="/about" className="block px-4 py-3 rounded-xl text-[#4A3728] hover:bg-[#FEF3EE] font-medium">
                About
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FEF3EE] to-[#FDF8F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728] leading-tight">
                Expert Care Guides for Your{' '}
                <span className="text-[#E8A598]">Furry Friends</span>
              </h1>
              <p className="mt-6 text-lg text-[#8B7355] max-w-xl mx-auto lg:mx-0">
                From hamsters to chinchillas, find everything you need to give your exotic pets the love and care they deserve.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#E8A598] to-[#D4847A] text-white font-semibold rounded-2xl shadow-lg shadow-[#E8A598]/30 hover:shadow-xl hover:shadow-[#E8A598]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  Explore Care Guides
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#E8A598] text-[#E8A598] font-semibold rounded-2xl hover:bg-[#FEF3EE] transition-all duration-200 cursor-pointer"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Decorative blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8A598]/20 to-[#A8D5BA]/20 rounded-full blur-3xl" />
                {/* Main image */}
                <img
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&h=500&fit=crop"
                  alt="Happy hamster on wood shavings"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                  style={{ aspectRatio: '6/5' }}
                />
                {/* Floating card */}
                <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl p-4 shadow-lg border border-[#E8DDD5]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#A8D5BA]/30 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-[#A8D5BA]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#4A3728]">10,000+</p>
                      <p className="text-xs text-[#8B7355]">Happy Readers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Categories Grid */}
      <section className="bg-[#FDF8F5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[#4A3728]">
              Browse by Pet
            </h2>
            <p className="mt-3 text-[#8B7355]">
              Choose your little companion
            </p>
          </div>

          {/* Pet Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {pets.map((pet) => (
              <a
                key={pet.slug}
                href={`/category/${pet.slug}`}
                className="group relative bg-white rounded-3xl p-6 lg:p-8 border-2 border-transparent hover:border-[#E8A598] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              >
                {/* Pet Icon Circle */}
                <div
                  className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: pet.color + '40' }}
                >
                  <div
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full"
                    style={{
                      backgroundColor: pet.color,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23${pet.color.slice(1)}'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>
                <h3 className="font-heading text-lg lg:text-xl font-bold text-[#4A3728] text-center">
                  {pet.name}
                </h3>
                <p className="text-sm text-[#8B7355] text-center mt-1">
                  {pet.guides} Care Guides
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[#4A3728]">
                Latest Guides
              </h2>
              <p className="mt-2 text-[#8B7355]">
                Fresh care tips for your exotic pets
              </p>
            </div>
            <a
              href="/blog"
              className="text-[#E8A598] font-semibold hover:text-[#D4847A] transition-colors flex items-center gap-1 cursor-pointer"
            >
              View All
              <span className="text-lg">→</span>
            </a>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-[#E8DDD5]/50 cursor-pointer"
              >
                {/* Featured Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span
                    className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: post.categoryColor }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-[#8B7355] mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime} min read</span>
                    <span className="mx-1">·</span>
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-[#4A3728] group-hover:text-[#E8A598] transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#8B7355] text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 pt-4 border-t border-[#E8DDD5]/50">
                    <div className="w-8 h-8 rounded-full bg-[#E8A598]/20 flex items-center justify-center">
                      <span className="text-xs font-semibold text-[#E8A598]">EP</span>
                    </div>
                    <span className="text-sm font-medium text-[#4A3728]">
                      SmallPets Club
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-[#FEF3EE] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  {signal.icon === 'stethoscope' && (
                    <svg className="w-7 h-7 text-[#E8A598]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                  {signal.icon === 'calendar' && (
                    <svg className="w-7 h-7 text-[#E8A598]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  {signal.icon === 'badge-check' && (
                    <svg className="w-7 h-7 text-[#E8A598]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )}
                  {signal.icon === 'heart' && (
                    <Heart className="w-7 h-7 text-[#E8A598]" />
                  )}
                </div>
                <h4 className="font-heading font-bold text-[#4A3728] mb-1">
                  {signal.label}
                </h4>
                <p className="text-sm text-[#8B7355]">
                  {signal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[#4A3728] mb-6">
                About SmallPets Club
              </h2>
              <p className="text-[#8B7355] text-lg mb-4">
                We are a team of passionate pet lovers and animal care experts dedicated to providing the best possible care information for exotic pet owners.
              </p>
              <p className="text-[#8B7355] mb-8">
                Our guides are thoroughly researched, vet-approved, and regularly updated to ensure your furry (or spiky) friends get the love and care they deserve.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-[#E8A598] font-semibold hover:text-[#D4847A] transition-colors cursor-pointer"
              >
                Learn More About Us
                <span className="text-lg">→</span>
              </a>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8A598]/20 to-[#A8D5BA]/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&h=400&fit=crop"
                  alt="Team caring for pets"
                  className="relative rounded-3xl shadow-xl w-full max-w-md object-cover"
                  style={{ aspectRatio: '5/4' }}
                />
              </div>
            </div>
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
                {pets.map((pet) => (
                  <li key={pet.slug}>
                    <a
                      href={`/category/${pet.slug}`}
                      className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors"
                    >
                      {pet.name} Care
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li><a href="/blog" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors">Blog</a></li>
                <li><a href="/about" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors">Contact</a></li>
                <li><a href="/faq" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li><a href="/privacy" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors">Terms of Use</a></li>
                <li><a href="/cookies" className="text-[#FDF8F5]/70 hover:text-[#FDF8F5] transition-colors">Cookie Policy</a></li>
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
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-[#FDF8F5]/10 flex items-center justify-center hover:bg-[#FDF8F5]/20 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#FDF8F5]/10 flex items-center justify-center hover:bg-[#FDF8F5]/20 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#FDF8F5]/10 flex items-center justify-center hover:bg-[#FDF8F5]/20 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#FDF8F5]/10 flex items-center justify-center hover:bg-[#FDF8F5]/20 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <p className="text-sm text-[#FDF8F5]/60">
                © 2026 SmallPets Club. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

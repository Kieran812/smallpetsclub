'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { AnnouncementBar } from './announcement-bar';
import { MobileMenu } from './mobile-menu';

const petCategories = [
  { name: 'Hamster', slug: 'hamster', color: '#F8B4A0', guideCount: 24 },
  { name: 'Chinchilla', slug: 'chinchilla', color: '#B8C5D6', guideCount: 18 },
  { name: 'Hedgehog', slug: 'hedgehog', color: '#E8D4B8', guideCount: 15 },
  { name: 'Fancy Rat', slug: 'fancy-rat', color: '#C5D6B8', guideCount: 21 },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-background border-b border-border">
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-base lg:text-lg text-white font-heading font-bold">EP</span>
            </div>
            <span className="font-heading font-bold text-xl text-text hidden sm:block">
              SmallPets Club
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-text hover:text-primary font-medium transition-colors">
              Home
            </Link>
            {/* Care Guides Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
                onFocus={() => setIsMegaMenuOpen(true)}
                onBlur={(e) => {
                  if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
                    setIsMegaMenuOpen(false);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsMegaMenuOpen(!isMegaMenuOpen);
                  } else if (e.key === 'Escape') {
                    setIsMegaMenuOpen(false);
                  }
                }}
                className="flex items-center gap-1 text-text hover:text-primary font-medium transition-colors cursor-pointer"
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
                aria-controls={isMegaMenuOpen ? "mega-menu" : undefined}
              >
                Care Guides
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Mega Menu */}
              <div
                id="mega-menu"
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ease-in-out"
                style={{
                  opacity: isMegaMenuOpen ? 1 : 0,
                  visibility: isMegaMenuOpen ? 'visible' : 'hidden',
                }}
              >
                <div
                  className="bg-white rounded-xl border border-border p-4 w-64"
                  style={{ boxShadow: '0 10px 40px rgba(74, 55, 40, 0.15)' }}
                >
                  {petCategories.map((pet) => (
                    <Link
                      key={pet.slug}
                      href={`/category/${pet.slug}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-warm transition-colors"
                      onClick={() => setIsMegaMenuOpen(false)}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${pet.color}33` }}
                      >
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: pet.color }}
                        />
                      </div>
                      <div>
                        <strong className="block text-sm font-medium text-text">{pet.name}</strong>
                        <span className="text-xs text-text-muted">{pet.guideCount} guides</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-text hover:text-primary font-medium transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-text hover:text-primary font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-background-warm rounded-full transition-colors cursor-pointer" aria-label="Search">
              <Search className="w-5 h-5 text-text" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-background-warm rounded-full transition-colors cursor-pointer"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 text-text" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
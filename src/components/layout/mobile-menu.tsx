'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const petCategories = [
  { name: 'Hamster', slug: 'hamster', color: '#F8B4A0' },
  { name: 'Chinchilla', slug: 'chinchilla', color: '#B8C5D6' },
  { name: 'Hedgehog', slug: 'hedgehog', color: '#E8D4B8' },
  { name: 'Fancy Rat', slug: 'fancy-rat', color: '#C5D6B8' },
];

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={cn('fixed inset-0 bg-black/40 z-40 lg:hidden', isOpen ? 'block' : 'hidden')}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 transform transition-transform duration-300 lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-4 border-b border-border flex justify-between items-center">
          <span className="font-heading font-bold text-lg text-text">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-background-warm rounded-full cursor-pointer">
            <X className="w-5 h-5 text-text" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          <Link href="/" className="block px-4 py-3 rounded-xl bg-background-warm text-primary font-medium" onClick={onClose}>
            Home
          </Link>
          <div className="px-4 py-3">
            <p className="font-medium text-text mb-2">Care Guides</p>
            <div className="pl-4 space-y-1">
              {petCategories.map((pet) => (
                <Link
                  key={pet.slug}
                  href={`/category/${pet.slug}`}
                  className="flex items-center gap-2 py-2 text-text-muted hover:text-primary"
                  onClick={onClose}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pet.color }} />
                  {pet.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/blog" className="block px-4 py-3 rounded-xl text-text hover:bg-background-warm font-medium" onClick={onClose}>
            Blog
          </Link>
          <Link href="/about" className="block px-4 py-3 rounded-xl text-text hover:bg-background-warm font-medium" onClick={onClose}>
            About
          </Link>
        </nav>
      </div>
    </>
  );
}
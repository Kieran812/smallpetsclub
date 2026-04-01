'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PostCard } from '@/components/blog/post-card';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image_url: string;
  category: string;
  read_time: number;
  author: { name: string; avatar: string };
  published_at: string;
}

interface BlogContentProps {
  categories: Category[];
  posts: Post[];
  onFilteredCountChange?: (count: number) => void;
}

export function BlogContent({ categories, posts, onFilteredCountChange }: BlogContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1', 10));

  // Debounce search input (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (activeCategory !== 'all') params.set('category', activeCategory);
    if (debouncedSearch) params.set('q', debouncedSearch);
    if (currentPage > 1) params.set('page', String(currentPage));
    const queryString = params.toString();
    router.push(queryString ? `/blog?${queryString}` : '/blog', { scroll: false });
  }, [activeCategory, debouncedSearch, currentPage, router]);

  // Read from URL on mount
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const q = searchParams.get('q') || '';
    const page = parseInt(searchParams.get('page') || '1', 10);
    setActiveCategory(category);
    setSearchQuery(q);
    setDebouncedSearch(q);
    setCurrentPage(page);
  }, [searchParams]);

  // Filter posts based on active category and search
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch =
      debouncedSearch === '' ||
      post.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(debouncedSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Report filtered count changes
  useEffect(() => {
    onFilteredCountChange?.(filteredPosts.length);
  }, [filteredPosts.length, onFilteredCountChange]);

  // Pagination logic
  const postsPerPage = 6;
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  }, []);

  const clearFilters = useCallback(() => {
    setActiveCategory('all');
    setSearchQuery('');
    setDebouncedSearch('');
    setCurrentPage(1);
  }, []);

  // Generate page numbers for desktop pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <>
      {/* Category Filter */}
      <section className="px-6 md:px-12 py-4 md:py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide md:justify-center md:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer',
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-background-warm text-text hover:bg-primary-light hover:text-text'
                )}
                aria-pressed={activeCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-6 md:px-12 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative max-w-xl mx-auto md:mx-0 md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
            <input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="w-full pl-12 pr-10 py-3 rounded-full border-2 border-border bg-white text-text text-base transition-all duration-200 focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(232,165,152,0.15)]"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setDebouncedSearch('');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-background-warm transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4 text-text-muted" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="px-6 md:px-8 lg:px-12 pb-12">
        <div className="max-w-6xl mx-auto">
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {paginatedPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>

              {/* Pagination */}
              <nav className="mt-10 flex items-center justify-center" aria-label="Pagination">
                {/* Mobile Pagination */}
                <div className="flex md:hidden items-center gap-4">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full hover:bg-background-warm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-5 h-5 text-text" />
                  </button>
                  <span className="text-text-muted text-sm">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full hover:bg-background-warm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-5 h-5 text-text" />
                  </button>
                </div>

                {/* Desktop Pagination */}
                <div className="hidden md:flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full hover:bg-background-warm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-5 h-5 text-text" />
                  </button>
                  {getPageNumbers().map((page, index) =>
                    typeof page === 'number' ? (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={cn(
                          'w-10 h-10 rounded-full text-sm font-medium transition-all cursor-pointer',
                          page === currentPage
                            ? 'bg-primary text-white'
                            : 'text-text hover:bg-background-warm'
                        )}
                      >
                        {page}
                      </button>
                    ) : (
                      <span key={index} className="px-1 text-text-muted">
                        {page}
                      </span>
                    )
                  )}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full hover:bg-background-warm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-5 h-5 text-text" />
                  </button>
                </div>
              </nav>
            </>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-background-warm flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h2 className="font-heading text-2xl text-text mb-2">No articles found</h2>
              <p className="text-text-muted mb-6">Try a different category or search term</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-background-warm transition-all duration-200 cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

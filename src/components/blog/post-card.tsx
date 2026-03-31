'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    featured_image_url: string;
    category: string;
    categoryColor?: string;
    read_time: number;
    author: {
      name: string;
      avatar: string;
    };
    published_at: string;
  };
}

const DATE_LOCALE = 'en-US';

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.published_at).toLocaleDateString(DATE_LOCALE, {
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-[#E8DDD5]/50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598] focus-visible:ring-offset-2"
    >
      {/* Featured Image */}
      <div className="relative overflow-hidden">
        <Image
          src={post.featured_image_url}
          alt={post.title}
          width={600}
          height={338}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Category Badge */}
        <span
          className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-md"
          style={{ backgroundColor: post.categoryColor || '#E8A598' }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Read Time */}
        <div className="flex items-center gap-1.5 text-xs text-[#8B7355] mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span>{post.read_time} min read</span>
          <span className="mx-1">·</span>
          <span>{formattedDate}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#4A3728] group-hover:text-[#E8A598] transition-colors line-clamp-2 mb-3">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#8B7355] text-sm line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 pt-4 border-t border-[#E8DDD5]/50">
          {post.author.avatar ? (
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-[#E8A598]/20 flex items-center justify-center">
              <span className="text-xs font-semibold text-[#E8A598]">
                {post.author.name.charAt(0)}
              </span>
            </div>
          )}
          <span className="text-sm font-medium text-[#4A3728]">
            {post.author.name}
          </span>
        </div>
      </div>
    </Link>
  );
}

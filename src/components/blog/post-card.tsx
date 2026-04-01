import Image from 'next/image';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Author {
  name: string;
  avatar: string;
}

interface PostCardProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image_url: string;
  category: string;
  read_time: number;
  author: Author;
  published_at: string;
  className?: string;
}

export function PostCard({
  title,
  slug,
  excerpt,
  featured_image_url,
  category,
  read_time,
  author,
  published_at,
  className,
}: PostCardProps) {
  const formattedDate = new Date(published_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <article
      className={cn(
        'group bg-white rounded-3xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-200 cursor-pointer hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        className
      )}
    >
      {/* Featured Image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
        <Image
          src={featured_image_url}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-background-warm/90 backdrop-blur-sm text-text text-sm font-medium rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Read Time */}
        <div className="flex items-center gap-1.5 text-text-muted text-sm mb-3">
          <Clock className="w-4 h-4" />
          <span>{read_time} min read</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl text-text mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-text-muted text-sm line-clamp-2 mb-4">
          {excerpt}
        </p>

        {/* Author & Date */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <span className="text-sm text-text font-medium">{author.name}</span>
          <span className="text-text-muted text-sm">·</span>
          <span className="text-sm text-text-muted">{formattedDate}</span>
        </div>
      </div>
    </article>
  );
}

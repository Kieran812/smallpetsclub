'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { PostForm, type PostFormData } from '@/components/admin/post-form';
import { getPostById } from '@/lib/supabase/admin-queries';

const MOCK_POSTS: Record<string, PostFormData> = {
  '1': {
    title: 'Complete Hamster Care Guide',
    slug: 'complete-hamster-care-guide',
    excerpt: 'Everything you need to know about keeping your hamster happy and healthy.',
    content: `# Hamster Care Guide

Hamsters are wonderful pets that bring joy to many households. This comprehensive guide will help you provide the best care for your furry friend.

## Housing

Your hamster needs a spacious enclosure with:
- Solid flooring (no wire cages)
- Bedding material for burrowing
- A hideout for sleeping
- Exercise wheel

## Diet

A balanced hamster diet includes:
- High-quality hamster pellets
- Fresh vegetables
- Occasional fruits as treats
- Fresh water daily

## Health

Regular health checks are important. Watch for signs of illness and consult a vet if needed.`,
    featuredImage: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800',
    category: 'Hamster',
    status: 'published',
    published_at: '2026-03-28',
  },
};

export default function EditPostPage() {
  const params = useParams();
  const id = params.id as string;
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<Partial<PostFormData> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const post = await getPostById(id);

        if (post) {
          setInitialData({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt || '',
            content: typeof post.content === 'string' ? post.content : post.content_html || '',
            featuredImage: post.featured_image_url || '',
            status: post.status,
            published_at: post.published_at || '',
            category: 'General',
          });
        } else {
          // Fallback to mock data for demo
          const mockPost = MOCK_POSTS[id];
          if (mockPost) {
            setInitialData(mockPost);
          } else {
            setError('Post not found');
          }
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        // Fallback to mock data
        const mockPost = MOCK_POSTS[id];
        if (mockPost) {
          setInitialData(mockPost);
        } else {
          setError('Failed to load post');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-text-muted">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !initialData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <p className="text-red-500">{error || 'Post not found'}</p>
          <a href="/admin/posts" className="text-primary hover:underline">
            Back to posts
          </a>
        </div>
      </div>
    );
  }

  return <PostForm mode="edit" postId={id} initialData={initialData} />;
}

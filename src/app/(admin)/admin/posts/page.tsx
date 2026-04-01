'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Plus, Pencil, Trash2, FileText, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPosts, deletePost, type PostRow } from '@/lib/supabase/admin-queries';

interface Post extends PostRow {
  category?: string;
  author?: string;
}

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Complete Hamster Care Guide',
    slug: 'complete-hamster-care-guide',
    excerpt: 'Everything you need to know about keeping your hamster happy and healthy.',
    status: 'published',
    category: 'Hamster',
    author: 'Sarah Chen',
    published_at: '2026-03-28',
    created_at: '2026-03-28',
    updated_at: '2026-03-28',
    is_featured: false,
    reading_time: 10,
    author_id: '1',
    featured_image_url: null,
    content: null,
    content_html: null,
  },
  {
    id: '2',
    title: 'Chinchilla Diet: What You Need to Know',
    slug: 'chinchilla-diet-what-you-need-to-know',
    excerpt: 'A comprehensive guide to feeding your chinchilla properly.',
    status: 'published',
    category: 'Chinchilla',
    author: 'Sarah Chen',
    published_at: '2026-03-25',
    created_at: '2026-03-25',
    updated_at: '2026-03-25',
    is_featured: false,
    reading_time: 8,
    author_id: '1',
    featured_image_url: null,
    content: null,
    content_html: null,
  },
  {
    id: '3',
    title: 'Setting Up the Perfect Hedgehog Habitat',
    slug: 'setting-up-the-perfect-hedgehog-habitat',
    excerpt: 'Create a comfortable home for your prickly friend.',
    status: 'draft',
    category: 'Hedgehog',
    author: 'Mike Johnson',
    published_at: '',
    created_at: '2026-03-20',
    updated_at: '2026-03-20',
    is_featured: false,
    reading_time: 12,
    author_id: '2',
    featured_image_url: null,
    content: null,
    content_html: null,
  },
  {
    id: '4',
    title: 'Rat Training 101: Basic Commands',
    slug: 'rat-training-101-basic-commands',
    excerpt: 'Train your pet rat to respond to simple commands.',
    status: 'archived',
    category: 'Rat',
    author: 'Emily Davis',
    published_at: '2026-02-15',
    created_at: '2026-02-15',
    updated_at: '2026-02-15',
    is_featured: false,
    reading_time: 6,
    author_id: '3',
    featured_image_url: null,
    content: null,
    content_html: null,
  },
  {
    id: '5',
    title: 'Guinea Pig Health Checkups',
    slug: 'guinea-pig-health-checkups',
    excerpt: 'Regular health checkups are essential for guinea pigs.',
    status: 'published',
    category: 'Guinea Pig',
    author: 'Sarah Chen',
    published_at: '2026-03-20',
    created_at: '2026-03-20',
    updated_at: '2026-03-20',
    is_featured: false,
    reading_time: 7,
    author_id: '1',
    featured_image_url: null,
    content: null,
    content_html: null,
  },
];

const statusStyles = {
  draft: 'bg-gray-100 text-gray-600',
  published: 'bg-green-100 text-green-700',
  archived: 'bg-red-100 text-red-700',
};

const categories = ['All', 'Hamster', 'Chinchilla', 'Hedgehog', 'Rat', 'Guinea Pig'];
const statuses = ['All', 'draft', 'published', 'archived'];

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const supabasePosts = await getPosts();

      if (supabasePosts.length > 0) {
        const mappedPosts: Post[] = supabasePosts.map((p) => ({
          ...p,
          category: 'General',
          author: p.author_id,
          published_at: p.published_at || '',
        }));
        setPosts(mappedPosts);
      } else {
        setPosts(mockPosts);
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load posts. Using mock data.');
      setPosts(mockPosts);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return;
    }

    const success = await deletePost(id);
    if (success) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } else {
      alert('Failed to delete post. Please try again.');
    }
  };

  const filteredPosts = posts.filter((post) => {
    const statusMatch = filterStatus === 'All' || post.status === filterStatus;
    const categoryMatch = filterCategory === 'All' || post.category === filterCategory;
    return statusMatch && categoryMatch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-text-muted">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-text">Posts Management</h2>
          <p className="text-sm text-text-muted">Manage your blog posts and articles</p>
        </div>
        <Link href="/admin/posts/new">
          <Button variant="primary" className="gap-2">
            <Plus className="w-5 h-5" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="status-filter" className="block text-sm font-medium text-text mb-2">
            Status
          </label>
          <select
            id="status-filter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-text text-base transition-all duration-200 focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(232,165,152,0.15)] cursor-pointer"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status === 'All' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="category-filter" className="block text-sm font-medium text-text mb-2">
            Category
          </label>
          <select
            id="category-filter"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-text text-base transition-all duration-200 focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(232,165,152,0.15)] cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-[#FDF8F5]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Author</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <FileText className="w-12 h-12 text-text-muted/50" />
                      <p className="text-text-muted">No posts found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredPosts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-border/50 hover:bg-[#FDF8F5]/50 transition-colors duration-200 cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <Link href={`/admin/posts/${post.id}/edit`} className="block">
                        <p className="font-medium text-text hover:text-primary transition-colors duration-200">
                          {post.title}
                        </p>
                        <p className="text-sm text-text-muted truncate max-w-xs">
                          {post.excerpt || '-'}
                        </p>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">{post.category || '-'}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          statusStyles[post.status as keyof typeof statusStyles]
                        }`}
                      >
                        {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">{post.author || '-'}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">
                      {post.published_at || '-'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="p-2 hover:bg-[#FEF3EE] rounded-lg transition-colors duration-200 cursor-pointer"
                          title="Edit"
                        >
                          <Pencil className="w-5 h-5 text-text-muted hover:text-primary" />
                        </Link>
                        <button
                          className="p-2 hover:bg-[#FEF3EE] rounded-lg transition-colors duration-200 cursor-pointer"
                          title="Delete"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(post.id);
                          }}
                        >
                          <Trash2 className="w-5 h-5 text-text-muted hover:text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

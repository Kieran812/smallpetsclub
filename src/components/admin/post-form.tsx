'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Eye, Save, Send, Trash2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createPost, updatePost, type CreatePostData, type PostRow } from '@/lib/supabase/admin-queries';

const CATEGORIES = ['Hamster', 'Chinchilla', 'Hedgehog', 'Rat', 'Guinea Pig', 'Ferret', 'Sugar Glider'];

export interface PostFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  status: 'draft' | 'published' | 'archived';
  published_at: string;
}

export interface PostFormProps {
  initialData?: Partial<PostFormData>;
  postId?: string;
  mode: 'create' | 'edit';
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const getInitialFormData = (initialData?: Partial<PostFormData>): PostFormData => {
  return {
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    featuredImage: initialData?.featuredImage || '',
    category: initialData?.category || '',
    status: initialData?.status || 'draft',
    published_at: initialData?.published_at || new Date().toISOString().split('T')[0],
  };
};

export function PostForm({ initialData, postId, mode, onSuccess, onError }: PostFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<PostFormData>(getInitialFormData(initialData));
  const [errors, setErrors] = useState<Partial<Record<keyof PostFormData, string>>>({});
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const handleTitleChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      title: value,
      slug: prev.slug || generateSlug(value),
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof PostFormData, string>> = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.slug.trim()) newErrors.slug = 'Slug is required';
    if (!formData.slug.match(/^[a-z0-9-]+$/)) {
      newErrors.slug = 'Slug can only contain lowercase letters, numbers, and hyphens';
    }
    if (!formData.excerpt.trim()) newErrors.excerpt = 'Excerpt is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (!formData.category) newErrors.category = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (targetStatus?: 'draft' | 'published' | 'archived') => {
    if (!validate()) return;

    setIsSubmitting(true);
    const statusToSubmit = targetStatus || formData.status;

    try {
      const postData: CreatePostData = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        content_html: formData.content,
        featured_image_url: formData.featuredImage || undefined,
        status: statusToSubmit,
        is_featured: false,
        author_id: '1', // TODO: Get from auth context
        published_at: formData.published_at || undefined,
      };

      let result: PostRow | null;

      if (mode === 'create') {
        result = await createPost(postData);
        if (result) {
          showToast('Post created successfully', 'success');
          onSuccess?.();
          router.push('/admin/posts');
        } else {
          throw new Error('Failed to create post');
        }
      } else {
        if (!postId) throw new Error('Post ID is required for update');
        result = await updatePost(postId, { ...postData, status: statusToSubmit });
        if (result) {
          showToast('Post updated successfully', 'success');
          onSuccess?.();
          router.push('/admin/posts');
        } else {
          throw new Error('Failed to update post');
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      showToast(errorMessage, 'error');
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveDraft = () => handleSubmit('draft');
  const handlePublish = () => handleSubmit('published');

  const handleDelete = () => {
    // TODO: Implement delete functionality
    showToast('Delete functionality not yet implemented', 'error');
    setShowDeleteConfirm(false);
  };

  const inputClass = (field: keyof PostFormData) =>
    `w-full px-4 py-3 rounded-xl border-2 bg-white text-text text-base transition-all duration-200 focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(232,165,152,0.15)] ${
      errors[field] ? 'border-red-500' : 'border-border'
    }`;

  const selectClass = (field: keyof PostFormData) =>
    `w-full px-4 py-3 rounded-xl border-2 bg-white text-text text-base transition-all duration-200 focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(232,165,152,0.15)] cursor-pointer ${
      errors[field] ? 'border-red-500' : 'border-border'
    }`;

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-xl shadow-lg text-white ${
            toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/posts"
            className="p-2 hover:bg-[#FEF3EE] rounded-lg transition-colors duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-text" />
          </Link>
          <div>
            <h2 className="text-lg font-semibold text-text">
              {mode === 'create' ? 'Create New Post' : 'Edit Post'}
            </h2>
            <p className="text-sm text-text-muted">
              {mode === 'create' ? 'Write and publish a new blog post' : 'Update your blog post'}
            </p>
          </div>
        </div>
        {mode === 'edit' && (
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors duration-200 cursor-pointer"
            title="Delete post"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowDeleteConfirm(false)}
          />
          <div className="relative bg-white rounded-3xl p-8 shadow-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-text mb-2">Delete Post</h3>
            <p className="text-text-muted mb-6">
              Are you sure you want to delete &quot;{formData.title}&quot;? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => setShowDeleteConfirm(false)} className="flex-1">
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleDelete}
                className="flex-1 bg-red-500 hover:bg-red-600"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-6 space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-text mb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Enter post title"
            className={inputClass('title')}
          />
          {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-text mb-2">
            Slug <span className="text-red-500">*</span>
          </label>
          <input
            id="slug"
            type="text"
            value={formData.slug}
            onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
            placeholder="post-url-slug"
            className={inputClass('slug')}
          />
          {errors.slug && <p className="mt-1 text-sm text-red-500">{errors.slug}</p>}
        </div>

        {/* Excerpt */}
        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-text mb-2">
            Excerpt <span className="text-red-500">*</span>
          </label>
          <textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
            placeholder="Brief description of the post"
            rows={3}
            className={`${inputClass('excerpt')} resize-none`}
          />
          {errors.excerpt && <p className="mt-1 text-sm text-red-500">{errors.excerpt}</p>}
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-text mb-2">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
            placeholder="Write your post content here..."
            rows={12}
            className={`${inputClass('content')} resize-none`}
          />
          {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
        </div>

        {/* Featured Image */}
        <div>
          <label htmlFor="featuredImage" className="block text-sm font-medium text-text mb-2">
            Featured Image URL
          </label>
          <input
            id="featuredImage"
            type="url"
            value={formData.featuredImage}
            onChange={(e) => setFormData((prev) => ({ ...prev, featuredImage: e.target.value }))}
            placeholder="https://example.com/image.jpg"
            className={inputClass('featuredImage')}
          />
          {formData.featuredImage && (
            <div className="mt-3">
              <img
                src={formData.featuredImage}
                alt="Featured preview"
                className="w-full max-h-48 object-cover rounded-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}
        </div>

        {/* Category & Status Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-text mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
              className={selectClass('category')}
            >
              <option value="">Select a category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-text mb-2">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  status: e.target.value as 'draft' | 'published' | 'archived',
                }))
              }
              className={selectClass('status')}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>

        {/* Published Date */}
        <div>
          <label htmlFor="published_at" className="block text-sm font-medium text-text mb-2">
            Published Date
          </label>
          <input
            id="published_at"
            type="date"
            value={formData.published_at}
            onChange={(e) => setFormData((prev) => ({ ...prev, published_at: e.target.value }))}
            className={inputClass('published_at')}
          />
        </div>

        {/* Author (read-only for MVP) */}
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-text mb-2">
            Author
          </label>
          <input
            id="author"
            type="text"
            value="Sarah Chen"
            readOnly
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-[#FDF8F5] text-text-muted text-base cursor-not-allowed"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
          <Button variant="ghost" onClick={handleSaveDraft} disabled={isSubmitting} className="gap-2">
            <Save className="w-5 h-5" />
            {mode === 'create' ? 'Save Draft' : 'Save Changes'}
          </Button>
          <Button variant="primary" onClick={handlePublish} disabled={isSubmitting} className="gap-2">
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {mode === 'create' ? 'Publish' : 'Update & Publish'}
          </Button>
          <Link href="/admin/posts" className="sm:ml-auto">
            <Button variant="ghost" className="gap-2">
              <Eye className="w-5 h-5" />
              Cancel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

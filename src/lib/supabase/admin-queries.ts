import { createClient } from './client';

export interface PostRow {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  status: 'draft' | 'published' | 'archived';
  is_featured: boolean;
  reading_time: number | null;
  author_id: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  featured_image_url: string | null;
  content: unknown;
  content_html: string | null;
}

export interface PostWithCategories extends PostRow {
  categories: { id: string; name: string; slug: string }[];
}

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-supabase-url'
  );
}

export async function getPosts(): Promise<PostRow[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  const supabase = createClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return (data as PostRow[]) || [];
}

export async function getPostById(id: string): Promise<PostRow | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = createClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data as PostRow;
}

export async function getPostWithCategories(id: string): Promise<PostWithCategories | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = createClient();

  const { data: post, error: postError } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (postError || !post) {
    console.error('Error fetching post:', postError);
    return null;
  }

  const { data: categories, error: catError } = await supabase
    .from('post_categories')
    .select('categories(id, name, slug)')
    .eq('post_id', id);

  if (catError) {
    console.error('Error fetching post categories:', catError);
  }

  return {
    ...(post as PostRow),
    categories: (categories || []).flatMap((pc) => pc.categories || []),
  };
}

export interface CreatePostData {
  title: string;
  slug: string;
  excerpt?: string;
  content?: unknown;
  content_html?: string;
  featured_image_url?: string;
  status: 'draft' | 'published' | 'archived';
  is_featured?: boolean;
  reading_time?: number;
  author_id: string;
  published_at?: string;
  category_ids?: string[];
}

export interface UpdatePostData extends Partial<Omit<CreatePostData, 'author_id'>> {
  category_ids?: string[];
}

export async function createPost(data: CreatePostData): Promise<PostRow | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = createClient();

  const { category_ids, ...postData } = data;

  const { data: newPost, error } = await supabase
    .from('posts')
    .insert([postData])
    .select()
    .single();

  if (error) {
    console.error('Error creating post:', error);
    return null;
  }

  if (category_ids && category_ids.length > 0 && newPost) {
    const postCategories = category_ids.map((catId) => ({
      post_id: newPost.id,
      category_id: catId,
    }));

    const { error: linkError } = await supabase
      .from('post_categories')
      .insert(postCategories);

    if (linkError) {
      console.error('Error linking categories:', linkError);
    }
  }

  return newPost as PostRow;
}

export async function updatePost(id: string, data: UpdatePostData): Promise<PostRow | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = createClient();

  const { category_ids, ...postData } = data;

  if (Object.keys(postData).length > 0) {
    const { data: updatedPost, error } = await supabase
      .from('posts')
      .update({ ...postData, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating post:', error);
      return null;
    }

    if (category_ids) {
      await supabase
        .from('post_categories')
        .delete()
        .eq('post_id', id);

      if (category_ids.length > 0) {
        const postCategories = category_ids.map((catId) => ({
          post_id: id,
          category_id: catId,
        }));

        const { error: linkError } = await supabase
          .from('post_categories')
          .insert(postCategories);

        if (linkError) {
          console.error('Error linking categories:', linkError);
        }
      }
    }

    return updatedPost as PostRow;
  }

  return null;
}

export async function deletePost(id: string): Promise<boolean> {
  if (!isSupabaseConfigured()) {
    return false;
  }

  const supabase = createClient();

  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting post:', error);
    return false;
  }

  return true;
}

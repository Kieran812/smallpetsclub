import { createClient } from './client';

export interface CategoryRow {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  parent_id: string | null;
  position: number;
  created_at: string;
}

export interface CategoryWithParent extends CategoryRow {
  parent?: { id: string; name: string; slug: string } | null;
}

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-supabase-url'
  );
}

export async function getCategories(): Promise<CategoryRow[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  const supabase = createClient();

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('position', { ascending: true })
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return (data as CategoryRow[]) || [];
}

export async function getCategoryById(id: string): Promise<CategoryRow | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = createClient();

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching category:', error);
    return null;
  }

  return data as CategoryRow;
}

export async function getCategoryWithParent(id: string): Promise<CategoryWithParent | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = createClient();

  const { data: category, error: catError } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single();

  if (catError || !category) {
    console.error('Error fetching category:', catError);
    return null;
  }

  let parent = null;
  if (category.parent_id) {
    const { data: parentData, error: parentError } = await supabase
      .from('categories')
      .select('id, name, slug')
      .eq('id', category.parent_id)
      .single();

    if (!parentError && parentData) {
      parent = parentData;
    }
  }

  return {
    ...(category as CategoryRow),
    parent,
  };
}

export async function getAllCategoriesForParentSelect(): Promise<{ id: string; name: string }[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  const supabase = createClient();

  const { data, error } = await supabase
    .from('categories')
    .select('id, name')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching categories for parent select:', error);
    return [];
  }

  return (data as { id: string; name: string }[]) || [];
}

export interface CreateCategoryData {
  name: string;
  slug: string;
  description?: string | null;
  parent_id?: string | null;
  position?: number;
}

export interface UpdateCategoryData extends Partial<Omit<CreateCategoryData, 'slug'>> {
  slug?: string;
}

export async function createCategory(data: CreateCategoryData): Promise<CategoryRow | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = createClient();

  const { data: newCategory, error } = await supabase
    .from('categories')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('Error creating category:', error);
    return null;
  }

  return newCategory as CategoryRow;
}

export async function updateCategory(id: string, data: UpdateCategoryData): Promise<CategoryRow | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = createClient();

  const { data: updatedCategory, error } = await supabase
    .from('categories')
    .update(data)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating category:', error);
    return null;
  }

  return updatedCategory as CategoryRow;
}

export async function deleteCategory(id: string): Promise<boolean> {
  if (!isSupabaseConfigured()) {
    return false;
  }

  const supabase = createClient();

  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting category:', error);
    return false;
  }

  return true;
}

export async function updateCategoryPositions(updates: { id: string; position: number }[]): Promise<boolean> {
  if (!isSupabaseConfigured()) {
    return false;
  }

  const supabase = createClient();

  const promises = updates.map(({ id, position }) =>
    supabase
      .from('categories')
      .update({ position })
      .eq('id', id)
  );

  const results = await Promise.all(promises);

  const hasError = results.some((result) => result.error);

  if (hasError) {
    console.error('Error updating category positions');
    return false;
  }

  return true;
}

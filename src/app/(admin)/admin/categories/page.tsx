'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Pencil, Trash2, X, Loader2, AlertCircle, FolderTree, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  getCategories,
  getAllCategoriesForParentSelect,
  createCategory,
  updateCategory,
  deleteCategory,
  updateCategoryPositions,
  type CategoryRow,
} from '@/lib/supabase/category-queries';

interface Category extends CategoryRow {
  parent_name?: string;
  children?: Category[];
}

const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Hamster',
    slug: 'hamster',
    description: 'Complete care guides for Syrian, Dwarf, and other hamster species.',
    parent_id: null,
    position: 1,
    created_at: '2026-03-01',
  },
  {
    id: '2',
    name: 'Chinchilla',
    slug: 'chinchilla',
    description: 'Everything about chinchilla care, diet, and habitat setup.',
    parent_id: null,
    position: 2,
    created_at: '2026-03-01',
  },
  {
    id: '3',
    name: 'Hedgehog',
    slug: 'hedgehog',
    description: 'African pygmy hedgehog care and husbandry guides.',
    parent_id: null,
    position: 3,
    created_at: '2026-03-01',
  },
  {
    id: '4',
    name: 'Syrian Hamster',
    slug: 'syrian-hamster',
    description: 'Specific care guides for Syrian hamsters.',
    parent_id: '1',
    parent_name: 'Hamster',
    position: 1,
    created_at: '2026-03-05',
  },
  {
    id: '5',
    name: 'Dwarf Hamster',
    slug: 'dwarf-hamster',
    description: 'Care guides for Dwarf hamsters including Roborovski and Winter White.',
    parent_id: '1',
    parent_name: 'Hamster',
    position: 2,
    created_at: '2026-03-05',
  },
  {
    id: '6',
    name: 'Guinea Pig',
    slug: 'guinea-pig',
    description: 'Guinea pig care, diet, and socialization guides.',
    parent_id: null,
    position: 4,
    created_at: '2026-03-01',
  },
  {
    id: '7',
    name: 'Rat',
    slug: 'rat',
    description: 'Domestic rat care, training, and enrichment.',
    parent_id: null,
    position: 5,
    created_at: '2026-03-01',
  },
];

interface CategoryFormData {
  name: string;
  slug: string;
  description: string;
  parent_id: string;
  position: string;
}

interface CategoryFormErrors {
  name?: string;
  slug?: string;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [parentOptions, setParentOptions] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState<CategoryFormData>({
    name: '',
    slug: '',
    description: '',
    parent_id: '',
    position: '0',
  });
  const [formErrors, setFormErrors] = useState<CategoryFormErrors>({});
  const [saving, setSaving] = useState(false);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const supabaseCategories = await getCategories();
      const supabaseParentOptions = await getAllCategoriesForParentSelect();
      setParentOptions(supabaseParentOptions);

      if (supabaseCategories.length > 0) {
        const categoriesWithParent: Category[] = supabaseCategories.map((cat) => {
          const parent = cat.parent_id
            ? supabaseParentOptions.find((p) => p.id === cat.parent_id)
            : null;
          return {
            ...cat,
            parent_name: parent?.name,
          };
        });
        setCategories(categoriesWithParent);
      } else {
        setCategories(mockCategories);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError('Failed to load categories. Using mock data.');
      setCategories(mockCategories);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const validateForm = (): boolean => {
    const errors: CategoryFormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.slug.trim()) {
      errors.slug = 'Slug is required';
    } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
      errors.slug = 'Slug can only contain lowercase letters, numbers, and hyphens';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleOpenModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        slug: category.slug,
        description: category.description || '',
        parent_id: category.parent_id || '',
        position: category.position.toString(),
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        slug: '',
        description: '',
        parent_id: '',
        position: '0',
      });
    }
    setFormErrors({});
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      slug: '',
      description: '',
      parent_id: '',
      position: '0',
    });
    setFormErrors({});
  };

  const handleNameChange = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      name,
      slug: prev.slug === generateSlug(prev.name) || !prev.slug ? generateSlug(name) : prev.slug,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSaving(true);

    try {
      const categoryData = {
        name: formData.name.trim(),
        slug: formData.slug.trim(),
        description: formData.description.trim() || null,
        parent_id: formData.parent_id || null,
        position: parseInt(formData.position) || 0,
      };

      if (editingCategory) {
        const updated = await updateCategory(editingCategory.id, categoryData);
        if (updated) {
          await fetchCategories();
          handleCloseModal();
        } else {
          alert('Failed to update category. Please try again.');
        }
      } else {
        const created = await createCategory(categoryData);
        if (created) {
          await fetchCategories();
          handleCloseModal();
        } else {
          alert('Failed to create category. Please try again.');
        }
      }
    } catch (err) {
      console.error('Error saving category:', err);
      alert('Failed to save category. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category? This action cannot be undone.')) {
      return;
    }

    const success = await deleteCategory(id);
    if (success) {
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } else {
      alert('Failed to delete category. It may have associated posts. Please try again.');
    }
  };

  const handleMoveUp = async (index: number) => {
    if (index === 0) return;

    const newCategories = [...categories];
    const temp = newCategories[index].position;
    newCategories[index].position = newCategories[index - 1].position;
    newCategories[index - 1].position = temp;

    const sortedCategories = newCategories.sort((a, b) => a.position - b.position);
    setCategories(sortedCategories);

    const updates = [
      { id: sortedCategories[index].id, position: sortedCategories[index].position },
      { id: sortedCategories[index - 1].id, position: sortedCategories[index - 1].position },
    ];

    await updateCategoryPositions(updates);
  };

  const handleMoveDown = async (index: number) => {
    if (index === categories.length - 1) return;

    const newCategories = [...categories];
    const temp = newCategories[index].position;
    newCategories[index].position = newCategories[index + 1].position;
    newCategories[index + 1].position = temp;

    const sortedCategories = newCategories.sort((a, b) => a.position - b.position);
    setCategories(sortedCategories);

    const updates = [
      { id: sortedCategories[index].id, position: sortedCategories[index].position },
      { id: sortedCategories[index + 1].id, position: sortedCategories[index + 1].position },
    ];

    await updateCategoryPositions(updates);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-text-muted">Loading categories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-text">Categories Management</h2>
          <p className="text-sm text-text-muted">Organize your content into categories</p>
        </div>
        <Button variant="primary" className="gap-2" onClick={() => handleOpenModal()}>
          <Plus className="w-5 h-5" />
          New Category
        </Button>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-[#FDF8F5]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-text w-16">Order</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Slug</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Parent</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Description</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <FolderTree className="w-12 h-12 text-text-muted/50" />
                      <p className="text-text-muted">No categories found</p>
                      <Button variant="secondary" onClick={() => handleOpenModal()}>
                        Create your first category
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                categories.map((category, index) => (
                  <tr
                    key={category.id}
                    className="border-b border-border/50 hover:bg-[#FDF8F5]/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleMoveUp(index)}
                          disabled={index === 0}
                          className="p-1 hover:bg-[#FEF3EE] rounded transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Move up"
                        >
                          <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleMoveDown(index)}
                          disabled={index === categories.length - 1}
                          className="p-1 hover:bg-[#FEF3EE] rounded transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Move down"
                        >
                          <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <span className="text-sm text-text-muted ml-1">{category.position}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <GripVertical className="w-5 h-5 text-text-muted/30 cursor-grab" />
                        <span className="font-medium text-text">{category.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted font-mono">{category.slug}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">
                      {category.parent_name || '-'}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-text-muted truncate max-w-xs">
                        {category.description || '-'}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenModal(category)}
                          className="p-2 hover:bg-[#FEF3EE] rounded-lg transition-colors duration-200"
                          title="Edit"
                        >
                          <Pencil className="w-5 h-5 text-text-muted hover:text-primary" />
                        </button>
                        <button
                          onClick={() => handleDelete(category.id)}
                          className="p-2 hover:bg-[#FEF3EE] rounded-lg transition-colors duration-200"
                          title="Delete"
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={handleCloseModal} />
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text">
                {editingCategory ? 'Edit Category' : 'New Category'}
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-[#FEF3EE] rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-text-muted" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="e.g., Hamster"
                  error={!!formErrors.name}
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-text mb-2">
                  Slug <span className="text-red-500">*</span>
                </label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                  placeholder="e.g., hamster"
                  error={!!formErrors.slug}
                />
                {formErrors.slug && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.slug}</p>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-text mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief description of this category"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-text text-base transition-all duration-200 focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(232,165,152,0.15)] resize-none"
                />
              </div>

              <div>
                <label htmlFor="parent_id" className="block text-sm font-medium text-text mb-2">
                  Parent Category
                </label>
                <select
                  id="parent_id"
                  value={formData.parent_id}
                  onChange={(e) => setFormData((prev) => ({ ...prev, parent_id: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-text text-base transition-all duration-200 focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(232,165,152,0.15)] cursor-pointer"
                >
                  <option value="">None (Top-level category)</option>
                  {parentOptions
                    .filter((p) => p.id !== editingCategory?.id)
                    .map((parent) => (
                      <option key={parent.id} value={parent.id}>
                        {parent.name}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-text mb-2">
                  Position
                </label>
                <Input
                  id="position"
                  type="number"
                  min="0"
                  value={formData.position}
                  onChange={(e) => setFormData((prev) => ({ ...prev, position: e.target.value }))}
                  placeholder="0"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleCloseModal}
                  className="flex-1"
                  disabled={saving}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1"
                  disabled={saving}
                >
                  {saving ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : editingCategory ? (
                    'Update'
                  ) : (
                    'Create'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { X, Globe, Type, AlignLeft, Tag, Star } from 'lucide-react';

const BookmarkModal = ({ isOpen, onClose, onSave, bookmark = null }) => {
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    description: '',
    tags: '',
    is_favorite: false
  });
  const [error, setError] = useState('');

  // When the modal opens or the bookmark changes, sync the form
  useEffect(() => {
    if (bookmark) {
      setFormData({
        url: bookmark.url,
        title: bookmark.title,
        description: bookmark.description || '',
        tags: Array.isArray(bookmark.tags) ? bookmark.tags.join(', ') : '',
        is_favorite: !!bookmark.is_favorite
      });
    } else {
      // Reset for new bookmark
      setFormData({
        url: '',
        title: '',
        description: '',
        tags: '',
        is_favorite: false
      });
    }
    setError('');
  }, [bookmark, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic Validation (Matching Backend)
    if (!formData.url.startsWith('http://') && !formData.url.startsWith('https://')) {
      setError('URL must start with http:// or https://');
      return;
    }

    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }

    // Convert comma-separated string to array for the backend
    const tagsArray = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');

    onSave({
      ...formData,
      tags: tagsArray
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in shadow-2xl">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden animate-slide-up border border-gray-100 shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b flex items-center justify-between bg-gray-50/50">
          <h2 className="text-xl font-bold text-gray-900">
            {bookmark ? 'Edit Bookmark' : 'Add New Bookmark'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
              {error}
            </div>
          )}

          <div className="space-y-4">
            {/* URL Input */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary-500" />
                URL
              </label>
              <input
                type="text"
                placeholder="https://example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                required
              />
            </div>

            {/* Title Input */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Type className="w-4 h-4 text-primary-500" />
                Title
              </label>
              <input
                type="text"
                placeholder="Bookmark Title"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            {/* Description Textarea */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <AlignLeft className="w-4 h-4 text-primary-500" />
                Description
              </label>
              <textarea
                placeholder="Optional description..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium h-24 resize-none"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            {/* Tags Input */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary-500" />
                Tags (separate by commas)
              </label>
              <input
                type="text"
                placeholder="design, dev, tools"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              />
            </div>

            {/* Favorite Toggle */}
            <label className="flex items-center gap-3 cursor-pointer group select-none">
              <div 
                className={`w-12 h-6 rounded-full transition-all relative ${formData.is_favorite ? 'bg-yellow-400' : 'bg-gray-200'}`}
                onClick={() => setFormData({ ...formData, is_favorite: !formData.is_favorite })}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${formData.is_favorite ? 'left-7' : 'left-1 shadow-sm'}`}></div>
              </div>
              <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Star className={`w-4 h-4 ${formData.is_favorite ? 'fill-yellow-400 text-yellow-500' : 'text-gray-400'}`} />
                Mark as Favorite
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-bold transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-primary-200 transition-all active:scale-95"
            >
              {bookmark ? 'Update' : 'Save Bookmark'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookmarkModal;

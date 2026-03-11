import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BookmarkList from './components/BookmarkList';
import BookmarkModal from './components/BookmarkModal';
import { LayoutGrid, AlertCircle } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBookmark, setEditingBookmark] = useState(null);

  useEffect(() => {
    fetchData();
  }, [selectedTag, showFavorites]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      let url = `${API_BASE_URL}/bookmarks`;
      const params = new URLSearchParams();
      if (selectedTag) params.append('tag', selectedTag);
      if (showFavorites) params.append('favorite', 'true');
      
      const [bookmarksRes, tagsRes] = await Promise.all([
        axios.get(`${url}?${params.toString()}`),
        axios.get(`${API_BASE_URL}/tags`)
      ]);

      setBookmarks(bookmarksRes.data);
      setTags(tagsRes.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to connect to the server. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFavorite = async (id, currentStatus) => {
    try {
      await axios.put(`${API_BASE_URL}/bookmarks/${id}`, {
        is_favorite: !currentStatus
      });
      fetchData();
    } catch (err) {
      console.error('Error toggling favorite:', err);
    }
  };

  const handleEdit = (bookmark) => {
    setEditingBookmark(bookmark);
    setIsModalOpen(true);
  };

  const handleSave = async (formData) => {
    try {
      if (editingBookmark) {
        await axios.put(`${API_BASE_URL}/bookmarks/${editingBookmark.id}`, formData);
      } else {
        await axios.post(`${API_BASE_URL}/bookmarks`, formData);
      }
      setIsModalOpen(false);
      setEditingBookmark(null);
      fetchData();
    } catch (err) {
      console.error('Error saving bookmark:', err);
      alert('Failed to save bookmark. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this bookmark?')) {
      try {
        await axios.delete(`${API_BASE_URL}/bookmarks/${id}`);
        fetchData();
      } catch (err) {
        console.error('Error deleting bookmark:', err);
      }
    }
  };

  const filteredBookmarks = bookmarks.filter(b => 
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar 
        onAddClick={() => {
          setEditingBookmark(null);
          setIsModalOpen(true);
        }} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className="flex flex-1">
        <Sidebar 
          tags={tags} 
          selectedTag={selectedTag} 
          setSelectedTag={setSelectedTag}
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
        />

        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <LayoutGrid className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {showFavorites ? 'Favorite Bookmarks' : selectedTag ? `Tag: ${selectedTag}` : 'All Bookmarks'}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {loading ? 'Crunching data...' : `${filteredBookmarks.length} links found`}
                  </p>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-4 mb-8 animate-shake">
                <div className="bg-red-100 p-2 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-red-900">Server Error</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            )}

            <BookmarkList 
              bookmarks={filteredBookmarks}
              loading={loading}
              onToggleFavorite={handleToggleFavorite}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </main>
      </div>

      <BookmarkModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingBookmark(null);
        }}
        onSave={handleSave}
        bookmark={editingBookmark}
      />
    </div>
  );
}

export default App;

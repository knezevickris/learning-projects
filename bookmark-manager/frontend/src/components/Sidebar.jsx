import { Star, Hash, LayoutGrid, X } from 'lucide-react';

const Sidebar = ({ tags, selectedTag, setSelectedTag, showFavorites, setShowFavorites, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`fixed md:sticky top-[65px] left-0 bottom-0 md:bottom-auto w-64 bg-white border-r h-[calc(100vh-65px)] overflow-y-auto px-4 py-6 z-50 md:z-10 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="flex md:hidden items-center justify-between mb-6 px-3">
          <h2 className="font-bold text-gray-900">Navigation</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="space-y-1 mb-8">
          <button
            onClick={() => {
              setSelectedTag(null);
              setShowFavorites(false);
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
              !selectedTag && !showFavorites
                ? 'bg-primary-50 text-primary-700 font-semibold shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
            <span>All Bookmarks</span>
          </button>

          <button
            onClick={() => {
              setSelectedTag(null);
              setShowFavorites(true);
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
              showFavorites
                ? 'bg-yellow-50 text-yellow-700 font-semibold shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Star className={`w-5 h-5 ${showFavorites ? 'fill-yellow-400 text-yellow-500' : ''}`} />
            <span>Favorites</span>
          </button>
        </div>

        <div>
          <div className="flex items-center gap-2 px-3 mb-3">
            <Hash className="w-4 h-4 text-gray-400" />
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tags</h2>
          </div>
          <div className="space-y-1">
            {tags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => {
                  setSelectedTag(tag.name);
                  setShowFavorites(false);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                  selectedTag === tag.name
                    ? 'bg-primary-50 text-primary-700 font-semibold shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="truncate max-w-[140px] lowercase">{tag.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedTag === tag.name ? 'bg-primary-200' : 'bg-gray-100 text-gray-500'
                }`}>
                  {tag.count}
                </span>
              </button>
            ))}

            {tags.length === 0 && (
              <p className="px-3 py-2 text-sm text-gray-400 italic">No tags yet</p>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

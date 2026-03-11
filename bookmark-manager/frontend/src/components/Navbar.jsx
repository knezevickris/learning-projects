import { Search, Plus, Menu } from 'lucide-react';

const Navbar = ({ onAddClick, searchQuery, setSearchQuery, toggleSidebar }) => {
  return (
    <nav className="bg-white border-b sticky top-0 z-10 px-4 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleSidebar}
          className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
        <div className="bg-primary-600 p-2 rounded-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-900 hidden sm:block tracking-tight">Bookmarks</h1>
      </div>

      <div className="flex-1 max-w-2xl mx-6">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
          <input
            type="text"
            placeholder="Search bookmarks by title or description..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all text-gray-900"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={onAddClick}
        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-primary-200"
      >
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">Add New</span>
      </button>
    </nav>
  );
};

export default Navbar;

import { Star, Edit2, Trash2, ExternalLink } from 'lucide-react';

const BookmarkCard = ({ bookmark, onToggleFavorite, onEdit, onDelete }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary-100 transition-all group animate-fade-in relative">
      <div className="flex justify-between items-start gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-gray-900 truncate group-hover:text-primary-600 transition-colors">
              {bookmark.title}
            </h3>
            <a 
              href={bookmark.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 text-gray-400 hover:text-primary-500 transition-colors"
              title="Open link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm text-gray-500 truncate mb-2">
            {bookmark.url}
          </p>
        </div>
        
        <button
          onClick={() => onToggleFavorite(bookmark.id, bookmark.is_favorite)}
          className={`p-2 rounded-full transition-all ${
            bookmark.is_favorite 
              ? 'bg-yellow-50 text-yellow-500 shadow-inner' 
              : 'bg-gray-50 text-gray-300 hover:bg-yellow-50 hover:text-yellow-400'
          }`}
        >
          <Star className={`w-5 h-5 ${bookmark.is_favorite ? 'fill-yellow-400' : ''}`} />
        </button>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed h-10">
        {bookmark.description || "No description provided."}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-16">
        {bookmark.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-md border border-gray-200 hover:bg-white hover:border-primary-300 hover:text-primary-600 transition-all cursor-default"
          >
            {tag}
          </span>
        ))}
        {bookmark.tags.length === 0 && (
          <span className="text-[10px] text-gray-300 font-medium">No tags</span>
        )}
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex justify-end gap-2 border-t pt-4 border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
        <button
          onClick={() => onEdit(bookmark)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-all"
        >
          <Edit2 className="w-3.5 h-3.5" />
          Edit
        </button>
        <button
          onClick={() => onDelete(bookmark.id)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-all"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookmarkCard;

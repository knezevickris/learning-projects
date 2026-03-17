"use client";

import React from "react";

export type SortOption = "newest" | "oldest" | "highest" | "lowest";

interface FilterBarProps {
  selectedRatings: Set<number>;
  onRatingToggle: (rating: number) => void;
  onClear: () => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

/**
 * Filter bar for toggling star ratings, sorting, and displaying filtered results count.
 */
export default function FilterBar({
  selectedRatings,
  onRatingToggle,
  onClear,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}: FilterBarProps) {
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="flex flex-col gap-4 py-4 px-5 bg-white border border-slate-300 rounded mb-4">
      {/* Search and Sorting Row */}
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <input
              type="text"
              placeholder="Search in reviews..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-1.5 text-[10px] font-medium text-slate-700 placeholder-slate-400 outline-none focus:border-slate-400 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="bg-white border border-slate-300 rounded px-2 py-1 text-[10px] font-bold text-slate-700 outline-none focus:border-slate-400 cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>
      </div>

      <div className="h-px bg-slate-100" />

      {/* Rating Filters Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-2">
            Filter by Rating:
          </span>
          <div className="flex items-center gap-1.5">
            {ratings.map((rating) => {
              const isActive = selectedRatings.has(rating);
              return (
                <button
                  key={rating}
                  onClick={() => onRatingToggle(rating)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded border text-[10px] font-bold transition-colors ${
                    isActive
                      ? "bg-slate-800 text-white border-slate-800"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {rating}★
                </button>
              );
            })}
          </div>
          
          {(selectedRatings.size > 0 || searchQuery) && (
            <button
              onClick={onClear}
              className="text-[10px] font-bold text-red-400 hover:text-red-500 uppercase tracking-tight ml-2 underline underline-offset-4"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-200 px-3 py-1 rounded inline-block sm:self-start">
          Showing <span className="text-slate-800">{filteredCount}</span> of <span className="text-slate-800">{totalCount}</span> Reviews
        </div>
      </div>
    </div>
  );
}

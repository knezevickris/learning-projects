"use client";

import React from "react";

interface FilterBarProps {
  selectedRatings: Set<number>;
  onRatingToggle: (rating: number) => void;
  onClear: () => void;
  totalCount: number;
  filteredCount: number;
}

/**
 * Filter bar for toggling star ratings and displaying filtered results count.
 */
export default function FilterBar({
  selectedRatings,
  onRatingToggle,
  onClear,
  totalCount,
  filteredCount,
}: FilterBarProps) {
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-5 bg-white border border-slate-300 rounded mb-4">
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
        
        {selectedRatings.size > 0 && (
          <button
            onClick={onClear}
            className="text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase tracking-tight ml-2 underline underline-offset-4"
          >
            Clear Filters
          </button>
        )}
      </div>

      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-200 px-3 py-1 rounded">
        Showing <span className="text-slate-800">{filteredCount}</span> of <span className="text-slate-800">{totalCount}</span> Reviews
      </div>
    </div>
  );
}

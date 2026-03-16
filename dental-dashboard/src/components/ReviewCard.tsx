"use client";

import React, { useState } from "react";
import { Review } from "@/lib/types";
import StarRating from "./StarRating";

interface ReviewCardProps {
  review: Review;
}

/**
 * A clean, business-styled card for individual Google reviews.
 * Includes text truncation and fallback avatars.
 */
export default function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const textLimit = 150;
  const hasLongText = review.text.length > textLimit;
  const displayedText = isExpanded ? review.text : review.text.slice(0, textLimit);

  return (
    <div className="bg-white border-b border-slate-100 last:border-b-0 py-5">
      <div className="flex items-start gap-4">
        {/* Profile Photo / Fallback */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
          {review.profilePhotoUrl ? (
            <img 
              src={review.profilePhotoUrl} 
              alt={review.authorName} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.authorName)}&background=f1f5f9&color=64748b`;
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-xs uppercase">
              {review.authorName.charAt(0)}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-sm font-bold text-slate-900">
              {review.authorName}
            </h4>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              {review.relativeTime}
            </span>
          </div>

          <StarRating rating={review.rating} className="opacity-80 scale-90 origin-left" />

          <div className="pt-1">
            {review.text ? (
              <p className="text-sm text-slate-600 leading-relaxed">
                {displayedText}
                {hasLongText && !isExpanded && "..."}
                {hasLongText && (
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="ml-1 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-tight"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
              </p>
            ) : (
              <p className="text-sm italic text-slate-400">
                Rating only (no written review)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

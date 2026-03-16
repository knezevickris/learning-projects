"use client";

import React from "react";
import { Review } from "@/lib/types";
import ReviewCard from "./ReviewCard";

interface ReviewsListProps {
  reviews: Review[];
}

/**
 * A scrollable list of filtered Google reviews.
 */
export default function ReviewsList({ reviews }: ReviewsListProps) {
  if (reviews.length === 0) {
    return (
      <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-12 text-center">
        <p className="text-slate-400 font-medium">No reviews found for this selection.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-300 rounded overflow-hidden">
      <div className="p-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
        <h3 className="text-xs font-bold text-slate-700 uppercase">
          Recent Reviews ({reviews.length})
        </h3>
      </div>
      <div className="overflow-y-auto max-h-[600px] divide-y divide-slate-200 px-5">
        {reviews.map((review, index) => (
          <ReviewCard key={`${review.authorName}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}

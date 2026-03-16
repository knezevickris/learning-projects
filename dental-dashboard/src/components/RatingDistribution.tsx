import React from "react";
import { Review } from "@/lib/types";

interface RatingDistributionProps {
  reviews: Review[];
}

/**
 * Renders a horizontal bar chart showing the distribution of star ratings.
 */
export default function RatingDistribution({ reviews }: RatingDistributionProps) {
  // Initialize counts
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  
  // Count ratings
  reviews.forEach((review) => {
    const r = Math.round(review.rating) as keyof typeof counts;
    if (counts[r] !== undefined) {
      counts[r]++;
    }
  });

  const total = reviews.length;

  return (
    <div className="space-y-1 py-2">
      {([5, 4, 3, 2, 1] as const).map((star) => {
        const count = counts[star];
        const percentage = total > 0 ? (count / total) * 100 : 0;
        
        return (
          <div key={star} className="flex items-center gap-2 text-[10px]">
            <span className="w-10 text-slate-500 font-medium">
              {star} star
            </span>
            <div className="flex-1 h-3 bg-slate-100 border border-slate-200">
              <div 
                className="h-full bg-slate-400"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="w-6 text-right text-slate-400 font-mono">
              {count}
            </span>
          </div>
        );
      })}
    </div>
  );
}

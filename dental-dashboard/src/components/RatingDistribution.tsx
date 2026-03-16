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
    <div className="space-y-1.5 py-4">
      {([5, 4, 3, 2, 1] as const).map((star) => {
        const count = counts[star];
        const percentage = total > 0 ? (count / total) * 100 : 0;
        
        return (
          <div key={star} className="flex items-center gap-3 text-sm">
            <span className="w-12 text-slate-500 font-medium whitespace-nowrap">
              {star} star
            </span>
            <div className="relative flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-slate-400 transition-all duration-500 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="w-8 text-right text-slate-400 font-mono text-xs">
              {count}
            </span>
          </div>
        );
      })}
    </div>
  );
}

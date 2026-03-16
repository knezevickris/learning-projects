import React from "react";
import { Practice } from "@/lib/types";
import StarRating from "./StarRating";
import RatingDistribution from "./RatingDistribution";

interface PracticeCardProps {
  practice: Practice;
}

/**
 * Summary card for a dental practice in a business dashboard context.
 */
export default function PracticeCard({ practice }: PracticeCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-1 mb-4">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
          {practice.name}
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
          {practice.address}
        </p>
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-3xl font-bold text-slate-900 leading-none">
          {practice.rating.toFixed(1)}
        </span>
        <StarRating rating={practice.rating} />
      </div>
      
      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
        {practice.userRatingCount.toLocaleString()} Total Google Reviews
      </p>

      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
          Rating Distribution
        </h3>
        <RatingDistribution reviews={practice.reviews} />
      </div>
    </div>
  );
}

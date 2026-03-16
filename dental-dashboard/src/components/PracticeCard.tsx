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
    <div className="bg-white border border-slate-300 rounded p-5">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800">
          {practice.name}
        </h2>
        <p className="text-xs text-slate-500">
          {practice.address}
        </p>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl font-bold text-slate-800">
          {practice.rating.toFixed(1)}
        </span>
        <StarRating rating={practice.rating} />
      </div>
      
      <p className="text-[10px] text-slate-400 uppercase font-medium mb-4">
        {practice.userRatingCount.toLocaleString()} Total Reviews
      </p>

      <div className="pt-4 border-t border-slate-200">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
          Rating Distribution
        </h3>
        <RatingDistribution reviews={practice.reviews} />
      </div>
    </div>
  );
}

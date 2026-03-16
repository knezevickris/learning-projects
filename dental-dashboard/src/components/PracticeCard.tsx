import React from "react";
import { Practice } from "@/lib/types";
import StarRating from "./StarRating";
import RatingDistribution from "./RatingDistribution";

interface PracticeCardProps {
  practice: Practice;
  highlighted?: boolean;
  className?: string;
}

/**
 * Summary card for a dental practice in a business dashboard context.
 */
export default function PracticeCard({ practice, highlighted, className = "" }: PracticeCardProps) {
  return (
    <div className={`relative bg-white border rounded p-5 ${className} ${
      highlighted 
        ? "border-blue-600 ring-1 ring-blue-600 ring-opacity-10 shadow-lg shadow-blue-500/5" 
        : "border-slate-300"
    }`}>
      {highlighted && (
        <div className="absolute -top-3 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-sm">
          ⭐ Top Performer
        </div>
      )}
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

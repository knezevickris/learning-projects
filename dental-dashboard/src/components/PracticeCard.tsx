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
    <div className={`relative bg-white border rounded p-5 shadow-sm ${className} ${
      highlighted 
        ? "border-brand-accent ring-1 ring-brand-accent shadow-brand-accent/5" 
        : "border-brand-border"
    }`}>
      {highlighted && (
        <div className="absolute -top-3 left-4 bg-brand-accent text-brand-dark text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-sm border border-brand-accent">
          Top Performer
        </div>
      )}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-brand-dark">
          {practice.name}
        </h2>
        <p className="text-xs text-brand-text/60">
          {practice.address}
        </p>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl font-bold text-brand-dark">
          {practice.rating.toFixed(1)}
        </span>
        <StarRating rating={practice.rating} />
      </div>
      
      <p className="text-[10px] text-brand-text/50 uppercase font-bold tracking-tight mb-4">
        {practice.userRatingCount.toLocaleString()} Total Reviews
      </p>

      <div className="pt-4 border-t border-brand-border/30">
        <h3 className="text-[10px] font-bold text-brand-text/50 uppercase tracking-wider mb-2">
          Rating Distribution
        </h3>
        <RatingDistribution reviews={practice.reviews} />
      </div>
    </div>
  );
}

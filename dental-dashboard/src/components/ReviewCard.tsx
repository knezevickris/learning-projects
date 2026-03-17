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

  // Sentiment Keywords
  const sentimentConfig = {
    positive: ["friendly", "without pain", "great", "excellent", "professional", "amazing", "best", "painless", "gentle", "happy", "clean", "wonderful", "thanks", "perfect"],
    negative: ["pain", "wait", "not recommend", "misunderstanding", "waiting", "rude", "expensive", "costly", "hurt", "bad", "worst", "unprofessional", "angry", "disappointed", "slow", "fee"]
  };

  const highlightText = (text: string) => {
    if (!text) return text;

    // Create a combined regex for all keywords
    const posPattern = sentimentConfig.positive.join("|");
    const negPattern = sentimentConfig.negative.join("|");
    const combinedRegex = new RegExp(`\\b(${posPattern}|${negPattern})\\b`, "gi");

    const parts = text.split(combinedRegex);

    return parts.map((part, i) => {
      const lowerPart = part.toLowerCase();
      if (sentimentConfig.positive.includes(lowerPart)) {
        return (
          <mark key={i} className="bg-green-100 text-green-800 px-0.5 rounded-sm font-medium border-b border-green-200">
            {part}
          </mark>
        );
      }
      if (sentimentConfig.negative.includes(lowerPart)) {
        return (
          <mark key={i} className="bg-red-100 text-red-800 px-0.5 rounded-sm font-medium border-b border-red-200">
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  return (
    <div className="border-b border-brand-border/30 last:border-b-0 py-4">
      <div className="flex items-start gap-4">
        {/* Profile Avatar */}
        <div className="flex-shrink-0 w-8 h-8 bg-brand-highlight/20 flex items-center justify-center text-[10px] font-bold text-brand-text/60 overflow-hidden">
          {review.profilePhotoUrl ? (
            <img
              src={review.profilePhotoUrl}
              alt={review.authorName}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            review.authorName.charAt(0)
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-brand-dark">
              {review.authorName}
            </h4>
            <span className="text-[10px] font-medium text-brand-text/40 uppercase tracking-tight">
              {review.relativeTime}
            </span>
          </div>

          <StarRating rating={review.rating} className="scale-75 origin-left" />

          <div className="pt-0.5">
            {review.text ? (
              <p className="text-xs text-brand-text leading-normal">
                {highlightText(displayedText)}
                {hasLongText && !isExpanded && "..."}
                {hasLongText && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="ml-1 text-[10px] font-bold text-brand-dark/40 hover:underline uppercase"
                  >
                    {isExpanded ? "Less" : "More"}
                  </button>
                )}
              </p>
            ) : (
              <p className="text-[10px] italic text-brand-text/30">
                Rating only
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

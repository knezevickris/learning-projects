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

          {/* Response Suggestion for Negative Reviews */}
          {review.rating <= 2 && (
            <div className="mt-3 p-3 bg-brand-highlight/10 border border-brand-border/50 rounded-md">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg className="w-3 h-3 text-brand-dark/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="text-[10px] font-black text-brand-dark/60 uppercase tracking-widest">Suggested Response</span>
              </div>
              <p className="text-[11px] text-brand-text/80 leading-relaxed italic">
                {(() => {
                  const templates = [
                    `Hi ${review.authorName.split(' ')[0]}, we're truly sorry to hear about your experience. We value our patients' feedback and would like to learn more. Please contact our office manager so we can address your concerns directly.`,
                    `Hello ${review.authorName.split(' ')[0]}, we apologize for falling short of your expectations. We strive for excellence and would appreciate the chance to make this right. Please reach out to us at your earliest convenience.`,
                    `Dear ${review.authorName.split(' ')[0]}, thank you for bringing this to our attention. We are committed to providing high-quality care and are sorry you didn't feel that during your visit. We would love to discuss this further with you.`,
                    `We appreciate your honest feedback. We are constantly working to improve our patient experience and would like to hear more about where we can improve. Please reach out to our team at the office.`
                  ];
                  // Use authorName to pick a stable template
                  const index = review.authorName.length % templates.length;
                  return templates[index];
                })()}
              </p>
              <button 
                onClick={() => {
                  const templates = [
                    `Hi ${review.authorName.split(' ')[0]}, we're truly sorry to hear about your experience. We value our patients' feedback and would like to learn more. Please contact our office manager so we can address your concerns directly.`,
                    `Hello ${review.authorName.split(' ')[0]}, we apologize for falling short of your expectations. We strive for excellence and would appreciate the chance to make this right. Please reach out to us at your earliest convenience.`,
                    `Dear ${review.authorName.split(' ')[0]}, thank you for bringing this to our attention. We are committed to providing high-quality care and are sorry you didn't feel that during your visit. We would love to discuss this further with you.`,
                    `We appreciate your honest feedback. We are constantly working to improve our patient experience and would like to hear more about where we can improve. Please reach out to our team at the office.`
                  ];
                  const index = review.authorName.length % templates.length;
                  navigator.clipboard.writeText(templates[index]);
                }}
                className="mt-2 text-[9px] font-bold text-brand-dark/40 hover:text-brand-dark uppercase tracking-wide border border-brand-border/30 px-2 py-0.5 rounded bg-white transition-colors"
                title="Copy to clipboard"
              >
                Copy Template
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

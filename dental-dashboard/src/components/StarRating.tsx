import React from "react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  className?: string;
}

/**
 * StarRating component for a clean, business-tool aesthetic.
 * Supports decimal ratings with half-star rendering.
 */
export default function StarRating({ rating, maxStars = 5, className = "" }: StarRatingProps) {
  // Ensure rating is between 0 and maxStars
  const normalizedRating = Math.max(0, Math.min(rating, maxStars));

  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`Rating: ${rating} out of ${maxStars}`}>
      {[...Array(maxStars)].map((_, i) => {
        const starIndex = i + 1;
        
        // Determine star type
        let fillType: "full" | "half" | "empty" = "empty";
        if (normalizedRating >= starIndex) {
          fillType = "full";
        } else if (normalizedRating >= starIndex - 0.5) {
          fillType = "half";
        }

        return (
          <div key={i} className="relative">
            {/* Empty Star (Background) */}
            <svg
              className={`w-4 h-4 text-brand-border fill-current`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            {/* Filled Overlays */}
            {fillType !== "empty" && (
              <div 
                className="absolute inset-0 overflow-hidden" 
                style={{ width: fillType === "full" ? "100%" : "50%" }}
              >
                <svg
                  className={`w-4 h-4 text-amber-400 fill-current`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

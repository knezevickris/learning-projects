import React from "react";

export const sentimentConfig = {
  positive: ["friendly", "without pain", "great", "excellent", "professional", "amazing", "best", "painless", "gentle", "happy", "clean", "wonderful", "thanks", "perfect"],
  negative: ["pain", "wait", "not recommend", "misunderstanding", "waiting", "rude", "expensive", "costly", "hurt", "bad", "worst", "unprofessional", "angry", "disappointed", "slow", "fee"]
};

// Pre-compute the combined regex string so it's not rebuilt on each call
const posPattern = sentimentConfig.positive.join("|");
const negPattern = sentimentConfig.negative.join("|");
const combinedRegex = new RegExp(`\\b(${posPattern}|${negPattern})\\b`, "gi");

export const highlightText = (text: string): React.ReactNode => {
  if (!text) return text;

  const parts = text.split(combinedRegex);

  return parts.map((part, i) => {
    const lowerPart = part.toLowerCase();
    
    if (sentimentConfig.positive.includes(lowerPart)) {
      return React.createElement(
        "mark",
        { 
          key: i, 
          className: "bg-green-100 text-green-800 px-0.5 rounded-sm font-medium border-b border-green-200" 
        },
        part
      );
    }
    
    if (sentimentConfig.negative.includes(lowerPart)) {
      return React.createElement(
        "mark",
        {
          key: i,
          className: "bg-red-100 text-red-800 px-0.5 rounded-sm font-medium border-b border-red-200"
        },
        part
      );
    }
    
    return part;
  });
};

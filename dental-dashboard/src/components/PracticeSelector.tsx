"use client";

import React from "react";

interface PracticeSelectorProps {
  practices: { id: string; name: string }[];
  selectedId: string | "all";
  onSelect: (id: string | "all") => void;
}

/**
 * Tab-style selector for switching between practices.
 */
export default function PracticeSelector({ practices, selectedId, onSelect }: PracticeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onSelect("all")}
        className={`px-3 py-1.5 rounded border text-sm font-medium transition-colors ${
          selectedId === "all"
            ? "bg-brand-dark text-white border-brand-dark"
            : "bg-white text-brand-text border-brand-border hover:bg-brand-highlight/20"
        }`}
      >
        All Reviews
      </button>

      <button
        onClick={() => onSelect("comparison")}
        className={`px-3 py-1.5 rounded border text-sm font-medium transition-colors ${
          selectedId === "comparison"
            ? "bg-brand-dark text-white border-brand-dark"
            : "bg-white text-brand-text border-brand-border hover:bg-brand-highlight/20"
        }`}
      >
        Comparison View
      </button>
      
      {practices.map((practice) => (
        <button
          key={practice.id}
          onClick={() => onSelect(practice.id)}
          className={`px-3 py-1.5 rounded border text-sm font-medium transition-colors ${
            selectedId === practice.id
              ? "bg-brand-dark text-white border-brand-dark"
              : "bg-white text-brand-text border-brand-border hover:bg-brand-highlight/20"
          }`}
        >
          {practice.name}
        </button>
      ))}
    </div>
  );
}

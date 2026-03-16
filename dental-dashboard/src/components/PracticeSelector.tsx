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
        className={`px-3 py-1.5 rounded border text-sm font-medium ${
          selectedId === "all"
            ? "bg-slate-800 text-white border-slate-800"
            : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
        }`}
      >
        All Reviews
      </button>

      <button
        onClick={() => onSelect("comparison")}
        className={`px-3 py-1.5 rounded border text-sm font-medium ${
          selectedId === "comparison"
            ? "bg-slate-800 text-white border-slate-800"
            : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
        }`}
      >
        Comparison View
      </button>
      
      {practices.map((practice) => (
        <button
          key={practice.id}
          onClick={() => onSelect(practice.id)}
          className={`px-3 py-1.5 rounded border text-sm font-medium ${
            selectedId === practice.id
              ? "bg-slate-800 text-white border-slate-800"
              : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
          }`}
        >
          {practice.name}
        </button>
      ))}
    </div>
  );
}

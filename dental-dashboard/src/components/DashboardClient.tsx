"use client";

import React, { useState, useMemo } from "react";
import { Practice } from "@/lib/types";
import PracticeCard from "./PracticeCard";
import ReviewsList from "./ReviewsList";
import PracticeSelector from "./PracticeSelector";

interface DashboardClientProps {
  practices: Practice[];
}

/**
 * Client-side wrapper for the dashboard to manage selection and interaction.
 */
export default function DashboardClient({ practices }: DashboardClientProps) {
  const [selectedPracticeId, setSelectedPracticeId] = useState<string | "all" | "comparison">("all");

  // Filter practices to display based on selection
  const displayedPractices = useMemo(() => {
    if (selectedPracticeId === "all" || selectedPracticeId === "comparison") return practices;
    return practices.filter((p) => p.placeId === selectedPracticeId);
  }, [practices, selectedPracticeId]);

  // Consolidate all reviews for the selected context
  const allReviews = useMemo(() => {
    if (selectedPracticeId === "all" || selectedPracticeId === "comparison") {
      return practices.flatMap((p) => p.reviews).sort((a, b) =>
        new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime()
      );
    }
    const practice = practices.find((p) => p.placeId === selectedPracticeId);
    return practice ? practice.reviews : [];
  }, [practices, selectedPracticeId]);

  const selectorOptions = practices.map(p => ({ id: p.placeId, name: p.name }));

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Dashboard for dental practices
          </h1>
        </div>
      </div>

      <PracticeSelector
        practices={selectorOptions}
        selectedId={selectedPracticeId}
        onSelect={setSelectedPracticeId}
      />

      {selectedPracticeId === "comparison" ? (
        /* Comparison View: Side-by-Side */
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practices.map((p) => (
              <div key={p.placeId} className="flex flex-col h-full">
                <div className="mb-4 flex-1">
                  <PracticeCard practice={p} />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-tight">Unified Review Feed</h2>
            <ReviewsList reviews={allReviews} />
          </div>
        </div>
      ) : (
        /* Default Split View */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Summary Side */}
          <div className="lg:col-span-1 space-y-6">
            {displayedPractices.map((p) => (
              <PracticeCard key={p.placeId} practice={p} />
            ))}
          </div>

          {/* Reviews Feed */}
          <div className="lg:col-span-2">
            <ReviewsList reviews={allReviews} />
          </div>
        </div>
      )}
    </div>
  );
}

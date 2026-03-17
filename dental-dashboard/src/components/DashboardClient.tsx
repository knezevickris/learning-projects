"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Practice } from "@/lib/types";
import PracticeCard from "./PracticeCard";
import ReviewsList from "./ReviewsList";
import PracticeSelector from "./PracticeSelector";
import FilterBar, { SortOption } from "./FilterBar";

interface DashboardClientProps {
  practices: Practice[];
  fetchedAt?: string;
}

/**
 * Client-side wrapper for the dashboard to manage selection and interaction.
 */
export default function DashboardClient({ practices, fetchedAt }: DashboardClientProps) {
  const [selectedPracticeId, setSelectedPracticeId] = useState<string | "all" | "comparison">("all");
  const [selectedRatings, setSelectedRatings] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleRatingToggle = (rating: number) => {
    const newSelected = new Set(selectedRatings);
    if (newSelected.has(rating)) {
      newSelected.delete(rating);
    } else {
      newSelected.add(rating);
    }
    setSelectedRatings(newSelected);
  };

  const clearFilters = () => {
    setSelectedRatings(new Set());
    setSearchQuery("");
  };

  // Filter practices to display based on selection
  const displayedPractices = useMemo(() => {
    if (selectedPracticeId === "all" || selectedPracticeId === "comparison") return practices;
    return practices.filter((p) => p.placeId === selectedPracticeId);
  }, [practices, selectedPracticeId]);

  /**
   * Calculates a "Dampened Rating" score.
   * Trust grows as review count (v) increases relative to a threshold (k=15).
   * Formula: Score = Rating * (1 - e ^ (-v / k))
   */
  const calculateWeightedScore = (rating: number, reviewCount: number) => {
    if (reviewCount === 0) return 0;
    const k = 15; // Confidence threshold
    const confidence = 1 - Math.exp(-reviewCount / k);
    return rating * confidence;
  };

  // Determine the "Winner" (Top Performer) using Weighted Score
  const practiceMetrics = useMemo(() => {
    return practices.map(p => ({
      ...p,
      weightedScore: calculateWeightedScore(p.rating, p.userRatingCount)
    })).sort((a, b) => b.weightedScore - a.weightedScore);
  }, [practices]);

  const topPracticeId = useMemo(() => {
    if (practiceMetrics.length === 0) return null;
    return practiceMetrics[0].placeId;
  }, [practiceMetrics]);

  // Consolidate and filter reviews
  const reviewStats = useMemo(() => {
    let sourceReviews = [];
    if (selectedPracticeId === "all" || selectedPracticeId === "comparison") {
      sourceReviews = practices.flatMap((p) => p.reviews);
    } else {
      const practice = practices.find((p) => p.placeId === selectedPracticeId);
      sourceReviews = practice ? practice.reviews : [];
    }

    // Sort based on selection
    if (sortBy === "newest") {
      sourceReviews.sort((a, b) => new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime());
    } else if (sortBy === "oldest") {
      sourceReviews.sort((a, b) => new Date(a.publishTime).getTime() - new Date(b.publishTime).getTime());
    } else if (sortBy === "highest") {
      sourceReviews.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "lowest") {
      sourceReviews.sort((a, b) => a.rating - b.rating);
    }

    const filteredByRating = selectedRatings.size === 0
      ? sourceReviews
      : sourceReviews.filter(r => selectedRatings.has(Math.floor(r.rating)));

    const finalFiltered = debouncedSearchQuery.trim() === ""
      ? filteredByRating
      : filteredByRating.filter(r => {
        const query = debouncedSearchQuery.toLowerCase();
        return r.text && r.text.toLowerCase().includes(query);
      });

    return {
      total: sourceReviews.length,
      filteredReviews: finalFiltered
    };
  }, [practices, selectedPracticeId, selectedRatings, sortBy, debouncedSearchQuery]);

  const selectorOptions = practices.map(p => ({ id: p.placeId, name: p.name }));

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-dark tracking-tight">
            Dashboard for dental practices
          </h1>
          {fetchedAt && (
            <p className="mt-1 text-xs font-medium text-brand-text/70 uppercase tracking-wider">
              Last Synced: {new Date(fetchedAt).toLocaleString()}
            </p>
          )}
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
          {/* 1. Comparison Metrics Table */}
          <div className="bg-white border border-brand-border rounded-lg overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-brand-border bg-brand-highlight/30">
              <h2 className="text-sm font-bold text-brand-dark uppercase tracking-wider">Competitive Benchmarking</h2>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-left text-sm border-collapse min-w-max md:min-w-full">
                <thead>
                  <tr className="border-b border-brand-border">
                    <th className="sticky left-0 px-4 md:px-6 py-4 font-bold text-brand-text/60 uppercase text-[10px] tracking-widest bg-white z-10 border-r border-brand-border/30">
                      Metric
                    </th>
                    {practiceMetrics.map(p => (
                      <th key={p.placeId} className="px-6 py-4 font-bold text-brand-dark bg-white">
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/30">
                  <tr>
                    <td className="sticky left-0 px-4 md:px-6 py-4 font-medium text-brand-text/60 bg-white z-10 border-r border-brand-border/30">
                      Google Rating
                    </td>
                    {practiceMetrics.map(p => (
                      <td key={p.placeId} className="px-6 py-4 font-bold text-brand-dark">
                        {p.rating.toFixed(1)} / 5.0
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="sticky left-0 px-4 md:px-6 py-4 font-medium text-brand-text/60 bg-white z-10 border-r border-brand-border/30">
                      Total Reviews
                    </td>
                    {practiceMetrics.map(p => (
                      <td key={p.placeId} className="px-6 py-4 font-mono text-brand-dark">
                        {p.userRatingCount.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="sticky left-0 px-4 md:px-6 py-4 font-medium text-brand-text/60 bg-white z-10 border-r border-brand-border/30">
                      Strength Score
                    </td>
                    {practiceMetrics.map(p => {
                      const score = calculateWeightedScore(p.rating, p.userRatingCount);
                      return (
                        <td key={p.placeId} className="px-6 py-4 font-mono text-brand-dark">
                          {score.toFixed(2)}
                          <span className="text-[10px] text-brand-text/40 ml-1">/ 5.0</span>
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    <td className="sticky left-0 px-4 md:px-6 py-4 font-medium text-brand-text/60 bg-white z-10 border-r border-brand-border/30">
                      Rank
                    </td>
                    {practiceMetrics.map(p => {
                      const isTop = p.placeId === topPracticeId;
                      return (
                        <td key={p.placeId} className="px-6 py-4">
                          {isTop ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-brand-accent/30 text-brand-dark uppercase border border-brand-accent">
                              #1 Leader
                            </span>
                          ) : (
                            <span className="text-brand-text/40 text-xs">Competitor</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Side-by-Side Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practiceMetrics.map((p) => (
              <div key={p.placeId} className="flex flex-col h-full">
                <div className="mb-4 flex-1">
                  <PracticeCard
                    practice={p}
                    highlighted={p.placeId === topPracticeId}
                    className="h-full"
                  />
                </div>
              </div>
            ))}
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
            <FilterBar
              selectedRatings={selectedRatings}
              onRatingToggle={handleRatingToggle}
              onClear={clearFilters}
              sortBy={sortBy}
              onSortChange={setSortBy}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              totalCount={reviewStats.total}
              filteredCount={reviewStats.filteredReviews.length}
            />
            <ReviewsList reviews={reviewStats.filteredReviews} />
          </div>
        </div>
      )}
    </div>
  );
}

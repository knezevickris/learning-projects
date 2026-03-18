"use client";

import React, { useState, useMemo, useEffect } from "react";
import PracticeCard from "./PracticeCard";
import { Practice, Review } from "@/lib/types";
import ReviewsList from "./ReviewsList";
import PracticeSelector from "./PracticeSelector";
import FilterBar, { SortOption } from "./FilterBar";
import ComparisonTable from "./ComparisonTable";
import { calculateWeightedScore } from "@/lib/scoring";
import { downloadCSV } from "@/lib/csv-export";

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
      sourceReviews = practices.flatMap((p) => p.reviews.map(r => ({ ...r, practiceName: p.name })));
    } else {
      const practice = practices.find((p) => p.placeId === selectedPracticeId);
      sourceReviews = practice ? practice.reviews.map(r => ({ ...r, practiceName: practice.name })) : [];
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
      filteredReviews: finalFiltered as (Review & { practiceName: string })[]
    };
  }, [practices, selectedPracticeId, selectedRatings, sortBy, debouncedSearchQuery]);

  const handleDownloadCSV = () => {
    downloadCSV(reviewStats.filteredReviews);
  };

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
          <ComparisonTable practiceMetrics={practiceMetrics} topPracticeId={topPracticeId} />

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
              onDownload={handleDownloadCSV}
            />
            <ReviewsList reviews={reviewStats.filteredReviews} />
          </div>
        </div>
      )}
    </div>
  );
}

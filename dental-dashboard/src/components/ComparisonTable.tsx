import React from "react";
import { Practice } from "@/lib/types";
import { calculateWeightedScore } from "@/lib/scoring";

interface ComparisonTableProps {
  practiceMetrics: Practice[];
  topPracticeId: string | null;
}

export default function ComparisonTable({ practiceMetrics, topPracticeId }: ComparisonTableProps) {
  return (
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
  );
}

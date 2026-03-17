import React from "react";
import DashboardClient from "@/components/DashboardClient";
import ErrorMessage from "@/components/ErrorMessage";
import { fetchPlaceDetails } from "@/lib/google-places";
import { PRACTICES } from "@/lib/config";
import { Practice } from "@/lib/types";

// Force dynamic to ensure we don't bake-in the cache during build time
export const dynamic = "force-dynamic";

/**
 * Main dashboard server component.
 * Responsible for initial data fetching and layout structure.
 */
export default async function DashboardPage() {
  const fetchedAt = new Date().toISOString();
  
  try {
    // Direct server-side call instead of internal fetch()
    const fetchPromises = PRACTICES.map(p => fetchPlaceDetails(p.placeId));
    const results = await Promise.allSettled(fetchPromises);

    const successfulPractices: Practice[] = [];
    const errorMessages: string[] = [];

    results.forEach((result, index) => {
      const practiceConfig = PRACTICES[index];
      if (result.status === "fulfilled") {
        const fetchResult = result.value;
        if (fetchResult.ok) {
          successfulPractices.push(fetchResult.data);
        } else {
          errorMessages.push(`${practiceConfig.name}: ${fetchResult.error}`);
        }
      } else {
        errorMessages.push(`${practiceConfig.name}: Connection failed`);
      }
    });

    if (successfulPractices.length === 0) {
      const allErrors = errorMessages.length > 0 
        ? errorMessages.join(" | ") 
        : "Failed to connect to Google API.";
      return (
        <main className="min-h-screen bg-slate-50/50 px-4 py-12 md:px-8">
          <div className="max-w-7xl mx-auto">
            <ErrorMessage message={allErrors} />
          </div>
        </main>
      );
    }
    
    return (
      <main className="min-h-screen bg-slate-50/50 px-4 py-12 md:px-8">
        <div className="max-w-7xl mx-auto">
          <DashboardClient 
            practices={successfulPractices} 
            fetchedAt={fetchedAt} 
          />
          {errorMessages.length > 0 && (
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-xs font-mono">
              <strong>Partial data warning:</strong> {errorMessages.join(" | ")}
            </div>
          )}
        </div>
      </main>
    );

  } catch (err: any) {
    console.error("Dashboard Server Error:", err);
    return (
      <main className="min-h-screen bg-slate-50/50 px-4 py-12 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ErrorMessage message={err.message || "Failed to initialize dashboard."} />
        </div>
      </main>
    );
  }
}

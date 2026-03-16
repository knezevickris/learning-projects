import React from "react";
import DashboardClient from "@/components/DashboardClient";
import ErrorMessage from "@/components/ErrorMessage";
import { ApiResponse } from "@/lib/types";

// Force dynamic to ensure we don't bake-in the cache during build time
export const dynamic = "force-dynamic";

/**
 * Main dashboard server component.
 * Responsible for initial data fetching and layout structure.
 */
export default async function DashboardPage() {
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const host = process.env.NEXT_PUBLIC_VERCEL_URL || "localhost:3000";

  let data: ApiResponse | null = null;
  let error: string | null = null;

  try {
    // Fetch data from our own internal API
    const response = await fetch(`${protocol}://${host}/api/reviews`, {
      cache: "no-store", // Ensure we respect our own cache logic
    });

    if (!response.ok) {
      throw new Error(`Cloud connection failed (${response.status})`);
    }

    data = await response.json();

    if (data && !data.ok) {
      error = data.error;
    }
  } catch (err: any) {
    console.error("Dashboard Fetch Error:", err);
    error = err.message || "Failed to connect to the backend API.";
  }

  return (
    <main className="min-h-screen bg-slate-50/50 px-4 py-12 md:px-8">
      <div className="max-w-7xl mx-auto">
        {error ? (
          <ErrorMessage message={error} />
        ) : data?.data ? (
          <DashboardClient practices={data.data} fetchedAt={data.fetchedAt} />
        ) : (
          <ErrorMessage message="Unexpected data response from API." />
        )}

      </div>
    </main>
  );
}

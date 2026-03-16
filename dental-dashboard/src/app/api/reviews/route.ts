import { NextResponse } from "next/server";
import { isCacheValid, readCache, writeCache } from "@/lib/cache";
import { fetchPlaceDetails } from "@/lib/google-places";
import { PRACTICES } from "@/lib/config";
import { ApiResponse, Practice } from "@/lib/types";

export async function GET() {
  try {
    // 1. Check if cache is fresh
    const cacheIsValid = await isCacheValid();
    if (cacheIsValid) {
      const cachedData = await readCache();
      if (cachedData) {
        console.log("Serving from cache");
        return NextResponse.json(cachedData);
      }
    }

    // 2. Cache is stale or missing - fetch fresh data in parallel
    // We use allSettled because we don't want one failing practice to block the others
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
        errorMessages.push(`${practiceConfig.name}: Network or Promise error`);
      }
    });

    // 3. Process results
    if (successfulPractices.length > 0) {
      // Save what we got to the cache
      await writeCache(successfulPractices);

      const response: ApiResponse = {
        ok: true,
        data: successfulPractices,
        error: errorMessages.length > 0 ? `Partial failure: ${errorMessages.join(" | ")}` : null,
        fetchedAt: new Date().toISOString(),
      };

      return NextResponse.json(response);
    }

    // 4. All attempts failed and no cache available
    const failureResponse: ApiResponse = {
      ok: false,
      data: null,
      error: `All practice fetches failed: ${errorMessages.join(" | ")}`,
      fetchedAt: new Date().toISOString(),
    };

    return NextResponse.json(failureResponse, { status: 502 });

  } catch (error) {
    console.error("Critical error in /api/reviews:", error);
    
    return NextResponse.json({
      ok: false,
      data: null,
      error: "Internal Server Error",
      fetchedAt: new Date().toISOString(),
    }, { status: 500 });
  }
}

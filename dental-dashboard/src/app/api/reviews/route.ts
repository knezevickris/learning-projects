import { NextResponse } from "next/server";
import { fetchPlaceDetails } from "@/lib/google-places";
import { PRACTICES } from "@/lib/config";
import { ApiResponse, Practice } from "@/lib/types";

export async function GET() {
  try {
    // 1. Fetch data from Google Places (caching is handled automatically by Next.js fetch in lib/google-places.ts)
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
        errorMessages.push(`${practiceConfig.name}: Network failure`);
      }
    });

    // 2. Return results
    if (successfulPractices.length > 0) {
      const response: ApiResponse = {
        ok: true,
        data: successfulPractices,
        error: errorMessages.length > 0 ? `Partial data: ${errorMessages.join(" | ")}` : null,
        fetchedAt: new Date().toISOString(),
      };

      return NextResponse.json(response);
    }

    const failureResponse: ApiResponse = {
      ok: false,
      data: null,
      error: `All fetches failed: ${errorMessages.join(" | ")}`,
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

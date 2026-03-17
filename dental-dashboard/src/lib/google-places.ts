import { Practice, Review } from "./types";

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const BASE_URL = "https://places.googleapis.com/v1/places";

/**
 * Fetches place details from Google Places API (New)
 * @param placeId The Google Place ID
 */
export async function fetchPlaceDetails(placeId: string): Promise<{ ok: true; data: Practice } | { ok: false; error: string }> {
  if (!GOOGLE_PLACES_API_KEY) {
    return { ok: false, error: "Missing GOOGLE_PLACES_API_KEY environment variable" };
  }

  // Field mask specifies exactly which fields we want to avoid unnecessary costs and data transfer
  const fieldMask = [
    "id",
    "displayName",
    "formattedAddress",
    "rating",
    "userRatingCount",
    "reviews.authorAttribution",
    "reviews.rating",
    "reviews.relativePublishTimeDescription",
    "reviews.text",
    "reviews.publishTime",
  ].join(",");

  try {
    const response = await fetch(`${BASE_URL}/${placeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": GOOGLE_PLACES_API_KEY,
        "X-Goog-FieldMask": fieldMask,
      },
      next: { revalidate: 300 }, // Cache for 5 minutes (300 seconds)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Google Places API Error:", errorData);
      return { 
        ok: false, 
        error: `Google API error (${response.status}): ${errorData.error?.message || response.statusText}` 
      };
    }

    const rawData = await response.json();

    // Map the raw Google API response to our Practice type
    const practice: Practice = {
      placeId: rawData.id,
      name: rawData.displayName?.text || "Unknown Practice",
      address: rawData.formattedAddress || "No address provided",
      rating: rawData.rating || 0,
      userRatingCount: rawData.userRatingCount || 0,
      reviews: (rawData.reviews || []).map((rev: any): Review => ({
        authorName: rev.authorAttribution?.displayName || "Anonymous",
        profilePhotoUrl: rev.authorAttribution?.photoUri || "",
        rating: rev.rating || 0,
        text: rev.text?.text || "",
        relativeTime: rev.relativePublishTimeDescription || "",
        publishTime: rev.publishTime || "",
      })),
    };

    return { ok: true, data: practice };
  } catch (error) {
    console.error("Network error fetching place details:", error);
    return { ok: false, error: "Failed to connect to Google Places API" };
  }
}

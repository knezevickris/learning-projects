import path from "path";

export interface PracticeConfig {
  placeId: string;
  name: string; // Fallback display name
}

export const PRACTICES: PracticeConfig[] = [
  {
    placeId: "ChIJazLXnNnIWEcRNo95VhRyNw8",
    name: "Poliklinika Bičakčić",
  },
  {
    placeId: "ChIJr06UqaXJWEcRoDFDblW3c_U",
    name: "Stomatološka ordinacija Dr. Hodžić",
  },
  {
    placeId: "ChIJfQyvq1PJWEcR6Jz3l5OxDyM",
    name: "Stomatološka ordinacija Tepić",
  },
];

export const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

// Path to the cache file relative to the project root
export const CACHE_FILE_PATH = path.join(process.cwd(), "src", "cache", "google-reviews.json");

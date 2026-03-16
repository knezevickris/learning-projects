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
    placeId: "ChIJfQyvq1PJWEcR6Jz3l5OxDyM",
    name: "Stomatološka ordinacija Tepić",
  },
  {
    placeId: "ChIJXwJYmxLJWEcRWfTByBW0A1A",
    name: "Poliklinika Bandić",
  }
];

export const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// Path to the cache file relative to the project root
export const CACHE_FILE_PATH = path.join(process.cwd(), "src", "cache", "google-reviews.json");

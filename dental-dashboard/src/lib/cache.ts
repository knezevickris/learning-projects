import fs from "fs/promises";
import fsSync from "fs";
import { ApiResponse, Practice } from "./types";
import { CACHE_FILE_PATH, CACHE_TTL_MS } from "./config";

/**
 * Checks if the cache exists and is still within the TTL
 */
export async function isCacheValid(): Promise<boolean> {
  try {
    if (!fsSync.existsSync(CACHE_FILE_PATH)) {
      return false;
    }

    const data = await fs.readFile(CACHE_FILE_PATH, "utf-8");
    const parsedCache: ApiResponse = JSON.parse(data);

    if (!parsedCache.fetchedAt) return false;

    const fetchedAt = new Date(parsedCache.fetchedAt).getTime();
    const now = Date.now();

    return now - fetchedAt < CACHE_TTL_MS;
  } catch (error) {
    console.error("Error checking cache validity:", error);
    return false;
  }
}

/**
 * Reads the cached data from the JSON file
 */
export async function readCache(): Promise<ApiResponse | null> {
  try {
    if (!fsSync.existsSync(CACHE_FILE_PATH)) {
      return null;
    }

    const data = await fs.readFile(CACHE_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading cache:", error);
    return null;
  }
}

/**
 * Writes the practice data and timestamp to the cache file
 */
export async function writeCache(practices: Practice[]): Promise<void> {
  try {
    const apiResponse: ApiResponse = {
      ok: true,
      data: practices,
      error: null,
      fetchedAt: new Date().toISOString(),
    };

    // Ensure directory exists (though we created it in setup)
    const dir = CACHE_FILE_PATH.substring(0, CACHE_FILE_PATH.lastIndexOf(pathSeparator()));
    if (!fsSync.existsSync(dir)) {
      await fs.mkdir(dir, { recursive: true });
    }

    await fs.writeFile(CACHE_FILE_PATH, JSON.stringify(apiResponse, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to cache:", error);
  }
}

/**
 * Deletes the cache file
 */
export async function clearCache(): Promise<void> {
  try {
    if (fsSync.existsSync(CACHE_FILE_PATH)) {
      await fs.unlink(CACHE_FILE_PATH);
    }
  } catch (error) {
    console.error("Error clearing cache:", error);
  }
}

// Helper for cross-platform path handling
function pathSeparator() {
  return process.platform === "win32" ? "\\" : "/";
}

/**
   * Calculates a "Dampened Rating" score.
   * Trust grows as review count (v) increases relative to a threshold (k=15).
   * Formula: Score = Rating * (1 - e ^ (-v / k))
*/
export const calculateWeightedScore = (rating: number, reviewCount: number) => {
    if (reviewCount === 0) return 0;
    const k = 15; // Confidence threshold
    const confidence = 1 - Math.exp(-reviewCount / k);
    return rating * confidence;
};
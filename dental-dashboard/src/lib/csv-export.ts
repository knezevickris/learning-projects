import { Review } from "./types";

/**
 * Escapes a string for CSV formatting.
 */
export const escapeCSV = (str: string) => {
  if (!str) return '""';
  const escaped = str.replace(/"/g, '""');
  return `"${escaped}"`;
};

/**
 * Generates and triggers download of a CSV file for given reviews.
 */
export const downloadCSV = (reviewsToExport: (Review & { practiceName: string })[]) => {
  if (reviewsToExport.length === 0) return;

  // CSV Header
  const headers = ["Practice Name", "Author", "Rating", "Review Text", "Date"];

  const csvContent = [
    headers.join(","),
    ...reviewsToExport.map(r => [
      escapeCSV(r.practiceName),
      escapeCSV(r.authorName),
      r.rating,
      escapeCSV(r.text),
      escapeCSV(new Date(r.publishTime).toLocaleDateString())
    ].join(","))
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `google_reviews_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
};

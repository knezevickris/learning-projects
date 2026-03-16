import React from "react";

/**
 * A centered, minimal loading spinner.
 */
export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-4">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest animate-pulse">
        Fetching Real-time Data
      </p>
    </div>
  );
}

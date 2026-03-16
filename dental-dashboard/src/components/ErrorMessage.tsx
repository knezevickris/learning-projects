import React from "react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

/**
 * A clean error banner for business tools.
 */
export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-100 rounded-xl p-6 text-center max-w-md mx-auto my-8">
      <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>
      
      <h3 className="text-red-900 font-bold mb-2">Data Fetching Failed</h3>
      <p className="text-red-700/80 text-sm leading-relaxed mb-6">
        {message || "We encountered an unexpected error while connecting to the Google Places API."}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-white border border-red-200 text-red-600 px-6 py-2 rounded-lg text-sm font-bold hover:bg-red-50 transition-colors shadow-sm active:scale-95"
        >
          Retry Connection
        </button>
      )}
    </div>
  );
}

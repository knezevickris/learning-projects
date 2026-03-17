# Dental Practices Reviews Dashboard

A professional, high-performance monitoring solution designed to aggregate, analyze, and manage patient feedback across multiple dental clinics. This application leverages the Google Places API to provide real-time data insights, competitive benchmarking, and actionable sentiment analysis within a clean, clinical-grade interface.


- **Consolidated Review Feed**: Monitor all practices simultaneously or drill down into specific locations with a unified, high-performance feed.
- **Competitive Benchmarking**: A dedicated Comparison View that evaluates practices using Google Rating, Volume, and a custom **Strength Score**.
- **Advanced Filtering & Search**:
  - **Star Filters**: Multi-select rating toggles.
  - **Keyword Search**: Real-time, debounced (300ms) text search across all patient reviews.
  - **Smart Sorting**: Order reviews by Newest, Oldest, or Rating Extremes.
- **Sentiment Indicator**: Automatic keyword-based highlighting (Regex) flagging patient pain points (Red) and positive experiences (Green).
- **Review Response Suggestions**: Instant professional outreach templates generated for negative reviews (1-2 stars) with 1-click clipboard copying.
- **Data Portability**: Client-side CSV export functionality that respects your current filters and search context for offline analysis.

## Performance Scoring (The Dampened Rating)

To ensure fair ranking between a practice with "5.0 stars from 2 reviews" and "4.8 stars from 200 reviews," we utilize a **Dampened Rating Formula**:
$Score = Rating \times (1 - e^{-v/k})$
*(where $v$ is review count and $k=15$ is our confidence threshold)*. This rewards consistency and volume, providing a more accurate "Strength Score."

## Installation and Configuration

### Prerequisites
- Node.js 18.x or higher
- Google Cloud Project with the Places API (New) enabled

### Setup Procedure
1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Setup**:
    Add your API key to `.env.local`:
    ```env
    GOOGLE_PLACES_API_KEY=your_api_key_here
    ```

3.  **Practice Configuration**:
    Manage monitored locations in `src/lib/config.ts` by adding their Google Place IDs.

4.  **Run Locally**:
    ```bash
    npm run dev
    ```
    View the dashboard at `http://localhost:3000`.

## Technical Specifications

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (Custom semantic theme)
- **Data Caching**: Native Next.js `fetch` caching with a 5-minute revalidation (ISR) for optimal production performance.
- **CSV Engine**: Blob-based client-side generation.
- **Logic**: Memoized filtering and sorting chains for zero-latency UI response.

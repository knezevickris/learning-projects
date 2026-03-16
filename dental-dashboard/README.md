# Dental Practices Reviews Dashboard

A high-performance monitoring solution designed to aggregate and analyze ratings and customer feedback from multiple dental clinics. This application utilizes the Google Places API (New) to provide real-time data insights, competitive benchmarking, and historical review tracking within a streamlined corporate interface.

## Core Functionality

- **Multi-Practice Management**: A centralized interface to monitor multiple locations with the ability to toggle between individual and aggregated data views.
- **Competitive Benchmarking Analysis**: A dedicated comparison engine that calculates performance leaders based on rating averages and review volume.
- **Responsive Comparative Interface**: A specialized mobile-optimized benchmarking table featuring sticky columns for persistent data labeling.
- **Optimization and Caching**: An integrated file-based caching layer that minimizes API latency and reduces external data dependency costs.
- **Data Visualization**: Clear star-rating distributions and review sentiment tracking for each registered practice.

## Installation and Configuration

### Prerequisites
- Node.js 18.x or higher
- An active Google Cloud Project with the Places API enabled

### Setup Procedure
1.  **Dependency Installation**:
    ```bash
    npm install
    ```

2.  **Environment Configuration**:
    Create a `.env.local` file in the root directory and provide your Google Cloud credentials:
    ```env
    GOOGLE_PLACES_API_KEY=your_api_key_here
    ```

3.  **Practice Registration**:
    Practice locations are managed via the configuration file located at `src/lib/config.ts`. Add the unique Google Place ID for each practice you wish to monitor.

4.  **Development Execution**:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:3000/dashboard`.

## Technical Specifications

- **Framework**: Next.js 15 (App Router Architecture)
- **Styling**: Tailwind CSS
- **Data Integration**: Google Places API (New SDK)
- **Performance**: Static and Dynamic rendering with local cache invalidation logic.

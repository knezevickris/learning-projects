export interface Review {
  authorName: string;      // from authorAttribution.displayName
  profilePhotoUrl: string; // from authorAttribution.photoUri
  rating: number;          // 1 to 5
  text: string;            // from text.text
  relativeTime: string;    // from relativePublishTimeDescription
  publishTime: string;     // ISO 8601 timestamp from publishTime
}

export interface Practice {
  placeId: string;
  name: string;             // from displayName.text
  address: string;          // from formattedAddress
  rating: number;           // overall rating 1.0–5.0
  userRatingCount: number;  // total review count
  reviews: Review[];
}

export interface ApiResponse {
  ok: boolean;              // whether the fetch succeeded
  data: Practice[] | null;
  error: string | null;     // human-readable error message
  fetchedAt: string;        // ISO timestamp of when data was fetched
}

interface GooglePlaceAuthorAttribution {
  displayName?: string;
  uri?: string;
  photoUri?: string;
}

interface GooglePlaceLocalizedText {
  text?: string;
  languageCode?: string;
}

export interface GooglePlaceReview {
  authorAttribution?: GooglePlaceAuthorAttribution;
  rating?: number;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  text?: GooglePlaceLocalizedText;
}
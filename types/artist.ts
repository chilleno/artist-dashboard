/**
 * Types for data/artists/duki.json
 * These interfaces model the exact structure present in the Duki snapshot JSON.
 */

// Basic identity
export interface ArtistIdentity {
  name: string
  country: string
}

// Social links array
export interface SocialMediaLink {
  name: string
  url: string
  logoUrl: string
}

// Performance summary
export interface Performance {
  followers: string
  totalFollowersDetailed: string
  streams: string
  playlists: string
  playlistReach: string
  charts: string
  shazams: string
  videos: string
  views: string
  djSupports: string
}

// Follower breakdown
export interface PlatformTotals {
  spotify: string
  instagram: string
  youtube: string
  deezer: string
  songkick: string
  amazon: string
  bandsintown: string
  soundcloud: string
}

export interface FollowerBreakdown {
  total: string
  byPlatform: PlatformTotals
  percentageBreakdown: PlatformTotals
}

// Releases & tracks
export interface ReleaseItem {
  title: string
  artist: string
  releaseDate: string
  imageUrl: string
  songstatsUrl: string
}

export interface TrackItem {
  title: string
  artists: string
  popularity: string
  imageUrl: string
  songstatsUrl: string
}

// Geo
export interface Coordinates {
  latitude: number
  longitude: number
}

// Audience metrics
export interface OverallMetrics {
  monthlyListeners: string
  monthlyListenersPeriod: string
  currentFollowers: string
  followersPeriod: string
  popularity: string
  popularityPeriod: string
}

export interface ListenersByCityItem {
  city: string
  country: string
  coordinates: Coordinates
  currentMonthlyListeners: string | null
  peakMonthlyListeners: string | null
  peakDate: string
}

export interface CityChartItem {
  city: string
  country: string
  coordinates: Coordinates
  totalTracksCharted: number
  currentTracksCharted: number
  previousTracksCharted: number
}

export interface CountryChartItem {
  country: string
  coordinates: Coordinates
  totalTracksCharted: number
  currentTracksCharted: number
  previousTracksCharted: number
}

export interface AudienceMetrics {
  platform: string
  extractedFrom: string
  extractedAt: string
  overallMetrics: OverallMetrics
  listenersByCity: ListenersByCityItem[]
  cityCharts: CityChartItem[]
  countryCharts: CountryChartItem[]
}

// Sales data
export interface SalesData {
  totalSales: string
  ticketsSold: string
  merchSold: string
}

// Root document
export interface Artist {
  artist: ArtistIdentity
  genres: string[]
  salesData: SalesData
  socialMediaLinks: SocialMediaLink[]
  performance: Performance
  followerBreakdown: FollowerBreakdown
  recentReleases: ReleaseItem[]
  topPerformingTracks: TrackItem[]
  relatedLabels: string[]
  platformsAvailable: string[]
  audienceMetrics: AudienceMetrics
}

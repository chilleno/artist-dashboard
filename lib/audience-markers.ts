import type { Artist } from "@/types/artist"

type DottedMarker = { lat: number; lng: number; size: number }
type GlobeMarker = { location: [number, number]; size: number }

export function buildAudienceMarkers(artist: Artist) {
  const cityItems = artist.audienceMetrics?.listenersByCity ?? []

  // Gather numeric values from currentMonthlyListeners or fallback to peakMonthlyListeners
  const values = cityItems
    .map((c) => Number(c.currentMonthlyListeners || c.peakMonthlyListeners))
    .filter((v) => v > 0)

  const minVal = values.length ? Math.min(...values) : 0
  const maxVal = values.length ? Math.max(...values) : 0
  const minRadius = 1.2
  const maxRadius = 4.0

  const scale = (v: number) => {
    if (!values.length) return 1.2
    if (maxVal === minVal) return (minRadius + maxRadius) / 2
    const t = (v - minVal) / (maxVal - minVal)
    return minRadius + t * (maxRadius - minRadius)
  }

  const dottedMarkers: DottedMarker[] = cityItems
    .map((c) => {
      const v = Number(c.currentMonthlyListeners) || Number(c.peakMonthlyListeners)
      if (!c.coordinates) return null
      return {
        lat: c.coordinates.latitude,
        lng: c.coordinates.longitude,
        size: scale(v),
      }
    })
    .filter(Boolean) as DottedMarker[]

  const globeMarkers: GlobeMarker[] = cityItems
    .map((c) => {
      const v = Number(c.currentMonthlyListeners) || Number(c.peakMonthlyListeners)
      if (!c.coordinates) return null
      const size = scale(v) / 20 // tune scale for COBE marker size
      return {
        location: [c.coordinates.latitude, c.coordinates.longitude] as [number, number],
        size,
      }
    })
    .filter(Boolean) as GlobeMarker[]

  return { dottedMarkers, globeMarkers }
}

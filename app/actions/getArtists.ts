"use server"

import type { ArtistList } from "@/types/artistList"

/**
 * Loads artists from data/artists.json via dynamic import.
 * If the module is missing or invalid, returns an empty array.
 */
export async function getArtists(): Promise<ArtistList> {
    try {
        const mod = await import("@/data/artists.json")
        const data = (mod as any).default ?? mod
        return Array.isArray(data) ? (data as ArtistList) : []
    } catch {
        return []
    }
}

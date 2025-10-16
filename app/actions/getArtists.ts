"use server"

import type { ArtistList } from "@/types/artistList"
import artistList from "@/data/artists.json"

/**
 * Loads artists from data/artists.json via dynamic import.
 * If the module is missing or invalid, returns an empty array.
 */
export async function getArtists(): Promise<ArtistList> {
    try {
        const data = artistList as ArtistList
        return Array.isArray(data) ? data : []
    } catch {
        return []
    }
}

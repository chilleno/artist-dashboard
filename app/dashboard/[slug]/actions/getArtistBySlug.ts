"use server"

import type { Artist } from "@/types/artist"

export async function getArtistBySlug(slug: string): Promise<Artist | null> {
    if (!slug || typeof slug !== "string") return null

    try {
        const data = await import(`@/data/artists/${slug}.json`) as Artist || null
        return data;
    } catch {
        // File not found or invalid JSON
        return null
    }
}

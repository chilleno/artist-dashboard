import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Artist } from "@/types/artist"

type Props = {
  artist: Artist
  imageUrl?: string | null
}

export function ArtistInfo({ artist, imageUrl }: Props) {
  const name = artist.artist?.name ?? "Artist"
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start">
      <div className="shrink-0">
        <Avatar className="size-24 md:size-28">
          {imageUrl ? (
            <AvatarImage src={imageUrl} alt={name} />
          ) : null}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-1 space-y-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{name}</h2>
          {artist.artist?.country ? (
            <p className="text-muted-foreground text-sm">{artist.artist.country}</p>
          ) : null}
        </div>

        {artist.socialMediaLinks?.length ? (
          <ul className="flex flex-wrap items-center gap-3">
            {artist.socialMediaLinks.map((s) => (
              <li key={s.name + s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border px-2 py-1 text-xs hover:bg-muted"
                >
                  {s.logoUrl ? (
                    <Image
                      src={s.logoUrl}
                      alt={s.name}
                      width={16}
                      height={16}
                      className="rounded"
                    />
                  ) : null}
                  <span>{s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export default ArtistInfo

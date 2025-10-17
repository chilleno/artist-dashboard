import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type { ReleaseItem } from "@/types/artist"

export function LastReleases({ releases }: { releases: ReleaseItem[] }) {
    if (!releases?.length) return null

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {releases.map((rel) => (
                <Card key={`${rel.title}-${rel.releaseDate}`} className="overflow-hidden">
                    <CardHeader>
                        <CardTitle className="text-base">{rel.title}</CardTitle>
                        <CardDescription className="text-xs">{rel.artist}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {rel.imageUrl ? (
                            <div className="relative aspect-square w-full overflow-hidden rounded-md border">
                                {/* Using next/image gives us good perf and layout */}
                                <Image
                                    src={rel.imageUrl}
                                    alt={rel.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                        ) : null}
                        <div className="text-xs text-muted-foreground">
                            Released: {rel.releaseDate}
                        </div>
                    </CardContent>
                    {rel.songstatsUrl ? (
                        <CardFooter>
                            <a
                                href={rel.songstatsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                            >
                                View on Songstats
                            </a>
                        </CardFooter>
                    ) : null}
                </Card>
            ))}
        </div>
    )
}

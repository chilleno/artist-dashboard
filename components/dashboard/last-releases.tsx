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
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {releases.map((rel) => (
                <Card key={`${rel.title}-${rel.releaseDate}`} className="overflow-hidden">
                    <CardHeader className="p-3 pb-2">
                        <CardTitle className="truncate text-sm font-semibold">{rel.title}</CardTitle>
                        <CardDescription className="text-[11px]">{rel.artist}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 p-3 pt-0">
                        {rel.imageUrl ? (
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
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
                        <div className="text-[11px] text-muted-foreground">
                            Released: {rel.releaseDate}
                        </div>
                    </CardContent>
                    {rel.songstatsUrl ? (
                        <CardFooter className="p-3 pt-0">
                            <a
                                href={rel.songstatsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-medium text-primary underline-offset-4 hover:underline"
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

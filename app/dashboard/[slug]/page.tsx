
import { getArtistBySlug } from "./actions/getArtistBySlug"
import { notFound } from "next/navigation"
import { BentoCard } from "@/components/dashboard/bento-card"
import { LastReleases } from "@/components/dashboard/last-releases"

export default async function Dashboard({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const artist = await getArtistBySlug(slug)
  if (!artist) return notFound()

  return (
    <div className="font-sans min-h-screen p-6 sm:p-8">
      <main className="mx-auto w-full max-w-7xl space-y-6">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            {artist.artist?.name ?? slug} Dashboard
          </h1>
          <p className="text-muted-foreground text-sm">
            Placeholder layout. We’ll fill these blocks next.
          </p>
        </header>

        {/* Responsive Bento Grid */}
        <section
          className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-6"
        >
          {/* Sales analytics squares */}
          <BentoCard
            title="Sales Analytics #1"
            description="KPIs and mini charts."
            className="sm:col-span-3 lg:col-span-2"
            bgClassName="bg-amber-100 dark:bg-amber-950/40"
          />
          <BentoCard
            title="Sales Analytics #2"
            description="KPIs and mini charts."
            className="sm:col-span-3 lg:col-span-2"
            bgClassName="bg-rose-100 dark:bg-rose-950/40"
          />
          <BentoCard
            title="Sales Analytics #3"
            description="KPIs and mini charts."
            className="sm:col-span-6 lg:col-span-2"
            bgClassName="bg-indigo-100 dark:bg-indigo-950/40"
          />

          {/* Large & wide for World Map of listeners */}
          <BentoCard
            title="Global Audience Map"
            description="Wide area for a world map showing listeners around the globe."
            className="sm:col-span-6 lg:col-span-6 lg:row-span-2"
            bgClassName="bg-emerald-100 dark:bg-emerald-950/40"
          />

          {/* Large column for Last Releases */}
          <BentoCard
            title={`${artist.artist?.name}'s latest releases `}
            className="sm:col-span-6 lg:col-span-6"
          >
            <LastReleases releases={artist.recentReleases} />
          </BentoCard>
        </section>
      </main>
    </div>
  )
}

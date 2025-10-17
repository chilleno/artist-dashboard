
import { getArtistBySlug } from "./actions/getArtistBySlug"
import { notFound } from "next/navigation"
import { BentoCard } from "@/components/dashboard/bento-card"
import { LastReleases } from "@/components/dashboard/last-releases"
import { SalesKPI } from "@/components/dashboard/sales-kpis"

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
        <section className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-6">
          {/* Sales analytics KPIs - split into three tiles using salesData */}
          <BentoCard
            title="Total Sales"
            description="All-time sales across channels"
            className="sm:col-span-2"
          >
            <SalesKPI
              label="USD"
              value={Number(artist.salesData?.totalSales)}
              prefix="$"
            />
          </BentoCard>

          <BentoCard
            title="Tickets Sold"
            description="Total sales from tickets sold"
            className="sm:col-span-2"
          >
            <SalesKPI
              label="USD"
              value={Number(artist.salesData?.ticketsSold)}
              prefix="$"
            />
          </BentoCard>

          <BentoCard
            title="Merch Sold"
            description="Total sales from merchandise"
            className="sm:col-span-2"
          >
            <SalesKPI
              label="USD"
              value={Number(artist.salesData?.merchSold)}
              prefix="$"
            />
          </BentoCard>

          {/* Large & wide for World Map of listeners */}
          <BentoCard
            title="Global Audience Map"
            description="Wide area for a world map showing listeners around the globe."
            className="sm:col-span-6 lg:col-span-6 lg:row-span-2"
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

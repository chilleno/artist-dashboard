"use client"

import { Label, Pie, PieChart } from "recharts"
import type { FollowerBreakdown } from "@/types/artist"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from "@/components/ui/chart"

// Use the 5 theme chart variables defined in globals.css
const chartVars = [
    "var(--chart-1)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)",
    "var(--chart-5)",
]

export function FollowersPie({ followerBreakdown }: { followerBreakdown: FollowerBreakdown }) {
    const byPlatform = followerBreakdown?.byPlatform
    if (!byPlatform) return null

    const entries = Object.entries(byPlatform) as Array<
        [keyof typeof byPlatform, string]
    >

    const chartData = entries.map(([key, value]) => ({
        platform: key,
        followers: Number(value.replace(/,/g, "")) || 0,
        // ChartStyle will define --color-<platform> below
        fill: `var(--color-${key})`,
    }))

    const chartConfig = entries.reduce((acc, [key], i) => {
        // Define --color-<platform> via ChartStyle in ChartContainer
        acc[key] = { label: key, color: chartVars[i % chartVars.length] }
        return acc
    }, {} as ChartConfig)

    chartConfig.followers = { label: "Followers" }

    const totalFollowers = (() => {
        const totalStr = followerBreakdown?.total
        if (totalStr) return Number(totalStr.replace(/,/g, "")) || 0
        return chartData.reduce((sum, d) => sum + (d.followers || 0), 0)
    })()
    const totalFormatted = totalFollowers.toLocaleString()

    return (
        <div className="w-full">
            <ChartContainer
                config={chartConfig}
                className="mx-auto w-full !aspect-auto h-[320px] sm:h-[280px] md:h-[320px] lg:h-[360px]"
                style={{ aspectRatio: "auto" }}
            >
                <PieChart>
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Pie
                        data={chartData}
                        dataKey="followers"
                        nameKey="platform"
                        innerRadius={60}
                        stroke="var(--background)"
                        strokeWidth={0}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-foreground text-lg sm:text-xl font-semibold tabular-nums"
                                            >
                                                {totalFormatted}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(Number(viewBox.cy) || 0) + 16}
                                                className="fill-muted-foreground text-[9px] sm:text-[10px]"
                                            >
                                                Followers
                                            </tspan>
                                        </text>
                                    )
                                }
                                return null
                            }}
                        />
                    </Pie>
                    <ChartLegend
                        content={
                            <ChartLegendContent
                                nameKey="platform"
                                className="grid grid-cols-2 gap-2 px-2 text-[10px] sm:flex sm:flex-wrap sm:justify-center sm:gap-3 md:gap-4 sm:text-xs"
                            />
                        }
                    />
                </PieChart>
            </ChartContainer>
        </div>
    )
}

export default FollowersPie

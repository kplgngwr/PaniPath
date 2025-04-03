"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Cell } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
    { dep: "ASI", quality: Math.floor(20 + Math.random()*200) },
    { dep: "DDA", quality: Math.floor(20 + Math.random()*200) },
    { dep: "Forest", quality: Math.floor(20 + Math.random()*200) },
    { dep: "SDMC", quality: Math.floor(20 + Math.random()*200) },
]

const chartConfig = {
    quality: {
        label: "Quality",
        color: "#000",
    }
} satisfies ChartConfig

// Function to get color based on quality value
const getBarColor = (quality: number) => {
    if (quality < 100) return "#a30000";
    if (quality >= 100 && quality <= 200) return "#d2ba00";
    return "#00830d";
}

export function MultiBar() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData} height={350}>
                    <CartesianGrid vertical={false} />

                    {/* XAxis with label */}
                    <XAxis
                        dataKey="dep"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        label={{ value: "Departments", position: "insideBottom", offset: -3 }}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />

                    {/* YAxis with label */}
                    <YAxis
                        label={{ value: "Water Quality Index", angle: -90, position: "insideLeft" }}
                    />

                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                    />

                    {/* Bar with dynamic color based on quality */}
                    <Bar dataKey="quality" radius={4} barSize={50}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getBarColor(entry.quality)} />
                        ))}
                    </Bar>
                </BarChart>
            </ChartContainer>
        </ResponsiveContainer>
    )
}

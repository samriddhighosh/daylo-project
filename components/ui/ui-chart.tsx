"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
  { month: "January", productivity: 186 },
  { month: "February", productivity: 305 },
  { month: "March", productivity: 237 },
  { month: "April", productivity: 73 },
  { month: "May", productivity: 209 },
  { month: "June", productivity: 214 },
]

const chartConfig = {
  productivity: {
    label: "Productivity",
    color: "red",
  },
} satisfies ChartConfig

export function ChartBarDefault() {
  return (
    <div className="w-full h-full flex flex-col p-4">
      
      <div className="flex-1 flex items-center justify-center min-h-0">
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="productivity" fill="orange" radius={4} className="border border-t-2!" />
          </BarChart>
        </ChartContainer>
      </div>
      <div className="flex flex-col items-start gap-2 text-sm pt-4 border-t">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total data for last 6 months
        </div>
      </div>
    </div>
  )
}
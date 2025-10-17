"use client"

import { NumberTicker } from "@/components/ui/number-ticker"

export function SalesKPI({
  label,
  value,
  prefix,
  suffix,
  decimalPlaces = 0,
}: {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimalPlaces?: number
}) {
  return (
    <div className="bg-background/60 rounded-xl border p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="text-muted-foreground text-xs">{label}</div>
      <div className="mt-1 text-2xl font-semibold">
        {prefix ? <span className="mr-0.5 align-middle">{prefix}</span> : null}
        <NumberTicker value={value} startValue={0} decimalPlaces={decimalPlaces} />
        {suffix ? <span className="ml-0.5 align-middle">{suffix}</span> : null}
      </div>
    </div>
  )
}
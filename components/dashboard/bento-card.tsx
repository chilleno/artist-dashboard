import { cn } from "@/lib/utils"

type BentoCardProps = {
  title: string
  description?: string
  className?: string
  bgClassName?: string
}

export function BentoCard({
  title,
  description,
  className,
  bgClassName,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border p-4",
        // fallback neutral background
        "bg-muted/30",
        bgClassName,
        className
      )}
    >
      <div className="space-y-2">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"

type BentoCardProps = {
  title: string
  description?: string
  className?: string
  bgClassName?: string
  children?: React.ReactNode
}

export function BentoCard({
  title,
  description,
  className,
  bgClassName,
  children,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border p-4",
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
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  )
}

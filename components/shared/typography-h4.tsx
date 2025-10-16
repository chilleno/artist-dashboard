import * as React from "react"

/**
 * TypographyH4
 * Standardized H4 element for smaller section headings.
 * Pass the text to render via the `text` prop.
 */
export function TypographyH4({ text }: { text: string }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {text}
    </h4>
  )
}

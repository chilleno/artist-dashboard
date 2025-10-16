import * as React from "react"

/**
 * TypographyH1
 * Standardized H1 element for consistent page headings across the app.
 * Pass the text to render via the `text` prop.
 */
export function TypographyH1({ text }: { text: string }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>
  )
}

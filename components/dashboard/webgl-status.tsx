"use client"

import { useEffect, useState } from "react"

function checkWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas")
    const gl =
      (canvas.getContext("webgl") as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null)
    return !!gl
  } catch {
    return false
  }
}

export function WebGLStatus({
  fallbackWhenUnsupported,
  contentWhenSupported,
}: {
  fallbackWhenUnsupported?: React.ReactNode
  contentWhenSupported?: React.ReactNode
}) {
  const [supported, setSupported] = useState<boolean | null>(null)

  useEffect(() => {
    setSupported(checkWebGL())
  }, [])

  if (supported) {
    return (
      <div className="space-y-2">
        {contentWhenSupported ?? null}
      </div>
    )
  }

  return (
    <div>
      {fallbackWhenUnsupported ?? null}
    </div>
  )
}

export default WebGLStatus

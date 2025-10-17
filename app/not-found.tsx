"use client"

import Link from "next/link"
import { SpinningText } from "@/components/ui/spinning-text"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center gap-8 p-8 text-center">
            <SpinningText
                className="size-56 text-2xl font-semibold"
                duration={14}
                radius={9}
            >
                404 • Page Not Found • Artist Dashboard •
            </SpinningText>

            <div className="max-w-md space-y-3 mt-10">
                <h1 className="text-2xl font-semibold">Oops, this page doesn’t exist</h1>
                <p className="text-muted-foreground">
                    The artist or page you’re looking for can’t be found. Double-check the
                    URL or head back to the home page.
                </p>
            </div>

            <Button asChild>
                <Link href="/">Back to Home</Link>
            </Button>
        </div>
    )
}

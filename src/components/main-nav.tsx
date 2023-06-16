"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "~/lib/utils"

export default function MainNav() {
  const pathname = usePathname()
  return (
    <nav className="hidden font-medium md:inline-block">
      <Link
        href="/guides"
        className={cn(
          "text-sm transition-colors hover:text-[--mauve11]",
          pathname === "/guides" ? "text-[--mauve12]" : "text-[--mauve10]"
        )}
      >
        Guides
      </Link>
    </nav>
  )
}

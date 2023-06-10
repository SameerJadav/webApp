import Link from "next/link"

import { siteConfig } from "~/config/site"

import { cn } from "~/lib/utils"

import { buttonVariants } from "~/components/ui/button"

import { Icons } from "~/components/icons"
import { ThemeToggle } from "~/components/theme-toggle"

import MainNav from "./main-nav"
import MobileNav from "./mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[--mauve1] shadow-sm">
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="hidden h-6 w-6 md:inline-block" />
            <MobileNav />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          <MainNav />
        </div>
        <nav className="flex items-center gap-1">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.gitHub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </div>
          </a>
          <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.twitter className="h-6 w-6 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

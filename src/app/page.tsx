import Link from "next/link"

import { Balancer } from "react-wrap-balancer"

import { siteConfig } from "~/config/site"

import { cn } from "~/lib/utils"

import { buttonVariants } from "~/components/ui/button"

import GuidesShowcase from "~/components/guides-showcase"
import { Icons } from "~/components/icons"

export default function Home() {
  return (
    <div className="container">
      <div className="pb-10 pt-4 md:flex md:h-hero md:flex-col md:items-center md:justify-center md:py-0">
        <a
          href={siteConfig.links.twitter}
          className="rounded-2xl bg-[--mauve3] px-4 py-1.5 text-sm font-medium transition-colors hover:bg-[--mauve4]"
          target="_blank"
        >
          Follow along on Twitter
        </a>
        <h1 className="my-4 text-3xl font-extrabold leading-tight tracking-tight md:text-center md:text-6xl lg:leading-[1.1]">
          <Balancer>
            Comprehensive Guide for Building Modern Web Applications.
          </Balancer>
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-[--mauve11] md:text-center md:text-xl">
          <Balancer>
            Learn how to build modern Web Apps that will elevate your developer
            experience. Free. Open Source.
          </Balancer>
        </p>
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/guides"
            className={cn(
              buttonVariants({ variant: "default" }),
              "relative flex items-center gap-2 before:absolute before:-inset-0.5 before:z-[-1] before:rounded-md before:bg-gradient-to-r before:from-[--orange7] before:via-[--pink7] before:to-[--violet7] before:blur-md hover:before:from-[--orange8] hover:before:via-[--pink8] hover:before:to-[--violet8]"
            )}
          >
            Get Started
            <Icons.arrowRight className="h-4 w-4" />
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2"
            )}
          >
            <span>GitHub</span>
            <Icons.externalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      <GuidesShowcase />
    </div>
  )
}

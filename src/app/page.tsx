import Link from "next/link"

import { Balancer } from "react-wrap-balancer"

import { siteConfig } from "~/config/site"

import { cn } from "~/lib/utils"

import { buttonVariants } from "~/components/ui/button"

export default function Home() {
  return (
    <div className="container">
      <div className="pb-10 pt-4 md:flex md:flex-col md:items-center md:pb-16 md:pt-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-center md:text-6xl lg:leading-[1.1]">
          <Balancer>Learn Modern Web Development.</Balancer>
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
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Get Started
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

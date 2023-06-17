import { siteConfig } from "~/config/site"

import { Icons } from "~/components/icons"

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex items-center gap-2 py-6">
        <Icons.logo className="hidden h-6 w-6 md:inline-block" />
        <p className="text-center text-sm leading-loose text-[--mauve11] md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 transition-colors hover:text-[--mauve12]"
          >
            Sameer Jadav
          </a>
          . Hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 transition-colors hover:text-[--mauve12]"
          >
            Vercel
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 transition-colors hover:text-[--mauve12]"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

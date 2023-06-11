import { siteConfig } from "~/config/site"

export default function GuidesPage() {
  return (
    <div className="pt-4 md:ml-6 md:pt-8">
      <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight md:text-6xl">
        Guides
      </h1>
      <p className="mb-4 text-lg text-[--mauve11] md:text-xl">
        Guides for building modern web applications are coming soon. Stay tuned!
      </p>
      <p className="mb-4">
        You can Give your feedback on Twitter, and you can also let me know the
        topics you would like me to cover.
      </p>
      <a
        href={siteConfig.links.twitter}
        className="rounded-2xl bg-[--mauve3] px-4 py-1.5 text-sm font-medium transition-colors hover:bg-[--mauve4]"
        target="_blank"
      >
        Follow along on Twitter
      </a>
    </div>
  )
}

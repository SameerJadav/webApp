export default function Home() {
  return (
    <div className="container">
      <h1 className="my-2 text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-7xl">
        Next.js 13 + shadcn/ui
      </h1>
      <p className="max-w-prose text-muted-foreground md:text-lg">
        This template is a customized version of{" "}
        <a
          href="https://github.com/shadcn/next-template"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          shadcn/next-template
        </a>
        , tailored to meet my specific requirements. It incorporates Next.js 13,
        TailwindCSS, and adheres to best practices for web development. Feel
        free to use this template as a starting point for your next project if
        you find its setup appealing and suitable for your needs.
      </p>
    </div>
  )
}

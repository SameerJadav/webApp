import { Balancer } from "react-wrap-balancer"

import { Icons } from "./icons"

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6">
      {children}
    </div>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-md border p-4 md:gap-4 md:p-6">
      {children}
    </div>
  )
}

export default function GuidesShowcase() {
  return (
    <div className="md:flex md:h-screen md:flex-col md:items-center md:justify-center">
      <div className="flex flex-col md:items-center">
        <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-center md:text-5xl lg:leading-[1.1]">
          What will I learn?
        </h3>
        <p className="mb-8 max-w-3xl text-lg text-[--mauve11] md:text-center md:text-xl">
          <Balancer>
            This guide covers all the fundamentals of building a modern web
            application, including authentication, subscriptions, documentation,
            and a custom UI library.
          </Balancer>
        </p>
      </div>
      <Container>
        <Card>
          <div className="flex items-center gap-2 md:gap-4">
            <Icons.nextjs className="h-12 w-12" />
            <Icons.react className="h-12 w-12" />
          </div>
          <div>
            <h3 className="text-lg font-semibold md:text-xl">
              Next.js 13 & React 18
            </h3>
            <p className="text-[--mauve11] md:text-lg">
              Latest features from Next 13 using the brand new App Router,
              Server Components, SEO optimazations, and more.
            </p>
          </div>
        </Card>
        <Card>
          <Icons.clerk className="h-12 w-12" />
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Authentication</h3>
            <p className="text-[--mauve11] md:text-lg">
              Effortless User Management with Clerk. Perfectly Suited for React,
              Next.js, and the Modern Web.
            </p>
          </div>
        </Card>
        <Card>
          <Icons.contentlayer className="h-12 w-12" />
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Documentation</h3>
            <p className="text-[--mauve11] md:text-lg">
              Transforms your content into type-safe JSON data you can easily
              import into your application.
            </p>
          </div>
        </Card>
        <Card>
          <Icons.stripe className="h-12 w-12" />
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Subscriptions</h3>
            <p className="text-[--mauve11] md:text-lg">
              Monetize Your Web App with Stripe Subscriptions: Create, Checkout,
              Accept Payments.
            </p>
          </div>
        </Card>
      </Container>
    </div>
  )
}

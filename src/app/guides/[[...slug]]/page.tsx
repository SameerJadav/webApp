import { Metadata } from "next"
import { notFound } from "next/navigation"

import { allGuides } from "contentlayer/generated"
import { getMDXComponent } from "next-contentlayer/hooks"

interface GuidePageProps {
  params: {
    slug: string[]
  }
}

async function getGuideFromParams(params: GuidePageProps["params"]) {
  const slug = params.slug?.join("/") || ""

  const guide = allGuides.find((guide) => guide.slugAsParams === slug)

  if (!guide) null

  return guide
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const guide = await getGuideFromParams(params)

  if (!guide) notFound()

  return {
    title: guide.title,
    description: guide.description,
  }
}

export async function generateStaticParams(): Promise<
  GuidePageProps["params"][]
> {
  return allGuides.map((guide) => ({
    slug: guide.slugAsParams.split("/"),
  }))
}

export default async function GuidesPage({ params }: GuidePageProps) {
  const guide = await getGuideFromParams(params)

  if (!guide) notFound()

  const Content = getMDXComponent(guide.body.code)

  return (
    <article className="py-8">
      <h1>{guide.title}</h1>
      <p>{guide.description}</p>
      <Content />
    </article>
  )
}

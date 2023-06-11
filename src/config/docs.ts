import { title } from "process"

import { MainNavItem, SidebarNavItem } from "~/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/guides",
    },
    {
      title: "Components",
      href: "/guides/components/accordion",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Figma",
      href: "/guides/figma",
    },
    {
      title: "GitHub",
      href: "https://github.com/shadcn/ui",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/shadcn",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/guides",
          items: [],
        },
      ],
    },
    {
      title: "Next.js",
      items: [
        {
          title: "Installation",
          href: "/guides/nextjs/installation",
          items: [],
        },
        {
          title: "Project Structure",
          href: "/guides/nextjs/project-structure",
          items: [],
        },
        {
          title: "Routing",
          href: "/guides/nextjs/routing",
          items: [],
        },
        {
          title: "Rendering",
          href: "/guides/nextjs/rendering",
          items: [],
        },
        {
          title: "Data Fetching",
          href: "/guides/nextjs/data-fetching",
          items: [],
        },
        {
          title: "Optimizing",
          href: "/guides/nextjs/optimizing",
          items: [],
        },
      ],
    },
  ],
}

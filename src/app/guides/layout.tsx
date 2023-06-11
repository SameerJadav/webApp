import { docsConfig } from "~/config/docs"

import { ScrollArea } from "~/components/ui/scroll-area"

import { DocsSidebarNav } from "~/components/sidebar-nav"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container flex">
      <aside className="group hidden h-[calc(100vh-3.5625rem)] w-60 overflow-y-auto md:block">
        <ScrollArea className="py-8 pr-2">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </ScrollArea>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  )
}

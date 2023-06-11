"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "~/types/nav"

import { cn } from "~/lib/utils"

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="pb-4">
          <h4 className="mb-1 py-1 text-sm font-semibold">{item.title}</h4>
          {item?.items?.length && (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "mb-1 flex w-full items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-[--mauve4]",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "bg-[--mauve5] text-[--mauve12]"
                : "text-[--mauve11] hover:text-[--mauve12]"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && (
              <span className="rounded-sm bg-[--lime9] px-1.5 py-0.5 text-xs leading-none text-black">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "text[--mauve11] flex w-full cursor-not-allowed items-center gap-2 rounded-md p-2",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {item.label && (
              <span className="bg-muted text[--mauve11] rounded-sm px-1.5 py-0.5 text-xs leading-none">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null
}

"use client"

import { Building2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  href: string
  icon: React.ElementType
}

interface SidebarProps {
  navigation: NavItem[]
  title?: string
}

export function Sidebar({ navigation, title = "CleanConnect Pro" }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-card md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto">
        <div className="flex h-16 flex-shrink-0 items-center px-4">
          <Building2 className="h-8 w-8" />
          <span className="ml-2 text-lg font-semibold">{title}</span>
        </div>
        <div className="mt-5 flex flex-grow flex-col">
          <nav className="flex-1 space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center rounded-md px-2 py-2 text-sm font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
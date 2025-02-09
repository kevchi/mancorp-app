"use client"

import {
  Building2,
  Calendar,
  Briefcase,
  Home,
  Users,
  Building,
  Package,
  User,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard/supervisor", icon: Home },
  { name: "Cleaning Requests", href: "/dashboard/supervisor/cleaning-request", icon: Calendar },
  { name: "Cleaning Jobs", href: "/dashboard/supervisor/cleaning-jobs", icon: Briefcase },
  { name: "Companies", href: "/dashboard/supervisor/companies", icon: Building },
  { name: "Employees", href: "/dashboard/supervisor/employees", icon: Users },
  { name: "Inventory", href: "/dashboard/supervisor/inventory", icon: Package },
  { name: "Profile", href: "/dashboard/supervisor/profile", icon: User },
]

export default function SupervisorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      <div className="hidden border-r bg-card md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto">
          <div className="flex h-16 flex-shrink-0 items-center px-4">
            <Building2 className="h-8 w-8" />
            <span className="ml-2 text-lg font-semibold">CleanConnect Pro</span>
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
      <div className="flex flex-1 flex-col md:pl-64">
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
'use client';

import {
  Building2,
  Calendar,
  Briefcase,
  Home,
  Users,
  Building,
  Package,
  User,
  Contact,
  LogOut,
  Menu,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Dashboard', href: '/dashboard/supervisor', icon: Home },
  {
    name: 'Cleaning Requests',
    href: '/dashboard/supervisor/cleaning-request',
    icon: Calendar,
  },
  {
    name: 'Cleaning Jobs',
    href: '/dashboard/supervisor/cleaning-jobs',
    icon: Briefcase,
  },
  {
    name: 'Companies',
    href: '/dashboard/supervisor/companies',
    icon: Building,
  },
  { name: 'Employees', href: '/dashboard/supervisor/employees', icon: Users },
  { name: 'Inventory', href: '/dashboard/supervisor/inventory', icon: Package },
  { name: 'Profile', href: '/dashboard/supervisor/profile', icon: User },
];

// Navigation Links Component
const NavigationLinks = ({
  pathname,
  className,
}: {
  pathname: string;
  className?: string;
}) => (
  <nav className={cn('flex-1 space-y-1 px-2', className)}>
    {navigation.map((item) => {
      const isActive = pathname === item.href;
      return (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
            isActive
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          )}
        >
          <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
          {item.name}
        </Link>
      );
    })}
  </nav>
);

export default function SupervisorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const SignOutButton = () => (
    <Button
      variant="ghost"
      className="w-full justify-start text-base"
      onClick={handleSignOut}
    >
      <LogOut className="mr-3 h-5 w-5" />
      Sign out
    </Button>
  );

  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 left-4 z-40 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-full flex-col">
            <div className="flex h-16 flex-shrink-0 items-center px-4">
              <Building2 className="h-8 w-8" />
              <span className="ml-2 text-lg font-semibold">Mancorp Ltd</span>
            </div>
            <div className="flex h-16 flex-shrink-0 items-center px-4">
              <Contact className="h-8 w-8" />
              <span className="ml-2 text-md font-semibold">
                Role: Supervisor
              </span>
            </div>
            <div className="flex-1 overflow-y-auto">
              <NavigationLinks pathname={pathname} className="mt-5" />
            </div>
            <div className="flex-shrink-0 border-t p-4">
              <SignOutButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-card md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto">
          <div className="flex h-16 flex-shrink-0 items-center px-4">
            <Building2 className="h-8 w-8" />
            <span className="ml-2 text-lg font-semibold">Mancorp Ltd</span>
          </div>
          <div className="flex h-16 flex-shrink-0 items-center px-4">
            <Contact className="h-8 w-8" />
            <span className="ml-2 text-md font-semibold">Role: Supervisor</span>
          </div>
          <div className="mt-5 flex flex-grow flex-col">
            <NavigationLinks pathname={pathname} />
          </div>
          <div className="flex-shrink-0 border-t p-4">
            <SignOutButton />
          </div>
        </div>
      </div>

      {/* Main Content */}
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
  );
}

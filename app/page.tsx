'use client';

import { useState } from 'react';
import { SignInForm } from '@/components/auth/SignInForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Building2, Shield, Users } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showSignUpDialog, setShowSignUpDialog] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Building2 className="h-6 w-6" />
            <span className="ml-2 font-bold">CleanConnect Pro</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" onClick={() => setShowLoginDialog(true)}>
              Login
            </Button>
            <Button onClick={() => setShowSignUpDialog(true)}>Sign up</Button>
          </div>
        </div>
      </nav>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login to your account</DialogTitle>
          </DialogHeader>
          <SignInForm />
        </DialogContent>
      </Dialog>

      {/* Sign Up Dialog */}
      <Dialog open={showSignUpDialog} onOpenChange={setShowSignUpDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create an account</DialogTitle>
          </DialogHeader>
          <SignUpForm />
        </DialogContent>
      </Dialog>

      <main className="container py-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Professional Cleaning
            <br />
            Made Simple
          </h1>
          <p className="mt-4 max-w-[700px] text-muted-foreground">
            Streamline your cleaning operations with our comprehensive
            management platform. Perfect for cleaning companies, employees, and
            customers.
          </p>
          <div className="mt-8">
            <Button size="lg">Get Started</Button>
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <Shield className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Secure Platform</h3>
            <p className="mt-2 text-muted-foreground">
              Enterprise-grade security to protect your data and operations.
            </p>
          </Card>
          <Card className="p-6">
            <Users className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Team Management</h3>
            <p className="mt-2 text-muted-foreground">
              Efficiently manage your cleaning staff and assignments.
            </p>
          </Card>
          <Card className="p-6">
            <Building2 className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Client Portal</h3>
            <p className="mt-2 text-muted-foreground">
              Give your clients easy access to schedule and manage services.
            </p>
          </Card>
        </div>

        <div className="mt-20">
          <div className="rounded-lg border bg-card p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">
                  Why Choose CleanConnect Pro?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Our platform is designed to make cleaning service management
                  effortless. From scheduling to team coordination, we've got
                  you covered.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <span className="mr-2 rounded-full bg-primary/10 p-1">
                      ✓
                    </span>
                    Easy scheduling and management
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 rounded-full bg-primary/10 p-1">
                      ✓
                    </span>
                    Real-time tracking and updates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 rounded-full bg-primary/10 p-1">
                      ✓
                    </span>
                    Inventory management
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 rounded-full bg-primary/10 p-1">
                      ✓
                    </span>
                    Customer satisfaction tracking
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80"
                  alt="Cleaning service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t">
        <div className="container py-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Newsletter</h4>
              <p className="mt-4 text-sm text-muted-foreground">
                Subscribe to our newsletter for updates and tips.
              </p>
              <div className="mt-4">
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 CleanConnect Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

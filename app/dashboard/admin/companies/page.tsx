'use client';

import AdminLayout from '@/components/layouts/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Building2, MapPin, Phone, Search, Users } from 'lucide-react';

export default function Companies() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between md:ml-0 ml-14">
          <h1 className="text-2xl font-bold tracking-tight">Companies</h1>
          <Button>
            <Building2 className="mr-2 h-4 w-4" />
            Add Company
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-8"
            placeholder="Search companies..."
            type="search"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">Tech Corp</h3>
                    <Badge>Enterprise</Badge>
                  </div>
                  <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>123 Business Ave, Suite 100</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <span>3 Locations</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">View Details</Button>
                <Button>Manage Services</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">StartUp Inc</h3>
                    <Badge variant="secondary">Small Business</Badge>
                  </div>
                  <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>456 Innovation Drive</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>+1 (555) 987-6543</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <span>1 Location</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">View Details</Button>
                <Button>Manage Services</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}

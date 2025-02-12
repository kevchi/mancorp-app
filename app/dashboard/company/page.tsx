'use client';

import CustomerLayout from '@/components/layouts/CompanyLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';

export default function CustomerDashboard() {
  return (
    <CustomerLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            New Cleaning Request
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Upcoming Cleaning</p>
                <p className="text-sm text-muted-foreground">April 15, 2024</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Last Service</p>
                <p className="text-sm text-muted-foreground">March 30, 2024</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Total Services</p>
                <p className="text-sm text-muted-foreground">12 cleanings</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-lg font-semibold">Recent Cleaning History</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium">Office Deep Clean</p>
                <p className="text-sm text-muted-foreground">March 30, 2024</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium">Regular Maintenance</p>
                <p className="text-sm text-muted-foreground">March 15, 2024</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </CustomerLayout>
  );
}

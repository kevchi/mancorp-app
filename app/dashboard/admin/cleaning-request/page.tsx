'use client';

import AdminLayout from '@/components/layouts/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Calendar, Filter, Search } from 'lucide-react';

export default function CleaningRequests() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between md:ml-0 ml-14">
          <h1 className="text-2xl font-bold tracking-tight">
            Cleaning Requests
          </h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Job
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-8"
                placeholder="Search requests..."
                type="search"
              />
            </div>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Requests</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">Tech Corp</h3>
                    <Badge>High Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Office Deep Clean - 5000 sq ft
                  </p>
                  <p className="mt-2 text-sm">Requested for: April 15, 2024</p>
                </div>
                <Badge variant="outline">Pending Review</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">View Details</Button>
                <Button variant="outline">Assign Team</Button>
                <Button>Approve Request</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">StartUp Inc</h3>
                    <Badge variant="secondary">Regular</Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Weekly Maintenance - 2000 sq ft
                  </p>
                  <p className="mt-2 text-sm">Requested for: April 20, 2024</p>
                </div>
                <Badge variant="secondary">Scheduled</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">View Details</Button>
                <Button variant="outline">Modify Schedule</Button>
                <Button variant="secondary">View Team</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}

'use client';

import SupervisorLayout from '@/components/layouts/SupervisorLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Clock, Filter, MapPin, Search, Users } from 'lucide-react';

export default function CleaningJobs() {
  return (
    <SupervisorLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between md:ml-0 ml-14">
          <h1 className="text-2xl font-bold tracking-tight">Cleaning Jobs</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>Create Job</Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-8"
                placeholder="Search jobs..."
                type="search"
              />
            </div>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">
                      Office Deep Clean - Tech Corp
                    </h3>
                    <Badge>In Progress</Badge>
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>123 Business Ave</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      <span>Team A (4 members)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">View Details</Button>
                <Button variant="outline">Reassign Team</Button>
                <Button>Track Progress</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">
                      Regular Maintenance - StartUp Inc
                    </h3>
                    <Badge variant="secondary">Scheduled</Badge>
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>3:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>456 Innovation Drive</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      <span>Team B (2 members)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">View Details</Button>
                <Button variant="outline">Modify Schedule</Button>
                <Button>Start Job</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SupervisorLayout>
  );
}

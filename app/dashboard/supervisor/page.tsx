'use client';

import SupervisorLayout from '@/components/layouts/SupervisorLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BarChart,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
} from 'lucide-react';
import {
  Bar,
  BarChart as ReChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', jobs: 12 },
  { name: 'Tue', jobs: 15 },
  { name: 'Wed', jobs: 18 },
  { name: 'Thu', jobs: 14 },
  { name: 'Fri', jobs: 16 },
  { name: 'Sat', jobs: 8 },
  { name: 'Sun', jobs: 6 },
];

export default function SupervisorDashboard() {
  return (
    <SupervisorLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Supervisor Dashboard
          </h1>
          <Badge className="px-4 py-2">Week 16, 2024</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Active Jobs</p>
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-muted-foreground">
                  +8% from last week
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Users className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Staff on Duty</p>
                <p className="text-2xl font-bold">18</p>
                <p className="text-xs text-muted-foreground">
                  92% attendance rate
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Completed Today</p>
                <p className="text-2xl font-bold">16</p>
                <p className="text-xs text-muted-foreground">
                  98% satisfaction rate
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <DollarSign className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Revenue</p>
                <p className="text-2xl font-bold">$4,280</p>
                <p className="text-xs text-muted-foreground">Daily earnings</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Weekly Job Distribution</h2>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ReChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="jobs" fill="hsl(var(--primary))" />
                </ReChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Updates</h2>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <p className="font-medium">New cleaning request</p>
                  <p className="text-sm text-muted-foreground">
                    Tech Corp - Office Deep Clean
                  </p>
                </div>
                <Badge>New</Badge>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <p className="font-medium">Job completed</p>
                  <p className="text-sm text-muted-foreground">
                    StartUp Inc - Regular Maintenance
                  </p>
                </div>
                <Badge variant="secondary">Completed</Badge>
              </div>
              <div className="flex items-center justify-between pb-4">
                <div className="space-y-1">
                  <p className="font-medium">Inventory alert</p>
                  <p className="text-sm text-muted-foreground">
                    Low stock on cleaning supplies
                  </p>
                </div>
                <Badge variant="destructive">Alert</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SupervisorLayout>
  );
}

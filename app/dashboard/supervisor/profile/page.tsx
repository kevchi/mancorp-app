'use client';

import SupervisorLayout from '@/components/layouts/SupervisorLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Profile() {
  return (
    <SupervisorLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight md:ml-0 ml-14">
          Profile Settings
        </h1>

        <Card className="p-6">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="First" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Last" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="youremail@mail.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" defaultValue="+1 (876) 234-5678" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employeeId">Employee ID</Label>
                <Input id="employeeId" defaultValue="SUP-2024-001" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select defaultValue="operations">
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="scheduling">Scheduling</SelectItem>
                    <SelectItem value="quality">Quality Control</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="address">Office Address</Label>
                <Input
                  id="address"
                  defaultValue="567 Management Blvd, Suite 200"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold">Notification Preferences</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Receive updates about cleaning requests and job assignments
                </p>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Updates</SelectItem>
                  <SelectItem value="important">Important Only</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Mobile Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Get instant alerts on your mobile device
                </p>
              </div>
              <Select defaultValue="important">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Updates</SelectItem>
                  <SelectItem value="important">Important Only</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Update Preferences</Button>
          </div>
        </Card>
      </div>
    </SupervisorLayout>
  );
}

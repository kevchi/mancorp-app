"use client"

import SupervisorLayout from "@/components/layouts/SupervisorLayout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Filter, Search, UserPlus } from "lucide-react"

export default function Employees() {
  return (
    <SupervisorLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Employees</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Employee
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-8"
                placeholder="Search employees..."
                type="search"
              />
            </div>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Employees</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="on-leave">On Leave</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold">SJ</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Team Lead</p>
                </div>
              </div>
              <Badge>On Duty</Badge>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Employee ID</p>
                <p className="font-medium">EMP-2024-001</p>
              </div>
              <div>
                <p className="text-muted-foreground">Current Shift</p>
                <p className="font-medium">Morning (6 AM - 2 PM)</p>
              </div>
              <div>
                <p className="text-muted-foreground">Performance</p>
                <p className="font-medium">98%</p>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <Button variant="outline">View Profile</Button>
              <Button variant="outline">Assign Tasks</Button>
              <Button>Schedule Shift</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold">MD</span>
                </div>
                <div>
                  <h3 className="font-semibold">Michael Davis</h3>
                  <p className="text-sm text-muted-foreground">Cleaner</p>
                </div>
              </div>
              <Badge variant="secondary">Break</Badge>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Employee ID</p>
                <p className="font-medium">EMP-2024-002</p>
              </div>
              <div>
                <p className="text-muted-foreground">Current Shift</p>
                <p className="font-medium">Morning (6 AM - 2 PM)</p>
              </div>
              <div>
                <p className="text-muted-foreground">Performance</p>
                <p className="font-medium">95%</p>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <Button variant="outline">View Profile</Button>
              <Button variant="outline">Assign Tasks</Button>
              <Button>Schedule Shift</Button>
            </div>
          </Card>
        </div>
      </div>
    </SupervisorLayout>
  )
}
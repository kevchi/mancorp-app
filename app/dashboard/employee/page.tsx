"use client"

import EmployeeLayout from "@/components/layouts/EmployeeLayout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle2, Clock, MapPin, Timer } from "lucide-react"

export default function EmployeeDashboard() {
  return (
    <EmployeeLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <Badge className="px-4 py-2">On Duty</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Today's Jobs</p>
                <p className="text-sm text-muted-foreground">3 Assignments</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Current Shift</p>
                <p className="text-sm text-muted-foreground">Morning (6 AM - 2 PM)</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Timer className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Hours Today</p>
                <p className="text-sm text-muted-foreground">4.5 / 8 hours</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Completed Jobs</p>
                <p className="text-sm text-muted-foreground">2 Today</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-lg font-semibold">Next Assignment</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Office Deep Clean - Tech Corp</h3>
                <div className="mt-2 flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>123 Business Ave</span>
                  </div>
                </div>
              </div>
              <Button>Start Job</Button>
            </div>
          </div>
        </Card>
      </div>
    </EmployeeLayout>
  )
}
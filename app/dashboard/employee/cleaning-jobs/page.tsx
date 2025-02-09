"use client"

import EmployeeLayout from "@/components/layouts/EmployeeLayout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

export default function CleaningJobs() {
  return (
    <EmployeeLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Cleaning Jobs</h1>
          <Badge variant="secondary">3 Active Jobs</Badge>
        </div>

        <div className="grid gap-4">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">Office Deep Clean - Tech Corp</h3>
                  <div className="mt-1 flex items-center space-x-4 text-sm text-muted-foreground">
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
                <Badge>In Progress</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">View Details</Button>
                <Button>Mark Complete</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">Regular Maintenance - StartUp Inc</h3>
                  <div className="mt-1 flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>3:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>456 Innovation Drive</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary">Scheduled</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">View Details</Button>
                <Button>Start Job</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </EmployeeLayout>
  )
}
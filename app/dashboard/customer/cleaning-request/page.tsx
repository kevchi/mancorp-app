"use client"

import CustomerLayout from "@/components/layouts/CustomerLayout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function CleaningRequest() {
  return (
    <CustomerLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Cleaning Requests</h1>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            New Request
          </Button>
        </div>

        <div className="grid gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Office Deep Clean</h3>
                <p className="text-sm text-muted-foreground">Scheduled for April 15, 2024</p>
              </div>
              <Button variant="outline">View Details</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Regular Maintenance</h3>
                <p className="text-sm text-muted-foreground">Scheduled for April 20, 2024</p>
              </div>
              <Button variant="outline">View Details</Button>
            </div>
          </Card>
        </div>
      </div>
    </CustomerLayout>
  )
}
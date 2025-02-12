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
import { Filter, Package, Search } from 'lucide-react';

export default function Inventory() {
  return (
    <SupervisorLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between md:ml-0 ml-14">
          <h1 className="text-2xl font-bold tracking-tight">Inventory</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>
              <Package className="mr-2 h-4 w-4" />
              Add Item
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-8"
                placeholder="Search inventory..."
                type="search"
              />
            </div>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="cleaning">Cleaning Supplies</SelectItem>
              <SelectItem value="equipment">Equipment</SelectItem>
              <SelectItem value="safety">Safety Gear</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">All-Purpose Cleaner</h3>
                  <Badge variant="destructive">Low Stock</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Professional grade cleaning solution
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">units left</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Category</p>
                <p className="font-medium">Cleaning Supplies</p>
              </div>
              <div>
                <p className="text-muted-foreground">Reorder Point</p>
                <p className="font-medium">20 units</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Restocked</p>
                <p className="font-medium">April 1, 2024</p>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <Button variant="outline">View Details</Button>
              <Button>Reorder</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">Industrial Vacuum Cleaner</h3>
                  <Badge variant="secondary">In Stock</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Heavy-duty cleaning equipment
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">units available</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Category</p>
                <p className="font-medium">Equipment</p>
              </div>
              <div>
                <p className="text-muted-foreground">Reorder Point</p>
                <p className="font-medium">5 units</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Maintained</p>
                <p className="font-medium">March 28, 2024</p>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <Button variant="outline">View Details</Button>
              <Button variant="outline">Schedule Maintenance</Button>
              <Button>Assign Equipment</Button>
            </div>
          </Card>
        </div>
      </div>
    </SupervisorLayout>
  );
}

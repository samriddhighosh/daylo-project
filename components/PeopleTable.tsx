"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
const orders = [
  {
    id: 1,
    customer: "John Doe",
    description: "VP of Marketing",
    status: "online",
  },
  { 
    id: 2,
    customer: "Sarah Wilson",
    description: "VP of Marketing",
    status: " offline",
  },
  {
    id: 3,
    customer: "Mike Johnson", 
    description: "VP of Marketing",
    status: "idle",
  },
  {
    id: 4,
    customer: "Emma Brown",
    description: "VP of Marketing",
    status: "offline",
  },
  {
    id: 5,
    customer: "David Lee",
    description: "VP of Marketing",
    status: "online",
  },
]
function getStatusBadgeVariant(status: string) {
  switch (status) {
    case "offline":
      return "default"
    case "idle":
      return "secondary"
    case "online":
      return "outline"
  }
}
export default function TableResponsive() {
  return (
    <div className="w-full max-w-4xl mx-auto p-2">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <Table>
          <TableCaption>Overview of information 2025</TableCaption>
          {/* <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader> */}
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-[12px] text-gray-600">{order.description}</p>
                    </div>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between text-base">
                <Badge variant={getStatusBadgeVariant(order.status)}>
                  {order.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Customer</span>
                <span className="text-sm font-medium">{order.customer}</span>
                <span className="text-sm font-medium">{order.description}</span>
              </div>
              {/* <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Product</span>
                <span className="text-sm font-medium">{order.product}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Date</span>
                <span className="text-sm font-medium">{order.date}</span>
              </div>
              <div className="flex justify-between pt-1 border-t">
                <span className="text-sm text-muted-foreground">Amount</span>
                <span className="text-sm font-semibold">{order.amount}</span>
              </div> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
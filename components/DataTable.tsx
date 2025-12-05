"use client"
import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const data: Payment[] = [
  {
    id: "728ed52f",
    time_block: 100,
    priority: "low",
    name: "m@example.com",
    deadline:"23 Aug, 2025"
  },
  {
    id: "489e1d42",
    time_block: 125,
    priority: "medium",
    name: "example@gmail.com",
    deadline:"23 Aug, 2025"
  },
  {
    id: "7c8f3a9b",
    time_block: 75,
    priority: "high",
    name: "john@doe.com",
    deadline:"23 Aug, 2025"
  },
]
export type Payment = {
  id: string
  time_block: number
  priority: "high" | "medium" | "low"
  name: string
  deadline:string
}
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "time_block",
    header: "Time Block",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "deadline",
    header: "dealine",
  },
]
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div className="overflow-hidden rounded-md">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
export default function DataTableSimple() {
  return (
    <div className="w-full p-6">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
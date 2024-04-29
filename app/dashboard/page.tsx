import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button";


export default function Dashboard() {
  return (
    <div>
      <main className="flex-1 py-8">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Income</CardTitle>
              <CardDescription>Total income this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-500">$5,000</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expenses</CardTitle>
              <CardDescription>Total expenses this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-500">$3,500</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Balance</CardTitle>
              <CardDescription>Current account balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-gray-900 dark:text-white">$1,500</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Savings</CardTitle>
              <CardDescription>Total savings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-500">$10,000</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Investments</CardTitle>
              <CardDescription>Total investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-yellow-500">$15,000</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Loans</CardTitle>
              <CardDescription>Total loans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-500">-$5,000</div>
            </CardContent>
          </Card>
        </div>
        <div className="container mx-auto mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Transacciones</h2>
            <Button>Agregar</Button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-04-01</TableCell>
                  <TableCell>Expense</TableCell>
                  <TableCell>Rent</TableCell>
                  <TableCell className="text-red-500">-$1,200</TableCell>
                  <TableCell>
                    <Button size="icon" variant="ghost">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-04-05</TableCell>
                  <TableCell>Income</TableCell>
                  <TableCell>Salary</TableCell>
                  <TableCell className="text-green-500">+$5,000</TableCell>
                  <TableCell>
                    <Button size="icon" variant="ghost">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-04-10</TableCell>
                  <TableCell>Expense</TableCell>
                  <TableCell>Groceries</TableCell>
                  <TableCell className="text-red-500">-$250</TableCell>
                  <TableCell>
                    <Button size="icon" variant="ghost">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>

    </div>
  );
}

function FileEditIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}

function TrashIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
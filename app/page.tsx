import Image from "next/image";
import Navbar from "@/components/Navbar";
import CardResume from "@/components/ui/CardResume";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTable } from "@/components/ui/DataTable";
import { columns } from "@/components/ui/columns";
import { Button } from "@/components/ui/button";
export default function Home() {
  const data = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "b7a1d9c8",
      amount: 200,
      status: "completed",
      email: "j@example.com",
    },
    {
      id: "c4d8e73a",
      amount: 150,
      status: "pending",
      email: "k@example.com",
    },
    {
      id: "d6e2f44b",
      amount: 250,
      status: "completed",
      email: "l@example.com",
    },
    {
      id: "e5f1g35h",
      amount: 300,
      status: "failed",
      email: "n@example.com",
    },
    {
      id: "f2h3i64j",
      amount: 175,
      status: "pending",
      email: "o@example.com",
    },
    {
      id: "g1j2k75l",
      amount: 400,
      status: "completed",
      email: "p@example.com",
    },
    {
      id: "h2k3l86m",
      amount: 125,
      status: "failed",
      email: "q@example.com",
    },
    {
      id: "i3l4m97n",
      amount: 225,
      status: "pending",
      email: "r@example.com",
    },
    {
      id: "j4m5n08o",
      amount: 350,
      status: "completed",
      email: "s@example.com",
    }
  ];
  
  return (
    <div>
      <main className="flex-1 py-8">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CardResume title="Income" description="Total de Ingresos del Mes" amount="$5,000" />
          <CardResume title="Income" description="Total de Ingresos del Mes" amount="$5,000" />
          <CardResume title="Income" description="Total de Ingresos del Mes" amount="$5,000" />
          <CardResume title="Income" description="Total de Ingresos del Mes" amount="$5,000" />
          <CardResume title="Income" description="Total de Ingresos del Mes" amount="$5,000" />
          <CardResume title="Income" description="Total de Ingresos del Mes" amount="$5,000" />
        </div>
        <div className="container mx-auto mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Transacciones</h2>
            <Button>Agregar</Button>
          </div>
          <div className="mt-4 overflow-x-auto">
            {/* <Table>
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
            </Table> */}
          <DataTable columns={columns} data={data} />
          </div>
        </div>
      </main>

    </div>
  );
}

function FileEditIcon(props: any) {
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

function TrashIcon(props: any) {
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
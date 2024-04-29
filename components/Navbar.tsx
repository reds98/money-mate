import Link from "next/link"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Button } from "./ui/button"
export default function Navbar() {

    return (
        
            <header className="bg-white px-4 py-3 shadow dark:bg-gray-800">
                <div className="container mx-auto flex items-center justify-between">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="rounded-full md:hidden" size="icon" variant="ghost">
                                <MenuIcon className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="grid gap-4 py-6">
                                <Link
                                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                    href="#"
                                >
                                    <MenuIcon className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                    href="#"
                                >
                                    <MenuIcon className="h-5 w-5" />
                                    Transactions
                                </Link>
                                <Link
                                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                    href="#"
                                >
                                    <MenuIcon className="h-5 w-5" />
                                    Reports
                                </Link>
                                <Link
                                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                    href="#"
                                >
                                    <MenuIcon className="h-5 w-5" />
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Link className="text-lg font-bold text-gray-900 dark:text-white" href="#">
                        Money Mate
                    </Link>
                    <div className="flex items-center gap-4">
                        <nav className="hidden items-center gap-4 md:flex">
                            <Link
                                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                href="#"
                            >
                                Dashboard
                            </Link>
                            <Link
                                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                href="#"
                            >
                                Transactions
                            </Link>
                            <Link
                                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                href="#"
                            >
                                Reports
                            </Link>
                            <Link
                                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                href="#"
                            >
                                Settings
                            </Link>
                        </nav>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="rounded-full" size="icon" variant="ghost">
                                    <img
                                        alt="Avatar"
                                        className="rounded-full"
                                        height="32"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "32/32",
                                            objectFit: "cover",
                                        }}
                                        width="32"
                                    />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Sahid Rojas</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
       
            )
}


function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
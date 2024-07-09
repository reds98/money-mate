import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface Props{
    title:string;
    description:string;
    amount:string;
}
export default function CardResume({title,description,amount}:Props) {
  return (
    <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
    <div className="text-4xl font-bold text-red-500">{amount}</div>
    </CardContent>
</Card>
  )
}

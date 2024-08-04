import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

function JobsList() {
  return (
    <div className="w-full px-4 lg:w-3/4">
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardHeader>
            <img src="https://vueschool.io/images/workshop/remote-vuejs-workshop.svg" alt="image " />
            <CardTitle className="mt-5">Python Basics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Clearn python basics in 10 minutes</p>
          </CardContent>
          <CardFooter>
            <Link href="/blog/rrrrr" className="underline "> Read More </Link>
          </CardFooter>
        </Card>

      </div>
    </div>
  )
}
export default JobsList
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"


function PostList() {

    return (
        <div>
            <div>
                <nav className="flex items-center text-white p-5">
                    <span className="text-xl font-bold mx-auto"> Our Blog </span>

                </nav>
            </div>
            <div className="container mx-auto">
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
        </div>
    )

}

export default PostList
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Shell } from 'lucide-react';


function NavBar() {
  return (
    <div className="flex items-center justify-between px-5 py-4 bg-transparent">
      <Link href='/' className="flex items-center gap-2">
      <Shell className="w-8 h-8"/>
        <span className="text-lg">JobBoard</span>
      </Link>
      <div>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>

      </div>
    </div>
  )
}

export default NavBar
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Shell } from 'lucide-react';
import { ModeToggle } from "@/components/ToggleButton"


function NavBar() {
  return (
    <div className="flex items-center justify-between py-3 px-5 bg-transparent border-b-2">
      <Link href='/' className="flex items-center gap-2">
      <Shell className="w-8 h-8"/>
        <span className="text-lg">JobBoard</span>
      </Link>
      <div className="flex ">
        <Button asChild className="mr-2">
          <Link href="/login">Login</Link>
        </Button>
        <ModeToggle />

      </div>
    </div>
  )
}

export default NavBar
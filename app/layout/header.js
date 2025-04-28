

import { MenuIcon  } from "lucide-react"
import Image from "next/image"
import SideBar from "../components2/sideBar"


import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

export default function Header(){
    return(
        <header className="p-4 flex flex-row justify-between items-center border-b border-b-gray-600">
        
        <Link href="/">
        <Image src="logo.svg" alt="logo" width={100} height={20}></Image>
        </Link>
        
        <Sheet >
            <SheetTrigger>
              <MenuIcon size={25}></MenuIcon>
            </SheetTrigger>



            <SideBar/>
        </Sheet>
      </header>
    )
}
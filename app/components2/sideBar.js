
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
  
export default function SideBar(){

    return(
            <SheetContent className="bg-gray-900 border-0 px-3">
                <SheetHeader>
                    <Image src="logo.svg" alt="logo" width={100} height={20}></Image>
                    <SheetTitle className="hidden"></SheetTitle>
                    <SheetDescription className="hidden"></SheetDescription>
                    </SheetHeader>
                <div className="font-normal flex flex-col mx-1">
                    <Link className="pb-2 pl-1 text-gray-200" href="/remove-bg">Remove BG</Link>
                    <Link className="pb-2 pl-1 text-gray-200" href="/pricing">Pricing</Link>
 
                    <Link className="pb-2 pl-1 text-gray-200" href="/search">Search</Link>

                    
                     <SignedOut> 
                        <SignInButton className="w-full bg-gray-700 h-11 rounded-lg my-2 font-bold" />
                        <SignUpButton className="w-full bg-amber-700 h-11 rounded-lg my-2 font-bold" />
                     </SignedOut> 
                    <SignedIn>
                        <UserButton className="w-full bg-amber-700 h-11 rounded-lg my-2 font-bold" />
                    </SignedIn>
                    
                    {/* <button > Login</button>
                    <button > Sign up</button> */}
                </div>
                 <SheetFooter>
                    <SheetClose className="bg-transparent font-semibold opacity-85">
                        Close
                    </SheetClose>
                </SheetFooter> 
            </SheetContent>
    )
}
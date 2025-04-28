import { Facebook, Instagram, Twitter, Mail, Heart  } from "lucide-react"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-gray-800 p-5 py-7">
        <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
        <p className="text-gray-400 mb-4 font-light">The latest news, AI models, and fun memes from the community!</p>
        <input type="email" placeholder="Enter your Email" className="placeholder-gray-400 w-full bg-gray-700 rounded-md pl-3 py-2 mb-3"></input>
        <br></br>
        <button className="w-full bg-amber-700 h-11 rounded-lg my-2 font-bold"> Subscribe</button>

        <div className="flex flex-row justify-center space-x-4 m-5 opacity-70">
          <a href="https://www.facebook.com/craiyonai"><Facebook></Facebook></a>
          <a href="https://www.instagram.com/craiyonai/"><Instagram></Instagram></a>
          <a href="https://twitter.com/craiyonai"><Twitter></Twitter></a>
          <a href="team@craiyon.com"><Mail></Mail></a>

        </div>

        <Link href="/pricing"><button className="bg-gray-700 font-semibold p-2 px-4 rounded-lg flex flex-row text-sm items-center mx-auto mt-8 opacity-90">
           <Heart className="mr-2 w-5"></Heart>Support Us
          </button>
          </Link>

        <div className="flex justify-center flex-col items-center mt-6 opacity-60 space-y-3 text-sm">
          <p className="">Privacy  <span> Terms</span></p>
          <p>© 2025 Craiyon LLC. All rights reserved.</p>
        </div>
        
      </footer>
    )
}
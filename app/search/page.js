
import PhotosPage from "../components2/photosPage"
import { Brush } from "lucide-react"

export default function SearchPage(){
    return(
        
        <div className="font-bold px-4">
          <div className="flex flex-col items-center m-8 mt-12 space-y-2">
            <h1 className="text-4xl">Cr<span className="text-amber-700">ai</span>yon Search</h1>
            <p className="text-lg font-normal text-gray-400">Find AI generated images from database</p>
          </div>
          <input type="text" placeholder="A cute fox with red hat" className="placeholder-gray-400 w-full bg-gray-700 rounded-md pl-3 py-2 mb-3 font-light h-11"></input>
          <button className="w-full bg-amber-700 h-11 rounded-lg my-2 font-bold flex items-center justify-center">
            <Brush size={20} className="mr-2"></Brush> Search</button>
            
        <PhotosPage />

        </div>
    )
}
import { Check } from "lucide-react";


export default function PricingCard({title, price, pricing_descriptions}){

    // const pricing_descriptions = [
    //     "120 Pro credits - best image quality",
    //     "Unlimited Lite images",
    //     "No ads / No watermarks",
    //     "No attribution required",
    // ]

    // const title = "Supporter"
    // const price = 10
    
    return(
        <div className="bg-gray-800 rounded-xl p-4 w-full mb-7">
            <h3 className="text-xl font-medium mb-3">{title}</h3>
            <h2 className="font-bold text-3xl">${price} <span className="text-gray-400 text-sm font-normal">/mo</span></h2>
            <p className="mb-4 text-gray-400 text-sm mt-2">${price*12} billed yearly</p>
            <button className="w-full bg-amber-700 h-11 rounded-lg my-2 font-bold">Get {title}</button>
            <div className="mt-4 space-y-2 mb-2">

            {pricing_descriptions.map((desc) => {
                return <p className="flex"> <span><Check size={25} className="text-gray-500 mr-2" /></span>{desc}</p>
            })}

            </div>
        </div>
    )
}
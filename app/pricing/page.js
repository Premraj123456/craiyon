
import { Switch } from "@/components/ui/switch"
import PricingCard from "../components2/pricingCard"
import { pricingDescriptions } from "../dist/pricingData"

export default function PricingPage(){
    return(
        <main className="">
        <section>
          <div className="flex flex-col items-center m-4 mt-12 space-y-2 justify-center">
            <h1 className="text-4xl font-bold">Choose your <span className="text-amber-700">plan</span></h1>
            <p className="text-lg font-normal text-gray-400">Get the best of Craiyon, for personal and commercial use.</p>

            <Switch id="yearly-mode" className=" data-[state=checked]:bg-amber-600 data-[state=unchecked]:bg-gray-600" />

            <PricingCard key={1} title="Supporter" price={10} pricing_descriptions={pricingDescriptions[0]}/>
            <PricingCard key={2} title="Professional" price={20} pricing_descriptions={pricingDescriptions[1]} />
          </div>

        </section>
        </main>
    )
}
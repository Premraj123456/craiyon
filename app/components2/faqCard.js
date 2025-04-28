import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function FaqCard({id, title, description}){
    return(
          <AccordionItem value={"item-"+id}>
            <AccordionTrigger className="font-bold">{title}</AccordionTrigger>
            <AccordionContent className="font-medium text-gray-400">
              {description}
            </AccordionContent>
          </AccordionItem>

    )
}
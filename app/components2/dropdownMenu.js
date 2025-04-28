
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

  export default function DropDownMenu(){
    return(
        <Select>
            <SelectTrigger className="w-23 border-0 h-10 text-gray-200">
                <SelectValue placeholder="Select" />
            </SelectTrigger>

            <SelectContent className="bg-gray-800 text-gray-100 border-gray-500">
                <SelectItem value="16:9">16:9</SelectItem>
                <SelectItem value="4:3">4:3</SelectItem>
                <SelectItem value="1:1">1:1</SelectItem>
                <SelectItem value="3:4">3:4</SelectItem>
                <SelectItem value="9:16">9:16</SelectItem>
            </SelectContent>
        </Select>

    )
  }
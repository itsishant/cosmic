import { GeistSans } from "geist/font/sans"
import { LucideIcon } from "lucide-react"

interface Step {
    logo: LucideIcon,
    head: string,
    work: string,
    number: number
}

export const Step = ({logo: Logo, head, work, number}: Step) => {
    return (
         <div className="p-4 rounded-xl shadow ">
            
      <div className="flex">
   <div className="p-2 w-12 h-12 flex items-center mr-4 justify-center rounded-full bg-white">
            <span className={`${GeistSans.className} text-black font-semibold`}> 
                {number}
            </span>
        </div>

       <Logo className="w-6 h-6 text-black dark:text-white mr-2" />
      <h2 className="text-lg font-bold">{head}</h2>
      
      </div>
      <div className="ml-15">
      <p className="text-gray-600 ">{work}</p>
      </div>
    </div>
    )
}

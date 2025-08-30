import { GeistSans } from "geist/font/sans"
import { Eye } from "lucide-react"

export const Header = () => {
  return (
    <div className="min-w-screen border-b border-neutral-700 mt-6">
      <div className="flex mb-2 justify-between items-center px-28 py-4">
        <div>
          <button className={`${GeistSans.className} hover: cursor-pointer border-0 font-semibold tracking-tight text-neutral-300 text-4xl`}>
            Cosmic Dashboard
          </button>
          <div className={`${GeistSans.className} mt-0.5 font-light text-neutral-500`}>
            Manage your profile, skills, experience, projects, and theme
          </div>
        </div>

        <div className="flex justify-center space-x-10">
          <button className={`${GeistSans.className} border rounded-md p-2`}>
            Not saved yet 
          </button>
          <button className={`${GeistSans.className} border flex items-center rounded-xl p-2 bg-neutral-300`}>
            <Eye className="mr-2 text-neutral-800" />
            <span className={`${GeistSans.className} text-black`}>
              Preview
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

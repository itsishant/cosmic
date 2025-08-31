  "use client";

  import { GeistSans } from "geist/font/sans"
  import { Eye } from "lucide-react"
  import { useRouter } from "next/navigation"

  export const Header = () => {

    const route = useRouter();

    const handleClick = () => {
  const data = JSON.parse(localStorage.getItem("portfolioData") || "{}");
  const name = data.form.Name;
  route.push(`/preview/${name}`);

    }

    return (
      <div className="w-full border-b border-neutral-700 mt-6">
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
            <button onClick={handleClick} className={`${GeistSans.className} hover: cursor-pointer border flex items-center rounded-xl p-2 bg-neutral-300`}>
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

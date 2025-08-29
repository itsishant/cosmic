import { GeistSans } from "geist/font/sans"
import { useState } from "react";

export const Body = () => {

  const [active, setActive] = useState("Profile")

  const tabs = ["Profile", "Personal Info", "Skills", "Experience", "Projects", "Theme"]

  return (
    <div className="w-full border-b border-neutral-700 mt-6 flex justify-center">
      <div className="w-full max-w-[1330px] h-[600px] border-2 shadow-md shadow-neutral-900 border-neutral-600 rounded-2xl flex flex-col mx-6 p-6">
        <div>
          <span className={`${GeistSans.className} text-xl text-neutral-300 font-semibold`}>
            Editor
          </span>
          <div className={`${GeistSans.className} mt-0.5 font-light text-neutral-500`}>
            Use the tabs to add and organize your content
          </div>
        </div>
         <div className="flex justify-between mt-8 bg-neutral-800 p-2 rounded-xl text-neutral-400">
          {tabs.map((tab) => (
            <button
             key={tab}
             onClick={() => {
                setActive(tab)
             }}
              className={`px-3 py-1 ${GeistSans.className} rounded-lg transition ${
                active === tab ? "bg-neutral-600 text-white" : "hover:text-neutral-200 hover: cursor-pointer"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

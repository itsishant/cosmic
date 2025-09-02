  "use client";

  import { GeistSans } from "geist/font/sans"
  import { Eye } from "lucide-react"
  import { useRouter } from "next/navigation"
import { useState } from "react";
import { MultiStepLoader } from "../components/ui/multi-step-loader";

const loadingStates = [
  {
    text: "Setting up your profile identity…",
  },
  {
    text: "Organizing your personal details…",
  },
  {
    text: "Highlighting your core strengths…",
  },
  {
    text: "Polishing your career journey…",
  },
  {
    text: "Showcasing your best creations…",
  },
];


  export const Header = () => {

    const route = useRouter();
    const [loading, setLoading] = useState(false);
    const [showDashboard, setShowDashboard] = useState(true);

    const loadingDuration = loadingStates.length * 2000;


    const handleClick = () => {
      setLoading(true);
      setShowDashboard(false);
      
  const data = JSON.parse(localStorage.getItem("portfolioData") || "{}");
  const name = data.form.Name;
  setTimeout(() => {
    setLoading(false);
    setShowDashboard(true);
    
    setTimeout(() => {
      route.push(`/preview/${name}`);
    }, 800); 
    
  }, loadingDuration);
  
    }

    return (
      <div className="w-full border-b border-neutral-700 mt-6">
        {loading ? (
          <MultiStepLoader 
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
          loop={false}/>
        ): (

          <>
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
        </div></>
        )}
      </div>
    )
  }

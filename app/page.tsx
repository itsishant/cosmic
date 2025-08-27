  "use client"
  import { GeistSans } from 'geist/font/sans';
  import { GeistMono } from 'geist/font/mono';
  import PrismaticBurst from "./components/backgorund";
  import { Rock_3D } from 'next/font/google';
  import { Rocket, ExternalLink, UserPlus } from "lucide-react"
import { CardBody, CardContainer, CardItem } from './components/card';
import { Step } from './components/steps';

  export default function Home() {
    return (
      <div className="relative w-full min-h-screen overflow-hidden">

        {/* <div className="absolute inset-0 -z-10">
          <PrismaticBurst
            animationType="rotate3d"
            intensity={0.5}
            speed={0.5}
            distort={3}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={10}
            mixBlendMode="lighten"
            colors={['#000000', '#000000', '#ffffff']}
          />
        </div> */}

        <div className="flex flex-col items-center justify-center h-screen relative z-10">
    <span
      className={`${GeistSans.className} tracking-tight font-semibold text-shadow shadow-amber-600 
        bg-clip-text text-8xl text-transparent 
        bg-gradient-to-b from-neutral-500 via-neutral-500 to-neutral-700 
        dark:from-neutral-200 dark:via-white dark:to-neutral-800`}
    >
      Cosmic
    </span>

    <div className="text-neutral-500 text-2xl mt-7 text-center max-w-2xl">
      Create stunning portfolios that shine across the digital universe
    </div>
    <div className='flex items-center mt-10 space-x-5'>
      <button className={`${GeistSans.className} p-3 hover:bg-neutral-50 rounded-md font-medium flex  tracking-tight bg-neutral-200 text-black`}>
      <Rocket className='mr-2'/>
      Launch Your Portfolio
    </button>

  <button className={`${GeistSans.className} flex p-3 rounded-md tracking-tight border-1`}>
    <ExternalLink  className='mr-2'/>
    Get Started
  </button>
    </div>
  </div>

  <div className='flex flex-col items-center relative z-10 justify-center'>
    
    <span
      className={`${GeistSans.className} tracking-tight font-semibold text-shadow shadow-amber-600 
        bg-clip-text text-5xl justify-center text-transparent 
        bg-gradient-to-b from-neutral-500 via-neutral-200 to-neutral-200 
        dark:from-neutral-200 dark:via-white dark:to-neutral-200`}
    >
      How It Works
    </span>
    <div className='mt-4'>
      <span className="text-neutral-500 text-xl mt-4 text-center max-w-2xl">
        From signup to stellar portfolio in just 4 simple steps
      </span>
    </div>
    <div className='flex items-center justify-center'>
      <div className=' flex items-center justify-center mt-34'>
      <Step logo={UserPlus}
      head='Sign Up'
      work='Create your account to get started'
      number={1}/>

       <Step logo={UserPlus}
      head='Build Profile
'
      work='Add your skills, experience, and personal info'
      number={2}/>

       <Step logo={UserPlus}
      head='Choose Template'
      work='Select from multiple stunning portfolio designs'
      number={3}/>

       <Step logo={UserPlus}
      head='Customize & Export'
      work='Pick fonts, animations, and export code in any language'
      number={4}/>

      </div>
      
    </div>
</div>
      </div>
    );
  }

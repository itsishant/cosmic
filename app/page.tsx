  "use client"
  import { GeistSans } from 'geist/font/sans';
  import { Rocket, ExternalLink, UserPlus } from "lucide-react"
  import { Step } from './components/steps';
  import { motion } from 'framer-motion';
  import Hello from './components/robot';
  import Particles from './components/background';
import { PortfolioMarquee } from './components/portfolio-marquee';

  export default function Home() {
    return (
      <div className="relative min-h-screen overflow-hidden">
<div className="absolute inset-0 -z-10">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
        <div className="flex items-center justify-center h-screen relative z-10">
    <motion.div
    initial={{opacity:0, x:-10}}
    animate={{opacity:1, x:4}}
    transition={{duration: 0.6, ease:"easeInOut"}}
    className='ml-56'>
    <motion.span
      className={`${GeistSans.className} tracking-tight font-semibold text-shadow shadow-amber-600 
        bg-clip-text text-8xl text-transparent 
        bg-gradient-to-b from-neutral-500 via-neutral-500 to-neutral-700 
        dark:from-neutral-200 dark:via-white dark:to-neutral-800`}
    >
      Cosmic
    </motion.span>

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
    </motion.div>
          <div className="flex-1 w-[900px] h-[900px]">
          <Hello />
        </div>

  </div>

  <div className='flex flex-col items-center relative z-10 justify-center'>
    
    <motion.span
     initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6 }}

      className={`${GeistSans.className} tracking-tight font-semibold text-shadow shadow-amber-600 
        bg-clip-text text-5xl justify-center text-transparent 
        bg-gradient-to-b from-neutral-500 via-neutral-200 to-neutral-200 
        dark:from-neutral-200 dark:via-white dark:to-neutral-200`}
    >
      How It Works
    </motion.span>
    <div className='mt-4'>
      <span className="text-neutral-500 text-xl mt-4 text-center max-w-2xl">
        From signup to stellar portfolio in just 4 simple steps
      </span>
    </div>
    <div className='flex items-center justify-center'>
      <div className=' flex items-center justify-center mt-28'>
        <div className='flex space-x-8'>
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
    <button className={`${GeistSans.className} mt-16 p-3 hover:bg-neutral-50 rounded-md font-medium flex  tracking-tight bg-neutral-200 text-black`}>
      <Rocket className='mr-2'/>
      Start Building Now
    </button>
</div>

<div className='flex flex-col mt-32 items-center relative z-10 justify-center'>
   <motion.span
     initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6 }}

      className={`${GeistSans.className} tracking-tight font-semibold text-shadow shadow-amber-600 
        bg-clip-text text-5xl justify-center text-transparent 
        bg-gradient-to-b from-neutral-500 via-neutral-200 to-neutral-200 
        dark:from-neutral-200 dark:via-white dark:to-neutral-200`}
    >
      Portfolio Examples
    </motion.span>
     <div className='mt-4'>
      <span className="text-neutral-500 text-xl mt-4 text-center max-w-2xl">
      Get inspired by stunning portfolios created with Cosmic
      </span>
    </div>

    <section className="relative z-10 py-20 px-4">
          <div className="max-w-6xl mx-auto">

            <PortfolioMarquee />
          </div>
        </section>
</div>
      </div>
    );
  }

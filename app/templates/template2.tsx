"use client"

import { motion, Variants } from "framer-motion"

interface Props {
  form: any
  personalInfo: any
  skills: string[]
  experience: any[]
  projects: any[]
}

export default function Template2({
  form = {},
  personalInfo = {},
  skills = [],
  experience = [],
  projects = [],
}: Props) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  const skillVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },  
  }

  const cardVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white p-8 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent"></div>
      
      <motion.div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="mb-16 text-center"
        >
          <motion.h1 
            className="text-7xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 tracking-tight leading-none"
            whileHover={{ 
              scale: 1.05,
              filter: "drop-shadow(0 0 30px rgba(34, 211, 238, 0.6))"
            }}
            transition={{ type: "spring", damping: 15 }}
          >
            {form?.Name || "Your Name"}
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-300 font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {form?.Headline || "Your Professional Title"}
          </motion.p>
        </motion.div>

        <motion.section
          variants={itemVariants}
          className="mb-16 bg-gradient-to-r from-gray-800/60 to-slate-800/60 backdrop-blur-lg rounded-3xl p-10 border border-gray-600/40 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent border-b border-gray-500/50 pb-4"
            whileHover={{ scale: 1.02 }}
          >
            About
          </motion.h2>
          <motion.p 
            className="text-gray-200 text-xl leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {form?.ShortBio || "Your professional bio will appear here with enhanced styling and better readability."}
          </motion.p>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="mb-16 bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-lg rounded-3xl p-10 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent border-b border-purple-400/50 pb-4"
            whileHover={{ scale: 1.02 }}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="flex flex-wrap gap-5"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={skillVariants}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-200 font-semibold text-lg shadow-xl backdrop-blur-sm hover:border-cyan-300"
                whileHover={{ 
                  scale: 1.15,
                  boxShadow: "0 0 35px rgba(34, 211, 238, 0.6)",
                  backgroundColor: "rgba(34, 211, 238, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="mb-16 bg-gradient-to-r from-emerald-800/50 to-green-800/50 backdrop-blur-lg rounded-3xl p-10 border border-emerald-500/30 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300"
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent border-b border-emerald-400/50 pb-4"
            whileHover={{ scale: 1.02 }}
          >
            Experience
          </motion.h2>
          <motion.div
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {experience.map((exp) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className="mb-10 p-8 bg-gradient-to-r from-gray-700/40 to-slate-700/40 rounded-2xl border border-gray-500/40 backdrop-blur-sm shadow-xl hover:border-emerald-400/50"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 15px 50px rgba(0,0,0,0.4)",
                  backgroundColor: "rgba(55, 65, 81, 0.6)"
                }}
                transition={{ type: "spring", damping: 20 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3 tracking-wide"
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                >
                  {exp.role} - {exp.company}
                </motion.h3>
                <motion.p 
                  className="text-base text-emerald-300 mb-4 font-semibold tracking-wide"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {exp.start} → {exp.end}
                </motion.p>
                <motion.p 
                  className="text-gray-200 leading-relaxed text-lg font-light"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {exp.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-r from-orange-800/50 to-red-800/50 backdrop-blur-lg rounded-3xl p-10 border border-orange-500/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent border-b border-orange-400/50 pb-4"
            whileHover={{ scale: 1.02 }}
          >
            Projects
          </motion.h2>
          <motion.div
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {projects.map((p) => (
              <motion.div
                key={p.id}
                variants={cardVariants}
                className="mb-10 p-8 bg-gradient-to-r from-gray-700/40 to-slate-700/40 rounded-2xl border border-gray-500/40 backdrop-blur-sm shadow-xl hover:border-orange-400/50"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 15px 50px rgba(0,0,0,0.4)",
                  backgroundColor: "rgba(55, 65, 81, 0.6)"
                }}
                transition={{ type: "spring", damping: 20 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 tracking-wide"
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                >
                  {p.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-200 leading-relaxed text-lg font-light"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {p.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}
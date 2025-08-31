"use client"

import { GeistSans } from "geist/font/sans"

interface Props {
  form: any
  personalInfo: any
  skills: string[]
  experience: any[]
  projects: any[]
}

export default function Template2({ form, personalInfo, skills, experience, projects }: Props) {
  return (
    <div className="min-h-screen bg-white text-neutral-800 p-10">
      <h1 className={`${GeistSans.className} text-4xl font-bold text-blue-700`}>{form.Name}</h1>
      <p className="text-neutral-600">{form.Headline}</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-neutral-300 pb-2">About</h2>
        <p>{form.ShortBio}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-neutral-300 pb-2">Skills</h2>
        <ul className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, idx) => (
            <li key={idx} className="px-3 py-1 rounded-full bg-blue-100 text-blue-800">{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-neutral-300 pb-2">Experience</h2>
        {experience.map((exp) => (
          <div key={exp.id} className="mt-4">
            <h3 className="font-bold">{exp.role} - {exp.company}</h3>
            <p className="text-sm text-neutral-500">{exp.start} → {exp.end}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-neutral-300 pb-2">Projects</h2>
        {projects.map((p) => (
          <div key={p.id} className="mt-4">
            <h3 className="font-bold">{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

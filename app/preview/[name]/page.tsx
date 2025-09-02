"use client"
import { useState, useEffect } from "react"
import Template1 from "../../templates/template1"
import Template2 from "../../templates/template2"

export default function PreviewPage() {
  const [form, setForm] = useState<any>(null)
  const [personalInfo, setPersonalInfo] = useState<any>(null)
  const [skills, setSkills] = useState<string[]>([])
  const [experience, setExperience] = useState<any[]>([])
  const [projects, setProjects] = useState<any[]>([])
  const [template, setTemplate] = useState("dark") 

useEffect(() => {
  const stored = localStorage.getItem("portfolioData");

  if (stored) {
    const data = JSON.parse(stored);
    setForm(data.form || {});
    setPersonalInfo(data.personalInfo || {});
    setSkills(data.skills || []);
    setExperience(data.experience || []);
    setProjects(data.projects || []);
    setTemplate(data.theme?.template || "dark"); 
  }
}, []);


return (
  <>
    {template === "Template1" ? (
      <Template1
        form={form}
        personalInfo={personalInfo}
        skills={skills}
        experience={experience}
        projects={projects}
      />
    ) : (
      <Template2
        form={form}
        personalInfo={personalInfo}
        skills={skills}
        experience={experience}
        projects={projects}
      />
    )}
  </>
)
}

"use client"

import { GeistSans } from "geist/font/sans"
import { useState } from "react"

interface Form {
  Name: string
  Headline: string
  ShortBio: string
  Location: string
  AvatarUrl: string
}

interface PersonalInfo {
  Email: string
  Website: string
  GitHub: string
  LinkedIn: string
  X: string
  Instagram: string
}

interface ExperienceItem {
  id: string
  role: string
  company: string
  start: string
  end: string
  description: string
}

interface ProjectItem {
  id: string
  title: string
  description: string
  link: string
  technologies: string[]
}

interface ThemeState {
  primary: string
  radius: "sm" | "md" | "lg"
  density: "comfortable" | "compact"
}

export const Body = () => {
  const [active, setActive] = useState<"Profile" | "Personal Info" | "Skills" | "Experience" | "Projects" | "Theme">(
    "Profile",
  )

  const [form, setForm] = useState<Form>({
    Name: "",
    Headline: "",
    ShortBio: "",
    Location: "",
    AvatarUrl: "",
  })

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    Email: "",
    Website: "",
    GitHub: "",
    LinkedIn: "",
    X: "",
    Instagram: "",
  })

  const [skills, setSkills] = useState<string[]>([])
  const [skillInput, setSkillInput] = useState("")

  const [experience, setExperience] = useState<ExperienceItem[]>([])
  const [expDraft, setExpDraft] = useState<ExperienceItem>({
    id: "",
    role: "",
    company: "",
    start: "",
    end: "",
    description: "",
  })

  const [projects, setProjects] = useState<ProjectItem[]>([])
  const [projDraft, setProjDraft] = useState<ProjectItem>({
    id: "",
    title: "",
    description: "",
    link: "",
    technologies: [],
  })

  const [theme, setTheme] = useState<ThemeState>({
    primary: "#22d3ee",
    radius: "md",
    density: "comfortable",
  })

  const tabs = ["Profile", "Personal Info", "Skills", "Experience", "Projects", "Theme"]

  const handleChange = (field: keyof Form, value: string) => {
    setForm({ ...form, [field]: value })
  }

  const addSkill = () => {
    const s = skillInput.trim()
    if (!s || skills.includes(s)) return
    setSkills([...skills, s])
    setSkillInput("")
  }
  const removeSkill = (s: string) => setSkills(skills.filter((x) => x !== s))

  const addExperience = () => {
    if (!expDraft.role || !expDraft.company) return
    const item = { ...expDraft, id: crypto.randomUUID() }
    setExperience([item, ...experience])
    setExpDraft({ id: "", role: "", company: "", start: "", end: "", description: "" })
  }
  const removeExperience = (id: string) => setExperience(experience.filter((e) => e.id !== id))

  const addProject = () => {
    if (!projDraft.title) return
    const item = { ...projDraft, id: crypto.randomUUID() }
    setProjects([item, ...projects])
    setProjDraft({ id: "", title: "", description: "", link: "", technologies: [] })
  }
  const removeProject = (id: string) => setProjects(projects.filter((p) => p.id !== id))

  const themeRadiusClass = theme.radius === "sm" ? "rounded-md" : theme.radius === "lg" ? "rounded-2xl" : "rounded-xl"
  const themePaddingClass = theme.density === "compact" ? "p-3" : "p-5"

  return (
    <div className="w-full border-b border-neutral-700 mt-6 flex justify-center">
      <div className="w-full max-w-[1330px] h-[600px] border-2 shadow-md shadow-neutral-900 border-neutral-600 rounded-2xl flex flex-col mx-6 p-6">
        <div>
          <span className={`${GeistSans.className} text-xl text-neutral-300 font-semibold`}>Editor</span>
          <div className={`${GeistSans.className} mt-0.5 font-light text-neutral-500`}>
            Use the tabs to add and organize your content
          </div>
        </div>
        <div className="flex justify-between mt-8 bg-neutral-800 p-2 rounded-xl text-neutral-400">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab as any)}
              className={`px-3 py-1 ${GeistSans.className} rounded-lg transition ${
                active === tab ? "bg-neutral-600 text-white" : "hover:text-neutral-200 hover:cursor-pointer"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="border-2 border-neutral-700 mt-4 space-y-6 h-[500px] rounded-xl p-6 flex flex-col gap-6 overflow-y-auto">
          {active === "Profile" && (
            <>
              <div className="grid grid-cols-2 gap-8 ">
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Name</span>
                  <input
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="Jane Doe"
                    value={form.Name}
                    onChange={(e) => handleChange("Name", e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Headline</span>
                  <input
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="Full-Stack Developer | UX Designer"
                    value={form.Headline}
                    onChange={(e) => handleChange("Headline", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Short Bio</span>
                <textarea
                  className="p-2 rounded-md border border-neutral-600 text-white"
                  placeholder="A passionate developer building modern, responsive web applications."
                  value={form.ShortBio}
                  onChange={(e) => handleChange("ShortBio", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Location</span>
                  <input
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="New York City, NY"
                    value={form.Location}
                    onChange={(e) => handleChange("Location", e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Avatar URL</span>
                  <input
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="https://your-domain.com/avatar.png"
                    value={form.AvatarUrl}
                    onChange={(e) => handleChange("AvatarUrl", e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          {active === "Personal Info" && (
            <>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Email</span>
                  <input
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="jane.doe@email.com"
                    value={personalInfo.Email}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, Email: e.target.value })}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Website</span>
                  <input
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="https://janedoe.dev"
                    value={personalInfo.Website}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, Website: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>GitHub</span>
                  <input
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="github.com/janedoe"
                    value={personalInfo.GitHub}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, GitHub: e.target.value })}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>LinkedIn</span>
                  <input
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="linkedin.com/in/janedoe"
                    value={personalInfo.LinkedIn}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, LinkedIn: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>X</span>
                  <input
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="twitter.com/janedoe"
                    value={personalInfo.X}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, X: e.target.value })}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Instagram</span>
                  <input
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="instagram.com/janedoe"
                    value={personalInfo.Instagram}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, Instagram: e.target.value })}
                  />
                </div>
              </div>
            </>
          )}

          {active === "Skills" && (
            <>
              <div className="flex flex-col gap-2">
                <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Add a skill</span>
                <div className="flex items-center gap-3">
                  <input
                    aria-label="Skill"
                    className="p-2 rounded-md border border-neutral-600 text-white flex-1"
                    placeholder="React"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") addSkill()
                    }}
                  />
                  <button
                    onClick={addSkill}
                    className="px-3 py-2 rounded-md bg-neutral-600 text-white hover:bg-neutral-500"
                  >
                    Add
                  </button>
                </div>
              </div>
              {skills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-2 bg-neutral-700 text-neutral-200 px-3 py-1 rounded-full"
                    >
                      {s}
                      <button
                        aria-label={`Remove ${s}`}
                        className="text-neutral-300 hover:text-white"
                        onClick={() => removeSkill(s)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-neutral-500">No skills yet. Add your first skill above.</div>
              )}
            </>
          )}

          {active === "Experience" && (
            <>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Role</span>
                  <input
                    aria-label="Role"
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="Frontend Engineer"
                    value={expDraft.role}
                    onChange={(e) => setExpDraft({ ...expDraft, role: e.target.value })}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Company</span>
                  <input
                    aria-label="Company"
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="Acme Inc."
                    value={expDraft.company}
                    onChange={(e) => setExpDraft({ ...expDraft, company: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Start</span>
                  <input
                    aria-label="Start date"
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="Jan 2023"
                    value={expDraft.start}
                    onChange={(e) => setExpDraft({ ...expDraft, start: e.target.value })}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>End</span>
                  <input
                    aria-label="End date"
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="Present"
                    value={expDraft.end}
                    onChange={(e) => setExpDraft({ ...expDraft, end: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Description</span>
                <textarea
                  aria-label="Experience description"
                  className="p-2 rounded-md border border-neutral-600 text-white"
                  placeholder="Describe your key responsibilities and achievements..."
                  value={expDraft.description}
                  onChange={(e) => setExpDraft({ ...expDraft, description: e.target.value })}
                />
              </div>
              <div>
                <button
                  onClick={addExperience}
                  className="px-3 py-2 rounded-md bg-neutral-600 text-white hover:bg-neutral-500"
                >
                  Add Experience
                </button>
              </div>

              <div className="border-t border-neutral-700 pt-4">
                {experience.length > 0 ? (
                  <ul className="space-y-3">
                    {experience.map((e) => (
                      <li key={e.id} className="border border-neutral-700 rounded-lg p-4 bg-neutral-800/60">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-neutral-100 font-medium">{e.role}</div>
                            <div className="text-neutral-400">{e.company}</div>
                            <div className="text-neutral-500 text-sm">
                              {e.start} — {e.end || "Present"}
                            </div>
                          </div>
                          <button
                            aria-label={`Remove ${e.role} at ${e.company}`}
                            className="text-neutral-300 hover:text-white"
                            onClick={() => removeExperience(e.id)}
                          >
                            Remove
                          </button>
                        </div>
                        {e.description && (
                          <p className="text-neutral-300 mt-2 text-sm leading-relaxed">{e.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-neutral-500">No experience added yet.</div>
                )}
              </div>
            </>
          )}

          {active === "Projects" && (
            <>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Title</span>
                  <input
                    aria-label="Project title"
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="Personal Portfolio Website"
                    value={projDraft.title}
                    onChange={(e) => setProjDraft({ ...projDraft, title: e.target.value })}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Link</span>
                  <input
                    aria-label="Project link"
                    className="p-2 rounded-md border border-neutral-600 text-white"
                    placeholder="https://yourproject.com"
                    value={projDraft.link}
                    onChange={(e) => setProjDraft({ ...projDraft, link: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Description</span>
                <textarea
                  aria-label="Project description"
                  className="p-2 rounded-md border border-neutral-600 text-white"
                  placeholder="A brief overview of the project, its purpose, and your role."
                  value={projDraft.description}
                  onChange={(e) => setProjDraft({ ...projDraft, description: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>
                  Technologies (comma separated)
                </span>
                <input
                  aria-label="Project technologies"
                  className="p-2 rounded-md border border-neutral-600 text-white"
                  placeholder="Next.js, Tailwind CSS, Vercel"
                  value={projDraft.technologies.join(", ")}
                  onChange={(e) =>
                    setProjDraft({
                      ...projDraft,
                      technologies: e.target.value
                        .split(",")
                        .map((t) => t.trim())
                        .filter(Boolean),
                    })
                  }
                />
              </div>
              <div>
                <button
                  onClick={addProject}
                  className="px-3 py-2 rounded-md bg-neutral-600 text-white hover:bg-neutral-500"
                >
                  Add Project
                </button>
              </div>

              <div className="border-t border-neutral-700 pt-4">
                {projects.length > 0 ? (
                  <ul className="space-y-3">
                    {projects.map((p) => (
                      <li key={p.id} className="border border-neutral-700 rounded-lg p-4 bg-neutral-800/60">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-neutral-100 font-medium">{p.title}</div>
                            {p.link && (
                              <a
                                href={p.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-cyan-400 hover:underline"
                              >
                                {p.link}
                              </a>
                            )}
                          </div>
                          <button
                            aria-label={`Remove ${p.title}`}
                            className="text-neutral-300 hover:text-white"
                            onClick={() => removeProject(p.id)}
                          >
                            Remove
                          </button>
                        </div>
                        {p.description && (
                          <p className="text-neutral-300 mt-2 text-sm leading-relaxed">{p.description}</p>
                        )}
                        {p.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {p.technologies.map((t, i) => (
                              <span
                                key={`${p.id}-${t}-${i}`}
                                className="text-xs bg-neutral-700 text-neutral-200 px-2 py-1 rounded-full"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-neutral-500">No projects yet. Add your first project above.</div>
                )}
              </div>
            </>
          )}

          {active === "Theme" && (
            <>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Primary color</span>
                  <input
                    aria-label="Primary color"
                    type="color"
                    className="h-10 w-full rounded-md border border-neutral-600 bg-neutral-700"
                    value={theme.primary}
                    onChange={(e) => setTheme({ ...theme, primary: e.target.value })}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Radius</span>
                  <select
                    aria-label="Corner radius"
                    className="p-2 rounded-md border border-neutral-600 text-white bg-neutral-800"
                    value={theme.radius}
                    onChange={(e) => setTheme({ ...theme, radius: e.target.value as ThemeState["radius"] })}
                  >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <span className={`${GeistSans.className} text-sm font-medium text-neutral-200`}>Density</span>
                  <select
                    aria-label="Density"
                    className="p-2 rounded-md border border-neutral-600 text-white bg-neutral-800"
                    value={theme.density}
                    onChange={(e) => setTheme({ ...theme, density: e.target.value as ThemeState["density"] })}
                  >
                    <option value="comfortable">Comfortable</option>
                    <option value="compact">Compact</option>
                  </select>
                </div>
              </div>

              <div className="border border-neutral-700 rounded-xl p-4 mt-2">
                <div className={`${GeistSans.className} text-neutral-300 mb-3`}>Preview</div>
                <div
                  className={`bg-neutral-800 ${themeRadiusClass} ${themePaddingClass} text-neutral-200 border border-neutral-700`}
                  style={{ borderColor: theme.primary }}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Primary Accent</div>
                    <span
                      className="inline-block h-5 w-5 rounded"
                      style={{ backgroundColor: theme.primary }}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                    This preview uses your current theme settings.
                  </p>
                  <button
                    className="mt-3 px-3 py-2 text-sm text-black rounded-md"
                    style={{ backgroundColor: theme.primary }}
                  >
                    Button
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
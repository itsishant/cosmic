"use client";

import { GeistSans } from "geist/font/sans";
import { useEffect, useState } from "react";

interface Props {
  form: any;
  personalInfo: any;
  skills: string[];
  experience: any[];
  projects: any[];
}

export default function Template1({ form, personalInfo, skills, experience, projects }: Props) {
  const [data, setData] = useState(null);
  const [templateName, setTemplateName] = useState<any>("Template1");

  useEffect(() => {
    const stored = localStorage.getItem("portfolioData");
    if (stored) {
      const parsed = JSON.parse(stored);
      setData(parsed);
      setTemplateName(parsed.theme?.template || "Template1");
    }
  }, []);

  const Button = ({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) => (
    <button onClick={onClick} className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${className}`}>
      {children}
    </button>
  );

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 transition-colors">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <h1 className={`${GeistSans.className} text-lg font-semibold tracking-tight`}>{form?.Name}</h1>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#skills" className="rounded text-white/80 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">Skills</a>
            <a href="#experience" className="rounded text-white/80 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">Experience</a>
            <a href="#projects" className="rounded text-white/80 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">Projects</a>
            <a href="#contact" className="rounded text-white/80 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className={`${GeistSans.className} text-4xl md:text-5xl font-bold text-balance`}>{form?.Name}</h2>
            <p className="mt-2 text-white/70">{form?.Headline}</p>
            <p className="mt-6 leading-relaxed text-white/80">{form?.ShortBio}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                className="bg-cyan-400 text-neutral-900 hover:bg-cyan-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-400"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Contact me
              </Button>
              {personalInfo?.resume && (
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center rounded-md border border-neutral-800 px-4 text-sm font-medium hover:bg-neutral-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                >
                  View Resume
                </a>
              )}
            </div>  
          </div>
          <div className="shrink-0">
            <div className="relative">
              <img
                src={form?.AvatarUrl || "/profile-headshot.png"}
                alt={form?.Name ? `${form.Name} profile photo` : "Profile photo"}
                className="h-28 w-28 rounded-xl ring-2 ring-neutral-800 object-cover"
              />
              <div className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full bg-cyan-400 ring-2 ring-neutral-900 motion-safe:animate-pulse" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-16">
        <section id="skills" className="mt-12 scroll-mt-24">
          <h3 className={`${GeistSans.className} text-2xl font-semibold flex items-center gap-2`}>
            <span className="inline-block h-5 w-1.5 rounded bg-cyan-400" aria-hidden /> Skills
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {(skills || []).map((skill, idx) => (
              <li key={idx} className="group inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-800/50 px-3 py-1.5 text-sm text-white/90 transition-all duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:border-cyan-400 hover:bg-neutral-800">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 transition-transform duration-200 group-hover:scale-110" />
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="mt-12 scroll-mt-24">
          <h3 className={`${GeistSans.className} text-2xl font-semibold flex items-center gap-2`}>
            <span className="inline-block h-5 w-1.5 rounded bg-cyan-400" aria-hidden /> Experience
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {(experience || []).map((exp) => (
              <article key={exp.id} className="relative rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 transition-all duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:shadow-[0_0_0_1px_#22d3ee] hover:border-cyan-400">
                <div className="absolute left-2 top-5 h-2.5 w-2.5 rounded-full bg-cyan-400" aria-hidden />
                <h4 className="pl-5 font-semibold">{exp.role} <span className="text-white/70">— {exp.company}</span></h4>
                <p className="pl-5 text-sm text-white/70">{exp.start} → {exp.end}</p>
                <p className="pl-5 mt-3 leading-relaxed text-white/80">{exp.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-12 scroll-mt-24">
          <h3 className={`${GeistSans.className} text-2xl font-semibold flex items-center gap-2`}>
            <span className="inline-block h-5 w-1.5 rounded bg-cyan-400" aria-hidden /> Projects
          </h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(projects || []).map((p) => (
              <article key={p.id} className="group rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 transition-all duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:shadow-[0_0_0_1px_#22d3ee] hover:border-cyan-400">
                <h4 className="font-semibold">{p.name}</h4>
                <p className="mt-2 text-sm text-white/80">{p.description}</p>
                {Array.isArray(p?.tags) && p.tags.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t: string, i: number) => (
                      <li key={i} className="rounded-full border border-neutral-800 bg-neutral-800/50 px-2.5 py-0.5 text-xs text-white/80">{t}</li>
                    ))}
                  </ul>
                )}
                {p?.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-medium text-cyan-400 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded">
                    Visit project →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 scroll-mt-24">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 md:p-8">
            <h3 className={`${GeistSans.className} text-2xl font-semibold`}>Get in touch</h3>
            <p className="mt-2 text-white/80">Ready to collaborate? I’m open to new opportunities.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {personalInfo?.email && (
                <a href={`mailto:${personalInfo.email}`} className="inline-flex h-10 items-center rounded-md border border-neutral-800 bg-neutral-800/50 px-4 text-sm font-medium hover:border-cyan-400 hover:bg-neutral-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
                  {personalInfo.email}
                </a>
              )}
              {personalInfo?.website && (
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center rounded-md border border-neutral-800 bg-neutral-800/50 px-4 text-sm font-medium hover:border-cyan-400 hover:bg-neutral-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
                  {personalInfo.website.replace(/^https?:\/\//, "")}
                </a>
              )}
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-neutral-800">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} {form?.Name ?? ""}
        </div>
      </footer>
    </main>
  );
}

import { CardBody } from "./card"
import { Badge } from "./ui/badge"

import { ExternalLink, Github } from "lucide-react"

interface PortfolioExample {
  id: number
  name: string
  role: string
  image: string
  tags: string[]
  color: string
}

const portfolioExamples: PortfolioExample[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Frontend Developer",
    image: "./modern-developer-portfolio-with-dark-theme.png",
    tags: ["React", "TypeScript", "Next.js"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UX Designer",
    image: "./modern-developer-portfolio-with-dark-theme.png",
    tags: ["Figma", "Design Systems", "Prototyping"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    role: "Full Stack Engineer",
    image: "./modern-developer-portfolio-with-dark-theme.png",
    tags: ["Node.js", "Python", "AWS"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Data Scientist",
    image: "./modern-developer-portfolio-with-dark-theme.png",
    tags: ["Python", "ML", "Analytics"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Mobile Developer",
    image: "./modern-developer-portfolio-with-dark-theme.png",
    tags: ["React Native", "Flutter", "iOS"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Product Manager",
    image: "./modern-developer-portfolio-with-dark-theme.png",
    tags: ["Strategy", "Analytics", "Leadership"],
    color: "from-teal-500/20 to-cyan-500/20",
  },
]

export function PortfolioMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-marquee space-x-6">
        {[...portfolioExamples, ...portfolioExamples].map((portfolio, index) => (
          <CardBody
            key={`${portfolio.id}-${index}`}
            className="flex-shrink-0 w-80 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group"
          >
            <div className={`h-48 bg-gradient-to-br ${portfolio.color} relative overflow-hidden`}>
              <img
                src={portfolio.image || "/placeholder.svg"}
                alt={`${portfolio.name}'s portfolio`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer">
                  <Github className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-1 text-white">{portfolio.name}</h3>
              <p className="text-muted-foreground mb-4">{portfolio.role}</p>
              <div className="flex flex-wrap gap-2">
                {portfolio.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardBody>
        ))}
      </div>
    </div>
  )
}

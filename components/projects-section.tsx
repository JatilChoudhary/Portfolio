import Link from 'next/link'
import { Lock, Search, Bot } from 'lucide-react'

const projects = [
  {
    icon: Lock,
    title: 'SecureNet Scanner',
    description:
      'A vulnerability assessment tool designed to scan networks and detect open ports, misconfigurations, and security loopholes.',
    technologies: ['Python', 'Nmap', 'Linux'],
    github: 'https://github.com/JatilChoudhary',
  },
  {
    icon: Search,
    title: 'WebShield',
    description:
      'A web application security testing tool focused on detecting SQL Injection, XSS, and authentication flaws.',
    technologies: ['Python', 'Flask', 'OWASP Tools'],
    github: 'https://github.com/JatilChoudhary',
  },
  {
    icon: Bot,
    title: 'Sentinel AI (Mini Project)',
    description:
      'An AI-based intrusion detection prototype capable of identifying suspicious activity patterns in system logs.',
    technologies: ['Python', 'Machine Learning', 'Log Analysis'],
    github: 'https://github.com/JatilChoudhary',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          // featured projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-4 text-balance">
          Featured Projects
        </h2>
        <p className="text-sm text-muted-foreground mb-16 max-w-xl">
          A selection of practical work in Cyber Security and System Protection, crafted from Jammu, India.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col gap-5 p-6 border border-border rounded-sm bg-card hover:border-primary/50 transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-foreground font-mono">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-primary bg-primary/10 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2 border-t border-border">
                <Link
                  href="#"
                  className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Demo
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Code
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

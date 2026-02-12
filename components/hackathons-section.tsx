import { Trophy, Code, Flag, GitBranch, PenTool, Search, BookOpen } from 'lucide-react'

const hackathonItems = [
  {
    icon: Trophy,
    text: 'Participated in university-level coding competitions',
  },
  {
    icon: Code,
    text: 'Solved algorithmic and security-related problems using C/C++ and Python',
  },
  {
    icon: Flag,
    text: 'Practiced Capture The Flag (CTF) challenges focused on web and network security',
  },
]

const openSourceItems = [
  {
    icon: GitBranch,
    text: 'Exploring open-source cybersecurity and automation repositories on GitHub',
  },
  {
    icon: BookOpen,
    text: 'Learning contribution workflows: issues, pull requests, documentation',
  },
  {
    icon: Code,
    text: 'Contributions currently in progress',
  },
]

const blogTopics = [
  'Ethical Hacking Basics',
  'OWASP Top 10 Vulnerabilities',
  'Cyber Security Awareness & Best Practices',
]

const researchInterests = [
  'Intrusion Detection Systems',
  'Cyber Defense Systems',
]

export function HackathonsSection() {
  return (
    <section id="hackathons" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          // community & growth
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-16 text-balance">
          Beyond the Classroom
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Competitive Programming & Hackathons */}
          <div className="flex flex-col gap-6 p-6 border border-border rounded-sm bg-card">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 text-primary">
                <Flag className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-foreground font-mono">
                Competitions & CTFs
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {hackathonItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Open-Source Contributions */}
          <div className="flex flex-col gap-6 p-6 border border-border rounded-sm bg-card">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 text-primary">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-foreground font-mono">
                Open-Source Contributions
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {openSourceItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Blog & Technical Writing */}
          <div className="flex flex-col gap-6 p-6 border border-border rounded-sm bg-card">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 text-primary">
                <PenTool className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-foreground font-mono">
                Blog & Technical Writing
              </h3>
            </div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Planned Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {blogTopics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1.5 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Planning to publish on Medium and a personal blog. Stay tuned.
            </p>
          </div>

          {/* Research Interests */}
          <div className="flex flex-col gap-6 p-6 border border-border rounded-sm bg-card">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 text-primary">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-foreground font-mono">
                Research Interests
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No publications or patents at present. Interested in future research in:
            </p>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

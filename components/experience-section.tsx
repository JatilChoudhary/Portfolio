import { Briefcase, Search, TestTube, Network, FileText } from 'lucide-react'

const responsibilities = [
  {
    icon: Search,
    text: 'Performed vulnerability assessments on web applications',
  },
  {
    icon: TestTube,
    text: 'Conducted basic penetration testing using tools like Nmap and Wireshark',
  },
  {
    icon: Network,
    text: 'Analyzed network traffic to identify suspicious activity',
  },
  {
    icon: FileText,
    text: 'Documented findings and recommended mitigation strategies',
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          // experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-16 text-balance">
          Experience
        </h2>

        <div className="border border-border rounded-sm bg-card overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-4 p-6 border-b border-border">
            <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10 text-primary">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-foreground font-mono">
                Cyber Security Trainee
              </h3>
              <span className="text-xs font-mono text-primary">
                Academic / Self-Driven
              </span>
            </div>
            <div className="ml-auto hidden sm:flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-500" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                Seeking Internships
              </span>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="p-6">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-5">
              Responsibilities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {responsibilities.map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 p-4 rounded-sm border border-border/50 bg-background"
                >
                  <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

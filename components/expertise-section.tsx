import { Shield, Globe, Brain } from 'lucide-react'

const expertise = [
  {
    icon: Shield,
    title: 'Cyber Security & Ethical Hacking',
    description: 'Identifying vulnerabilities, penetration testing, and securing systems against cyber attacks.',
  },
  {
    icon: Globe,
    title: 'Network & System Security',
    description: 'Monitoring traffic, analyzing packets, and protecting servers, networks, and endpoints.',
  },
  {
    icon: Brain,
    title: 'Threat Analysis & Risk Management',
    description: 'Assessing security risks and implementing mitigation strategies for scalable systems.',
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          // core expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-16 text-balance">
          Core Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col gap-4 p-6 border border-border rounded-sm bg-card hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground font-mono">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

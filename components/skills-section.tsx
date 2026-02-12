'use client'

import { useEffect, useRef, useState } from 'react'

const technicalSkills = [
  { name: 'Linux & Networking', proficiency: 90 },
  { name: 'Python', proficiency: 85 },
  { name: 'Ethical Hacking Tools (Nmap, Wireshark, Burp Suite)', proficiency: 88 },
  { name: 'Web Security', proficiency: 80 },
  { name: 'Git & System Administration', proficiency: 85 },
]

const securitySkills = [
  'Ethical Hacking',
  'Penetration Testing',
  'OWASP Top 10',
  'Vulnerability Assessment',
]

const certifications = [
  {
    title: 'Ethical Hacking & Cyber Security',
    provider: 'Udemy',
    year: '2024',
    topics: 'Network Security, Penetration Testing, Threat Analysis',
  },
  {
    title: 'Wireshark for Network Security',
    provider: 'Udemy',
    year: '2024',
    topics: 'Packet Analysis, Traffic Monitoring',
  },
  {
    title: 'Cyber Security Fundamentals',
    provider: 'Online Certification',
    year: '2025',
    topics: 'Security Concepts, Risk Management',
  },
]

function SkillBar({ name, proficiency }: { name: string; proficiency: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-foreground">{name}</span>
        <span className="text-xs font-mono text-primary">{proficiency}%</span>
      </div>
      <div className="h-2 rounded-sm bg-secondary overflow-hidden">
        <div
          className="h-full bg-primary rounded-sm transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${proficiency}%` : '0%',
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          // technical skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-16 text-balance">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Proficiency bars */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
              Tools & Technologies
            </h3>
            {technicalSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
            ))}
          </div>

          {/* Security skills + certifications */}
          <div className="flex flex-col gap-10">
            {/* Security skills tags */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
                Security Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {securitySkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-mono text-primary border border-primary/30 rounded-sm bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
                Certifications
              </h3>
              <div className="flex flex-col gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex flex-col gap-1 p-4 border border-border rounded-sm bg-card"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-sm font-mono font-bold text-foreground">
                        {cert.title}
                      </span>
                      <span className="text-xs font-mono text-primary">{cert.year}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      {cert.provider}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      {cert.topics}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

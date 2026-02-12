import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'B.Tech (Cyber Security / Computer Science)',
    period: '2023 - Present',
    school: 'Lovely Professional University, Punjab',
    score: 'Current CGPA: 7.11',
  },
  {
    degree: 'Intermediate',
    period: '2021 - 2022',
    school: 'Lotus Academy School',
    score: '',
  },
  {
    degree: 'Matriculation',
    period: '2019 - 2020',
    school: 'Jammu Sanskriti School',
    score: '',
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
          // education
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-16 text-balance">
          Education
        </h2>

        <div className="flex flex-col gap-0">
          {education.map((item, index) => (
            <div key={item.degree} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-0 w-px bg-border" />
              )}

              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 text-primary shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 pt-1">
                <h3 className="text-base font-bold text-foreground font-mono">
                  {item.degree}
                </h3>
                <span className="text-xs font-mono text-primary">{item.period}</span>
                <span className="text-sm text-muted-foreground">{item.school}</span>
                {item.score && <span className="text-sm text-muted-foreground font-semibold">{item.score}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

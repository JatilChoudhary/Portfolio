export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Heading */}
          <div className="lg:w-1/3 shrink-0">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
              // about
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono leading-tight text-balance">
              Defending the Digital World
            </h2>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Cyber Security student with a strong foundation in network security, ethical hacking, and system defense.
              Skilled in identifying vulnerabilities, performing penetration testing, and implementing security best
              practices across applications and infrastructure.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Hands-on experience with Linux, Python, Networking Tools, Web Security, and Threat Analysis. Based in
              Jammu, India, continuously learning and adapting to evolving cyber threats to secure real-world systems.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-border">
              {[
                { value: '7.11', label: 'Current CGPA' },
                { value: '5+', label: 'Security Projects' },
                { value: '3+', label: 'Certifications' },
                { value: '2023', label: 'B.Tech Started' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-primary font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {stat.label}
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

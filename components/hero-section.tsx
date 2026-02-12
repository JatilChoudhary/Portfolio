'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  const [hackText, setHackText] = useState('Jatil Choudhary')
  const [isHacking, setIsHacking] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    runHackEffect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 530)
    return () => clearInterval(interval)
  }, [])

  const runHackEffect = () => {
    if (isHacking) return
    setIsHacking(true)
    const original = 'Jatil Choudhary'
    const chars = '01!@#$%^&*<>{}[]?/\\|~abcdefghijklmnopqrstuvwxyz'
    let iterations = 0

    const interval = setInterval(() => {
      setHackText(
        original
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < iterations) return original[i]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      iterations += 0.2
      if (iterations >= original.length) {
        clearInterval(interval)
        setHackText(original)
        setIsHacking(false)
      }
    }, 50)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0 animate-scanline bg-primary/20" style={{ height: '2px' }} />
      </div>

      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.82 0.19 150 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.19 150 / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-6xl w-full px-6 py-32 md:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6 flex-1">
          {/* Terminal prefix */}
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">root@cybersec</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-secondary-foreground">~</span>
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">whoami</span>
          </p>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-mono cursor-pointer leading-tight"
            onMouseEnter={runHackEffect}
          >
            {hackText}
            <span className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary font-mono font-medium">
            Cyber Security Student & Ethical Hacker
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Securing digital systems through proactive defense, ethical hacking, and intelligent security solutions.
            Passionate about protecting networks, applications, and data from modern cyber threats.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm font-semibold px-6 py-3 hover:opacity-90 transition-opacity rounded-sm"
            >
              View My Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 border border-primary text-primary font-mono text-sm font-semibold px-6 py-3 hover:bg-primary/10 transition-colors rounded-sm"
            >
              Contact Me
            </Link>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 pt-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              Available for internships & entry-level roles
            </span>
          </div>
          </div>

          {/* Right: Profile portrait */}
          <div className="relative shrink-0 w-56 sm:w-64 lg:w-72">
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm border border-primary/20">
              <Image
                src="/images/profile.jpeg"
                alt="Jatil Choudhary"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Green glow behind image */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,255,100,0.05)]" />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1.5 -left-1.5 h-4 w-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-1.5 -right-1.5 h-4 w-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-1.5 -left-1.5 h-4 w-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1.5 -right-1.5 h-4 w-4 border-b-2 border-r-2 border-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

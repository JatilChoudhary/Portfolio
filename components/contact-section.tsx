'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column */}
          <div className="lg:w-5/12 flex flex-col gap-8">
            <div>
              <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
                // get in touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-4 text-balance">
                {"Let's Secure Something Together"}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Have a security challenge, system audit, or research idea? I'm just one message away.
              </p>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-3 p-5 border border-border rounded-sm bg-card">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-mono text-foreground">Status: Available</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Open to Cyber Security Analyst, SOC Analyst, or Ethical Hacker roles
              </p>
              <p className="text-xs text-muted-foreground">
                Available for internships, projects, and entry-level roles
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Jammu, India</span>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <Link
                href="https://github.com/JatilChoudhary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/jatil-choudhary?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Right column - form */}
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground font-mono placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground font-mono placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="jatilchoudhary@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground font-mono placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground font-mono placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Cyber Security Opportunity"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground font-mono placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none resize-none transition-colors"
                  placeholder="Tell me about your security requirements..."
                />
              </div>

              <button
                type="submit"
                className="self-start inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm font-semibold px-8 py-3 hover:opacity-90 transition-opacity rounded-sm"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

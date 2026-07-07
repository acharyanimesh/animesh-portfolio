import { useEffect, useRef, useState } from 'react'
import {
  profile,
  experience,
  projects,
  skills,
  skillDescriptions,
  education,
  references,
  training,
  socials,
} from './data.js'

const gmailCompose = (email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

function Icon({ path, size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}

const icons = {
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
}

// Generated once at load so the flakes don't reshuffle on re-render
const snowflakes = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  left: Math.random() * 100, // vw
  size: 2.5 + Math.random() * 4.5, // px
  fall: 9 + Math.random() * 16, // s to cross the screen
  delay: -Math.random() * 25, // negative = already mid-fall on load
  sway: 3 + Math.random() * 5, // s per side-to-side cycle
  drift: 15 + Math.random() * 35, // px of horizontal sway
  opacity: 0.25 + Math.random() * 0.5,
}))

function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      {snowflakes.map((f) => (
        <div
          key={f.id}
          className="flake"
          style={{
            left: `${f.left}vw`,
            animationDuration: `${f.fall}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <span
            style={{
              width: `${f.size}px`,
              height: `${f.size}px`,
              opacity: f.opacity,
              animationDuration: `${f.sway}s`,
              animationDelay: `${f.delay}s`,
              '--drift': `${f.drift}px`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['01', 'Experience', '#experience'],
    ['02', 'Projects', '#projects'],
    ['03', 'Skills', '#skills'],
    ['04', 'Education', '#education'],
    ['05', 'Contact', '#contact'],
  ]

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          animesh<span>.dev</span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([n, label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                <span className="n">{n}.</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-grid-bg" />
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-kicker">Hi, my name is</p>
          <h1>{profile.name}.</h1>
          <h2>{profile.role}</h2>
          <div className="hero-about">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a
              href={gmailCompose(profile.email)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Get in touch
            </a>
          </div>
        </div>
        <aside className="hero-side">
          <div className="about-photo">
            <img src="/animesh.jpg" alt="Animesh Acharya" />
          </div>
          <div className="about-card">
            <div className="row">
              <span className="key">Location</span>
              <span className="val">{profile.location}</span>
            </div>
            <div className="row">
              <span className="key">Status</span>
              <span className="val">Open to opportunities</span>
            </div>
            <div className="row">
              <span className="key">Degree</span>
              <span className="val">B.E. in IT (2022–2026)</span>
            </div>
            <div className="row">
              <span className="key">Languages</span>
              <span className="val">English · Nepali · Russian</span>
            </div>
             <div className="row">
              <span className="key">Phone</span>
              <span className="val">+977 9851341626</span>
            </div>
          </div>
        </aside>
      </div>
    </header>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="num">01.</span> Experience
          </h2>
        </Reveal>
        {experience.map((exp) => (
          <Reveal key={exp.company}>
            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  {exp.url ? (
                    <a
                      className="exp-company"
                      href={exp.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {exp.company} · {exp.location} ↗
                    </a>
                  ) : (
                    <div className="exp-company">
                      {exp.company} · {exp.location}
                    </div>
                  )}
                </div>
                <div className="exp-period">{exp.period}</div>
              </div>
              <ul className="exp-points">
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="num">02.</span> Projects
          </h2>
        </Reveal>
        <div className="projects-grid">
          {projects.map((proj) => (
            <Reveal key={proj.title}>
              <div className="project-card">
                <div className="project-top">
                  <svg
                    className="folder-icon"
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="repo-link"
                      aria-label={`${proj.title} on GitHub`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                      </svg>
                    </a>
                  )}
                </div>
                <h3>{proj.title}</h3>
                <div className="project-sub">{proj.subtitle}</div>
                <p>{proj.description}</p>
                <ul className="project-highlights">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {proj.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillDetailModal({ detail, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="skill-modal-backdrop" onClick={onClose}>
      <div
        className="skill-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="skill-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="skill-modal-kicker">{detail.group}</div>
        <h3>{detail.term}</h3>
        <p>
          {skillDescriptions[detail.term] ||
            'One of the skills in my day-to-day toolkit.'}
        </p>
      </div>
    </div>
  )
}

function Skills() {
  const deckRef = useRef(null)
  const targetRef = useRef(0) // where the staircase is headed
  const currentRef = useRef(0) // where it is right now
  const rafRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [detail, setDetail] = useState(null)
  const [reduced] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  // Eased animation loop: each frame, glide a fraction of the remaining
  // distance toward the target so input (wheel notches, swipes, arrow
  // clicks) never maps 1:1 onto rotation
  const animate = () => {
    const diff = targetRef.current - currentRef.current
    if (Math.abs(diff) < 0.0004) {
      currentRef.current = targetRef.current
      setProgress(targetRef.current)
      rafRef.current = null
      return
    }
    currentRef.current += diff * 0.09
    setProgress(currentRef.current)
    rafRef.current = requestAnimationFrame(animate)
  }

  const setTarget = (value) => {
    targetRef.current = Math.min(1, Math.max(0, value))
    if (!rafRef.current) rafRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (reduced) return

    // Pinned section: page scroll drives the staircase; the eased loop
    // smooths the discrete wheel notches into a continuous glide
    const onScroll = () => {
      const el = deckRef.current
      if (!el) return
      const total = el.offsetHeight - window.innerHeight
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total))
      setTarget(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [reduced])

  // Fallback: plain grid for reduced-motion users
  if (reduced) {
    return (
      <section id="skills">
        <div className="container">
          <h2 className="section-title">
            <span className="num">03.</span> Skills
          </h2>
          <div className="skills-grid">
            {skills.map((sk) => (
              <div className="skill-group" key={sk.group}>
                <h3>{sk.group}</h3>
                <ul>
                  {sk.items.map((item) => (
                    <li
                      key={item}
                      className="clickable"
                      onClick={() => setDetail({ term: item, group: sk.group })}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {detail && (
          <SkillDetailModal detail={detail} onClose={() => setDetail(null)} />
        )}
      </section>
    )
  }

  const n = skills.length
  const idx = progress * (n - 1)
  const current = Math.min(n, Math.round(idx) + 1)

  return (
    <section id="skills" className="skills-scroll" ref={deckRef}>
      <div className="skills-sticky">
        <div className="container skills-sticky-inner">
          <div className="skills-head">
            <h2 className="section-title">
              <span className="num">03.</span> Skills
            </h2>
            <div className="skills-progress">
              <span className="skills-counter">
                {String(current).padStart(2, '0')} / {String(n).padStart(2, '0')}
              </span>
              <div className="skills-bar">
                <div
                  className="skills-bar-fill"
                  style={{ transform: `scaleX(${progress})` }}
                />
              </div>
              <span className="skills-hint">
                scroll · click a skill for details
              </span>
            </div>
          </div>

          <div className="skills-deck">
            {skills.map((sk, i) => {
              // spiral staircase: cards are steps on a helix around a
              // vertical axis; scroll rotates the staircase so each step
              // swings around to face the viewer
              const stepAngle = 68 // degrees between steps
              const stepRise = 64 // vertical rise per step (px)
              const radius = 320 // distance from the axis (px)

              const d = i - idx // 0 = front-facing step
              const a = d * stepAngle
              const y = d * stepRise
              const away = Math.min(Math.abs(a) / 150, 1)
              const opacity = 1 - away * 0.85
              const front = Math.abs(d) < 0.5

              return (
                <div
                  key={sk.group}
                  className={`skill-card ${front ? 'front' : ''}`}
                  style={{
                    transform: `translateY(${y}px) rotateY(${a}deg) translateZ(${radius}px)`,
                    opacity,
                    zIndex: 100 - Math.round(Math.abs(a)),
                    pointerEvents: front ? 'auto' : 'none',
                  }}
                >
                  <span className="skill-card-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{sk.group}</h3>
                  <div className="skill-card-tags">
                    {sk.items.map((item) => (
                      <button
                        key={item}
                        className="skill-tag"
                        tabIndex={front ? 0 : -1}
                        onClick={() =>
                          setDetail({ term: item, group: sk.group })
                        }
                      >
                        ▹ {item}
                      </button>
                    ))}
                  </div>
                  <span className="skill-card-expand">
                    click a skill to learn more
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {detail && (
        <SkillDetailModal detail={detail} onClose={() => setDetail(null)} />
      )}
    </section>
  )
}

function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="num">04.</span> Education & Training
          </h2>
        </Reveal>
        <div className="edu-grid">
          <Reveal>
            <div className="edu-timeline">
              {education.map((edu) => (
                <div className="edu-card" key={edu.degree}>
                  <h3>{edu.degree}</h3>
                  <div className="school">{edu.school}</div>
                  <div className="school">{edu.location}</div>
                  <div className="period">{edu.period}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="training-list">
              {training.map((t) => (
                <div className="training-item" key={t.title}>
                  <h4>{t.title}</h4>
                  <div className="org">{t.org}</div>
                  <p>{t.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function References() {
  return (
    <section id="references">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="num">05.</span> References
          </h2>
        </Reveal>
        <div className="ref-grid">
          {references.map((ref) => (
            <Reveal key={ref.name}>
              <div className="ref-card">
                <h3>{ref.name}</h3>
                <div className="ref-title">{ref.title}</div>
                <div className="ref-contact">
                  <a
                    href={gmailCompose(ref.email)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon path={icons.mail} size={15} /> {ref.email}
                  </a>
                  <a href={`tel:${ref.phone.replace(/\s/g, '')}`}>
                    <Icon path={icons.phone} size={15} /> {ref.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href, copyText }) {
  const [copied, setCopied] = useState(false)

  const copy = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    })
  }

  return (
    <a
      className="contact-card"
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
    >
      <span className="contact-card-icon">{icon}</span>
      <span className="contact-card-label">{label}</span>
      <span className="contact-card-value">{value}</span>
      {copyText && (
        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={copy}
          aria-label={`Copy ${label}`}
        >
          {copied ? '✓ Copied!' : '⧉ Copy'}
        </button>
      )}
    </a>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="num">06.</span> Get In Touch
          </h2>
          <p className="contact-blurb">
            I'm currently open to new opportunities — whether it's front-end
            development, data visualization, or research & evaluation work. My
            inbox is always open.
          </p>
          <a
            href={gmailCompose(profile.email)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Say Hello
          </a>
        </Reveal>
        <Reveal>
          <div className="contact-cards">
            <ContactCard
              icon={<Icon path={icons.mail} size={22} />}
              label="Email"
              value={profile.email}
              href={gmailCompose(profile.email)}
              copyText={profile.email}
            />
            <ContactCard
              icon={<Icon path={icons.phone} size={22} />}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              copyText={profile.phone}
            />
            <ContactCard
              icon={<Icon path={icons.pin} size={22} />}
              label="Location"
              value={profile.location}
              href={`https://www.google.com/maps/search/${encodeURIComponent(profile.location)}`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container">
        Designed & built by {profile.name} ·{' '}
        {socials.map((s, i) => (
          <span key={s.label}>
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
            {i < socials.length - 1 ? ' · ' : ''}
          </span>
        ))}
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <AmbientBackground />
      <Nav />
      <Hero />
      <main>
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <References />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import { useState, useEffect, useRef, useCallback } from 'react'
import { MdEmail, MdPhone, MdLocationOn, MdPublic, MdPhoneIphone, MdStorage, MdPalette, MdBusiness, MdSupportAgent } from 'react-icons/md'
import { FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { projects, projectCategories } from './data/projects'
import './App.css'

function useCountUp(end, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!startCounting || hasRun.current) return
    hasRun.current = true

    const startTime = performance.now()
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [startCounting, end, duration])

  return count
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const statsRef = useRef(null)

  const meJson = {
    name: 'Camille Schori',
    role: 'Full-Stack Developer',
    location: 'Erbil, Iraq',
    experience: '10+ years',
    company: 'CS-SOFT (Founder & CEO)',
  }

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(meJson, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  // Typewriter effect for hero heading
  const heroLines = ['Code it. Ship it.', 'Make it matter.']
  const [displayedText, setDisplayedText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    if (typingDone) return
    if (lineIndex >= heroLines.length) {
      setTypingDone(true)
      return
    }

    const currentLine = heroLines[lineIndex]
    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLine[charIndex])
        setCharIndex((c) => c + 1)
      }, 60)
      return () => clearTimeout(timer)
    } else if (lineIndex < heroLines.length - 1) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + '\n')
        setLineIndex((l) => l + 1)
        setCharIndex(0)
      }, 400)
      return () => clearTimeout(timer)
    } else {
      setTypingDone(true)
    }
  }, [charIndex, lineIndex, typingDone])

  const projectCount = useCountUp(34, 1800, statsVisible)
  const supportCount = useCountUp(24, 1400, statsVisible)
  const percentCount = useCountUp(100, 2000, statsVisible)
  const yearsCount = useCountUp(10, 1600, statsVisible)

  const servicesFeatures = [
    { icon: 'web', title: 'Web Development', description: 'Full-stack web solutions from frontend to backend. React, Laravel, and modern frameworks. Responsive, fast, and scalable.' },
    { icon: 'mobile', title: 'Mobile Apps', description: 'Cross-platform mobile apps with React Native. iOS and Android from a single codebase. Push notifications, payments, and more.' },
    { icon: 'database', title: 'Database & APIs', description: 'Database design, REST APIs, and system integration. MySQL, MongoDB, Firebase. Clean architecture that scales.' },
    { icon: 'design', title: 'UI/UX Design', description: 'User-centered design and modern interfaces. Pixel-perfect layouts, smooth interactions, and accessible experiences.' },
    { icon: 'enterprise', title: 'Enterprise Systems', description: 'Custom software for businesses. POS, HR, inventory, CRM. Tailored to your workflow and requirements.' },
    { icon: 'support', title: 'Consulting & Support', description: 'Technical consulting, code reviews, and ongoing support. 24/7 availability for your peace of mind.' },
  ]

  const ServiceIcon = ({ name }) => {
    const icons = {
      web: <MdPublic />,
      mobile: <MdPhoneIphone />,
      database: <MdStorage />,
      design: <MdPalette />,
      enterprise: <MdBusiness />,
      support: <MdSupportAgent />,
    }
    return <span className="service-icon-svg">{icons[name] || null}</span>
  }

  const services = [
    {
      icon: 'web',
      title: 'Web Development',
      description: 'Complete web solutions from frontend to backend',
      price: '$300',
      priceNote: 'Starting from',
      features: [
        'Responsive Design',
        'React/Laravel Development',
        'Database Integration',
        'SEO Optimization',
        'Admin Dashboard',
        'API Development',
      ],
    },
    {
      icon: 'mobile',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      price: '$2500',
      priceNote: 'Starting from',
      features: [
        'React Native Development',
        'Cross-Platform Compatibility',
        'Push Notifications',
        'App Store Deployment',
        'Payment Integration',
        'Analytics Integration',
      ],
    },
    {
      icon: 'enterprise',
      title: 'Systems',
      description: 'Enterprise systems and custom software solutions',
      price: 'Custom',
      priceNote: 'Quote based',
      features: [
        'Custom System Design',
        'Database Architecture',
        'API Integrations',
        'Cloud Deployment',
        'System Maintenance',
        'Technical Consulting',
      ],
    },
  ]

  const experiences = [
    {
      company: 'Freelance',
      position: 'Full-stack Developer',
      period: 'August 2015 - Present',
    },
    {
      company: 'Alnimaa Scientific Bureau',
      position: 'Full-stack Developer & Social Media Marketing Manager',
      period: 'Jan 2021 - Present',
    },
    {
      company: 'CIS College-Erbil',
      position: 'Lecturer',
      period: 'Jan 2021 - Present',
    },
    {
      company: 'Villa Real Estate Co.',
      position: 'Digital Marketing & Programmer',
      period: 'Jul 2023 - Present',
    },
    {
      company: 'Black layer Co.',
      position: 'Full-stack Developer',
      period: 'May 2022 - Present',
    },
    {
      company: 'Avocado Franchise',
      position: 'Full-stack Developer',
      period: 'May 2023 - Jun 2023',
    },
  ]

  const education = [
    {
      institution: "Salahaddin University-Erbil",
      degree: "Bachelor's degree, Banking, Corporate, Finance, and Securities Law",
      period: 'Sep 2015 - Jun 2019',
    },
    {
      institution: 'Udacity',
      degree: 'Front End Development Track Certificate',
      period: 'Issued May 2019',
    },
  ]

  const techStack = [
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Bootstrap', color: '#7952B3' },
    { name: 'jQuery', color: '#0769AD' },
    { name: 'SASS/SCSS', color: '#CC6699' },
    { name: 'PHP', color: '#777BB4' },
    { name: 'Laravel', color: '#FF2D20' },
    { name: 'Composer', color: '#885630' },
    { name: 'React.js', color: '#61DAFB' },
    { name: 'React Native', color: '#61DAFB' },
    { name: 'Expo', color: '#4630EB' },
    { name: 'JSX', color: '#61DAFB' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'Firestore', color: '#FFCA28' },
    { name: 'Git', color: '#F05032' },
    { name: 'GitHub', color: '#f0f6fc' },
    { name: 'GitHub Actions', color: '#2088FF' },
    { name: 'VS Code', color: '#007ACC' },
    { name: 'Postman', color: '#FF6C37' },
    { name: 'Chrome DevTools', color: '#1a73e8' },
    { name: 'npm/yarn', color: '#CB3837' },
    { name: 'REST APIs', color: '#00A4EF' },
    { name: 'JSON', color: '#8B949E' },
    { name: 'AJAX', color: '#00A4EF' },
    { name: 'Responsive Design', color: '#61DAFB' },
  ]

  const contactCards = [
    { icon: MdEmail, label: 'Email', value: 'info@camilleschori.com', link: 'mailto:info@camilleschori.com', color: '#EA4335' },
    { icon: MdPhone, label: 'Phone', value: '+964 772 944 4377', link: 'tel:+9647729444377', color: '#34A853' },
    { icon: MdLocationOn, label: 'Location', value: 'Erbil, Kurdistan, Iraq', link: null, color: '#4285F4' },
    { icon: FaWhatsapp, label: 'WhatsApp', value: '+964 772 944 4377', link: 'https://wa.me/9647729444377', color: '#25D366' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/camilleschori', link: 'https://linkedin.com/in/camilleschori', color: '#0A66C2' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/camilleschori', link: 'https://github.com/camilleschori', color: '#f0f6fc' },
    { icon: FaTwitter, label: 'Twitter', value: '@camilleschori', link: 'https://twitter.com/camilleschori', color: '#1DA1F2' },
    { icon: FaInstagram, label: 'Instagram', value: '@camilleschori', link: 'https://instagram.com/camilleschori', color: '#E4405F' },
    { icon: FaFacebookF, label: 'Facebook', value: 'facebook.com/camilleschori', link: 'https://facebook.com/camilleschori', color: '#1877F2' },
  ]

  const handleNavClick = () => setMenuOpen(false)

  return (
    <div className="app">
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#hero" className="nav-logo" onClick={handleNavClick}>
            <span className="nav-logo-accent">Camille</span>
            <span className="nav-logo-text">Schori</span>
          </a>

          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="#hero" className="nav-link" onClick={handleNavClick}>Home</a>
            <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
            <a href="#services" className="nav-link" onClick={handleNavClick}>Services</a>
            <a href="#pricing" className="nav-link" onClick={handleNavClick}>Pricing</a>
            <a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a>
            <a href="#tech" className="nav-link" onClick={handleNavClick}>Tech</a>
            <a href="#contact" className="nav-cta" onClick={handleNavClick}>Get in Touch</a>
          </div>

          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-glow" />
        <div className="container">
          <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Full-Stack Developer — Erbil, Iraq
          </div>
          <h1 className="hero-typewriter">
            {displayedText.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
            <span className={`typewriter-cursor${typingDone ? ' blink' : ''}`}>|</span>
          </h1>
          <p className="hero-subtitle">
            Based in Iraq, I help businesses and startups transform ideas into powerful
            digital experiences — from web apps and mobile solutions to enterprise systems
            that drive real growth.
          </p>

          {/* me.json — macOS Terminal style */}
          <div className="me-json-block">
            <div className="me-json-titlebar">
              <div className="me-json-window-controls">
                <span className="wc red" />
                <span className="wc yellow" />
                <span className="wc green" />
              </div>
              <span className="me-json-window-title">me.json — bash</span>
              <button
                className="me-json-copy"
                onClick={handleCopyJson}
                aria-label="Copy JSON"
                title={copied ? 'Copied!' : 'Copy'}
              >
                {copied ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
            <pre className="me-json-content">
{`{
  "name": "Camille Schori",
  "role": "Full-Stack Developer",
  "location": "Erbil, Iraq",
  "experience": "10+ years",
  "company": "CS-SOFT (Founder & CEO)"
}`}
            </pre>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about">
        <div className="container">
          <div className="section-header">
            <div className="section-marker">⟩ Why Me</div>
            <h2 className="section-title">About</h2>
          </div>

          <div className="stats-grid" ref={statsRef}>
            <div className="stat-card">
              <div className="stat-number">{projectCount}+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{supportCount}/7</div>
              <div className="stat-label">Support</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{percentCount}%</div>
              <div className="stat-label">Custom Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{yearsCount}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-image-wrapper">
              <img src="/me.webp" alt="Camille Schori — Full-Stack Developer" />
            </div>
            <div className="about-content">
              <p className="about-text">
                Hey — I'm Camille, a <strong>full-stack developer</strong> with over
                10 years of hands-on experience building <strong>web and mobile
                applications</strong>. I work across the entire stack — from pixel-perfect
                frontends to scalable backend architectures — crafting digital products
                that solve real problems and drive measurable growth.
              </p>
              <p className="about-text">
                My toolkit spans <strong>React, Laravel, React Native</strong>, and
                beyond. Whether it's a sleek landing page, a cross-platform mobile app,
                or a complex enterprise system, I deliver clean code, modern UI, and
                experiences users actually enjoy.
              </p>
              <p className="about-text">
                I'm also the <strong>Founder &amp; CEO
                of <a href="https://cs-soft.dev" target="_blank" rel="noopener noreferrer">CS-SOFT</a></strong> — where
                I lead a team delivering custom digital solutions for businesses across
                Iraq and worldwide.
              </p>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="timelines-grid">
            <div>
              <h3 className="timeline-section-title">Experience</h3>
              <div className="timeline-items">
                {experiences.map((exp, i) => (
                  <div className="timeline-card" key={i}>
                    <h4>{exp.company}</h4>
                    <h5>{exp.position}</h5>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="education-col">
              <h3 className="timeline-section-title">Education</h3>
              <div className="timeline-items">
                {education.map((edu, i) => (
                  <div className="timeline-card" key={i}>
                    <h4>{edu.institution}</h4>
                    <h5>{edu.degree}</h5>
                    <span className="timeline-period">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES — OpenClaw style ===== */}
      <section id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-marker">⟩ Services</div>
            <h2 className="section-title">What It Does</h2>
          </div>

          <div className="services-features-grid">
            {servicesFeatures.map((item, i) => (
              <div className="services-features-card" key={i}>
                <div className="services-features-icon">
                  <ServiceIcon name={item.icon} />
                </div>
                <h3 className="services-features-title">{item.title}</h3>
                <p className="services-features-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing">
        <div className="container">
          <div className="section-header">
            <div className="section-marker">⟩ Pricing</div>
            <h2 className="section-title">Built for your business.</h2>
            <p className="section-subtitle">
              Professional development services tailored to bring your ideas to life
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul className="service-features">
                  {s.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <div className="service-price">
                  {s.priceNote} <strong>{s.price}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects">
        <div className="container">
          <div className="section-header">
            <div className="section-marker">⟩ My Work</div>
            <h2 className="section-title">Projects &amp; Clients</h2>
            <p className="section-subtitle">
              {projects.length}+ projects delivered across Iraq, Turkey, UK, and the United States
            </p>
          </div>

          <div className="filter-tabs">
            <button
              className={`filter-tab${activeFilter === 'all' ? ' active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All ({projects.length})
            </button>
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab${activeFilter === cat.id ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.icon} {cat.name} ({projects.filter((p) => p.category === cat.id).length})
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((p) => (
              <div className="project-card" key={p.id}>
                <div className="project-header">
                  <span className="project-name">{p.name}</span>
                  <span className="project-type-badge">
                    <span>{p.type}</span>
                  </span>
                </div>
                <p className="project-description">{p.description}</p>
                <div className="project-footer">
                  📍 {p.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK — Works With Everything style ===== */}
      <section id="tech">
        <div className="container">
          <div className="section-header">
            <div className="section-marker">⟩ Works With Everything</div>
            <h2 className="section-title">Tech &amp; Tools</h2>
          </div>

          <div className="tech-tags">
            {techStack.map((t, i) => (
              <div className="tech-tag" key={i} style={{ '--tech-color': t.color }}>
                <span className="tech-tag-icon" />
                <span className="tech-tag-name">{t.name}</span>
              </div>
            ))}
          </div>

          <div className="tech-links">
            <a href="#projects" className="tech-link">View projects →</a>
            <a href="#contact" className="tech-link">Get in touch →</a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT / CTA ===== */}
      <section id="contact">
        <div className="container">
          <div className="cta-box">
            <div className="cta-glow" />
            <div className="section-marker">⟩ Let's Talk</div>
            <h2 className="section-title">Ready to build something great?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
              Tell us about your project — let's transform your vision into powerful digital
              solutions that drive results.
            </p>

            <div className="contact-grid">
              {contactCards.map((c, i) =>
                c.link ? (
                  <a
                    key={i}
                    href={c.link}
                    className="contact-card"
                    target={c.link.startsWith('http') ? '_blank' : undefined}
                    rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contact-card-icon" style={{ color: c.color }}><c.icon /></div>
                    <div className="contact-card-label">{c.label}</div>
                    <div className="contact-card-value">{c.value}</div>
                  </a>
                ) : (
                  <div key={i} className="contact-card">
                    <div className="contact-card-icon" style={{ color: c.color }}><c.icon /></div>
                    <div className="contact-card-label">{c.label}</div>
                    <div className="contact-card-value">{c.value}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <strong>Camille Schori</strong> &copy; {new Date().getFullYear()}. All rights reserved.
            </div>

            <nav className="footer-nav">
              <a href="#about" className="footer-link">About</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#pricing" className="footer-link">Pricing</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#tech" className="footer-link">Tech</a>
              <a href="#contact" className="footer-link">Contact</a>
            </nav>

            <div className="footer-contact-info">
              <a href="https://camilleschori.com" className="footer-contact-item" target="_blank" rel="noopener noreferrer">
                camilleschori.com
              </a>
              <a href="tel:+9647729444377" className="footer-contact-item">
                +964 772 944 4377
              </a>
              <a href="mailto:info@camilleschori.com" className="footer-contact-item">
                info@camilleschori.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== SCROLL TO TOP ===== */}
      <button
        className={`scroll-top${showScrollTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  )
}

export default App

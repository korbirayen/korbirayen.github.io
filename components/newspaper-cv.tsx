"use client"

import { useState, useEffect, useRef } from "react"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Download,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Heart,
  ArrowUp,
  Menu,
  X,
} from "lucide-react"

// Animation hook for scroll-triggered animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useInView()

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// Animated skill bar
function SkillBar({ skill, level, delay = 0 }: { skill: string; level: number; delay?: number }) {
  const { ref, isInView } = useInView()

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-[#1a1a1a] text-sm group-hover:text-[#8b5a2b] transition-colors">{skill}</span>
        <span className="text-xs text-[#555]">{level}%</span>
      </div>
      <div className="h-3 bg-[#e0ddd4] border border-[#2c2c2c] overflow-hidden relative">
        <div
          className="h-full bg-gradient-to-r from-[#2c2c2c] to-[#555] transition-all duration-1000 ease-out relative"
          style={{
            width: isInView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  )
}

// Project card with hover effects
function ProjectCard({
  title,
  tag,
  description,
  items,
  link,
  delay = 0,
}: {
  title: string
  tag: string
  description: string
  items: string[]
  link?: string
  delay?: number
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`group border-2 border-[#ccc] p-4 bg-[#faf7f0] hover:border-[#8b5a2b] hover:shadow-xl transition-all duration-500 transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-[#1a1a1a] text-lg group-hover:text-[#8b5a2b] transition-colors">{title}</h3>
        <span className="text-[10px] uppercase tracking-wide bg-[#2c2c2c] text-[#f5f1e8] px-3 py-1 group-hover:bg-[#8b5a2b] transition-colors">
          {tag}
        </span>
      </div>
      <p className="text-xs text-[#555] italic mb-3 pb-2 border-b border-dashed border-[#ccc]">{description}</p>
      <ul className="text-sm text-[#333] space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[#8b5a2b] mt-1">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#2c2c2c] hover:text-[#8b5a2b] transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          View Project
        </a>
      )}
    </div>
  )
}

// Timeline item with animation
function TimelineItem({
  title,
  subtitle,
  date,
  items,
  delay = 0,
}: {
  title: string
  subtitle?: string
  date: string
  items: string[]
  delay?: number
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`relative pl-6 border-l-2 border-[#2c2c2c] group transition-all duration-700 ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -left-[7px] top-0 w-3 h-3 bg-[#2c2c2c] rounded-full group-hover:bg-[#8b5a2b] group-hover:scale-125 transition-all duration-300" />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <h3 className="font-bold text-[#1a1a1a] text-base group-hover:text-[#8b5a2b] transition-colors">{title}</h3>
        <span className="text-xs text-[#555] italic bg-[#f0ede6] px-2 py-0.5 inline-block">{date}</span>
      </div>
      {subtitle && <p className="text-sm text-[#555] italic mb-2">{subtitle}</p>}
      <ul className="text-sm text-[#333] space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[#8b5a2b] mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Certification badge with animation
function CertBadge({
  org,
  cert,
  year,
  delay = 0,
}: {
  org: string
  cert: string
  year: string
  delay?: number
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`group flex items-center gap-3 border-2 border-[#ccc] p-3 bg-[#faf7f0] hover:border-[#8b5a2b] hover:shadow-lg transition-all duration-500 cursor-default ${
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-[#2c2c2c] to-[#555] text-[#f5f1e8] flex items-center justify-center text-xs font-bold flex-shrink-0 group-hover:from-[#8b5a2b] group-hover:to-[#a0522d] transition-all duration-300">
        {org.slice(0, 2).toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-[#1a1a1a] truncate group-hover:text-[#8b5a2b] transition-colors">{cert}</p>
        <p className="text-xs text-[#555]">
          {org} • {year}
        </p>
      </div>
      <Award className="w-4 h-4 text-[#ccc] group-hover:text-[#8b5a2b] transition-colors flex-shrink-0" />
    </div>
  )
}

export function NewspaperCV() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)

      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "projects", "education", "skills", "contact"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-[#b8b3a8] relative">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c2c2c]/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => scrollToSection("home")}
              className="font-serif text-xl font-bold text-[#f5f1e8] hover:text-[#d4a574] transition-colors"
            >
              RK
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-serif transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-[#d4a574] border-b-2 border-[#d4a574]"
                      : "text-[#f5f1e8]/80 hover:text-[#f5f1e8]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#f5f1e8] p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#555]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-serif transition-colors ${
                    activeSection === item.id ? "text-[#d4a574]" : "text-[#f5f1e8]/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-14">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="paper paper-shadow paper-edges paper-texture relative overflow-hidden">
            {/* Decorative Corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-3 border-t-3 border-[#8b5a2b] opacity-40" />
            <div className="absolute top-4 right-4 w-12 h-12 border-r-3 border-t-3 border-[#8b5a2b] opacity-40" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-3 border-b-3 border-[#8b5a2b] opacity-40" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-3 border-b-3 border-[#8b5a2b] opacity-40" />

            <div className="px-6 md:px-12 py-10 relative z-10">
              {/* Hero Section */}
              <section id="home" className="scroll-mt-20">
                {/* Header Bar */}
                <header className="border-b-2 border-[#2c2c2c] pb-3 mb-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#555] font-serif gap-2">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-[#8b5a2b]" />
                      <span>Edition: January 2026</span>
                    </span>
                    <span className="tracking-widest uppercase text-[10px] hidden sm:block">
                      Independent • Personal • Portfolio
                    </span>
                    <span className="flex items-center gap-2">
                      <span>Price: Priceless</span>
                      <Sparkles className="w-3 h-3 text-[#8b5a2b]" />
                    </span>
                  </div>
                </header>

                {/* Title Section */}
                <div className="text-center py-8 sm:py-12 border-b-4 border-double border-[#2c2c2c] relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f4f1ea]/50 to-transparent pointer-events-none" />
                  
                  <p className="font-serif text-xs tracking-[0.4em] uppercase text-[#8b5a2b] mb-4 animate-fade-in">
                    The Portfolio of
                  </p>
                  
                  <h1
                    className="font-serif text-5xl sm:text-7xl md:text-9xl font-black tracking-tight text-[#1a1a1a] uppercase relative inline-block"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <span className="relative">
                      Rayen Korbi
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8b5a2b] to-transparent" />
                    </span>
                  </h1>
                  
                  <p className="font-serif text-lg sm:text-xl italic text-[#555] mt-6 max-w-lg mx-auto">
                    &ldquo;Transforming Data into Decisions&rdquo;
                  </p>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto mt-10 pt-8 border-t border-[#ccc]">
                    <div className="text-center group">
                      <div className="text-3xl sm:text-4xl font-black text-[#2c2c2c] group-hover:text-[#8b5a2b] transition-colors">
                        <AnimatedCounter end={5} suffix="+" />
                      </div>
                      <div className="text-xs text-[#555] mt-1 uppercase tracking-wide">Projects</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-3xl sm:text-4xl font-black text-[#2c2c2c] group-hover:text-[#8b5a2b] transition-colors">
                        <AnimatedCounter end={5} />
                      </div>
                      <div className="text-xs text-[#555] mt-1 uppercase tracking-wide">Certifications</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-3xl sm:text-4xl font-black text-[#2c2c2c] group-hover:text-[#8b5a2b] transition-colors">
                        <AnimatedCounter end={2} suffix="+" />
                      </div>
                      <div className="text-xs text-[#555] mt-1 uppercase tracking-wide">Years Exp</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                    <a
                      href="/RayenKorbi.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 bg-[#2c2c2c] text-[#f5f1e8] px-8 py-3 font-serif text-sm hover:bg-[#8b5a2b] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      View Full CV
                    </a>
                    <a
                      href="/RayenKorbi.pdf"
                      download
                      className="group flex items-center gap-2 border-2 border-[#2c2c2c] text-[#2c2c2c] px-8 py-3 font-serif text-sm hover:bg-[#2c2c2c] hover:text-[#f5f1e8] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                      Download CV
                    </a>
                  </div>

                  {/* Scroll Indicator */}
                  <button
                    onClick={() => scrollToSection("about")}
                    className="mt-10 animate-bounce inline-flex flex-col items-center text-[#555] hover:text-[#8b5a2b] transition-colors"
                  >
                    <span className="text-xs uppercase tracking-wide mb-1">Scroll to explore</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
              </section>

              {/* About Section */}
              <section id="about" className="scroll-mt-20 py-12 border-b border-[#ccc]">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-8">
                    <span className="inline-block bg-[#2c2c2c] text-[#f5f1e8] text-xs uppercase tracking-widest px-4 py-1 mb-4">
                      About Me
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1a1a1a]">
                      Big Data & AI Enthusiast
                    </h2>
                  </div>
                  
                  <div className="font-serif text-lg text-[#333] leading-relaxed space-y-6 text-center">
                    <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#8b5a2b] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                      Big Data & Data Analytics student with hands-on experience in Python, data processing, and machine learning. 
                      I&apos;m passionate about turning complex datasets into actionable insights that drive real business decisions.
                    </p>
                    <p>
                      As a builder of real AI and automation projects, I&apos;m comfortable with reinforcement learning, 
                      LLM integration, and n8n workflows. My goal is to bridge the gap between raw data and meaningful outcomes.
                    </p>
                    <p className="bg-[#f9f6ef] p-6 border-l-4 border-[#8b5a2b] text-left italic">
                      Currently seeking a final-year internship (PFE) in Big Data / AI to apply my skills to real datasets 
                      and build scalable models that make a difference.
                    </p>
                  </div>

                  {/* Location & Availability */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-dashed border-[#ccc]">
                    <div className="flex items-center gap-2 text-sm text-[#555]">
                      <MapPin className="w-4 h-4 text-[#8b5a2b]" />
                      <span>Tunis, Tunisia</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-[#8b5a2b] rounded-full" />
                    <div className="flex items-center gap-2 text-sm text-[#555]">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Available for opportunities</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section id="experience" className="scroll-mt-20 py-12 border-b border-[#ccc]">
                <div className="text-center mb-10">
                  <span className="inline-flex items-center gap-2 bg-[#2c2c2c] text-[#f5f1e8] text-xs uppercase tracking-widest px-4 py-1 mb-4">
                    <Briefcase className="w-3 h-3" />
                    Experience
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1a1a1a]">
                    Professional Journey
                  </h2>
                </div>

                <div className="max-w-2xl mx-auto space-y-8">
                  <TimelineItem
                    title="Internship — Predictive Analytics"
                    subtitle="Data Science & ML Focus"
                    date="06/2025 – 07/2025"
                    items={[
                      "Built end-to-end predictive modeling for public payroll optimization 2024-2030",
                      "Implemented full pipeline: ingestion, cleaning, feature engineering, training",
                      "Designed interactive web dashboard for \"what-if\" forecasting scenarios",
                      "Achieved 94% accuracy in salary prediction models",
                    ]}
                    delay={0}
                  />
                  <TimelineItem
                    title="Freelance Video Editing"
                    subtitle="Multimedia Production"
                    date="03/2025 – 11/2025"
                    items={[
                      "Delivered high-quality multimedia projects while meeting tight deadlines",
                      "Collaborated with clients to understand their vision and requirements",
                      "Utilized industry-standard tools for professional video production",
                    ]}
                    delay={200}
                  />
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="scroll-mt-20 py-12 border-b border-[#ccc]">
                <div className="text-center mb-10">
                  <span className="inline-flex items-center gap-2 bg-[#2c2c2c] text-[#f5f1e8] text-xs uppercase tracking-widest px-4 py-1 mb-4">
                    <Code className="w-3 h-3" />
                    Featured Projects
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1a1a1a]">
                    Things I&apos;ve Built
                  </h2>
                  <p className="text-[#555] mt-2 max-w-lg mx-auto">
                    A selection of projects that showcase my skills in data science, machine learning, and AI development.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <ProjectCard
                    title="MovieMind"
                    tag="AI/ML"
                    description="Netflix-style Movie Trend Analyzer & Recommendation Engine"
                    items={[
                      "Built movie recommender with Python (Pandas, NumPy, Scikit-learn)",
                      "Created data pipeline for viewing trends analysis",
                      "Tested multiple algorithms for recommendation relevance",
                      "Implemented collaborative and content-based filtering",
                    ]}
                    link="https://github.com/korbirayen"
                    delay={0}
                  />
                  <ProjectCard
                    title="Axon"
                    tag="LLM"
                    description="Private Centralized LLM • 03/2025 – Present"
                    items={[
                      "Processes sensitive data offline, reducing security risks",
                      "Enables natural-language querying and instant summarization",
                      "Turns files into searchable local knowledge base",
                      "Custom fine-tuning for domain-specific applications",
                    ]}
                    link="https://github.com/korbirayen"
                    delay={200}
                  />
                  <ProjectCard
                    title="DataFlow Automator"
                    tag="Automation"
                    description="Enterprise Data Pipeline Orchestration"
                    items={[
                      "Automated data ingestion from multiple sources",
                      "Built real-time monitoring dashboards",
                      "Reduced manual data processing by 85%",
                      "Integrated with n8n for workflow automation",
                    ]}
                    delay={400}
                  />
                  <ProjectCard
                    title="Sentiment Analyzer"
                    tag="NLP"
                    description="Social Media Sentiment Analysis Tool"
                    items={[
                      "Real-time sentiment analysis of social media posts",
                      "Multi-language support with 90%+ accuracy",
                      "Visual dashboard for trend monitoring",
                      "API integration for third-party applications",
                    ]}
                    delay={600}
                  />
                </div>
              </section>

              {/* Education Section */}
              <section id="education" className="scroll-mt-20 py-12 border-b border-[#ccc]">
                <div className="text-center mb-10">
                  <span className="inline-flex items-center gap-2 bg-[#2c2c2c] text-[#f5f1e8] text-xs uppercase tracking-widest px-4 py-1 mb-4">
                    <GraduationCap className="w-3 h-3" />
                    Education
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1a1a1a]">
                    Academic Background
                  </h2>
                </div>

                <div className="max-w-2xl mx-auto space-y-8">
                  <TimelineItem
                    title="Bachelor's in Big Data & Analytics"
                    subtitle="Ecole Centrale Supérieure Privée"
                    date="09/2023 – Present"
                    items={[
                      "Focus on data science, machine learning, and big data technologies",
                      "Practical projects with Python, SQL, and data analytics tools",
                      "Coursework in distributed computing, data visualization, and statistical analysis",
                      "Active participation in coding competitions and hackathons",
                    ]}
                    delay={0}
                  />
                  <TimelineItem
                    title="High School Diploma — Computer Science"
                    subtitle="Lycée Hrairia 2"
                    date="09/2022 – 07/2023"
                    items={[
                      "Specialized in computer science and mathematics",
                      "Projects using Python and PHP",
                      "Foundation in algorithms and data structures",
                    ]}
                    delay={200}
                  />
                </div>

                {/* Certifications */}
                <div className="mt-12">
                  <h3 className="font-serif text-xl font-bold text-[#1a1a1a] text-center mb-6 flex items-center justify-center gap-2">
                    <Award className="w-5 h-5 text-[#8b5a2b]" />
                    Certifications
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    <CertBadge org="freeCodeCamp" cert="Data Analysis with Python" year="2024" delay={0} />
                    <CertBadge org="AWS" cert="Cloud Foundations" year="2025" delay={100} />
                    <CertBadge org="Hashgraph" cert="Web 3 Development" year="2025" delay={200} />
                    <CertBadge org="Google" cert="Cybersecurity Professional" year="2024" delay={300} />
                    <CertBadge org="Stanford" cert="Machine Learning" year="2024" delay={400} />
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills" className="scroll-mt-20 py-12 border-b border-[#ccc]">
                <div className="text-center mb-10">
                  <span className="inline-block bg-[#2c2c2c] text-[#f5f1e8] text-xs uppercase tracking-widest px-4 py-1 mb-4">
                    Skills & Expertise
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1a1a1a]">
                    Technical Arsenal
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Skill Bars */}
                  <div className="space-y-6">
                    <h3 className="font-serif text-lg font-bold text-[#1a1a1a] border-b-2 border-[#2c2c2c] pb-2 mb-4">
                      Programming & Data
                    </h3>
                    <SkillBar skill="Python" level={90} delay={0} />
                    <SkillBar skill="SQL / Databases" level={85} delay={100} />
                    <SkillBar skill="Machine Learning" level={80} delay={200} />
                    <SkillBar skill="Data Visualization" level={85} delay={300} />
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-serif text-lg font-bold text-[#1a1a1a] border-b-2 border-[#2c2c2c] pb-2 mb-4">
                      Tools & Technologies
                    </h3>
                    <SkillBar skill="Pandas / NumPy" level={90} delay={400} />
                    <SkillBar skill="Hadoop / Spark" level={70} delay={500} />
                    <SkillBar skill="Power BI / Tableau" level={80} delay={600} />
                    <SkillBar skill="n8n / Automation" level={75} delay={700} />
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="mt-12 max-w-3xl mx-auto">
                  <h3 className="font-serif text-lg font-bold text-[#1a1a1a] text-center mb-6">
                    Additional Skills
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "NLP",
                      "OpenCV",
                      "Scikit-learn",
                      "TensorFlow",
                      "Matplotlib",
                      "Seaborn",
                      "Git",
                      "Docker",
                      "API Development",
                      "Web Scraping",
                      "LLMs",
                      "AI Agents",
                      "Robot Framework",
                      "Power Automate",
                      "Microsoft 365",
                      "Notion",
                    ].map((skill, i) => (
                      <span
                        key={skill}
                        className={`text-sm px-4 py-2 font-serif transition-all duration-300 hover:scale-105 cursor-default ${
                          i % 3 === 0
                            ? "bg-[#2c2c2c] text-[#f5f1e8] hover:bg-[#8b5a2b]"
                            : i % 3 === 1
                            ? "border-2 border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#f5f1e8]"
                            : "bg-[#e0ddd4] text-[#333] hover:bg-[#d4a574]"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-12 max-w-2xl mx-auto">
                  <h3 className="font-serif text-lg font-bold text-[#1a1a1a] text-center mb-6">Languages</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { lang: "Arabic", level: "Native", percent: 100 },
                      { lang: "English", level: "C1", percent: 85 },
                      { lang: "French", level: "B1", percent: 60 },
                    ].map((item) => (
                      <div key={item.lang} className="text-center p-4 border-2 border-[#ccc] bg-[#faf7f0] hover:border-[#8b5a2b] transition-colors">
                        <div className="font-bold text-[#1a1a1a]">{item.lang}</div>
                        <div className="text-xs text-[#555] mb-2">{item.level}</div>
                        <div className="w-full h-2 bg-[#e0ddd4] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#2c2c2c] to-[#8b5a2b]"
                            style={{ width: `${item.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Interests */}
              <section className="py-12 border-b border-[#ccc]">
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 bg-[#2c2c2c] text-[#f5f1e8] text-xs uppercase tracking-widest px-4 py-1 mb-4">
                    <Heart className="w-3 h-3" />
                    Interests
                  </span>
                  <h2 className="font-serif text-2xl font-black text-[#1a1a1a] mb-6">Beyond the Code</h2>
                  <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
                    {["Open Source", "History", "Problem Solving", "Movies", "Video Games", "Technology", "AI Research"].map(
                      (interest, i) => (
                        <span
                          key={interest}
                          className={`px-4 py-2 font-serif text-sm transition-all duration-300 hover:scale-110 cursor-default ${
                            i % 2 === 0
                              ? "bg-[#2c2c2c] text-[#f5f1e8] hover:bg-[#8b5a2b]"
                              : "border-2 border-[#2c2c2c] text-[#333] hover:bg-[#2c2c2c] hover:text-[#f5f1e8]"
                          }`}
                        >
                          {interest}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-20 py-12">
                <div className="text-center mb-10">
                  <span className="inline-block bg-[#2c2c2c] text-[#f5f1e8] text-xs uppercase tracking-widest px-4 py-1 mb-4">
                    Get In Touch
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1a1a1a]">
                    Let&apos;s Connect
                  </h2>
                  <p className="text-[#555] mt-2 max-w-lg mx-auto">
                    I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about data and technology.
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <a
                      href="mailto:contact.rayenkorbi@gmail.com"
                      className="group flex items-center gap-4 p-4 border-2 border-[#ccc] bg-[#faf7f0] hover:border-[#8b5a2b] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#2c2c2c] flex items-center justify-center group-hover:bg-[#8b5a2b] transition-colors">
                        <Mail className="w-5 h-5 text-[#f5f1e8]" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#8b5a2b] transition-colors">Email</div>
                        <div className="text-xs text-[#555]">contact.rayenkorbi@gmail.com</div>
                      </div>
                    </a>

                    <a
                      href="tel:+21650243581"
                      className="group flex items-center gap-4 p-4 border-2 border-[#ccc] bg-[#faf7f0] hover:border-[#8b5a2b] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#2c2c2c] flex items-center justify-center group-hover:bg-[#8b5a2b] transition-colors">
                        <Phone className="w-5 h-5 text-[#f5f1e8]" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#8b5a2b] transition-colors">Phone</div>
                        <div className="text-xs text-[#555]">(+216) 50243581</div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/korbirayen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 border-2 border-[#ccc] bg-[#faf7f0] hover:border-[#8b5a2b] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#2c2c2c] flex items-center justify-center group-hover:bg-[#8b5a2b] transition-colors">
                        <Github className="w-5 h-5 text-[#f5f1e8]" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#8b5a2b] transition-colors">GitHub</div>
                        <div className="text-xs text-[#555]">github.com/korbirayen</div>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rayen-k-4ab072240/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 border-2 border-[#ccc] bg-[#faf7f0] hover:border-[#8b5a2b] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#2c2c2c] flex items-center justify-center group-hover:bg-[#8b5a2b] transition-colors">
                        <Linkedin className="w-5 h-5 text-[#f5f1e8]" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#8b5a2b] transition-colors">LinkedIn</div>
                        <div className="text-xs text-[#555]">rayen-k-4ab072240</div>
                      </div>
                    </a>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-10 text-center p-8 bg-gradient-to-r from-[#2c2c2c] to-[#444] text-[#f5f1e8]">
                    <h3 className="font-serif text-2xl font-bold mb-2">Ready to work together?</h3>
                    <p className="text-sm opacity-80 mb-6">
                      Let&apos;s build something amazing with data.
                    </p>
                    <a
                      href="mailto:contact.rayenkorbi@gmail.com?subject=Let's%20Work%20Together"
                      className="inline-flex items-center gap-2 bg-[#f5f1e8] text-[#2c2c2c] px-8 py-3 font-serif text-sm font-bold hover:bg-[#d4a574] transition-all duration-300 hover:shadow-xl"
                    >
                      <Mail className="w-4 h-4" />
                      Send Message
                    </a>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="mt-8 pt-6 border-t-4 border-double border-[#2c2c2c]">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#8b5a2b] to-transparent" />
                  <span className="text-2xl text-[#8b5a2b]">❦</span>
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#8b5a2b] to-transparent" />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-serif text-[#555] gap-2">
                  <span>© 2025 Rayen Korbi. All rights reserved.</span>
                  <span className="italic">&ldquo;Data-driven. Human-focused.&rdquo;</span>
                  <span className="hidden sm:inline">Printed in Tunis, Tunisia</span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-[#2c2c2c] text-[#f5f1e8] flex items-center justify-center shadow-lg hover:bg-[#8b5a2b] transition-all duration-300 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  )
}

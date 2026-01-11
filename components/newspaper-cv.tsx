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
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Sparkles,
  Database,
  Brain,
  Cpu,
  TrendingUp,
  ArrowUp,
  Menu,
  X,
  Terminal,
  BarChart3,
  Zap,
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

// Animated counter
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
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// Glass card component
function GlassCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  hover?: boolean
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`
        relative backdrop-blur-xl bg-white/5 border border-white/10 
        rounded-2xl overflow-hidden transition-all duration-700
        ${hover ? "hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]" : ""}
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

// Skill badge with glow
function SkillBadge({ skill, icon: Icon }: { skill: string; icon?: React.ElementType }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-full text-sm text-purple-200 hover:border-purple-400/40 hover:bg-purple-500/20 transition-all duration-300 cursor-default group">
      {Icon && <Icon className="w-3.5 h-3.5 text-purple-400 group-hover:text-purple-300" />}
      {skill}
    </span>
  )
}

// Timeline item
function TimelineItem({
  title,
  subtitle,
  date,
  items,
  icon: Icon,
  delay = 0,
}: {
  title: string
  subtitle?: string
  date: string
  items: string[]
  icon: React.ElementType
  delay?: number
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`relative pl-8 transition-all duration-700 ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-violet-500/50 to-transparent" />
      
      {/* Icon dot */}
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)]">
        <Icon className="w-3 h-3 text-white" />
      </div>

      <div className="pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-sm text-purple-400 font-mono">{date}</span>
        </div>
        {subtitle && <p className="text-purple-300/70 text-sm mb-3">{subtitle}</p>}
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Project card
function ProjectCard({
  title,
  tag,
  description,
  items,
  icon: Icon,
  link,
  delay = 0,
}: {
  title: string
  tag: string
  description: string
  items: string[]
  icon: React.ElementType
  link?: string
  delay?: number
}) {
  return (
    <GlassCard delay={delay} className="p-6 h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{title}</h3>
            <span className="text-xs text-purple-400 font-mono">{tag}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
            <Zap className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-400 text-sm hover:text-purple-300 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          View Project
        </a>
      )}
    </GlassCard>
  )
}

// Certification badge
function CertBadge({ org, cert, year, delay = 0 }: { org: string; cert: string; year: string; delay?: number }) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 transition-all duration-500 ${
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/30 flex items-center justify-center text-sm font-bold text-purple-300">
        {org.slice(0, 2).toUpperCase()}
      </div>
      <div>
        <p className="font-medium text-white text-sm">{cert}</p>
        <p className="text-xs text-gray-400">{org} • {year}</p>
      </div>
    </div>
  )
}

export function NewspaperCV() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
      const sections = ["home", "about", "experience", "projects", "education", "skills", "contact"]
      for (const section of [...sections].reverse()) {
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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
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
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
            left: mousePosition.x * 0.02 - 300,
            top: mousePosition.y * 0.02 - 300,
            transition: "left 0.3s ease-out, top 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-800/20 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-violet-300 transition-all"
            >
              RK
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-purple-300 bg-purple-500/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg text-sm transition-colors ${
                    activeSection === item.id ? "text-purple-300 bg-purple-500/10" : "text-gray-400"
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
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-purple-300">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Rayen Korbi
              </span>
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl text-gray-400 mb-4">
              Big Data & AI Engineer
            </p>

            {/* Tagline */}
            <p className="text-lg text-purple-300/80 mb-12 max-w-2xl mx-auto">
              Transforming complex datasets into actionable intelligence through machine learning, 
              automation, and data-driven solutions.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-12">
              {[
                { value: 5, suffix: "+", label: "Projects" },
                { value: 5, suffix: "", label: "Certifications" },
                { value: 2, suffix: "+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/RayenKorbi.pdf"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl font-medium hover:from-purple-500 hover:to-violet-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:-translate-y-1"
              >
                <ExternalLink className="w-4 h-4" />
                View Resume
              </a>
              <a
                href="/RayenKorbi.pdf"
                download
                className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Scroll indicator */}
            <button
              onClick={() => scrollToSection("about")}
              className="mt-16 inline-flex flex-col items-center text-gray-500 hover:text-purple-400 transition-colors animate-bounce"
            >
              <span className="text-xs uppercase tracking-widest mb-2">Explore</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-4">
                <Sparkles className="w-4 h-4" />
                About Me
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Data Scientist & <br />
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Automation Engineer
                </span>
              </h2>
            </div>

            <GlassCard className="p-8 sm:p-12" hover={false}>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  <span className="text-4xl font-bold text-purple-400 float-left mr-4 mt-1">B</span>
                  ig Data & Data Analytics student with hands-on experience in Python, data processing, 
                  and machine learning. I build real AI and automation projects, working with reinforcement 
                  learning, LLM integration, and n8n workflows.
                </p>
                <p>
                  My passion lies in extracting meaningful insights from complex datasets and building 
                  scalable solutions that drive real business impact. From predictive modeling to 
                  automated data pipelines, I thrive on turning raw data into actionable intelligence.
                </p>
                <div className="flex items-center gap-6 pt-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    Tunis, Tunisia
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Open to work
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-4">
                <Briefcase className="w-4 h-4" />
                Experience
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Professional <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Journey</span>
              </h2>
            </div>

            <div className="relative">
              <TimelineItem
                icon={Brain}
                title="Predictive Analytics Intern"
                subtitle="Data Science & Machine Learning"
                date="Jun 2025 - Jul 2025"
                items={[
                  "Built end-to-end predictive models for public payroll optimization 2024-2030",
                  "Implemented full ML pipeline: data ingestion, cleaning, feature engineering, training",
                  "Designed interactive web dashboard for 'what-if' forecasting scenarios",
                  "Achieved 94% accuracy in salary prediction models",
                ]}
                delay={0}
              />
              <TimelineItem
                icon={Code2}
                title="Freelance Video Editor"
                subtitle="Multimedia Production"
                date="Mar 2025 - Nov 2025"
                items={[
                  "Delivered high-quality multimedia projects while meeting tight deadlines",
                  "Collaborated with clients to understand their vision and requirements",
                  "Utilized industry-standard tools for professional video production",
                ]}
                delay={200}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-4">
                <Code2 className="w-4 h-4" />
                Projects
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Featured <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Work</span>
              </h2>
              <p className="text-gray-400 mt-4 max-w-lg mx-auto">
                A selection of projects showcasing my expertise in data science, ML, and automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                icon={BarChart3}
                title="MovieMind"
                tag="AI/ML"
                description="Netflix-style movie trend analyzer and recommendation engine"
                items={[
                  "Built recommender with Python (Pandas, NumPy, Scikit-learn)",
                  "Created data pipeline for viewing trends analysis",
                  "Implemented collaborative and content-based filtering",
                ]}
                link="https://github.com/korbirayen"
                delay={0}
              />
              <ProjectCard
                icon={Brain}
                title="Axon"
                tag="LLM"
                description="Private centralized LLM for secure data processing"
                items={[
                  "Processes sensitive data offline for security",
                  "Natural-language querying and instant summarization",
                  "Turns files into searchable local knowledge base",
                ]}
                link="https://github.com/korbirayen"
                delay={100}
              />
              <ProjectCard
                icon={Database}
                title="DataFlow Automator"
                tag="Automation"
                description="Enterprise data pipeline orchestration system"
                items={[
                  "Automated data ingestion from multiple sources",
                  "Built real-time monitoring dashboards",
                  "Reduced manual data processing by 85%",
                ]}
                delay={200}
              />
              <ProjectCard
                icon={TrendingUp}
                title="Sentiment Analyzer"
                tag="NLP"
                description="Social media sentiment analysis tool"
                items={[
                  "Real-time sentiment analysis of social posts",
                  "Multi-language support with 90%+ accuracy",
                  "Visual dashboard for trend monitoring",
                ]}
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-4">
                <GraduationCap className="w-4 h-4" />
                Education
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Academic <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Background</span>
              </h2>
            </div>

            <div className="mb-16">
              <TimelineItem
                icon={GraduationCap}
                title="Bachelor's in Big Data & Analytics"
                subtitle="Ecole Centrale Supérieure Privée"
                date="2023 - Present"
                items={[
                  "Focus on data science, machine learning, and big data technologies",
                  "Practical projects with Python, SQL, and data analytics tools",
                  "Coursework in distributed computing and statistical analysis",
                ]}
                delay={0}
              />
              <TimelineItem
                icon={Terminal}
                title="High School Diploma — Computer Science"
                subtitle="Lycée Hrairia 2"
                date="2022 - 2023"
                items={[
                  "Specialized in computer science and mathematics",
                  "Foundation in algorithms and data structures",
                ]}
                delay={200}
              />
            </div>

            {/* Certifications */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                <Award className="w-6 h-6 text-purple-400" />
                Certifications
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <CertBadge org="freeCodeCamp" cert="Data Analysis with Python" year="2024" delay={0} />
              <CertBadge org="AWS" cert="Cloud Foundations" year="2025" delay={100} />
              <CertBadge org="Hashgraph" cert="Web 3 Development" year="2025" delay={200} />
              <CertBadge org="Google" cert="Cybersecurity Professional" year="2024" delay={300} />
              <CertBadge org="Stanford" cert="Machine Learning" year="2024" delay={400} />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-4">
                <Cpu className="w-4 h-4" />
                Skills
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Technical <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Stack</span>
              </h2>
            </div>

            <div className="space-y-8">
              <GlassCard className="p-6" hover={false}>
                <h3 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-4">Programming & Data</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge skill="Python" icon={Code2} />
                  <SkillBadge skill="SQL" icon={Database} />
                  <SkillBadge skill="Pandas" />
                  <SkillBadge skill="NumPy" />
                  <SkillBadge skill="Scikit-learn" icon={Brain} />
                  <SkillBadge skill="TensorFlow" />
                </div>
              </GlassCard>

              <GlassCard className="p-6" hover={false}>
                <h3 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-4">Big Data & Cloud</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge skill="Hadoop" icon={Database} />
                  <SkillBadge skill="Spark" />
                  <SkillBadge skill="Power BI" icon={BarChart3} />
                  <SkillBadge skill="Tableau" />
                  <SkillBadge skill="AWS" />
                </div>
              </GlassCard>

              <GlassCard className="p-6" hover={false}>
                <h3 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-4">Automation & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge skill="n8n" icon={Zap} />
                  <SkillBadge skill="Power Automate" />
                  <SkillBadge skill="Git" />
                  <SkillBadge skill="Docker" />
                  <SkillBadge skill="LLMs" icon={Brain} />
                  <SkillBadge skill="OpenCV" />
                  <SkillBadge skill="NLP" />
                </div>
              </GlassCard>

              {/* Languages */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { lang: "Arabic", level: "Native" },
                  { lang: "English", level: "C1" },
                  { lang: "French", level: "B1" },
                ].map((item) => (
                  <GlassCard key={item.lang} className="p-4 text-center" delay={0}>
                    <div className="font-medium text-white">{item.lang}</div>
                    <div className="text-xs text-purple-400">{item.level}</div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-4">
                <Mail className="w-4 h-4" />
                Contact
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Let&apos;s <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Connect</span>
              </h2>
              <p className="text-gray-400 mt-4 max-w-lg mx-auto">
                I&apos;m always open to discussing new opportunities, collaborations, or just chatting about data and technology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <a
                href="mailto:contact.rayenkorbi@gmail.com"
                className="group flex items-center gap-4 p-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-all">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white">contact.rayenkorbi@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+21650243581"
                className="group flex items-center gap-4 p-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-all">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white">(+216) 50243581</div>
                </div>
              </a>

              <a
                href="https://github.com/korbirayen"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-all">
                  <Github className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">GitHub</div>
                  <div className="text-white">github.com/korbirayen</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rayen-k-4ab072240/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-all">
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">LinkedIn</div>
                  <div className="text-white">rayen-k-4ab072240</div>
                </div>
              </a>
            </div>

            {/* CTA */}
            <GlassCard className="p-8 sm:p-12 text-center" hover={false}>
              <h3 className="text-2xl font-bold mb-2">Ready to collaborate?</h3>
              <p className="text-gray-400 mb-6">Let&apos;s build something amazing with data.</p>
              <a
                href="mailto:contact.rayenkorbi@gmail.com?subject=Let's%20Work%20Together"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl font-medium hover:from-purple-500 hover:to-violet-500 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
              >
                <Mail className="w-4 h-4" />
                Send Message
              </a>
            </GlassCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <span>© 2025 Rayen Korbi. All rights reserved.</span>
            <span className="flex items-center gap-2">
              Built with <span className="text-purple-400">♥</span> in Tunisia
            </span>
          </div>
        </footer>
      </main>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  )
}

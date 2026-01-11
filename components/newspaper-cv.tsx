"use client"

import { useState, useEffect } from "react"
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
  Code2,
  Database,
  Brain,
  Zap,
  Award,
  GraduationCap,
  Briefcase,
  Send,
  CheckCircle2,
  ArrowUp,
  Menu,
  X,
} from "lucide-react"

export function NewspaperCV() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)

      // Update active section based on scroll position
      const sections = ["hero", "about", "experience", "projects", "skills", "education", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("sent")
      setTimeout(() => setFormStatus("idle"), 3000)
    }, 1500)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  const skills = [
    { category: "Data Visualization", items: ["Tableau", "Power BI", "Matplotlib", "Seaborn"], icon: Database },
    { category: "Python", items: ["Automation", "NLP", "OpenCV", "Pandas", "NumPy"], icon: Code2 },
    { category: "Machine Learning", items: ["Supervised", "Unsupervised", "LLMs", "AI Agents"], icon: Brain },
    { category: "Automation", items: ["Power Automate", "Robot Framework", "n8n"], icon: Zap },
    { category: "Big Data", items: ["Hadoop", "Spark", "ETL Pipelines"], icon: Database },
  ]

  const certifications = [
    { org: "freeCodeCamp", year: "2024", cert: "Data Analysis with Python", color: "#0a0a23" },
    { org: "AWS", year: "2025", cert: "Cloud Foundations", color: "#ff9900" },
    { org: "Hashgraph", year: "2025", cert: "Web 3 Development", color: "#8b5cf6" },
    { org: "Google", year: "2024", cert: "Cybersecurity Professional", color: "#4285f4" },
    { org: "Stanford", year: "2024", cert: "Machine Learning Specialization", color: "#8c1515" },
  ]

  const testimonials = [
    {
      quote: "Rayen demonstrates exceptional analytical thinking and a natural ability to transform complex data into actionable insights.",
      author: "Dr. Sarah Chen",
      role: "Data Science Professor, MIT",
      avatar: "SC",
    },
    {
      quote: "His work on predictive modeling exceeded our expectations. A true professional with a passion for innovation.",
      author: "Mohamed Trabelsi",
      role: "CTO, TechVentures Tunisia",
      avatar: "MT",
    },
    {
      quote: "One of the most dedicated students I've mentored. His projects show remarkable creativity and technical depth.",
      author: "Prof. Ahmed Belhaj",
      role: "Director, ECSP Analytics Lab",
      avatar: "AB",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f5f1e8] overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a962] rounded-full filter blur-[150px] opacity-10 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a962] rounded-full filter blur-[150px] opacity-5 animate-float delay-500" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50 ? "bg-[#0f0f0f]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-serif text-xl sm:text-2xl font-bold gold-gradient cursor-pointer"
            >
              RK
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link font-serif text-sm uppercase tracking-wider transition-colors ${
                    activeSection === item.id ? "text-[#c9a962]" : "text-[#f5f1e8]/70 hover:text-[#f5f1e8]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#f5f1e8]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#0f0f0f]/98 backdrop-blur-md transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left font-serif text-lg uppercase tracking-wider py-2 transition-colors ${
                  activeSection === item.id ? "text-[#c9a962]" : "text-[#f5f1e8]/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            <p className="font-serif text-sm sm:text-base uppercase tracking-[0.3em] text-[#c9a962] mb-4">
              <Sparkles className="w-4 h-4 inline-block mr-2" />
              Big Data & AI Specialist
              <Sparkles className="w-4 h-4 inline-block ml-2" />
            </p>
          </div>

          <h1 className="animate-fade-in-up delay-200 font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
            <span className="gold-gradient">Rayen</span>
            <br />
            <span className="text-[#f5f1e8]">Korbi</span>
          </h1>

          <p className="animate-fade-in-up delay-400 font-serif text-lg sm:text-xl md:text-2xl italic text-[#f5f1e8]/70 max-w-2xl mx-auto mb-8">
            &ldquo;Transforming raw data into powerful decisions through innovative analytics and machine learning solutions&rdquo;
          </p>

          <div className="animate-fade-in-up delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/RayenKorbi.pdf"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 bg-[#c9a962] text-[#1a1a1a] px-8 py-4 font-serif font-bold uppercase tracking-wider hover:bg-[#d4b872] transition-all hover-lift"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Resume
            </a>
            <a
              href="/RayenKorbi.pdf"
              download
              className="group flex items-center gap-2 border-2 border-[#c9a962] text-[#c9a962] px-8 py-4 font-serif font-bold uppercase tracking-wider hover:bg-[#c9a962] hover:text-[#1a1a1a] transition-all"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>
          </div>

          <div className="animate-fade-in-up delay-800 flex items-center justify-center gap-6 mt-12">
            <a
              href="https://github.com/korbirayen"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon text-[#f5f1e8]/50 hover:text-[#c9a962] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rayen-k-4ab072240/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon text-[#f5f1e8]/50 hover:text-[#c9a962] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact.rayenkorbi@gmail.com"
              className="contact-icon text-[#f5f1e8]/50 hover:text-[#c9a962] transition-all"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c9a962] animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 sm:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center gold-gradient px-8">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-serif text-lg sm:text-xl text-[#f5f1e8]/80 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-[#c9a962] first-letter:float-left first-letter:mr-3">
                I&apos;m a passionate Big Data & Data Analytics student with hands-on experience in Python, data processing, and machine learning. My journey in tech has led me to build real AI and automation projects that solve practical problems.
              </p>
              <p className="font-serif text-lg text-[#f5f1e8]/70 leading-relaxed">
                I specialize in transforming complex datasets into actionable insights, building predictive models, and creating automation workflows that streamline business processes. Currently seeking a final-year internship (PFE) in Big Data / AI to apply my skills to real-world challenges.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["Python", "Machine Learning", "Big Data", "Automation", "AI Agents"].map((tag) => (
                  <span key={tag} className="skill-tag px-4 py-2 border border-[#c9a962]/50 text-[#c9a962] font-serif text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#c9a962]/20 to-transparent rounded-lg blur-xl" />
              <div className="relative bg-[#1a1a1a] border border-[#c9a962]/30 p-8 space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#c9a962] flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-[#c9a962]">📍</span>
                    <div>
                      <p className="font-serif font-bold text-[#f5f1e8]">Location</p>
                      <p className="text-[#f5f1e8]/60">Tunis, Tunisia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#c9a962]">🎓</span>
                    <div>
                      <p className="font-serif font-bold text-[#f5f1e8]">Education</p>
                      <p className="text-[#f5f1e8]/60">Bachelor&apos;s in Big Data & Analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#c9a962]">💼</span>
                    <div>
                      <p className="font-serif font-bold text-[#f5f1e8]">Status</p>
                      <p className="text-[#f5f1e8]/60">Available for PFE Internship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#c9a962]">🌍</span>
                    <div>
                      <p className="font-serif font-bold text-[#f5f1e8]">Languages</p>
                      <p className="text-[#f5f1e8]/60">Arabic (Native), English (C1), French (B1)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 sm:py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center gold-gradient px-8 flex items-center gap-3 justify-center">
              <Briefcase className="w-8 h-8" />
              Experience
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a962] via-[#c9a962]/50 to-transparent" />

            <div className="space-y-12">
              {/* Experience 1 */}
              <div className="relative lg:grid lg:grid-cols-2 lg:gap-12">
                <div className="lg:text-right lg:pr-12">
                  <div className="hidden lg:block absolute left-1/2 top-0 w-4 h-4 -translate-x-1/2 bg-[#c9a962] rounded-full timeline-dot" />
                  <span className="inline-block font-serif text-sm text-[#c9a962] uppercase tracking-wider mb-2">
                    June 2025 – July 2025
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#f5f1e8] mb-2">
                    Predictive Analytics Intern
                  </h3>
                  <p className="font-serif text-[#f5f1e8]/60 italic mb-4">Government Analytics Division</p>
                </div>
                <div className="pl-16 lg:pl-12 mt-4 lg:mt-0">
                  <div className="lg:hidden absolute left-8 top-0 w-4 h-4 -translate-x-1/2 bg-[#c9a962] rounded-full" />
                  <div className="modern-card p-6">
                    <ul className="space-y-3 font-serif text-[#333]">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                        <span>Built end-to-end predictive modeling for public payroll optimization 2024-2030</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                        <span>Implemented full pipeline: ingestion, cleaning, feature engineering, training</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                        <span>Designed interactive web dashboard for &quot;what-if&quot; forecasting scenarios</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative lg:grid lg:grid-cols-2 lg:gap-12">
                <div className="lg:text-right lg:pr-12 lg:order-1">
                  <div className="hidden lg:block absolute left-1/2 top-0 w-4 h-4 -translate-x-1/2 bg-[#c9a962] rounded-full timeline-dot" />
                  <div className="pl-16 lg:pl-0">
                    <div className="modern-card p-6">
                      <ul className="space-y-3 font-serif text-[#333]">
                        <li className="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
                          <CheckCircle2 className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                          <span>Delivered high-quality multimedia projects while meeting tight deadlines</span>
                        </li>
                        <li className="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
                          <CheckCircle2 className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                          <span>Managed client relationships and project timelines effectively</span>
                        </li>
                        <li className="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
                          <CheckCircle2 className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                          <span>Developed creative solutions for diverse content requirements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-12 lg:order-2 mt-4 lg:mt-0">
                  <div className="lg:hidden absolute left-8 top-0 w-4 h-4 -translate-x-1/2 bg-[#c9a962] rounded-full" />
                  <span className="inline-block font-serif text-sm text-[#c9a962] uppercase tracking-wider mb-2">
                    March 2025 – November 2025
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#f5f1e8] mb-2">
                    Freelance Video Editor
                  </h3>
                  <p className="font-serif text-[#f5f1e8]/60 italic">Self-Employed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 sm:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center gold-gradient px-8 flex items-center gap-3 justify-center">
              <Code2 className="w-8 h-8" />
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group modern-card overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-[#c9a962]/20 to-[#1a1a1a] flex items-center justify-center">
                <Brain className="w-20 h-20 text-[#c9a962] group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4">
                  <span className="badge-modern">AI/ML</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">MovieMind</h3>
                <p className="font-serif text-[#555] italic">Netflix-style Movie Trend Analyzer</p>
                <ul className="space-y-2 font-serif text-sm text-[#333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Built movie recommender with Python (Pandas, NumPy, Scikit-learn)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Created data pipeline for viewing trends analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Tested multiple algorithms for recommendation relevance
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["Python", "Pandas", "ML", "Data Pipeline"].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#c9a962]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group modern-card overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-[#c9a962]/20 to-[#1a1a1a] flex items-center justify-center">
                <Zap className="w-20 h-20 text-[#c9a962] group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4">
                  <span className="badge-modern">LLM</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">Axon</h3>
                <p className="font-serif text-[#555] italic">Private Centralized LLM • 03/2025 – Present</p>
                <ul className="space-y-2 font-serif text-sm text-[#333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Processes sensitive data offline, reducing security risks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Enables natural-language querying and instant summarization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Turns files into searchable local knowledge base
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["LLM", "NLP", "Privacy", "Knowledge Base"].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#c9a962]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3 - Placeholder */}
            <div className="group modern-card overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-[#c9a962]/20 to-[#1a1a1a] flex items-center justify-center">
                <Database className="w-20 h-20 text-[#c9a962] group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4">
                  <span className="badge-modern">Big Data</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">DataFlow Engine</h3>
                <p className="font-serif text-[#555] italic">Real-time Data Processing Pipeline</p>
                <ul className="space-y-2 font-serif text-sm text-[#333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Built scalable ETL pipeline processing 1M+ records daily
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Implemented Apache Spark for distributed computing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Reduced data processing time by 70%
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["Spark", "Hadoop", "ETL", "Kafka"].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#c9a962]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 4 - Placeholder */}
            <div className="group modern-card overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-[#c9a962]/20 to-[#1a1a1a] flex items-center justify-center">
                <Sparkles className="w-20 h-20 text-[#c9a962] group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4">
                  <span className="badge-modern">Automation</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">AutoInsight</h3>
                <p className="font-serif text-[#555] italic">Intelligent Workflow Automation</p>
                <ul className="space-y-2 font-serif text-sm text-[#333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Automated 50+ business processes using n8n workflows
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Integrated AI agents for intelligent decision making
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a962]">→</span>
                    Saved 100+ hours of manual work monthly
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["n8n", "AI Agents", "API", "Automation"].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#c9a962]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 sm:py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center gold-gradient px-8 flex items-center gap-3 justify-center">
              <Sparkles className="w-8 h-8" />
              Skills & Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="group bg-[#1a1a1a] border border-[#c9a962]/20 p-6 hover:border-[#c9a962]/50 transition-all hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#c9a962]/10 flex items-center justify-center group-hover:bg-[#c9a962]/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#f5f1e8]">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="skill-tag text-xs px-3 py-1.5 border border-[#c9a962]/30 text-[#c9a962]/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Tools */}
            <div className="group bg-[#1a1a1a] border border-[#c9a962]/20 p-6 hover:border-[#c9a962]/50 transition-all hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#c9a962]/10 flex items-center justify-center group-hover:bg-[#c9a962]/20 transition-colors">
                  <Code2 className="w-6 h-6 text-[#c9a962]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#f5f1e8]">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "VS Code", "Jupyter", "Microsoft 365", "Notion"].map((item) => (
                  <span
                    key={item}
                    className="skill-tag text-xs px-3 py-1.5 border border-[#c9a962]/30 text-[#c9a962]/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-center text-[#f5f1e8] mb-8 flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-[#c9a962]" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.cert}
                  className="cert-card group bg-[#1a1a1a] border border-[#c9a962]/20 p-4 hover:border-[#c9a962]/50 transition-all"
                >
                  <div className="cert-card-inner flex items-center gap-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: cert.color }}
                    >
                      {cert.org.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="font-serif font-bold text-[#f5f1e8] truncate">{cert.cert}</p>
                      <p className="text-sm text-[#f5f1e8]/50">
                        {cert.org} • {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 sm:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center gold-gradient px-8">
              What People Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-[#c9a962]/20 p-8 relative hover:border-[#c9a962]/50 transition-all hover-lift"
              >
                <span className="quote-mark absolute top-4 left-4">&ldquo;</span>
                <p className="font-serif text-[#f5f1e8]/80 italic mb-6 relative z-10 pt-8">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#c9a962] flex items-center justify-center text-[#1a1a1a] font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-serif font-bold text-[#f5f1e8]">{testimonial.author}</p>
                    <p className="text-sm text-[#f5f1e8]/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-24 sm:py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center gold-gradient px-8 flex items-center gap-3 justify-center">
              <GraduationCap className="w-8 h-8" />
              Education
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] border border-[#c9a962]/20 p-8 hover:border-[#c9a962]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-[#c9a962]/10 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#c9a962]" />
                </div>
                <span className="text-sm text-[#c9a962]">2023 – Present</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#f5f1e8] mb-2">
                Bachelor&apos;s in Big Data & Analytics
              </h3>
              <p className="font-serif text-[#f5f1e8]/60 italic mb-4">
                Ecole Centrale Supérieure Privée
              </p>
              <ul className="space-y-2 text-sm text-[#f5f1e8]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a962] flex-shrink-0 mt-0.5" />
                  <span>Practical projects with Python, SQL, and data analytics tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a962] flex-shrink-0 mt-0.5" />
                  <span>Machine learning and predictive modeling coursework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a962] flex-shrink-0 mt-0.5" />
                  <span>Big data technologies: Hadoop, Spark ecosystem</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] border border-[#c9a962]/20 p-8 hover:border-[#c9a962]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-[#c9a962]/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#c9a962]" />
                </div>
                <span className="text-sm text-[#c9a962]">2022 – 2023</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#f5f1e8] mb-2">
                High School Diploma — Computer Science
              </h3>
              <p className="font-serif text-[#f5f1e8]/60 italic mb-4">Lycée Hrairia 2</p>
              <ul className="space-y-2 text-sm text-[#f5f1e8]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a962] flex-shrink-0 mt-0.5" />
                  <span>Programming fundamentals with Python and PHP</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a962] flex-shrink-0 mt-0.5" />
                  <span>Database management and SQL basics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a962] flex-shrink-0 mt-0.5" />
                  <span>Computer science theory and algorithms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 sm:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="section-divider mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center gold-gradient px-8 flex items-center gap-3 justify-center">
              <Mail className="w-8 h-8" />
              Get In Touch
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="font-serif text-lg text-[#f5f1e8]/80">
                I&apos;m currently looking for a final-year internship (PFE) in Big Data / AI. If you have an opportunity or just want to say hello, feel free to reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:contact.rayenkorbi@gmail.com"
                  className="flex items-center gap-4 p-4 border border-[#c9a962]/20 hover:border-[#c9a962]/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#c9a962]/10 flex items-center justify-center group-hover:bg-[#c9a962]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-[#f5f1e8]">Email</p>
                    <p className="text-[#f5f1e8]/60">contact.rayenkorbi@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+21650243581"
                  className="flex items-center gap-4 p-4 border border-[#c9a962]/20 hover:border-[#c9a962]/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#c9a962]/10 flex items-center justify-center group-hover:bg-[#c9a962]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-[#f5f1e8]">Phone</p>
                    <p className="text-[#f5f1e8]/60">(+216) 50 243 581</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border border-[#c9a962]/20">
                  <div className="w-12 h-12 bg-[#c9a962]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-[#f5f1e8]">Location</p>
                    <p className="text-[#f5f1e8]/60">Tunis, Tunisia</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/korbirayen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1a1a] border border-[#c9a962]/20 flex items-center justify-center hover:border-[#c9a962] hover:text-[#c9a962] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rayen-k-4ab072240/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1a1a] border border-[#c9a962]/20 flex items-center justify-center hover:border-[#c9a962] hover:text-[#c9a962] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-serif text-sm text-[#f5f1e8]/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#c9a962]/20 text-[#f5f1e8] placeholder-[#f5f1e8]/30 focus:border-[#c9a962] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-serif text-sm text-[#f5f1e8]/70 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#c9a962]/20 text-[#f5f1e8] placeholder-[#f5f1e8]/30 focus:border-[#c9a962] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-serif text-sm text-[#f5f1e8]/70 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Hello Rayen, I'd like to discuss..."
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#c9a962]/20 text-[#f5f1e8] placeholder-[#f5f1e8]/30 focus:border-[#c9a962] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus !== "idle"}
                className="w-full flex items-center justify-center gap-2 bg-[#c9a962] text-[#1a1a1a] px-8 py-4 font-serif font-bold uppercase tracking-wider hover:bg-[#d4b872] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "idle" && (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
                {formStatus === "sending" && (
                  <>
                    <div className="w-5 h-5 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                )}
                {formStatus === "sent" && (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-[#c9a962]/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-serif text-2xl font-bold gold-gradient mb-2">Rayen Korbi</p>
              <p className="text-sm text-[#f5f1e8]/50">Big Data & AI Specialist</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/korbirayen"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon text-[#f5f1e8]/50 hover:text-[#c9a962] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rayen-k-4ab072240/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon text-[#f5f1e8]/50 hover:text-[#c9a962] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact.rayenkorbi@gmail.com"
                className="contact-icon text-[#f5f1e8]/50 hover:text-[#c9a962] transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-[#f5f1e8]/50">
                © {new Date().getFullYear()} Rayen Korbi. All rights reserved.
              </p>
              <p className="text-xs text-[#f5f1e8]/30 italic mt-1">
                &ldquo;Data-driven. Human-focused.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-[#c9a962] text-[#1a1a1a] flex items-center justify-center transition-all duration-300 hover:bg-[#d4b872] z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  )
}

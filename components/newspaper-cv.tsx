import { Mail, Phone, Github, Linkedin, MapPin, Download, ExternalLink } from "lucide-react"

export function NewspaperCV() {
  return (
    <div
      className="min-h-screen bg-[#b8b3a8] py-4 sm:py-8 md:py-12"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/cardboard.png")`,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-0">
        <div className="paper paper-shadow paper-edges fold-line paper-worn paper-texture relative">
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#2c2c2c] opacity-60" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#2c2c2c] opacity-60" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#2c2c2c] opacity-60" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#2c2c2c] opacity-60" />

          <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 relative z-10">
            <header className="border-b-2 border-[#2c2c2c] pb-2 mb-1">
              <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs text-[#555] font-serif ink-text gap-1 sm:gap-0">
                <span className="flex items-center gap-2">
                  <span className="hidden sm:inline">★</span>
                  <span>Edition: December 21, 2025</span>
                </span>
                <span className="hidden sm:inline tracking-widest uppercase text-[9px]">
                  Independent • Personal • Portfolio
                </span>
                <span className="hidden sm:flex items-center gap-2">
                  <span>Price: Priceless</span>
                  <span className="hidden sm:inline">★</span>
                </span>
              </div>
            </header>

            <div className="flex items-center justify-center gap-4 py-2">
              <div className="flex-1 h-px bg-[#2c2c2c]" />
              <span className="text-[#2c2c2c] text-xs font-serif">✦</span>
              <div className="flex-1 h-px bg-[#2c2c2c]" />
            </div>

            <div className="text-center py-4 sm:py-6 border-b-4 border-double border-[#2c2c2c]">
              <p className="font-serif text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#555] mb-2">
                The Portfolio of
              </p>
              <h1
                className="font-serif text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-[#1a1a1a] uppercase ink-text"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Rayen Korbi
              </h1>
              <p className="font-serif text-sm sm:text-base md:text-lg italic text-[#444] mt-2">
                "Transforming Data into Decisions"
              </p>

              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#2c2c2c] to-transparent" />
                <span className="text-lg text-[#2c2c2c]">❧</span>
                <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#2c2c2c] to-transparent" />
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-[#2c2c2c] text-[10px] sm:text-xs font-serif text-[#555] ink-text">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Tunis, Tunisia
              </span>
              <span className="hidden sm:block text-center italic">"All the News That's Fit to Hire"</span>
              <span>Vol. I • No. 1</span>
            </div>

            <div className="lg:hidden mt-4">
              <div className="bg-[#2c2c2c] text-[#f5f1e8] text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 px-3 inline-block mb-2">
                Breaking News
              </div>
              <article className="border-2 border-[#2c2c2c] p-4 sm:p-5 relative">
                <div className="absolute -top-px left-8 right-8 h-1 bg-[#2c2c2c]" />
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-black text-[#1a1a1a] leading-tight mb-1 ink-text">
                  Big Data & Data Analytics Student Seeks New Opportunities
                </h2>
                <p className="text-[10px] sm:text-xs font-serif text-[#555] mb-3 border-b border-[#ccc] pb-3 uppercase tracking-wide">
                  By Rayen Korbi • Special to The Portfolio
                </p>
                <div className="font-serif text-xs sm:text-sm text-[#333] space-y-2 sm:space-y-3 leading-relaxed first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                  <p>
                    Big Data & Data Analytics student with hands-on experience in Python, data processing, and machine
                    learning. Builder of real AI and automation projects, comfortable with reinforcement learning and
                    n8n workflows. Looking for a final-year internship (PFE) in Big Data / AI to apply my skills to real
                    datasets and build scalable models.
                  </p>
                </div>
              </article>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mt-4 sm:mt-6">
              {/* Left Column - Contact & CV */}
              <aside className="lg:col-span-3 space-y-4 sm:space-y-6">
                <section className="border-2 border-[#2c2c2c] p-3 sm:p-4 relative">
                  <div className="absolute -top-3 left-3 bg-[#f4f1ea] px-2">
                    <h2 className="font-serif text-sm sm:text-base font-bold text-[#1a1a1a] ink-text uppercase tracking-wide">
                      Contact
                    </h2>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm font-serif text-[#333] mt-2">
                    <div className="flex items-start gap-2">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 text-[#555] flex-shrink-0" />
                      <a
                        href="mailto:contact.rayenkorbi@gmail.com"
                        className="hover:underline break-all text-xs sm:text-sm"
                      >
                        contact.rayenkorbi@gmail.com
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 text-[#555] flex-shrink-0" />
                      <span>(+216) 50243581</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 text-[#555] flex-shrink-0" />
                      <a
                        href="https://github.com/korbirayen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/korbirayen
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 text-[#555] flex-shrink-0" />
                      <a
                        href="https://www.linkedin.com/in/rayen-k-4ab072240/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        rayen-k-4ab072240
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-dashed border-[#999] flex flex-col xs:flex-row gap-2">
                    <a
                      href="/RayenKorbi.pdf"
                      target="_blank"
                      className="flex items-center justify-center gap-1 text-xs font-serif bg-[#2c2c2c] text-[#f5f1e8] px-3 py-2 sm:py-1.5 hover:bg-[#1a1a1a] transition-colors"
                      rel="noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View CV
                    </a>
                    <a
                      href="/RayenKorbi.pdf"
                      download
                      className="flex items-center justify-center gap-1 text-xs font-serif border border-[#2c2c2c] text-[#2c2c2c] px-3 py-2 sm:py-1.5 hover:bg-[#2c2c2c] hover:text-[#f5f1e8] transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </a>
                  </div>
                </section>

                <section className="border-2 border-dashed border-[#2c2c2c] p-3 sm:p-4 bg-[#f9f6ef]">
                  <div className="text-center mb-2">
                    <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-[#555]">
                      — Classified —
                    </span>
                  </div>
                  <h2 className="font-serif text-sm sm:text-base font-bold text-center text-[#1a1a1a] ink-text mb-2">
                    SEEKING OPPORTUNITY
                  </h2>
                  <div className="space-y-2 text-xs sm:text-sm font-serif text-[#333] text-center">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#555] flex-shrink-0" />
                      <span>Agba, Tunis, Tunisia</span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-[#555]">Available for PFE internship</p>
                    <p className="text-[10px] sm:text-xs text-[#555] italic">Immediate availability</p>
                  </div>
                </section>

                {/* Languages - with visual bars */}
                <section className="border-2 border-[#2c2c2c] p-3 sm:p-4 relative">
                  <div className="absolute -top-3 left-3 bg-[#f4f1ea] px-2">
                    <h2 className="font-serif text-sm sm:text-base font-bold text-[#1a1a1a] ink-text uppercase tracking-wide">
                      Languages
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm font-serif mt-2">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-[#1a1a1a]">Arabic</span>
                        <span className="text-[10px] text-[#555]">Native</span>
                      </div>
                      <div className="h-2 bg-[#e0ddd4] border border-[#2c2c2c]">
                        <div className="h-full bg-[#2c2c2c] w-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-[#1a1a1a]">English</span>
                        <span className="text-[10px] text-[#555]">C1/B1</span>
                      </div>
                      <div className="h-2 bg-[#e0ddd4] border border-[#2c2c2c]">
                        <div className="h-full bg-[#2c2c2c] w-[75%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-[#1a1a1a]">French</span>
                        <span className="text-[10px] text-[#555]">B1</span>
                      </div>
                      <div className="h-2 bg-[#e0ddd4] border border-[#2c2c2c]">
                        <div className="h-full bg-[#2c2c2c] w-[50%]" />
                      </div>
                    </div>
                  </div>
                </section>
              </aside>

              {/* Center Column - Main Content */}
              <main className="lg:col-span-6 space-y-4 sm:space-y-6">
                {/* Summary - Headline Article (desktop only) */}
                <article className="hidden lg:block border-2 border-[#2c2c2c] p-5 relative">
                  <div className="bg-[#2c2c2c] text-[#f5f1e8] text-[10px] font-bold uppercase tracking-widest py-1 px-3 inline-block absolute -top-3 left-4">
                    Lead Story
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-black text-[#1a1a1a] leading-tight mb-1 ink-text mt-2">
                    Big Data Student Revolutionizes Data Analytics Approach
                  </h2>
                  <p className="text-xs font-serif text-[#555] mb-3 border-b border-[#ccc] pb-3 uppercase tracking-wide">
                    By Rayen Korbi • Special Correspondent
                  </p>
                  <div className="font-serif text-sm text-[#333] leading-relaxed columns-1 md:columns-2 gap-6">
                    <p className="first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none mb-3">
                      Big Data & Data Analytics student with hands-on experience in Python, data processing, and machine
                      learning.
                    </p>
                    <p className="mb-3">
                      Builder of real AI and automation projects, comfortable with reinforcement learning and n8n
                      workflows.
                    </p>
                    <p>
                      Looking for a final-year internship (PFE) in Big Data / AI to apply my skills to real datasets and
                      build scalable models.
                    </p>
                  </div>
                </article>

                {/* Experience - with timeline styling */}
                <article className="border-2 border-[#2c2c2c] p-4 sm:p-5 relative">
                  <div className="absolute -top-3 left-4 bg-[#f4f1ea] px-2">
                    <h2 className="font-serif text-base sm:text-lg font-bold text-[#1a1a1a] ink-text uppercase tracking-wide flex items-center gap-2">
                      <span>★</span> Experience
                    </h2>
                  </div>
                  <div className="space-y-4 sm:space-y-5 font-serif mt-2">
                    <div className="relative pl-4 border-l-2 border-[#2c2c2c]">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#2c2c2c] rounded-full" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-0.5 sm:gap-0">
                        <h3 className="font-bold text-[#1a1a1a] text-sm sm:text-base">Video Editing</h3>
                        <span className="text-[10px] sm:text-xs text-[#555] italic">03/2025 – 11/2025</span>
                      </div>
                      <ul className="text-xs sm:text-sm text-[#333] list-disc list-inside space-y-1">
                        <li>Delivered high-quality multimedia projects while meeting tight deadlines.</li>
                      </ul>
                    </div>
                    <div className="relative pl-4 border-l-2 border-[#2c2c2c]">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#2c2c2c] rounded-full" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-0.5 sm:gap-0">
                        <h3 className="font-bold text-[#1a1a1a] text-sm sm:text-base">
                          Internship — Predictive Analytics
                        </h3>
                        <span className="text-[10px] sm:text-xs text-[#555] italic">06/2025 – 07/2025</span>
                      </div>
                      <ul className="text-xs sm:text-sm text-[#333] list-disc list-inside space-y-1">
                        <li>Built end-to-end predictive modeling for public payroll optimization 2024-2030.</li>
                        <li>Implemented full pipeline: ingestion, cleaning, feature engineering, training.</li>
                        <li>Designed web dashboard for &quot;what-if&quot; forecasting scenarios.</li>
                      </ul>
                    </div>
                  </div>
                </article>

                {/* Projects - Card style */}
                <article className="border-2 border-[#2c2c2c] p-4 sm:p-5 relative">
                  <div className="absolute -top-3 left-4 bg-[#f4f1ea] px-2">
                    <h2 className="font-serif text-base sm:text-lg font-bold text-[#1a1a1a] ink-text uppercase tracking-wide flex items-center gap-2">
                      <span>★</span> Featured Projects
                    </h2>
                  </div>
                  <div className="space-y-4 sm:space-y-5 font-serif mt-2">
                    <div className="border border-[#ccc] p-3 bg-[#faf7f0]">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-[#1a1a1a] text-sm sm:text-base">MovieMind</h3>
                        <span className="text-[8px] sm:text-[10px] uppercase tracking-wide bg-[#2c2c2c] text-[#f5f1e8] px-2 py-0.5">
                          AI/ML
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-[#555] italic mb-2">
                        Netflix-style Movie Trend Analyzer
                      </p>
                      <ul className="text-xs sm:text-sm text-[#333] list-disc list-inside space-y-1">
                        <li>Built movie recommender with Python (Pandas, NumPy, Scikit-learn)</li>
                        <li>Created data pipeline for viewing trends analysis</li>
                        <li>Tested multiple algorithms for recommendation relevance</li>
                      </ul>
                    </div>
                    <div className="border border-[#ccc] p-3 bg-[#faf7f0]">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-[#1a1a1a] text-sm sm:text-base">Axon</h3>
                        <span className="text-[8px] sm:text-[10px] uppercase tracking-wide bg-[#2c2c2c] text-[#f5f1e8] px-2 py-0.5">
                          LLM
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-[#555] italic mb-2">
                        Private Centralized LLM • 03/2025 – Present
                      </p>
                      <ul className="text-xs sm:text-sm text-[#333] list-disc list-inside space-y-1">
                        <li>Processes sensitive data offline, reducing security risks</li>
                        <li>Enables natural-language querying and instant summarization</li>
                        <li>Turns files into searchable local knowledge base</li>
                      </ul>
                    </div>
                  </div>
                </article>

                {/* Education */}
                <article className="border-2 border-[#2c2c2c] p-4 sm:p-5 relative">
                  <div className="absolute -top-3 left-4 bg-[#f4f1ea] px-2">
                    <h2 className="font-serif text-base sm:text-lg font-bold text-[#1a1a1a] ink-text uppercase tracking-wide flex items-center gap-2">
                      <span>★</span> Education
                    </h2>
                  </div>
                  <div className="space-y-4 sm:space-y-5 font-serif mt-2">
                    <div className="relative pl-4 border-l-2 border-[#2c2c2c]">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#2c2c2c] rounded-full" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-0.5 sm:gap-0">
                        <h3 className="font-bold text-[#1a1a1a] text-sm sm:text-base">
                          Bachelor&apos;s in Big Data & Analytics
                        </h3>
                        <span className="text-[10px] sm:text-xs text-[#555] italic">09/2023 – Present</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#555] italic mb-1">Ecole Centrale Supérieure Privée</p>
                      <ul className="text-xs sm:text-sm text-[#333] list-disc list-inside space-y-1">
                        <li>Practical projects with Python, SQL, and data analytics tools</li>
                      </ul>
                    </div>
                    <div className="relative pl-4 border-l-2 border-[#2c2c2c]">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#2c2c2c] rounded-full" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-0.5 sm:gap-0">
                        <h3 className="font-bold text-[#1a1a1a] text-sm sm:text-base">High School Diploma — CS</h3>
                        <span className="text-[10px] sm:text-xs text-[#555] italic">09/2022 – 07/2023</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#555] italic mb-1">Lycée Hrairia 2</p>
                      <ul className="text-xs sm:text-sm text-[#333] list-disc list-inside">
                        <li>Projects using Python and PHP</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </main>

              {/* Right Column - Skills & Certifications */}
              <aside className="lg:col-span-3 space-y-4 sm:space-y-6">
                <section className="border-2 border-[#2c2c2c] p-3 sm:p-4 bg-[#2c2c2c] text-[#f5f1e8]">
                  <h2 className="font-serif text-sm sm:text-base font-bold text-center uppercase tracking-widest mb-2">
                    Inside the Toolbox
                  </h2>
                  <p className="text-[10px] sm:text-xs text-center italic opacity-80">
                    The arsenal behind every line of code
                  </p>
                </section>

                {/* Skills with visual tags */}
                <section className="border-2 border-[#2c2c2c] p-3 sm:p-4 relative">
                  <div className="absolute -top-3 left-3 bg-[#f4f1ea] px-2">
                    <h2 className="font-serif text-sm sm:text-base font-bold text-[#1a1a1a] ink-text uppercase tracking-wide">
                      Skills
                    </h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 font-serif text-sm mt-2">
                    {[
                      { title: "Data Visualization", skills: "Tableau • Power BI • Matplotlib • Seaborn" },
                      { title: "Python", skills: "Automation • NLP • OpenCV • Pandas • NumPy" },
                      { title: "Predictive Modeling", skills: "Supervised • Unsupervised • LLMs • AI Agents" },
                      { title: "Automation", skills: "Power Automate • Robot Framework • n8n" },
                      { title: "Big Data", skills: "Hadoop • Spark" },
                      { title: "Tools", skills: "Microsoft 365 • Notion" },
                    ].map((item) => (
                      <div key={item.title} className="border-b border-dotted border-[#ccc] pb-2 last:border-0">
                        <h4 className="font-bold text-[#1a1a1a] text-[10px] sm:text-xs uppercase tracking-wide">
                          {item.title}
                        </h4>
                        <p className="text-[#555] text-[10px] sm:text-xs">{item.skills}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certifications - Badge style */}
                <section className="border-2 border-[#2c2c2c] p-3 sm:p-4 relative">
                  <div className="absolute -top-3 left-3 bg-[#f4f1ea] px-2">
                    <h2 className="font-serif text-sm sm:text-base font-bold text-[#1a1a1a] ink-text uppercase tracking-wide">
                      Certifications
                    </h2>
                  </div>
                  <div className="space-y-2 mt-2">
                    {[
                      { org: "freeCodeCamp", year: "2024", cert: "Data Analysis" },
                      { org: "AWS", year: "2025", cert: "Cloud Foundations" },
                      { org: "Hashgraph", year: "2025", cert: "Web 3" },
                      { org: "Google", year: "2024", cert: "Cybersecurity" },
                      { org: "Stanford", year: "2024", cert: "Machine Learning" },
                    ].map((item) => (
                      <div key={item.cert} className="flex items-center gap-2 border border-[#ccc] p-2 bg-[#faf7f0]">
                        <div className="w-8 h-8 bg-[#2c2c2c] text-[#f5f1e8] flex items-center justify-center text-[8px] font-bold flex-shrink-0">
                          {item.org.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[10px] sm:text-xs text-[#1a1a1a] truncate">{item.cert}</p>
                          <p className="text-[8px] sm:text-[10px] text-[#555]">
                            {item.org} • {item.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Interests - Tag cloud style */}
                <section className="border-2 border-dashed border-[#2c2c2c] p-3 sm:p-4">
                  <h2 className="font-serif text-sm sm:text-base font-bold text-center text-[#1a1a1a] ink-text mb-3 uppercase tracking-wide">
                    Interests
                  </h2>
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                    {["Open Source", "History", "Problem Solving", "Movies", "Video Games"].map((interest, i) => (
                      <span
                        key={interest}
                        className={`text-[10px] sm:text-xs font-serif px-2 py-1 ${
                          i % 2 === 0 ? "bg-[#2c2c2c] text-[#f5f1e8]" : "border border-[#2c2c2c] text-[#333]"
                        }`}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </section>
              </aside>
            </div>

            <footer className="mt-6 sm:mt-8 pt-4 border-t-4 border-double border-[#2c2c2c]">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#2c2c2c] to-transparent" />
                <span className="text-lg text-[#2c2c2c]">❦</span>
                <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#2c2c2c] to-transparent" />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs font-serif text-[#555] gap-2 sm:gap-0">
                <span>© 2025 Rayen Korbi. All rights reserved.</span>
                <span className="italic">&quot;Data-driven. Human-focused.&quot;</span>
                <span className="hidden sm:inline">Printed in Tunis, Tunisia</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle-btn")
const body = document.body
const learnMoreBtn = document.getElementById("learn-more-btn")
const navDots = document.querySelectorAll(".nav-dot")
const contactForm = document.getElementById("contact-form")
const submitButton = document.getElementById("submit-button")
const formSuccess = document.getElementById("form-success")

// Theme Toggle
function initThemeToggle() {
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    body.classList.add("dark-mode")
  }

  // Theme toggle button click handler
  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light"
    localStorage.setItem("theme", currentTheme)
  })
}

// Smooth Scrolling
function initSmoothScrolling() {
  // Learn more button
  learnMoreBtn.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
  })

  // Navigation dots
  navDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const sectionId = dot.getAttribute("data-section")
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" })
    })
  })
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll("[data-animate]")
  const sections = document.querySelectorAll("section[id]")

  // Animate elements when they enter the viewport
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-active")
          animationObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  animatedElements.forEach((element) => {
    animationObserver.observe(element)
  })

  // Update active navigation dot based on visible section
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          updateActiveNavDot(sectionId)
        }
      })
    },
    { threshold: 0.5 },
  )

  sections.forEach((section) => {
    navObserver.observe(section)
  })
}

// Update active navigation dot
function updateActiveNavDot(sectionId) {
  navDots.forEach((dot) => {
    dot.classList.remove("active")
    if (dot.getAttribute("data-section") === sectionId) {
      dot.classList.add("active")
    }
  })
}

// Form Validation and Submission
function initContactForm() {
  if (!contactForm) return

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Reset error messages
    document.querySelectorAll(".error-message").forEach((el) => {
      el.style.display = "none"
    })

    // Get form values
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const subject = document.getElementById("subject").value.trim()
    const message = document.getElementById("message").value.trim()

    // Validate form
    let isValid = true

    if (name.length < 2) {
      document.getElementById("name-error").textContent = "Name must be at least 2 characters"
      document.getElementById("name-error").style.display = "block"
      isValid = false
    }

    if (!isValidEmail(email)) {
      document.getElementById("email-error").textContent = "Please enter a valid email address"
      document.getElementById("email-error").style.display = "block"
      isValid = false
    }

    if (subject.length < 5) {
      document.getElementById("subject-error").textContent = "Subject must be at least 5 characters"
      document.getElementById("subject-error").style.display = "block"
      isValid = false
    }

    if (message.length < 10) {
      document.getElementById("message-error").textContent = "Message must be at least 10 characters"
      document.getElementById("message-error").style.display = "block"
      isValid = false
    }

    if (isValid) {
      // Simulate form submission
      submitButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        Sending...
      `
      submitButton.disabled = true

      // Simulate API call
      setTimeout(() => {
        contactForm.reset()
        submitButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          Send Message
        `
        submitButton.disabled = false
        formSuccess.style.display = "block"

        // Hide success message after 3 seconds
        setTimeout(() => {
          formSuccess.style.display = "none"
        }, 3000)
      }, 1000)
    }
  })
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle()
  initSmoothScrolling()
  initScrollAnimations()
  initContactForm()
})


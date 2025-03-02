document.addEventListener("DOMContentLoaded", (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Form submission
    const form = document.getElementById("contact-form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Here you would typically send the form data to a server
      // For this example, we'll just log it to the console
      const formData = new FormData(form)
      for (const [key, value] of formData.entries()) {
        console.log(key + ": " + value)
      }
  
      alert("Thank you for your message!")
      form.reset()
    })
  })
  
  
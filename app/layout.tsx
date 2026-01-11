import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rayen Korbi | Big Data & AI Engineer",
  description: "Big Data & AI Engineer specializing in machine learning, data analytics, and automation. Building intelligent systems that transform data into actionable insights.",
  keywords: ["Big Data", "Data Analytics", "Machine Learning", "Python", "AI", "Data Science", "Automation"],
  authors: [{ name: "Rayen Korbi" }],
  openGraph: {
    title: "Rayen Korbi | Big Data & AI Engineer",
    description: "Transforming complex datasets into actionable intelligence",
    type: "website",
  },
  icons: {
    icon: "/man.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#0a0a0f] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

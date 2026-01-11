import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
})
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
})

export const metadata: Metadata = {
  title: "Rayen Korbi | Big Data & AI Specialist",
  description: "Portfolio of Rayen Korbi - Big Data & Data Analytics Student specializing in Python, Machine Learning, and AI. Seeking PFE internship opportunities.",
  generator: "v0.app",
  keywords: ["Big Data", "Data Analytics", "Machine Learning", "Python", "AI", "Portfolio", "Rayen Korbi"],
  authors: [{ name: "Rayen Korbi" }],
  icons: {
    icon: "/man.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Rayen Korbi | Big Data & AI Specialist",
    description: "Portfolio of Rayen Korbi - Big Data & Data Analytics Student specializing in Python, Machine Learning, and AI.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSerif.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

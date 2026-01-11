import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rayen Korbi",
  description: "Big Data & Data Analytics Student Portfolio - Big Data, AI, Machine Learning, Python",
  generator: "v0.app",
  keywords: ["Big Data", "Data Analytics", "Machine Learning", "Python", "AI", "Portfolio", "Rayen Korbi"],
  authors: [{ name: "Rayen Korbi" }],
  openGraph: {
    title: "Rayen Korbi - Big Data & AI Portfolio",
    description: "Big Data & Data Analytics Student - Transforming Data into Decisions",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Serif+4:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-serif antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

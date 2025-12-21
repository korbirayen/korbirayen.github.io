import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
})

export const metadata: Metadata = {
  title: "Rayen Korbi",
  description: "Big Data & Data Analytics Student Portfolio",
  generator: "v0.app",
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
      <body className={`${playfair.variable} ${sourceSerif.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Montserrat } from "next/font/google"

const getAssetPath = (path: string) => `/LVMH_Hackathon/${path.startsWith('/') ? path.slice(1) : path}`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
})

const BASE_URL = "https://vincent-20-100.github.io/LVMH_Hackathon";

export const metadata: Metadata = {
  title: "Louis Vuitton | Digital Product Passport",
  description: "'Verify your authentic piece via blockchain and be aware of product traceability",
  metadataBase: new URL(BASE_URL),
  icons:{icon: getAssetPath("favicon-32x32.png")},
  openGraph: {
      title: "Louis Vuitton | Digital Product Passport",
      description: "Verify your authentic piece via blockchain and be aware of product traceability",
      url: "https://vincent-20-100.github.io/LVMH_Hackathon/",
      siteName: "Louis Vuitton",
      type: "website",
      images: [
        { url: `${BASE_URL}/DPP-mignature.png`,
          width: 1228,
          height: 691,
          alt: "Louis Vuitton DPP Preview",
        }, 
      ], 
  }
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

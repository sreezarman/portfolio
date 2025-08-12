import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator"
import { AnimationProvider } from "@/contexts/animation-context"
import { StickyFooter } from "@/components/sticky-footer"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arman Ali | Growth Marketer Portfolio",
  description:
    "Growth marketer skilled in paid media, attribution, SEO, and automation. Explore high-impact case studies and proven results.",
  icons: {
    icon: "/arman-profile.jpeg",
  },
  openGraph: {
    title: "Arman Ali | Growth Marketer Portfolio",
    description:
      "Growth marketer skilled in paid media, attribution, SEO, and automation. Explore high-impact case studies and proven results.",
    images: [
      {
        url: "/arman-profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Arman Ali - Growth Marketer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Ali | Growth Marketer Portfolio",
    description:
      "Growth marketer skilled in paid media, attribution, SEO, and automation. Explore high-impact case studies and proven results.",
    images: ["/arman-profile.jpeg"],
    creator: "@armanali",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationProvider>
          <ScrollProgressIndicator />
          <Suspense>{children}</Suspense>
          <StickyFooter />
          <Analytics />
        </AnimationProvider>
      </body>
    </html>
  )
}

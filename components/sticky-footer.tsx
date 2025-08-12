"use client"

import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function StickyFooter() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the footer after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-md border-t border-zinc-800 py-3 px-4 transition-all duration-300 z-50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-zinc-300">
          Looking to grow your brand?{" "}
          <a
            href="mailto:sreezarman@gmail.com"
            className="font-bold text-cyan-400 underline hover:text-cyan-300 transition-colors"
          >
            sreezarman@gmail.com
          </a>
        </p>
        <a
          href="mailto:sreezarman@gmail.com"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label="Contact me"
        >
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

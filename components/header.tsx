"use client"

import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4">
      <div
        className={`max-w-6xl mx-auto border rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-md border-gray-100 shadow-md'
            : 'bg-white/60 backdrop-blur-none border-transparent shadow-none'
        }`}
      >
        <span className="text-blue-primary font-semibold text-4xl tracking-tight">
          harisa
        </span>
        <a
          href="#schedule"
          className="bg-blue-primary text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-blue-dark hover:scale-105 hover:shadow-lg hover:shadow-blue-primary/30 active:scale-95 transition-all duration-200 touch-manipulation select-none"
        >
          Записаться
        </a>
      </div>
    </header>
  )
}

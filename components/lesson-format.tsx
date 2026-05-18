"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function VideoIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  )
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function GamepadIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="15" cy="13" r="1" />
      <circle cx="18" cy="11" r="1" />
      <rect x="2" y="6" width="20" height="12" rx="3" />
    </svg>
  )
}

function CoinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="12 6 14 10 18 10 15 13 16 17 12 15 8 17 9 13 6 10 10 10 12 6" />
    </svg>
  )
}

function ShieldCheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

const formats = [
  {
    icon: VideoIcon,
    title: "Онлайн · Живые уроки",
    description: "Собственная платформа — разработана так, чтобы связь была стабильной даже без высокоскоростного интернета. Работает с телефона. Никаких сбоев посреди урока."
  },
  {
    icon: CalendarIcon,
    title: "3 раза в неделю",
    description: "45 минут. Расписание фиксируется при записи и не меняется весь модуль."
  },
  {
    icon: GamepadIcon,
    title: "Домашнее задание",
    description: "3 авто-игры после каждого урока — прямо в платформе. Без скучных упражнений."
  },
  {
    icon: CoinIcon,
    title: "Динары",
    description: "Внутренняя валюта за активность. Накопил — получил скидку до 1 000 сом на следующий месяц."
  },
  {
    icon: ShieldCheckIcon,
    title: "Smart Exam",
    description: "Каждый 12-й урок — срез знаний с учителем из другой группы. Объективно по конструкции."
  }
]

export function LessonFormat() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight
      
      // Calculate scroll progress within the section
      const scrolledIntoSection = -rect.top
      const scrollableHeight = sectionHeight - viewportHeight
      
      if (scrolledIntoSection < 0) {
        setCurrentIndex(0)
        return
      }
      
      if (scrolledIntoSection > scrollableHeight) {
        setCurrentIndex(formats.length - 1)
        return
      }
      
      // Map scroll progress to card index
      const progress = scrolledIntoSection / scrollableHeight
      const newIndex = Math.min(
        Math.floor(progress * formats.length),
        formats.length - 1
      )
      setCurrentIndex(newIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const CardContent = ({ index }: { index: number }) => {
    const format = formats[index]
    const Icon = format.icon
    
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.16, 1, 0.3, 1]
        }}
        className="w-full max-w-[520px] bg-white rounded-3xl border border-black/[0.07] p-10 md:p-12"
        style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}
      >
        <div className="w-14 h-14 rounded-2xl bg-blue-light flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-blue-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
          {format.title}
        </h3>
        <p className="text-text-muted text-base md:text-lg leading-relaxed">
          {format.description}
        </p>
      </motion.div>
    )
  }

  // Mobile: horizontal swipe carousel
  if (isMobile) {
    return (
      <section className="bg-off-white py-16 px-4">
        <h2 className="text-2xl font-semibold text-text-primary mb-8 text-center">
          Формат
        </h2>
        
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4" style={{ width: `${formats.length * 85}%` }}>
            {formats.map((format, i) => {
              const Icon = format.icon
              return (
                <div 
                  key={i} 
                  className="snap-center shrink-0 w-[85vw] max-w-[320px]"
                >
                  <div className="bg-white rounded-2xl border border-black/[0.07] p-6" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}>
                    <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {format.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {format.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Dots indicator for mobile */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {formats.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex 
                  ? 'bg-blue-primary w-6' 
                  : 'bg-black/20 w-2'
              }`}
            />
          ))}
        </div>
      </section>
    )
  }

  // Desktop: sticky scroll hijack
  return (
    <section 
      ref={sectionRef}
      className="relative bg-off-white"
      style={{ height: `${formats.length * 100}vh` }}
    >
      <div 
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Counter */}
        <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2">
          <span className="text-text-muted text-sm font-medium tracking-wide">
            {String(currentIndex + 1).padStart(2, '0')} / {String(formats.length).padStart(2, '0')}
          </span>
        </div>

        {/* Section title */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
            Формат
          </h2>
        </div>

        {/* Card */}
        <div className="flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <CardContent index={currentIndex} />
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {formats.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex 
                  ? 'bg-blue-primary w-6' 
                  : 'bg-black/20 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

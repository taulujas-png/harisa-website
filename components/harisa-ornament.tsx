"use client"

import { motion } from 'framer-motion'

interface HarisaOrnamentProps {
  className?: string
  delay?: number
  color?: string
}

// Extracted path data from the original harisa ornament SVG - these are the kazakh/kyrgyz swirl patterns
const ornamentPaths = [
  // Main swirl curves from the original SVG
  "M 40 50 C 25.4 34 32.2 10 60 12.5 C 80.4 14.6 90 37.3 105 14.7",
  "M 56.6 15 C 81 23.2 76.7 47.4 60.3 46.7 C 48 46.1 48.1 35 51.7 31.7 C 55.9 27.8 62 32.5 57 36",
  "M 40 50 C 40 50 68.7 76.5 110.8 29 C 131.2 6 152 18.4 154 33.5 C 157 58.3 132.2 56.6 127.3 50.5 C 120.4 41.9 126 34.8 131.7 33.7 C 137 32.6 141 35.7 140 38.7 C 139.5 40.4 136.6 41.2 135.3 40.8",
  "M 75.7 55 C 76.8 54.5 68.6 80.7 84 90 C 98.2 98 119.1 89.6 122.2 78.1 C 124.6 69.4 124 56.3 108 56.2 C 95.7 56.1 90.6 66.1 95 73.3 C 98.3 78.7 107.4 79.5 108.8 75.8 C 110.4 71.5 107.4 68.8 105 69.9",
  "M 160 37 C 154 43.5 147.2 46.3 133.1 39.7 C 119.1 33 106.3 43.4 106.3 43.4 C 124.8 34.9 140.1 47.2 129.4 57.7",
  "M 36.5 24.5 C 27.7 21.6 -1.2 34.8 37.1 69 L 4.7 37.6"
]

export function HarisaOrnament({ className = "", delay = 0, color = "#2563EB" }: HarisaOrnamentProps) {
  return (
    <svg
      viewBox="0 0 180 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {ornamentPaths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 1.2,
              delay: delay + i * 0.12,
              ease: "easeInOut"
            },
            opacity: {
              duration: 0.2,
              delay: delay + i * 0.12
            }
          }}
        />
      ))}
    </svg>
  )
}

// Corner wrapper with proper rotation for each corner
export function OrnamentCorner({ 
  position, 
  delay = 0 
}: { 
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  delay?: number 
}) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-[-1]'
  }

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none`}>
      <HarisaOrnament 
        className="w-24 h-16 md:w-40 md:h-28 lg:w-56 lg:h-40 opacity-70"
        delay={delay}
        color="#2563EB"
      />
    </div>
  )
}

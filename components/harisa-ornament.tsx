"use client"

import { motion } from 'framer-motion'

interface HarisaOrnamentProps {
  className?: string
  delay?: number
  color?: string
}

// Extracted path data from the original harisa ornament SVG - these are the kazakh/kyrgyz swirl patterns
const ornamentPaths = [
  "m -358.99801,149.68091 c -14.57091,-16.12857 -7.82813,-40.36569 19.4851,-37.49403 20.35356,2.13994 29.81808,24.7992 44.57951,1.18091",
  "m -343.35169,111.95621 c 24.39096,8.24757 20.14702,32.39369 3.69115,31.67251 -12.42453,-0.5445 -12.20172,-11.71714 -8.62027,-15.02433 4.23903,-3.91443 10.12589,0.81859 5.07753,4.24849",
  "m -358.99801,149.68091 c 0,0 28.72739,26.4912 70.80422,-21.11319 20.36843,-23.04419 41.23289,-10.56997 43.01998,4.45758 2.94743,24.78484 -21.82238,23.06429 -26.73176,16.95084 -6.90661,-8.60052 -1.25489,-15.66892 4.42844,-16.82803 5.24967,-1.07066 9.25139,1.96169 8.2664,5.01889 -0.52968,1.64401 -3.35786,2.5259 -4.72366,2.0666",
  "m -324.33762,154.91675 c 1.08587,-0.52122 -8.13519,25.70744 8.27775,35.05318 14.24722,8.11255 35.0344,-0.39563 38.20275,-11.89921 2.39139,-8.6826 1.85661,-21.79547 -14.19555,-21.91961 -12.30894,-0.0952 -17.43205,9.92636 -12.98099,17.10332 3.32272,5.35764 12.40974,6.24173 13.79287,2.48412 1.56886,-4.26219 -1.40987,-6.97043 -3.73448,-5.91379",
  "m -198.68886,113.95825 c -6.05219,6.49503 -12.84245,9.2997 -26.86581,2.65706 -14.02336,-6.64265 -26.76773,3.67202 -26.76773,3.67202 18.49122,-8.44529 33.82735,3.79801 23.07737,14.33692",
  "m -362.45638,101.50548 c -8.83446,-2.887301 -37.66536,10.31873 0.557,44.45121 l -32.37845,-31.40799"
]

export function HarisaOrnament({ className = "", delay = 0, color = "#2563EB" }: HarisaOrnamentProps) {
  return (
    <svg
      viewBox="-370 100 180 100"
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

export function GulPattern({ className = "", color = "#2563EB" }: { className?: string; color?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Eight-pointed star / Kyrgyz gul pattern */}
      <g fill={color}>
        {/* Center diamond */}
        <path d="M50 35 L65 50 L50 65 L35 50 Z" />
        {/* Four outer points */}
        <path d="M50 10 L55 30 L50 35 L45 30 Z" />
        <path d="M90 50 L70 55 L65 50 L70 45 Z" />
        <path d="M50 90 L45 70 L50 65 L55 70 Z" />
        <path d="M10 50 L30 45 L35 50 L30 55 Z" />
        {/* Four diagonal points */}
        <path d="M75 25 L60 40 L55 35 L65 25 Z" />
        <path d="M75 75 L60 60 L65 55 L75 65 Z" />
        <path d="M25 75 L40 60 L45 65 L35 75 Z" />
        <path d="M25 25 L40 40 L35 45 L25 35 Z" />
      </g>
    </svg>
  )
}

export function OrnamentDivider({ className = "", color = "#2563EB" }: { className?: string; color?: string }) {
  return (
    <svg 
      viewBox="0 0 200 28" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        {/* Left line */}
        <rect x="0" y="13" width="70" height="2" rx="1" />
        {/* Center medallion */}
        <path d="M100 4 L108 12 L100 20 L92 12 Z" />
        <circle cx="100" cy="12" r="4" />
        {/* Small diamonds */}
        <path d="M80 12 L84 16 L80 20 L76 16 Z" />
        <path d="M120 12 L124 16 L120 20 L116 16 Z" />
        {/* Right line */}
        <rect x="130" y="13" width="70" height="2" rx="1" />
      </g>
    </svg>
  )
}

export function BackgroundPattern({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="gulPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Simplified gul motif */}
          <path 
            d="M50 25 L60 50 L50 75 L40 50 Z" 
            fill="currentColor" 
          />
          <path 
            d="M25 50 L50 40 L75 50 L50 60 Z" 
            fill="currentColor"
          />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#gulPattern)" />
    </svg>
  )
}

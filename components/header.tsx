"use client"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md border border-gray-100 rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
        <span className="text-blue-primary font-semibold text-4xl tracking-tight">
          harisa
        </span>
        <a
          href="#pricing"
          className="bg-blue-primary text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-blue-dark transition-colors"
        >
          Записаться
        </a>
      </div>
    </header>
  )
}

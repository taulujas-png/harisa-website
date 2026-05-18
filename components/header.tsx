"use client"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-blue-primary font-semibold text-2xl tracking-tight">
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

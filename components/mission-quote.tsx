"use client"

import { Reveal } from './reveal'
import { OrnamentDivider } from './ornaments'

export function MissionQuote() {
  return (
    <section className="bg-off-white py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <OrnamentDivider className="w-40 h-6 mx-auto mb-8 opacity-15" color="#2563EB" />
        </Reveal>
        
        <Reveal delay={0.1}>
          <blockquote className="text-lg md:text-xl font-normal italic text-text-primary leading-relaxed">
            «Мы соединили мудрость традиции с лёгкостью технологий —
            чтобы этот путь стал не бременем, а радостью открытия»
          </blockquote>
        </Reveal>
        
        <Reveal delay={0.2}>
          <OrnamentDivider className="w-40 h-6 mx-auto mt-8 opacity-15" color="#2563EB" />
        </Reveal>
      </div>
    </section>
  )
}

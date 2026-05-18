import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { StatsBar } from '@/components/stats-bar'
import { MissionQuote } from '@/components/mission-quote'
import { CoreUSPs } from '@/components/core-usps'
import { HowLessonWorks } from '@/components/how-lesson-works'
import { ThreeGames } from '@/components/three-games'
import { LessonFormat } from '@/components/lesson-format'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsBar />
      <MissionQuote />
      <CoreUSPs />
      <HowLessonWorks />
      <ThreeGames />
      <LessonFormat />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

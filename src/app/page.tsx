import Link from 'next/link'
import Image from 'next/image'
import { Timeline } from '@/components/ui'
import { profile, heroStats, timeline } from '@/lib/data'

const GOLD = '#C9A84C'

const pillars = [
  {
    icon: '🏏',
    heading: 'Cricket',
    body: 'J&K Under-23 · Fast-Bowler · Right-hand Batsman · Debut 2023 · 2,847 career runs',
  },
  {
    icon: '🎓',
    heading: 'Academics',
    body: 'B.Tech CSE · CU · CGPA 9.1 · AI/ML specialisation · Scholarship holder',
  }
]

const navLinks = [
  { label: '🏠 Home',      href: '/' },
  { label: '🏏 Cricket',   href: '/cricket' },
  { label: '📊 Stats',     href: '/stats' },
  { label: '🎓 Academics', href: '/academics' },
  { label: '📸 Gallery',   href: '/gallery' },
  { label: '✉️ Contact',   href: '/contact' },
]

function PitchRule() {
  return (
    <div className="flex gap-0.5 h-[3px] w-full">
      <span className="flex-[2] rounded-sm" style={{ background: GOLD }} />
      <span className="flex-1 rounded-sm bg-gray-200" />
      <span className="flex-[2] rounded-sm" style={{ background: GOLD }} />
      <span className="flex-1 rounded-sm bg-gray-200" />
      <span className="flex-[2] rounded-sm" style={{ background: GOLD }} />
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="text-[10px] font-bold tracking-[0.16em] uppercase whitespace-nowrap"
        style={{ color: GOLD }}
      >
        {children}
      </span>
      <span
        className="flex-1 block border-t border-gray-200"
        style={{ borderTopWidth: '0.5px' }}
      />
    </div>
  )
}

export default function Home() {
  const firstName = profile.name.split(' ')[0]
  const lastName = profile.name.split(' ').slice(1).join(' ')

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

      {/* PITCH RULE TOP */}
      <PitchRule />

      {/* NAV */}
      <nav className="py-3 sm:py-4 mb-6 sm:mb-8 border-b border-gray-100">
        {/* Logo */}
        <Link
          href="/"
          className="block text-base sm:text-lg font-extrabold uppercase tracking-widest mb-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'inherit', textDecoration: 'none' }}
        >
          Junaid&nbsp;Ahmad Malik
        </Link>
        {/* Links — horizontally scrollable on mobile, wrapping on md+ */}
        <div className="flex gap-1 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0 scrollbar-none">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="shrink-0 text-[11px] sm:text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="mb-8 sm:mb-10">
        {/* Mobile: avatar on top centre, then text below */}
        {/* Desktop: text left, avatar right */}
        <div className="flex flex-col sm:grid sm:grid-cols-[1fr_160px] gap-6 sm:gap-8 items-start">

          {/* Avatar — shown first on mobile via order */}
          <div className="relative self-center sm:order-last sm:self-start sm:flex sm:justify-end order-first">
            <div
              className="relative w-36 h-36 sm:w-64 sm:h-64 rounded-xl overflow-hidden border-2"
              style={{ borderColor: GOLD }}
            >
              {profile.avatar ? (
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-2xl sm:text-4xl font-extrabold uppercase"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: GOLD,
                    background: '#f9f6ee',
                  }}
                >
                  {profile.name
                    .split(' ')
                    .slice(0, 2)
                    .map((n: string) => n[0])
                    .join('')}
                </div>
              )}
            </div>
            <span
              className="absolute -bottom-2 -right-2 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
              style={{ background: GOLD, color: '#1a1200' }}
            >
              U-23
            </span>
          </div>

          {/* Text content */}
          <div className="order-last sm:order-first">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <span
                className="block h-[1.5px] w-8 sm:w-10 rounded-full shrink-0"
                style={{ background: GOLD }}
              />
              <span
                className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: GOLD }}
              >
                J&K Under-23 · Fast-Bowler · Right-hand Batsman
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tight mb-3 sm:mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {firstName}
              <br />
              <span style={{ color: GOLD }}>{lastName}</span>
            </h1>

            {/* Bio */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mb-4 sm:mb-5">
              {profile.about}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
              {['J&K U-23', 'Fast-Bowler', 'Right-hand Batsman', 'Debut 2023'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase px-2.5 sm:px-3 py-1 rounded bg-gray-50 border border-gray-200 text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs — stacked on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
              <Link
                href="/cricket"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-md text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: GOLD, color: '#1a1200' }}
              >
                🏏 View Cricket Profile
              </Link>
              <Link
                href="/stats"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-md text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                📊 Stats
              </Link>
              <Link
                href="/academics"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-md text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                🎓 Academics
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-md text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ✉️ Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SCOREBOARD */}
      <section className="grid grid-cols-2 md:grid-cols-4 border border-gray-100 rounded-xl overflow-hidden divide-x divide-y md:divide-y-0 divide-gray-100 mb-10 sm:mb-12">
        {heroStats.map((s) => (
          <div key={s.label} className="py-4 sm:py-5 px-3 sm:px-4 text-center bg-white">
            <p
              className="text-2xl sm:text-3xl font-extrabold leading-none mb-1"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: GOLD }}
            >
              {s.num}
            </p>
            <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.12em] uppercase text-gray-400">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* PILLARS */}
      <section className="mb-10 sm:mb-12">
        <SectionHeading>Three pillars</SectionHeading>
        {/* Single col on mobile, 3 col on md */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {pillars.map((p) => (
            <div
              key={p.heading}
              className="flex sm:flex-col items-start gap-4 sm:gap-0 bg-gray-50 border border-gray-100 rounded-xl p-4 sm:p-5"
              style={{ borderTop: `2px solid ${GOLD}` }}
            >
              <div className="text-2xl sm:text-3xl sm:mb-3 shrink-0">{p.icon}</div>
              <div>
                <h3
                  className="font-extrabold uppercase tracking-wide text-sm sm:text-base mb-0.5 sm:mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {p.heading}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mb-10 sm:mb-12">
        <SectionHeading>Career timeline</SectionHeading>
        <Timeline items={timeline} />
      </section>

      {/* CTA */}
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
        <div>
          <p
            className="text-[10px] font-bold tracking-[0.16em] uppercase mb-2"
            style={{ color: GOLD }}
          >
            Open to opportunities
          </p>
          <h2
            className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-gray-900 mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Let's connect
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            Available for cricket trials, summer internships in AI/ML, and research
            collaborations. Let's build something great together.
          </p>
        </div>
        <Link
          href="/contact"
          className="w-full md:w-auto text-center shrink-0 px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: GOLD, color: '#1a1200' }}
        >
          Get in touch →
        </Link>
      </section>

      {/* PITCH RULE BOTTOM */}
      <PitchRule />

    </div>
  )
}
// src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { StatCard, SectionTitle, Timeline } from '@/components/ui'
import { profile, heroStats, timeline } from '@/lib/data'

const PRIDE_COLORS = {
  red: '#E63946',
  orange: '#F4A261',
  yellow: '#E9C46A',
  green: '#52B788',
  blue: '#4895EF',
  purple: '#7B2D8B',
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 fade-up">

      {/* PRIDE STRIPE */}
      <div className="flex h-1.5 rounded-full overflow-hidden mb-8">
        {Object.values(PRIDE_COLORS).map((color) => (
          <span key={color} className="flex-1" style={{ background: color }} />
        ))}
      </div>

      {/* HERO */}
      <section className="grid md:grid-cols-[1fr_220px] gap-8 items-center mb-14">
        <div>
          {/* Tagline badge with rainbow gradient */}
          <span
            className="inline-block text-xs px-3 py-1 rounded-full font-medium mb-4 text-white"
            style={{
              background: `linear-gradient(90deg, ${PRIDE_COLORS.red}, ${PRIDE_COLORS.orange}, ${PRIDE_COLORS.yellow}, ${PRIDE_COLORS.green}, ${PRIDE_COLORS.blue}, ${PRIDE_COLORS.purple})`,
            }}
          >
            {profile.tagline}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
            {profile.name.split(' ')[0]}&nbsp;
            <span
              style={{
                background: `linear-gradient(90deg, ${PRIDE_COLORS.blue}, ${PRIDE_COLORS.purple})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {profile.name.split(' ')[1]}
            </span>
            <br />
            {profile.name.split(' ').slice(2).join(' ')}
          </h1>

          <p className="text-gray-600 leading-relaxed text-base mb-4 max-w-lg">
            {profile.about}
          </p>

          {/* Proudly gay badge */}
          <div
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full border border-gray-200 mb-6"
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${PRIDE_COLORS.red}, ${PRIDE_COLORS.purple})`,
              }}
            />
            Proudly gay 🏳️‍🌈
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cricket"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{
                background: `linear-gradient(90deg, ${PRIDE_COLORS.blue}, ${PRIDE_COLORS.purple})`,
              }}
            >
              🏏 View Cricket Profile
            </Link>
            <Link
              href="/academics"
              className="px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              🎓 Academic Record
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              ✉️ Contact Me
            </Link>
          </div>
        </div>

        {/* Avatar with pride ring */}
        <div className="flex justify-center">
          <div
            className="p-1 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${PRIDE_COLORS.red}, ${PRIDE_COLORS.orange}, ${PRIDE_COLORS.yellow}, ${PRIDE_COLORS.green}, ${PRIDE_COLORS.blue}, ${PRIDE_COLORS.purple})`,
            }}
          >
            <div className="relative w-48 h-48 rounded-xl overflow-hidden border-4 border-white">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* HERO STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
        {heroStats.map((s, i) => {
          const colors = Object.values(PRIDE_COLORS)
          return (
            <div
              key={s.label}
              className="bg-white border border-gray-100 rounded-xl p-4 text-center"
            >
              <p
                className="text-2xl font-bold"
                style={{ color: colors[i % colors.length] }}
              >
                {s.num}
              </p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          )
        })}
      </section>

      {/* ABOUT */}
      <section className="mb-14">
        <SectionTitle>Quick facts</SectionTitle>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: '🏏',
              heading: 'Cricket',
              body: 'Punjab Under-23 · Off-spinner · Debut 2023 · 2,847 career runs',
              accent: PRIDE_COLORS.red,
            },
            {
              icon: '🎓',
              heading: 'Academics',
              body: 'B.Tech CSE · CU · CGPA 9.1 · AI/ML specialisation · Scholarship holder',
              accent: PRIDE_COLORS.blue,
            },
            {
              icon: '💻',
              heading: 'Technology',
              body: 'Python, ML, React Native · 3 research papers · 6 live projects',
              accent: PRIDE_COLORS.purple,
            },
          ].map((f) => (
            <div
              key={f.heading}
              className="bg-white border border-gray-200 rounded-xl p-5"
              style={{ borderTop: `3px solid ${f.accent}` }}
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-1">{f.heading}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mb-14">
        <SectionTitle>Career timeline</SectionTitle>
        <Timeline items={timeline} />
      </section>

      {/* CTA */}
      <section
        className="rounded-2xl p-8 text-white text-center"
        style={{
          background: `linear-gradient(135deg, ${PRIDE_COLORS.blue} 0%, ${PRIDE_COLORS.purple} 100%)`,
        }}
      >
        <div className="flex justify-center gap-1 mb-3 text-lg">
          {'🏳️‍🌈'}
        </div>
        <h2 className="text-2xl font-bold mb-2">Open to opportunities</h2>
        <p className="text-blue-100 mb-6 max-w-md mx-auto text-sm leading-relaxed">
          Available for cricket trials, summer internships in AI/ML, and research
          collaborations. Inclusive spaces especially welcome. Let's connect.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ color: PRIDE_COLORS.purple }}
        >
          Get in touch →
        </Link>
      </section>

      {/* BOTTOM PRIDE STRIPE */}
      <div className="flex h-1.5 rounded-full overflow-hidden mt-8">
        {Object.values(PRIDE_COLORS).map((color) => (
          <span key={color} className="flex-1" style={{ background: color }} />
        ))}
      </div>

    </div>
  )
}
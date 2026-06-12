// src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { StatCard, SectionTitle, Timeline } from '@/components/ui'
import { profile, heroStats, timeline } from '@/lib/data'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 fade-up">
      {/* HERO */}
      <section className="grid md:grid-cols-[1fr_220px] gap-8 items-center mb-14">
        <div>
          <span
            className="inline-block text-xs px-3 py-1 rounded-full font-medium mb-4"
            style={{ background: '#E1F5EE', color: '#0F6E56' }}
          >
            {profile.tagline}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
            {profile.name.split(' ')[0]}&nbsp;
            <span style={{ color: '#1D9E75' }}>{profile.name.split(' ')[1]}</span>
            <br />
            {profile.name.split(' ').slice(2).join(' ')}
          </h1>
          <p className="text-gray-600 leading-relaxed text-base mb-6 max-w-lg">
            {profile.about}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cricket"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: '#1D9E75' }}
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

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative w-52 h-52 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* HERO STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
        {heroStats.map(s => (
          <StatCard key={s.label} num={s.num} label={s.label} />
        ))}
      </section>

      {/* ABOUT */}
      <section className="mb-14">
        <SectionTitle>Quick facts</SectionTitle>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '🏏', heading: 'Cricket', body: 'Punjab Under-23 · Off-spinner · Debut 2023 · 2,847 career runs' },
            { icon: '🎓', heading: 'Academics', body: 'B.Tech CSE · CU · CGPA 9.1 · AI/ML specialisation · Scholarship holder' },
            { icon: '💻', heading: 'Technology', body: 'Python, ML, React Native · 3 research papers · 6 live projects' },
          ].map(f => (
            <div key={f.heading} className="bg-white border border-gray-200 rounded-xl p-5">
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
      <section className="rounded-2xl p-8 text-white text-center" style={{ background: '#1D9E75' }}>
        <h2 className="text-2xl font-bold mb-2">Open to opportunities</h2>
        <p className="text-emerald-100 mb-6 max-w-md mx-auto text-sm leading-relaxed">
          Available for cricket trials, summer internships in AI/ML, and research collaborations. Let's connect.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ color: '#1D9E75' }}
        >
          Get in touch →
        </Link>
      </section>
    </div>
  )
}

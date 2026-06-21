// src/app/contact/page.tsx
import type { Metadata } from 'next'
import { SectionTitle, Card, ContactItem } from '@/components/ui'
import { profile } from '@/lib/data'

export const metadata: Metadata = { title: 'Contact — ' }

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 fade-up">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 bg-white border border-gray-200 rounded-xl p-5">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
          style={{ background: '#E1F5EE' }}
        >
          ✉️
        </div>
        <div>
          <h1 className="text-xl font-semibold">Get in touch</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Open to cricket trials, coaching invitations, internships &amp; research collaborations
          </p>
        </div>
      </div>

      {/* Contact grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
  <ContactItem
    icon="📧"
    label="Email"
    value={profile.email}
    href={`mailto:${profile.email}`}
  />

  <ContactItem
    icon="📱"
    label="Phone"
    value={profile.phone}
    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
  />

  <ContactItem
    icon="📍"
    label="Location"
    value={`${profile.location} · Chandigarh (term)`}
    href={`https://maps.google.com/?q=${encodeURIComponent(profile.location)}`}
  />

  <ContactItem
    icon="🔗"
    label="LinkedIn"
    value="LinkedIn Profile"
    href={profile.linkedin}
  />

  <ContactItem
    icon="💻"
    label="GitHub"
    value="GitHub Profile"
    href={profile.github}
  />

  <ContactItem
    icon="📸"
    label="Instagram"
    value="Instagram Profile"
    href={`https://www.instagram.com/${profile.instagram}`}
  />
</div>

      {/* Representation */}
      <section className="mb-10">
        <SectionTitle>Representation &amp; coaching</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-semibold text-sm mb-2">🏏 Head coach</h3>
            <p className="text-sm text-gray-700 font-medium">{profile.coach.name}</p>
            <p className="text-sm text-gray-500">{profile.coach.org}</p>
            <p className="text-sm text-gray-400 mt-1">{profile.coach.note}</p>
          </Card>
        </div>
      </section>

      {/* Availability */}
      <section className="mb-10">
        <SectionTitle>Availability</SectionTitle>
        <Card accent>
          <h3 className="font-semibold text-sm mb-1">Current status</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Available for trials and tournaments year-round. Internships preferred May–July (summer break).
            Currently seeking placement opportunities in AI/ML for 2026 graduation. Also open to cricket
            academies, coaching camps, and sports-tech projects that bridge cricket and data science.
          </p>
        </Card>
      </section>

      {/* What I'm looking for */}
      <section className="mb-10">
        <SectionTitle>What I&apos;m looking for</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: '🏟️', heading: 'Cricket opportunities',  body: 'State-level trials, franchise camps (IPL/SMAT), and competitive league cricket in India or abroad.' },
            { icon: '🤖', heading: 'AI/ML internships',      body: 'Summer 2026 internship in ML engineering, NLP, or computer vision at a product-led company.' },
            { icon: '🔬', heading: 'Research collaboration', body: 'Co-authoring papers on sports analytics, wearable tech, or cricket performance modelling.' },
            { icon: '🎙️', heading: 'Speaking & mentoring',  body: 'Happy to speak at college events about balancing athletics with academics, or cricket analytics.' },
          ].map(item => (
            <div key={item.heading} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-sm mb-1">{item.heading}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social CTA */}
      <div className="rounded-2xl p-8 text-center text-white" style={{ background: '#1D9E75' }}>
        <h2 className="text-xl font-bold mb-2">Let&apos;s build something great</h2>
        <p className="text-emerald-100 text-sm mb-6 max-w-sm mx-auto">
          Whether it&apos;s a cover drive or a neural network — I&apos;m ready. Drop me a line.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block bg-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{ color: '#1D9E75' }}
        >
          📧 Send an email →
        </a>
      </div>
    </div>
  )
}

// src/app/gallery/page.tsx
import type { Metadata } from 'next'
import { SectionTitle, PhotoCard } from '@/components/ui'
import { actionPhotos, campusPhotos } from '@/lib/data'

export const metadata: Metadata = { title: 'Gallery — ' }

const momentCards = [
  { icon: '🏆', label: 'Player of Match Award — Apr 2025',    bg: '#E1F5EE', color: '#1D9E75' },
  { icon: '📜', label: 'ML Specialisation — Stanford Online', bg: '#E6F1FB', color: '#185FA5' },
  { icon: '⭐', label: 'Best Batsman — North Zone 2023',      bg: '#FAEEDA', color: '#BA7517' },
  { icon: '🎓', label: 'Merit Scholarship — CU 2024',         bg: '#E1F5EE', color: '#0F6E56' },
  { icon: '💻', label: 'Best Project — Dept. of CSE 2024',    bg: '#FAECE7', color: '#993C1D' },
  { icon: '🥇', label: 'SIH 2023 Winner',                    bg: '#FAEEDA', color: '#633806' },
]

export default function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 fade-up">
      <h1 className="text-3xl font-bold mb-2">Gallery</h1>
      <p className="text-gray-500 mb-10 text-sm">On the field, on campus, and celebrating milestones</p>

      {/* Action shots */}
      <section className="mb-12">
        <SectionTitle>Action shots 🏏</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {actionPhotos.map((p, i) => (
            <PhotoCard key={i} src={p.src} label={p.label} />
          ))}
        </div>
      </section>

      {/* Campus life */}
      <section className="mb-12">
        <SectionTitle>Campus &amp; student life 🎓</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {campusPhotos.map((p, i) => (
            <PhotoCard key={i} src={p.src} label={p.label} />
          ))}
        </div>
      </section>

      {/* Moments */}
      <section className="mb-12">
        <SectionTitle>Achievements &amp; moments 🎖</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {momentCards.map((m, i) => (
            <div
              key={i}
              className="rounded-xl aspect-square flex flex-col items-center justify-center gap-3 p-4"
              style={{ background: m.bg }}
            >
              <span className="text-5xl">{m.icon}</span>
              <p className="text-xs font-medium text-center leading-snug" style={{ color: m.color }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner quote */}
      <div
        className="rounded-2xl p-8 text-center text-white"
        style={{ background: '#1D9E75' }}
      >
        <p className="text-2xl font-bold leading-snug mb-2">
          "The discipline of a long innings and an all-night revision are the same discipline."
        </p>
        <p className="text-emerald-100 text-sm">— Arjun Dev Sharma</p>
      </div>
    </div>
  )
}

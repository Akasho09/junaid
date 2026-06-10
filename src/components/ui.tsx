// src/components/ui.tsx
import React from 'react'

// ── StatCard ─────────────────────────────────────────────────────────────────
interface StatCardProps {
  num: string
  label: string
  color?: string
}
export function StatCard({ num, label, color = '#1D9E75' }: StatCardProps) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 text-center">
      <p className="text-2xl font-semibold" style={{ color }}>{num}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  )
}

// ── SectionTitle ─────────────────────────────────────────────────────────────
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-semibold mb-4 pb-3 border-b border-gray-200">
      {children}
    </h2>
  )
}

// ── Card ─────────────────────────────────────────────────────────────────────
interface CardProps {
  children: React.ReactNode
  className?: string
  accent?: boolean
}
export function Card({ children, className = '', accent = false }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-5 ${accent ? 'border-l-4' : ''} ${className}`}
      style={accent ? { borderLeftColor: '#1D9E75', borderRadius: '0 12px 12px 0' } : {}}
    >
      {children}
    </div>
  )
}

// ── Tag ──────────────────────────────────────────────────────────────────────
type TagVariant = 'green' | 'blue' | 'amber' | 'coral' | 'gray' | 'red'

const tagStyles: Record<TagVariant, { bg: string; text: string }> = {
  green: { bg: '#E1F5EE', text: '#0F6E56' },
  blue:  { bg: '#E6F1FB', text: '#0C447C' },
  amber: { bg: '#FAEEDA', text: '#633806' },
  coral: { bg: '#FAECE7', text: '#712B13' },
  gray:  { bg: '#F1EFE8', text: '#5F5E5A' },
  red:   { bg: '#FCEBEB', text: '#791F1F' },
}

interface TagProps {
  children: React.ReactNode
  variant?: TagVariant
}
export function Tag({ children, variant = 'green' }: TagProps) {
  const s = tagStyles[variant]
  return (
    <span
      className="inline-block text-xs px-2.5 py-0.5 rounded-full mr-1 mb-1 font-medium"
      style={{ background: s.bg, color: s.text }}
    >
      {children}
    </span>
  )
}

// ── SkillBar ──────────────────────────────────────────────────────────────────
interface SkillBarProps {
  label: string
  pct: number
}
export function SkillBar({ label, pct }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-700">{label}</span>
        <span className="font-medium" style={{ color: '#1D9E75' }}>{pct}%</span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: `${pct}%`, background: '#1D9E75' }}
        />
      </div>
    </div>
  )
}

// ── ResultBadge ───────────────────────────────────────────────────────────────
export function ResultBadge({ result }: { result: string }) {
  const map: Record<string, { bg: string; text: string }> = {
    Won:  { bg: '#E1F5EE', text: '#0F6E56' },
    Lost: { bg: '#FCEBEB', text: '#791F1F' },
    Draw: { bg: '#FAEEDA', text: '#633806' },
  }
  const s = map[result] ?? map['Draw']
  return (
    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: s.bg, color: s.text }}>
      {result}
    </span>
  )
}

// ── ProfileHeader ─────────────────────────────────────────────────────────────
interface ProfileHeaderProps {
  icon: string
  name: string
  role: string
  tags?: Array<{ label: string; variant?: TagVariant }>
}
export function ProfileHeader({ icon, name, role, tags = [] }: ProfileHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-7 bg-white border border-gray-200 rounded-xl p-5">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
        style={{ background: '#E1F5EE' }}
      >
        {icon}
      </div>
      <div>
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-sm text-gray-500 mt-0.5">{role}</p>
        {tags.length > 0 && (
          <div className="mt-2">
            {tags.map((t, i) => <Tag key={i} variant={t.variant}>{t.label}</Tag>)}
          </div>
        )}
      </div>
    </div>
  )
}

// ── AwardCard ─────────────────────────────────────────────────────────────────
interface AwardCardProps {
  icon: string
  title: string
  desc: string
}
export function AwardCard({ icon, title, desc }: AwardCardProps) {
  return (
    <div className="flex gap-3 items-start py-4 border-b border-gray-100 last:border-0">
      <span className="text-3xl flex-shrink-0">{icon}</span>
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

// ── CertCard ──────────────────────────────────────────────────────────────────
interface CertCardProps {
  icon: string
  name: string
  org: string
  year: string
}
export function CertCard({ icon, name, org, year }: CertCardProps) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 mb-2.5">
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
        style={{ background: '#E1F5EE' }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm truncate">{name}</p>
        <p className="text-xs text-gray-500">{org}</p>
      </div>
      <span className="text-sm text-gray-500 flex-shrink-0">{year}</span>
    </div>
  )
}

// ── PhotoCard ─────────────────────────────────────────────────────────────────
interface PhotoCardProps {
  src: string
  label: string
  alt?: string
}
export function PhotoCard({ src, label, alt = '' }: PhotoCardProps) {
  return (
    <div className="photo-card-wrap">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt || label} loading="lazy" />
      <div className="photo-label">{label}</div>
    </div>
  )
}

// ── Timeline ──────────────────────────────────────────────────────────────────
interface TlItem {
  year: string
  title: string
  desc: string
}
export function Timeline({ items }: { items: TlItem[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-200" />
      {items.map((item, i) => (
        <div key={i} className="relative mb-6">
          <div
            className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full border-2 border-white"
            style={{ background: '#1D9E75' }}
          />
          <p className="text-xs font-semibold mb-0.5" style={{ color: '#1D9E75' }}>{item.year}</p>
          <p className="font-medium text-sm">{item.title}</p>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

// ── ProjectCard ────────────────────────────────────────────────────────────────
interface ProjectCardProps {
  title: string
  desc: string
  tags: string[]
  link?: string
}
const tagVariantCycle: TagVariant[] = ['blue', 'green', 'amber', 'coral', 'gray']

export function ProjectCard({ title, desc, tags, link }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-sm leading-snug">{title}</h3>
        {link && link !== '#' && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-gray-400 hover:text-gray-700 flex-shrink-0"
            aria-label="View project"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
      <div className="mt-3">
        {tags.map((t, i) => <Tag key={t} variant={tagVariantCycle[i % tagVariantCycle.length]}>{t}</Tag>)}
      </div>
    </div>
  )
}

// ── ContactItem ────────────────────────────────────────────────────────────────
interface ContactItemProps {
  icon: string
  label: string
  value: string
}
export function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  )
}

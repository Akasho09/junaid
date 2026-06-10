'use client'
// src/components/Navbar.tsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',          label: 'Home',      icon: '🏠' },
  { href: '/cricket',  label: 'Cricket',   icon: '🏏' },
  { href: '/stats',    label: 'Stats',     icon: '📊' },
  { href: '/academics',label: 'Academics', icon: '🎓' },
  { href: '/gallery',  label: 'Gallery',   icon: '📸' },
  { href: '/contact',  label: 'Contact',   icon: '✉️'  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Brand */}
        <Link href="/" className="text-base font-semibold tracking-tight">
          Junaid <span style={{ color: '#1D9E75' }}>Dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                pathname === l.href
                  ? 'bg-emerald-50 text-emerald-600 font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              style={pathname === l.href ? { color: '#1D9E75', background: '#E1F5EE' } : {}}
            >
              <span className="mr-1.5">{l.icon}</span>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-5 py-3 text-sm border-b border-gray-50 ${
                pathname === l.href ? 'font-medium' : 'text-gray-600'
              }`}
              style={pathname === l.href ? { color: '#1D9E75' } : {}}
            >
              <span>{l.icon}</span>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

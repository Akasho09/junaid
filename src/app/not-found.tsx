// src/app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <p className="text-7xl mb-4">🏏</p>
      <h1 className="text-4xl font-bold mb-3">Bowled out!</h1>
      <p className="text-gray-500 mb-8">That page doesn&apos;t exist. Looks like a clean bowled.</p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-lg text-white text-sm font-medium"
        style={{ background: '#1D9E75' }}
      >
        Back to the crease →
      </Link>
    </div>
  )
}

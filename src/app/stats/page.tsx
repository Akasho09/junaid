// src/app/stats/page.tsx
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { SectionTitle, Tag } from '@/components/ui'
import { battingStats, bowlingStats, formatBreakdown } from '@/lib/data'

export const metadata: Metadata = { title: 'Statistics — ' }

const RunsChart = dynamic(() => import('@/components/RunsChart'), { ssr: false })

const formatTag: Record<string, 'coral' | 'green' | 'blue'> = {
  'List A':      'coral',
  'First Class': 'green',
  'T20':         'blue',
}

export default function StatsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 fade-up">
      <h1 className="text-3xl font-bold mb-2">Career Statistics</h1>
      <p className="text-gray-500 mb-8 text-sm">All formats · Updated June 2025</p>

      {/* Format breakdown */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {formatBreakdown.map(s => (
          <div key={s.label} className="bg-gray-100 rounded-xl p-4 text-center">
            <p className="text-2xl font-semibold" style={{ color: s.color }}>{s.num}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Batting table */}
      <section className="mb-10">
        <SectionTitle>Batting statistics</SectionTitle>
        <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                {['Format','M','Inn','Runs','HS','Avg','SR','100s','50s'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-gray-500 font-medium whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {battingStats.map((r, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 last:border-0">
                  <td className="px-4 py-3">
                    <Tag variant={formatTag[r.format] ?? 'gray'}>{r.format}</Tag>
                  </td>
                  <td className="px-4 py-3">{r.m}</td>
                  <td className="px-4 py-3">{r.inn}</td>
                  <td className="px-4 py-3 font-medium">{r.runs}</td>
                  <td className="px-4 py-3 font-semibold" style={{ color: '#1D9E75' }}>{r.hs}</td>
                  <td className="px-4 py-3">{r.avg}</td>
                  <td className="px-4 py-3">{r.sr}</td>
                  <td className="px-4 py-3">{r.hundreds}</td>
                  <td className="px-4 py-3">{r.fifties}</td>
                </tr>
              ))}
              {/* Totals row */}
              <tr className="bg-gray-50 font-semibold">
                <td className="px-4 py-3">Total</td>
                <td className="px-4 py-3">{battingStats.reduce((a, r) => a + r.m, 0)}</td>
                <td className="px-4 py-3">{battingStats.reduce((a, r) => a + r.inn, 0)}</td>
                <td className="px-4 py-3" style={{ color: '#1D9E75' }}>{battingStats.reduce((a, r) => a + r.runs, 0).toLocaleString()}</td>
                <td className="px-4 py-3">113</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">{battingStats.reduce((a, r) => a + r.hundreds, 0)}</td>
                <td className="px-4 py-3">{battingStats.reduce((a, r) => a + r.fifties, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bowling table */}
      <section className="mb-10">
        <SectionTitle>Bowling statistics</SectionTitle>
        <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                {['Format','M','Overs','Wickets','Best','Economy','Avg'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-gray-500 font-medium whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bowlingStats.map((r, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 last:border-0">
                  <td className="px-4 py-3">
                    <Tag variant={formatTag[r.format] ?? 'gray'}>{r.format}</Tag>
                  </td>
                  <td className="px-4 py-3">{r.m}</td>
                  <td className="px-4 py-3">{r.overs}</td>
                  <td className="px-4 py-3 font-medium" style={{ color: '#1D9E75' }}>{r.wkts}</td>
                  <td className="px-4 py-3">{r.best}</td>
                  <td className="px-4 py-3">{r.econ}</td>
                  <td className="px-4 py-3">{r.avg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Runs chart */}
      <section className="mb-10">
        <SectionTitle>Season-by-season runs</SectionTitle>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <RunsChart />
        </div>
      </section>

      {/* Milestones */}
      <section>
        <SectionTitle>Career milestones</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { year: 'Nov 2023', milestone: 'First 50+ in List A cricket', detail: '56 vs Himachal Pradesh U-23, Cooch Behar Trophy' },
            { year: 'Mar 2024', milestone: 'Maiden List-A century', detail: '113 (122) vs Himachal Pradesh — guided Punjab to a 6-wicket win' },
            { year: 'Jan 2025', milestone: '1,000 List-A runs', detail: 'Reached the milestone in the Col CK Nayudu Trophy match vs UP' },
            { year: 'Apr 2025', milestone: '2,500 aggregate runs (all formats)', detail: 'Spread across List A, First Class, and T20 formats' },
          ].map((m, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ background: '#E1F5EE', color: '#0F6E56' }}
              >
                {m.year}
              </span>
              <p className="font-semibold mt-2 text-sm">{m.milestone}</p>
              <p className="text-sm text-gray-500 mt-1">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// src/app/academics/page.tsx
import type { Metadata } from 'next'
import { ProfileHeader, SectionTitle, Card, SkillBar, CertCard, Tag, ProjectCard } from '@/components/ui'
import {
  academicStats, semesters, technicalSkills, certifications, projects,
} from '@/lib/data'

export const metadata: Metadata = { title: 'Academics ' }

export default function AcademicsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 fade-up">
      <ProfileHeader
        icon="🎓"
        name="Academic Profile"
        role="B.Tech Computer Science · Chandigarh University · Batch 2022–26"
        tags={[
          { label: 'CGPA 9.1',             variant: 'blue'  },
          { label: 'Merit Scholarship',    variant: 'green' },
          { label: 'AI/ML Specialisation', variant: 'amber' },
        ]}
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {academicStats.map(s => (
          <div key={s.label} className="bg-gray-100 rounded-xl p-4 text-center">
            <p className="text-2xl font-semibold" style={{ color: '#1D9E75' }}>{s.num}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Semester table */}
      <section className="mb-10">
        <SectionTitle>Semester-wise CGPA</SectionTitle>
        <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                {['Semester','SGPA','Credits','Grade'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-gray-500 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {semesters.map((s, i) => (
                <tr key={i} className={`border-b border-gray-50 last:border-0 ${s.ongoing ? 'bg-amber-50' : 'hover:bg-gray-50'}`}>
                  <td className="px-4 py-3">{s.sem}</td>
                  <td className="px-4 py-3 font-semibold" style={{ color: s.ongoing ? '#888' : '#1D9E75' }}>
                    {s.sgpa ?? '—'}
                  </td>
                  <td className="px-4 py-3">{s.credits}</td>
                  <td className="px-4 py-3">
                    {s.ongoing ? (
                      <Tag variant="amber">Ongoing</Tag>
                    ) : (
                      <Tag variant="green">{s.grade}</Tag>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical skills */}
      <section className="mb-10">
        <SectionTitle>Technical skills</SectionTitle>
        <Card>
          {technicalSkills.map(s => <SkillBar key={s.label} label={s.label} pct={s.pct} />)}
        </Card>
      </section>

      {/* Certifications */}
      <section className="mb-10">
        <SectionTitle>Certifications</SectionTitle>
        {certifications.map((c, i) => (
          <CertCard key={i} icon={c.icon} name={c.name} org={c.org} year={c.year} />
        ))}
      </section>

      {/* Projects */}
      <section className="mb-10">
        <SectionTitle>Projects &amp; research</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={i} title={p.title} desc={p.desc} tags={p.tags} link={p.link} />
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <SectionTitle>Academic achievements</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: '🏅', title: 'Merit Scholarship — 4 consecutive semesters', desc: 'Top 5% of B.Tech CSE batch. ₹80,000 per annum scholarship.' },
            { icon: '📝', title: 'Published at ICAC 2024', desc: 'Research paper on cricket ball tracking using computer vision accepted at the International Conference on Applied Computing.' },
            { icon: '🥇', title: 'Best Project — Dept. of CSE 2024', desc: 'Wrist-strap fatigue monitor won best major project award among 120+ entries.' },
            { icon: '🌐', title: 'Hackathon winner — Smart India Hackathon 2023', desc: 'Led a 6-member team that won in the sports technology problem statement category.' },
          ].map((a, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-3">
              <span className="text-2xl flex-shrink-0">{a.icon}</span>
              <div>
                <p className="font-semibold text-sm">{a.title}</p>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

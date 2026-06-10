// src/app/cricket/page.tsx
import type { Metadata } from 'next'
import { ProfileHeader, SectionTitle, Card, SkillBar, AwardCard, ResultBadge } from '@/components/ui'
import { battingSkills, bowlingSkills, recentMatches, cricketAwards } from '@/lib/data'

export const metadata: Metadata = { title: 'Cricket — ' }

export default function CricketPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 fade-up">
      <ProfileHeader
        icon="🏏"
        name="Cricket Profile"
        role="Right-hand bat · Off-break bowler · Punjab Under-23"
        tags={[
          { label: 'Batsman',           variant: 'green' },
          { label: 'Off-spinner',       variant: 'blue'  },
          { label: 'Middle order',      variant: 'amber' },
          { label: 'Captain (Univ.)',   variant: 'coral' },
        ]}
      />

      {/* Overview cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {[
          { num: '61',  label: 'Matches played' },
          { num: '113', label: 'Highest score'  },
          { num: '46.2',label: 'Batting avg.'   },
          { num: '22',  label: 'Wickets'        },
        ].map(s => (
          <div key={s.label} className="bg-gray-100 rounded-xl p-4 text-center">
            <p className="text-2xl font-semibold" style={{ color: '#1D9E75' }}>{s.num}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <SectionTitle>Batting skills</SectionTitle>
          <Card>
            {battingSkills.map(s => <SkillBar key={s.label} label={s.label} pct={s.pct} />)}
          </Card>
        </div>
        <div>
          <SectionTitle>Bowling skills</SectionTitle>
          <Card>
            {bowlingSkills.map(s => <SkillBar key={s.label} label={s.label} pct={s.pct} />)}
          </Card>
        </div>
      </div>

      {/* Recent matches */}
      <section className="mb-10">
        <SectionTitle>Recent matches</SectionTitle>
        <Card>
          {recentMatches.map((m, i) => (
            <div key={i} className="flex items-center justify-between py-3.5 border-b border-gray-100 last:border-0">
              <div>
                <p className="text-sm font-medium">{m.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{m.date} · {m.comp}</p>
              </div>
              <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                <div className="text-right">
                  <p className="text-sm font-semibold" style={{ color: '#1D9E75' }}>{m.score}</p>
                  <p className="text-xs text-gray-500">{m.note}</p>
                </div>
                <ResultBadge result={m.result} />
              </div>
            </div>
          ))}
        </Card>
      </section>

      {/* Playing style */}
      <section className="mb-10">
        <SectionTitle>Playing style</SectionTitle>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: '🦶',
              heading: 'Footwork',
              body: 'Exceptional movement against both pace and spin. Comfortable on back foot against short deliveries and front foot against full-pitched balls.',
            },
            {
              icon: '🎯',
              heading: 'Shot selection',
              body: 'Builds innings methodically in red-ball cricket. Switches to aggression in T20 without compromising technique. Cover drive is the signature shot.',
            },
            {
              icon: '🔄',
              heading: 'Off-spin',
              body: 'Delivers consistent off-breaks with a subtle arm ball as the main variation. Economy of 5.1 in List-A cricket is his best asset as a part-time bowler.',
            },
          ].map(c => (
            <div key={c.heading} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-sm mb-1">{c.heading}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <SectionTitle>Awards &amp; recognition</SectionTitle>
        <Card>
          {cricketAwards.map((a, i) => (
            <AwardCard key={i} icon={a.icon} title={a.title} desc={a.desc} />
          ))}
        </Card>
      </section>
    </div>
  )
}


import Image from 'next/image'
import { Timeline } from '@/components/ui'
import { profile, heroStats, timeline } from '@/lib/data'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Cricket', href: '/cricket' },
  { label: 'Stats', href: '/stats' },
  { label: 'Academics', href: '/academics' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

const pillars = [
  {
    number: '01',
    eyebrow: 'ON THE FIELD',
    heading: 'Cricket',
    body: 'J&K Under-23 · Fast bowler · Right-hand batsman',
    href: '/cricket',
  },
  {
    number: '02',
    eyebrow: 'IN THE CLASSROOM',
    heading: 'History',
    body: 'B.A History · University of Jammu',
    href: '/academics',
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-6 sm:mb-8">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
        {eyebrow}
      </p>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-[family-name:var(--font-space)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-md text-sm leading-6 text-slate-400 sm:text-right">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function Home() {
  const firstName = profile.name.split(' ')[0]
  const lastName = profile.name.split(' ').slice(1).join(' ')

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute right-[-10rem] top-[22rem] h-[30rem] w-[30rem] rounded-full bg-emerald-400/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8 sm:py-7 lg:px-10">
        {/* NAV */}
        <header className="mb-12 flex items-center justify-between gap-5 lg:mb-20">
          <Link
            href="/"
            className="group flex items-center gap-2 font-[family-name:var(--font-space)] text-sm font-bold tracking-tight text-white"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-400 text-sm font-black text-[#07111f] transition-transform group-hover:rotate-6">
              {firstName.charAt(0)}
            </span>
            <span className="hidden sm:block">{profile.name}</span>
          </Link>

          <nav className="flex max-w-[72vw] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.045] p-1 backdrop-blur-xl scrollbar-none">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full px-3 py-2 text-[11px] font-semibold text-slate-400 transition-all hover:bg-white/10 hover:text-white sm:px-4 sm:text-xs"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* HERO */}
        <section className="relative mb-20 lg:mb-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            {/* Copy */}
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
                Cricketer · Student · Leader
              </div>

              <h1 className="font-[family-name:var(--font-space)] text-[3.3rem] font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl uppercase">
                {firstName}
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                  {lastName}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                {profile.about}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {['J&K U-23', 'Fast Bowler', 'Right-hand Batsman'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cricket"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-[#07111f] shadow-[0_10px_35px_rgba(34,211,238,.15)] transition-all hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Cricket profile <Arrow />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/[0.09]"
                >
                  Let&apos;s connect
                </Link>
              </div>
            </div>

            {/* Portrait */}
            <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-emerald-400/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-2 shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#101d2d]">
                  {profile.avatar ? (
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      fill
                      priority
                      className="object-cover"
                    />
                  ) : (
                    <div className="grid h-full place-items-center bg-gradient-to-br from-slate-800 to-slate-950">
                      <span className="font-[family-name:var(--font-space)] text-7xl font-black text-cyan-300">
                        {profile.name
                          .split(' ')
                          .slice(0, 2)
                          .map((n: string) => n[0])
                          .join('')}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                        Current role
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        J&K Under-23
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-right backdrop-blur-md">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                        Based in
                      </p>
                      <p className="mt-0.5 text-xs font-semibold text-white">
                        Kashmir
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-3 rounded-2xl border border-white/10 bg-[#0b1828]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  On & off the field
                </p>
                <p className="mt-1 text-xs font-semibold text-white">
                  Discipline · Curiosity · Growth
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mb-20 lg:mb-28">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] sm:grid-cols-4">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-4 py-6 sm:px-6 sm:py-7 ${
                  index < heroStats.length - 1
                    ? 'border-b border-white/10 sm:border-b-0 sm:border-r'
                    : ''
                } ${
                  index === 0 || index === 2 ? 'border-r' : ''
                } border-white/10`}
              >
                <p className="font-[family-name:var(--font-space)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {stat.num}
                </p>
                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PILLARS */}
        <section className="mb-20 lg:mb-28">
          <SectionHeading
            eyebrow="What defines me"
            title="Two worlds. One mindset."
            description="Competitive on the field, curious at the keyboard — always focused on learning and improving."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {pillars.map((pillar) => (
              <Link
                key={pillar.heading}
                href={pillar.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.06] sm:p-8"
              >
                <span className="absolute right-6 top-5 font-[family-name:var(--font-space)] text-5xl font-black text-white/[0.035]">
                  {pillar.number}
                </span>

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-space)] text-2xl font-bold text-white">
                  {pillar.heading}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                  {pillar.body}
                </p>

                <span className="mt-7 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all group-hover:border-cyan-300/30 group-hover:bg-cyan-400 group-hover:text-[#07111f]">
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="mb-20 lg:mb-28">
          <SectionHeading
            eyebrow="The journey"
            title="Career timeline"
            description="A quick look at the experiences and milestones that have shaped the journey so far."
          />

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-8">
            <Timeline items={timeline} />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative mb-8 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/[0.09] via-white/[0.035] to-emerald-400/[0.07] p-7 sm:p-10 lg:p-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                Open to opportunities
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-space)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s build something meaningful.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Whether it&apos;s cricket, technology, or an interesting project,
                I&apos;m always open to connecting with people who are building,
                learning, and creating.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#07111f] transition-all hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Get in touch <Arrow />
            </Link>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>{profile.name}</span>
          <span>Cricket · Computer Science · Continuous Growth</span>
        </footer>
      </div>
    </main>
  )
}


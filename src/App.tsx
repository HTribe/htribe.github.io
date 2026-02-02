import { SectionCard, type SectionCardProps } from './components/SectionCard'
import { EventItem, type EventItemProps } from './components/EventItem'
import {
  PartnerOrganizationItem,
  type PartnerOrganizationItemProps,
} from './components/PartnerOrganizationItem'

function App() {
  const partnerOrganizations = [
    {
      name: 'Clearbot',
      logoSrc: '/vite.svg',
      href: '#design',
    },
    {
      name: 'DimSum Labs',
      logoSrc: '/vite.svg',
      href: '#recruitment',
    },
  ] satisfies PartnerOrganizationItemProps[]

  const events = [
    {
      category: 'Community',
      date: 'Feb 10',
      description: 'Weekly build jam: ship something small.',
      href: '#community',
      ctaLabel: 'Open',
    },
    {
      category: 'Design',
      date: 'Feb 14',
      description: 'Showcase: a clean onboarding flow.',
      href: '#design',
      ctaLabel: 'Open',
    },
    {
      category: 'Recruitment',
      date: 'Feb 18',
      description: 'Looking for a React dev for a 2-week sprint.',
      href: '#recruitment',
      ctaLabel: 'Open',
    },
  ] satisfies EventItemProps[]

  const sections = [
    {
      id: 'community',
      eyebrow: 'Community',
      eyebrowClassName: 'text-[rgb(16,72,98)]',
      title: 'Find your people.',
      description:
        'Join discussions, share progress, and get feedback from builders who actually ship.',
      bullets: [
        'Topic channels for projects and interests',
        'Weekly prompts to keep momentum',
        'Member spotlights and wins',
      ],
      bulletDotClassName: 'bg-[rgb(16,72,98)]',
      actions: [
        {
          label: 'Browse community',
          href: '#',
          variant: 'secondary',
        },
      ],
    },
    {
      id: 'design',
      eyebrow: 'Design',
      eyebrowClassName: 'text-[rgb(16,72,98)]',
      title: 'Make it feel right.',
      description:
        'From rough ideas to polished flows—share your work and improve fast with structured critique.',
      bullets: [
        'Design galleries and case studies',
        'Feedback templates for clarity',
        'Components, tokens, and UI patterns',
      ],
      bulletDotClassName: 'bg-[rgb(16,72,98)]',
      actions: [
        {
          label: 'View design work',
          href: '#',
          variant: 'secondary',
        },
      ],
    },
    {
      id: 'recruitment',
      eyebrow: 'Recruitment',
      eyebrowClassName: 'text-[rgb(16,72,98)]',
      title: 'Build teams that ship.',
      description:
        'Post roles, find collaborators, and match with people based on real work—not buzzwords.',
      bullets: [
        'Short-term sprints or long-term roles',
        'Portfolios and proof-of-work',
        'Clear expectations and time commitment',
      ],
      bulletDotClassName: 'bg-[rgb(16,72,98)]',
      actions: [
        {
          label: 'Create a listing',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Browse roles',
          href: '#',
          variant: 'secondary',
        },
      ],
    },
  ] satisfies SectionCardProps[]

  return (
    <div className="min-h-screen bg-[rgb(255,253,241)] text-[rgb(16,72,98)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,72,98,0.18),rgba(255,253,241,0))]" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-lg font-semibold tracking-tight">
          HTribe
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[rgb(16,72,98)]/80 md:flex">
          <a className="hover:text-[rgb(16,72,98)]" href="#community">
            Community
          </a>
          <a className="hover:text-[rgb(16,72,98)]" href="#design">
            Design
          </a>
          <a className="hover:text-[rgb(16,72,98)]" href="#recruitment">
            Recruitment
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#recruitment"
            className="rounded-xl bg-[rgb(16,72,98)] px-4 py-2 text-sm font-medium text-[rgb(255,253,241)] shadow-sm hover:bg-[rgb(14,62,85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(16,72,98)]"
          >
            Join
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-14 pt-10 md:pb-20 md:pt-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-stretch">
            <div className="h-full space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-[rgb(16,72,98)]/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[rgb(16,72,98)]" aria-hidden="true" />
                Built for builders, designers, and doers
              </div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                HTribe brings community, design, and recruitment into one place.
              </h1>
              <p className="max-w-xl text-pretty text-[rgb(16,72,98)]/80">
                A lightweight home for sharing work, discovering collaborators, and turning projects into teams.
              </p>

              <section className="mt-6 rounded-2xl border border-slate-200 bg-white/60 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-sm font-medium">Partner Organizations</h2>
                  <span className="text-xs text-[rgb(16,72,98)]/60">Featured</span>
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {partnerOrganizations.map((org) => (
                    <PartnerOrganizationItem key={org.name} {...org} />
                  ))}
                </div>
              </section>
            </div>

            <div className="h-full rounded-3xl border border-slate-200 bg-gradient-to-b from-white/80 to-white/50 p-6 shadow-[0_0_0_1px_rgba(226,232,240,0.8)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Upcoming Events</p>
                  <span className="text-xs text-[rgb(16,72,98)]/60">Preview</span>
                </div>
                <div className="space-y-3">
                  {events.map((event) => (
                    <EventItem key={event.category} {...event} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((section) => (
              <SectionCard key={section.id} {...section} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-[rgb(16,72,98)]/80 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} HTribe</p>
          <p className="text-[rgb(16,72,98)]/60">Community • Design • Recruitment</p>
        </div>
      </footer>
    </div>
  )
}

export default App

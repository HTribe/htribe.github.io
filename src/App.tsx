import { SectionCard } from './components/SectionCard'
import { EventItem } from './components/EventItem'
import { Header } from './components/Header'
import { PartnerOrganizationItem } from './components/PartnerOrganizationItem'
import { events, partnerOrganizations, sections } from './data/home'

function App() {
  return (
    <div className="min-h-screen bg-[rgb(255,253,241)] text-[rgb(16,72,98)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,72,98,0.18),rgba(255,253,241,0))]" />

      <Header />

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

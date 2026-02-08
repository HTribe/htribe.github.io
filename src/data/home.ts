import type { EventItemProps } from '../components/EventItem'
import type { PartnerOrganizationItemProps } from '../components/PartnerOrganizationItem'
import type { SectionCardProps } from '../components/SectionCard'

export const partnerOrganizations = [
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

export const events = [
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

export const sections = [
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

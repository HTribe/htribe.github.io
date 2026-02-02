export type EventItemProps = {
  category: string;
  date: string;
  description: string;
  href: string;
  ctaLabel?: string;
};

export function EventItem({ category, date, description, href, ctaLabel = 'View' }: EventItemProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-[rgb(16,72,98)]/60">{category}</p>
        <p className="text-xs text-[rgb(16,72,98)]/60">{date}</p>
      </div>
      <p className="mt-1 text-sm">{description}</p>
      <div className="mt-3">
        <a
          href={href}
          className="inline-flex items-center justify-center rounded-xl bg-[rgb(16,72,98)] px-3 py-1.5 text-xs font-medium text-[rgb(255,253,241)] hover:bg-[rgb(14,62,85)]"
          aria-label={`${ctaLabel}: ${category} (${date})`}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

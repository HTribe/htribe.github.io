export type SectionCardAction = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  className?: string;
};

export type SectionCardProps = {
  id: string;
  eyebrow: string;
  eyebrowClassName: string;
  title: string;
  description: string;
  bullets: string[];
  bulletDotClassName: string;
  actions: SectionCardAction[];
};

export function SectionCard({
  id,
  eyebrow,
  eyebrowClassName,
  title,
  description,
  bullets,
  bulletDotClassName,
  actions,
}: SectionCardProps) {
  return (
    <article id={id} className="rounded-3xl border border-slate-200 bg-white/60 p-6 shadow-sm">
      <p className={'text-xs font-medium ' + eyebrowClassName}>{eyebrow}</p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm text-[rgb(16,72,98)]/80">{description}</p>

      <ul className="mt-4 space-y-2 text-sm text-[rgb(16,72,98)]/80">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span
              className={"mt-2 h-1.5 w-1.5 flex-none rounded-full " + bulletDotClassName}
              aria-hidden="true"
            />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {actions.map((action) => {
          const defaultPrimaryClassName =
            "inline-flex items-center justify-center rounded-xl bg-[rgb(16,72,98)] px-4 py-2 text-sm font-medium text-[rgb(255,253,241)] hover:bg-[rgb(14,62,85)]";
          const defaultSecondaryClassName =
            "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-[rgb(16,72,98)] hover:bg-white";

          const className =
            action.className ??
            (action.variant === 'primary' ? defaultPrimaryClassName : defaultSecondaryClassName);

          return (
            <a key={action.label} href={action.href} className={className}>
              {action.label}
            </a>
          );
        })}
      </div>
    </article>
  );
}

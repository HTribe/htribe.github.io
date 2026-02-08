export type PartnerOrganizationItemProps = {
  name: string;
  logoSrc: string;
  href?: string;
};

export function PartnerOrganizationItem({ name, logoSrc, href }: PartnerOrganizationItemProps) {
  const content = (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4">
      <img
        src={logoSrc}
        alt={`${name} logo`}
        className="h-10 w-10 rounded-xl border border-slate-200 bg-white object-contain"
        loading="lazy"
      />
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{name}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(16,72,98)]">
      {content}
    </a>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill={light ? '#fff' : '#1769AA'} />
        <path d="M9 25V15a7 7 0 0 1 14 0v10" fill="none" stroke={light ? '#1769AA' : '#fff'} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M13 25v-9a3 3 0 0 1 6 0v9" fill="none" stroke={light ? '#123A70' : '#EAF3FB'} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className={`font-display text-xl font-bold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        Alkaitan
      </span>
    </span>
  )
}

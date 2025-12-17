type props = {
  href: string
  children?: React.ReactNode
}

export default function ExternalLink({href, children}: props) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="
        inline-flex items-center gap-0.5
        font-medium text-sky-600
        underline-offset-4
        transition-colors transition-transform
        hover:text-sky-500 hover:underline
        focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50
        active:translate-y-px
      ">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 opacity-70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  );
}
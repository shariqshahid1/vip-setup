interface LogoProps {
  light?: boolean;
  className?: string;
}

export default function Logo({ light = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <span
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 shrink-0 ${
          light ? "" : "ring-2 ring-primary/20"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7 text-white"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4.5 8.5h15l-1.1-1.75C16.9 4.6 14.6 3.3 12 3.3S7.1 4.6 5.6 6.75L4.5 8.5z" />
          <circle cx="9" cy="6.4" r="0.7" fill="#fff" />
          <circle cx="12" cy="5.6" r="0.7" fill="#fff" />
          <circle cx="15" cy="6.4" r="0.7" fill="#fff" />
          <path d="M2 10.8h20v1.9H2z" />
          <path d="M3.5 14.1h17v1.4H3.5z" />
          <path d="M2 16.9h20v1.1H2z" />
          <path d="M4 18.9h16a1.8 1.8 0 0 1 1.8 1.8v.4H2.2v-.4A1.8 1.8 0 0 1 4 18.9z" />
        </svg>
      </span>
      <div className="leading-none text-left">
        <span
          className={`block font-display text-2xl sm:text-3xl tracking-tight ${
            light ? "text-white" : "text-on-surface"
          }`}
        >
          VIP{" "}
          <span className={light ? "text-tertiary-fixed-dim" : "text-primary"}>
            SETUP
          </span>
        </span>
        <span
          className={`block text-[8px] sm:text-[9px] font-bold tracking-[0.35em] mt-1 uppercase ${
            light ? "text-tertiary-fixed" : "text-primary"
          }`}
        >
          Food · Bahadurabad
        </span>
      </div>
    </div>
  );
}

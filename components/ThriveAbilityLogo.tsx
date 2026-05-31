export function ThriveAbilityIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="barG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5DE8F8" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id="arrowG" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="50%" stopColor="#009FBF" />
          <stop offset="100%" stopColor="#00C8E8" />
        </linearGradient>
        <linearGradient id="ringG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#00C8E8" />
        </linearGradient>
      </defs>

      {/* Oval orbit ring */}
      <ellipse
        cx="103"
        cy="152"
        rx="74"
        ry="19"
        stroke="url(#ringG)"
        strokeWidth="8"
      />

      {/* Three ascending bars */}
      <rect x="62" y="102" width="18" height="50" rx="2" fill="url(#barG)" />
      <rect x="87" y="80" width="18" height="72" rx="2" fill="url(#barG)" />
      <rect x="112" y="55" width="18" height="97" rx="2" fill="url(#barG)" />

      {/* Swooping growth arrow — sweeps from lower-left around to upper-right */}
      <path
        d="M 26 162 C 16 138 18 100 40 74 C 60 50 90 33 126 28 C 150 24 166 31 174 46"
        stroke="url(#arrowG)"
        strokeWidth="13"
        strokeLinecap="round"
      />

      {/* Arrowhead pointing upper-right */}
      <polygon points="180,28 164,46 190,52" fill="#00C8E8" />
    </svg>
  );
}

export function ThriveAbilityLogo({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <ThriveAbilityIcon className="h-10 w-10 shrink-0" />
      <div className="flex flex-col leading-tight">
        <span
          className={`font-black text-xl tracking-tight leading-none ${
            dark ? "text-navy" : "text-white"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          THRIVE
        </span>
        <span
          className="text-cyan text-[10px] tracking-[0.18em] font-semibold leading-none mt-0.5"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          ABILITY, LLC
        </span>
      </div>
    </div>
  );
}

export function ThriveAbilityLogoLarge({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className ?? ""}`}>
      <ThriveAbilityIcon className="h-24 w-24" />
      <div className="text-center">
        <span
          className="block font-black text-4xl tracking-tight text-white leading-none"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          THRIVE
        </span>
        <span
          className="block text-cyan text-sm tracking-[0.22em] font-semibold mt-1"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          ABILITY, LLC
        </span>
      </div>
    </div>
  );
}

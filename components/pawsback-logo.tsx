export function PawsBackLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PawsBack Logo"
    >
      {/* Main paw pad */}
      <ellipse cx="24" cy="32" rx="10" ry="8" fill="currentColor" className="text-zinc-900" />

      {/* Toe pad 1 (top left) */}
      <ellipse cx="13" cy="20" rx="5" ry="6" fill="currentColor" className="text-zinc-900" />

      {/* Toe pad 2 (top center-left) */}
      <ellipse cx="20" cy="15" rx="5" ry="6" fill="currentColor" className="text-zinc-900" />

      {/* Toe pad 3 (top center-right) */}
      <ellipse cx="28" cy="15" rx="5" ry="6" fill="currentColor" className="text-zinc-900" />

      {/* Toe pad 4 (top right) */}
      <ellipse cx="35" cy="20" rx="5" ry="6" fill="currentColor" className="text-zinc-900" />

      {/* Heart shape overlay on main pad to represent love/care */}
      <path
        d="M24 29 C24 29, 21 26, 19 26 C17 26, 16 27, 16 28.5 C16 30, 17 31, 19 32.5 L24 36 L29 32.5 C31 31, 32 30, 32 28.5 C32 27, 31 26, 29 26 C27 26, 24 29, 24 29 Z"
        fill="white"
        opacity="0.3"
      />
    </svg>
  )
}

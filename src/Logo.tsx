interface LogoProps {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
}

/**
 * Logo MS Inteligência — reprodução fiel da marca fornecida:
 * colchetes [ ], "M" na cor de texto, "S" em Signal Green, wordmark "inteligência".
 */
export default function Logo({ variant = "dark", showWordmark = true, className = "" }: LogoProps) {
  const ink = variant === "light" ? "#FFFFFF" : "#0B0C0E";
  const signal = variant === "light" ? "#3FA463" : "#1B673E";

  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`} aria-label="MS Inteligência">
      <svg width="52" height="34" viewBox="0 0 130 84" fill="none" role="img" aria-hidden="true">
        {/* left bracket */}
        <path d="M18 8 H6 V76 H18" stroke={ink} strokeWidth="8" fill="none" />
        {/* right bracket */}
        <path d="M112 8 H124 V76 H112" stroke={ink} strokeWidth="8" fill="none" />
        {/* M */}
        <text
          x="30"
          y="63"
          fontFamily="Archivo, sans-serif"
          fontWeight="900"
          fontSize="60"
          fill={ink}
          letterSpacing="-2"
        >
          M
        </text>
        {/* S */}
        <text
          x="72"
          y="63"
          fontFamily="Archivo, sans-serif"
          fontWeight="900"
          fontSize="60"
          fill={signal}
          letterSpacing="-2"
        >
          S
        </text>
      </svg>
      {showWordmark && (
        <span
          className="font-display"
          style={{ color: ink, fontWeight: 700, fontSize: 21, letterSpacing: "-0.02em" }}
        >
          inteligência
        </span>
      )}
    </span>
  );
}

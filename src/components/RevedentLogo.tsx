import { useId } from "react";

interface RevedentLogoProps {
  textColor?: string;
  height?: number;
  className?: string;
}

export function RevedentLogo({
  textColor = "#071E33",
  height = 32,
  className = "",
}: RevedentLogoProps) {
  const uid = useId().replace(/:/g, "");
  const navyBlue = `navyBlue-${uid}`;
  const barGrad = `barGrad-${uid}`;
  const swooshBlue = `swooshBlue-${uid}`;
  const softShadow = `softShadow-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 760 240"
      role="img"
      aria-label="Revedent logo"
      height={height}
      className={className}
      style={{ width: "auto" }}
    >
      <defs>
        <linearGradient id={navyBlue} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#071E33" />
          <stop offset="58%" stopColor="#0B3F8A" />
          <stop offset="100%" stopColor="#1F9CFF" />
        </linearGradient>
        <linearGradient id={barGrad} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#071E33" />
          <stop offset="70%" stopColor="#0E4FA8" />
          <stop offset="100%" stopColor="#28BDFD" />
        </linearGradient>
        <linearGradient id={swooshBlue} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0B5BD3" />
          <stop offset="45%" stopColor="#1F9CFF" />
          <stop offset="100%" stopColor="#35D2FF" />
        </linearGradient>
        <filter id={softShadow} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#071E33" floodOpacity="0.16" />
        </filter>
      </defs>

      <g transform="translate(28 28)" filter={`url(#${softShadow})`}>
        <path d="M20 137 C20 126 29 117 40 117 H58 C69 117 78 126 78 137 V171 H20 Z" fill={`url(#${barGrad})`} />
        <path d="M86 104 C86 93 95 84 106 84 H124 C135 84 144 93 144 104 V171 H86 Z" fill={`url(#${barGrad})`} />
        <path d="M152 62 C152 51 161 42 172 42 H190 C201 42 210 51 210 62 V171 H152 Z" fill={`url(#${barGrad})`} />
        <path d="M218 25 C218 14 227 5 238 5 H256 C267 5 276 14 276 25 V171 H218 Z" fill={`url(#${barGrad})`} />

        <path d="M4 158 C67 94 122 91 169 74 C212 59 236 32 276 12 C256 48 229 75 191 91 C135 114 76 118 4 178 Z" fill="#FFFFFF" opacity="0.98" />
        <path d="M6 145 C67 84 121 82 168 66 C213 50 235 25 276 6 C259 37 231 64 193 79 C139 101 80 104 6 164 Z" fill={`url(#${swooshBlue})`} />
        <path d="M5 166 C69 111 122 112 174 95 C220 80 245 47 275 18 C256 61 226 95 179 113 C122 135 68 133 5 184 Z" fill="#071E33" opacity="0.92" />
        <path d="M8 160 C72 105 125 105 176 88 C218 74 242 46 274 17 C252 59 226 86 184 103 C127 126 73 124 8 178 Z" fill="#FFFFFF" />
      </g>

      <text
        x="335"
        y="150"
        fontFamily="Inter, Avenir Next, Montserrat, Arial, sans-serif"
        fontSize="88"
        fontWeight="800"
        letterSpacing="-3"
        fill={textColor}
      >
        Revedent
      </text>
    </svg>
  );
}

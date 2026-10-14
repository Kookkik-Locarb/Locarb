import React from 'react';

interface IfrsAllianceSealProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export const IfrsAllianceSeal: React.FC<IfrsAllianceSealProps> = ({
  className = '',
  size = 132,
  interactive = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group ${className}`}
      style={{ width: size, height: size }}
      title="IFRS Sustainability Alliance · First Member in Thailand"
    >
      {/* Ambient Halo Glow */}
      <div className="absolute inset-0 rounded-full bg-[#0EA552]/15 blur-xl pointer-events-none group-hover:bg-[#0EA552]/25 transition-all duration-500" />

      {/* Outer Coin Edge Ring with Micro-notches */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <circle
          cx="80"
          cy="80"
          r="78"
          fill="none"
          stroke="#0B7A3E"
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />
        <circle
          cx="80"
          cy="80"
          r="75"
          fill="none"
          stroke="#0B7A3E"
          strokeWidth="1.5"
          strokeDasharray="2 4"
          strokeOpacity="0.4"
        />
      </svg>

      {/* Rotating Outer Text Ring (IFRS SUSTAINABILITY ALLIANCE • THAILAND •) */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        className={`w-full h-full ${interactive ? 'animate-spin-slow' : ''} pointer-events-none`}
      >
        <defs>
          {/* Calibrated Circular Path: Radius = 56px, Perimeter = ~352px */}
          <path
            id="ifrsSealPath"
            d="M 80, 80 m -56, 0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0"
            fill="none"
          />
        </defs>

        {/* Fine Inner Ring */}
        <circle
          cx="80"
          cy="80"
          r="66"
          fill="none"
          stroke="#0B7A3E"
          strokeWidth="0.8"
          strokeOpacity="0.25"
        />
        <circle
          cx="80"
          cy="80"
          r="45"
          fill="none"
          stroke="#0B7A3E"
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {/* Circular Lettering */}
        <text
          fontFamily="Termina, Montserrat, sans-serif"
          fontWeight="800"
          fontSize="9.2"
          letterSpacing="1.8"
          fill="#0B7A3E"
          className="uppercase drop-shadow-2xs"
        >
          <textPath href="#ifrsSealPath" startOffset="0%">
            IFRS SUSTAINABILITY ALLIANCE • THAILAND •{' '}
          </textPath>
        </text>
      </svg>

      {/* Center Prestigious Medallion Core (Stationary / Parallax Center) */}
      <div
        className="absolute w-[80px] h-[80px] sm:w-[86px] sm:h-[86px] rounded-full bg-gradient-to-br from-[#0B7A3E] via-[#0E8B47] to-[#065027] p-0.5 shadow-[0_8px_20px_-4px_rgba(11,122,62,0.45),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: size * 0.58, height: size * 0.58 }}
      >
        {/* Fine Inner Border */}
        <div className="w-full h-full rounded-full border border-white/30 flex flex-col items-center justify-center relative overflow-hidden text-center p-1 bg-gradient-to-b from-white/10 to-transparent">
          {/* Specular Highlight Arc */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-full pointer-events-none" />

          {/* 3 Heraldic Stars (S1 · S2 · ISSB) */}
          <div className="flex items-center gap-1 text-[#F3F0DF] text-[8px] sm:text-[9px] mb-0.5 relative z-10 opacity-90">
            <span>★</span>
            <span className="text-[10px] sm:text-[11px] text-[#F3F0DF] font-bold">★</span>
            <span>★</span>
          </div>

          {/* Center Emblem: Stylized Laurel & Leaf Core */}
          <div className="relative z-10 flex flex-col items-center">
            <svg
              viewBox="0 0 32 20"
              className="w-7 h-4 sm:w-8 sm:h-5 text-[#F3F0DF] overflow-visible"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Left Laurel Branch */}
              <path d="M4 16 C 4 10, 8 5, 16 3" strokeWidth="1.4" />
              <path d="M6 13 C 4 11, 4 9, 6 8" fill="currentColor" />
              <path d="M10 8 C 8 7, 8 5, 10 4" fill="currentColor" />

              {/* Right Laurel Branch */}
              <path d="M28 16 C 28 10, 24 5, 16 3" strokeWidth="1.4" />
              <path d="M26 13 C 28 11, 28 9, 26 8" fill="currentColor" />
              <path d="M22 8 C 24 7, 24 5, 22 4" fill="currentColor" />

              {/* Center Seedling Leaf */}
              <path
                d="M16 16 C 14 11, 16 7, 16 7 C 16 7, 18 11, 16 16 Z"
                fill="#F3F0DF"
                stroke="none"
              />
            </svg>

            {/* Inscription: ALLIANCE MEMBER */}
            <span className="font-termina font-bold text-[7px] sm:text-[8px] uppercase tracking-[0.14em] text-[#F3F0DF] leading-none mt-1">
              MEMBER
            </span>
            <span className="font-stix italic text-[8.5px] sm:text-[9.5px] text-[#CFE9D8] leading-none mt-0.5">
              1st in Thailand
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

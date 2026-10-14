import React from 'react';

interface OrganicCurveDividerProps {
  fillColor?: string; // color of the wave itself
  bgColor?: string; // background of the container
  variant?: 'wave-down' | 'wave-up' | 'pill-curve' | 'slant-curve';
  className?: string;
  flip?: boolean;
}

export const OrganicCurveDivider: React.FC<OrganicCurveDividerProps> = ({
  fillColor = '#0EA552',
  bgColor = 'transparent',
  variant = 'wave-down',
  className = '',
  flip = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none -my-0.5 relative z-10 ${className}`}
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      {variant === 'wave-down' && (
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-10 sm:h-16 lg:h-20 block ${flip ? 'rotate-180' : ''}`}
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
        >
          <path
            d="M0 0C240 64 480 96 720 96C960 96 1200 64 1440 0V96H0V0Z"
            fill={fillColor}
          />
        </svg>
      )}

      {variant === 'wave-up' && (
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-10 sm:h-16 lg:h-20 block ${flip ? 'rotate-180' : ''}`}
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
        >
          <path
            d="M0 96C280 32 540 0 720 0C900 0 1160 32 1440 96H0Z"
            fill={fillColor}
          />
        </svg>
      )}

      {variant === 'pill-curve' && (
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-12 sm:h-20 lg:h-24 block ${flip ? 'rotate-180' : ''}`}
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
        >
          <path
            d="M0 0C320 80 600 120 720 120C840 120 1120 80 1440 0V120H0V0Z"
            fill={fillColor}
          />
        </svg>
      )}

      {variant === 'slant-curve' && (
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-10 sm:h-16 lg:h-20 block ${flip ? 'scale-x-[-1]' : ''}`}
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
        >
          <path
            d="M0 80L1440 0V80H0Z"
            fill={fillColor}
          />
        </svg>
      )}
    </div>
  );
};

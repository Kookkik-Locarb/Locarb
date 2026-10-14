import React from 'react';
import { Language } from '../../types/content';

interface BrandHeadlineProps {
  lang: Language;
  className?: string;
  size?: 'hero' | 'h1' | 'h2' | 'h3';
  as?: 'h1' | 'h2' | 'h3' | 'div';
  outlineColor?: 'green' | 'offwhite' | 'black';
  inverted?: boolean;
  children?: React.ReactNode;
}

export const BrandHeadline: React.FC<BrandHeadlineProps> = ({
  lang,
  className = '',
  size = 'h1',
  as: Component = 'h1',
  inverted = false,
  children,
}) => {
  const sizeClasses = {
    hero: 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight',
    h1: 'text-3xl sm:text-5xl md:text-6xl leading-[1.12] tracking-tight',
    h2: 'text-2xl sm:text-4xl md:text-5xl leading-[1.18] tracking-tight',
    h3: 'text-xl sm:text-2xl md:text-3xl leading-[1.25]',
  }[size];

  if (lang === 'th') {
    return (
      <Component
        className={`font-anakotmai font-bold th-text ${sizeClasses} ${
          inverted ? 'text-[#F3F0DF]' : 'text-[#000000]'
        } ${className}`}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={`font-termina font-black uppercase ${sizeClasses} ${
        inverted ? 'text-[#F3F0DF]' : 'text-[#000000]'
      } ${className}`}
    >
      {children}
    </Component>
  );
};

/**
 * Italic Serif emphasis word for the brand's signature typographical mix
 * (STIX Two Text Bold Italic, matching locarb.green)
 */
export const HeadlineEmphasis: React.FC<{
  children: React.ReactNode;
  className?: string;
  color?: string;
}> = ({ children, className = '', color }) => {
  return (
    <span
      className={`font-stix italic font-bold tracking-normal inline-block px-1 pr-2 ${
        color ? color : 'text-[#0EA552]'
      } ${className}`}
    >
      {children}
    </span>
  );
};

/**
 * Outlined word with transparent fill and stroke
 */
export const HeadlineToOutline: React.FC<{
  children: React.ReactNode;
  variant?: 'green' | 'offwhite' | 'black';
  className?: string;
}> = ({ children, variant = 'green', className = '' }) => {
  const outlineClass =
    variant === 'offwhite'
      ? 'text-outline-offwhite'
      : variant === 'black'
      ? 'text-outline-black'
      : 'text-outline-green';

  return (
    <span className={`inline-block font-black select-none ${outlineClass} ${className}`}>
      {children}
    </span>
  );
};


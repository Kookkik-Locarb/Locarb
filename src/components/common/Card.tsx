import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'offwhite' | 'green' | 'outline' | 'dark';
  interactive?: boolean;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'white',
  interactive = false,
  onClick,
  padding = 'md',
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  }[padding];

  const variantClasses = {
    white: 'bg-white text-[#000000] border border-[#000000]/8 shadow-sm',
    offwhite: 'bg-[#F3F0DF] text-[#000000] border border-[#000000]/10',
    green: 'bg-[#0EA552] text-[#F3F0DF] shadow-md',
    outline: 'bg-transparent border-2 border-[#000000]/15 text-[#000000]',
    dark: 'bg-[#111111] text-[#F3F0DF] border border-white/10 shadow-lg',
  }[variant];

  const interactiveClasses = interactive
    ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer'
    : '';

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl sm:rounded-3xl overflow-hidden ${variantClasses} ${paddingClasses} ${interactiveClasses} ${className}`}
    >
      {children}
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'offwhite' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  external?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  external = false,
  fullWidth = false,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer rounded-full select-none text-center focus-visible:outline-2 focus-visible:outline-offset-2';

  const sizeClasses = {
    sm: 'text-xs md:text-sm px-4 py-2 gap-1.5 min-h-[36px]',
    md: 'text-sm md:text-base px-6 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base md:text-lg px-8 py-3.5 gap-2.5 min-h-[52px]',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#0EA552] text-[#F3F0DF] hover:bg-[#00C281] hover:text-[#000000] shadow-sm hover:shadow-md active:scale-[0.98]',
    secondary:
      'bg-[#000000] text-[#F3F0DF] hover:bg-[#0EA552] hover:text-[#F3F0DF] shadow-sm active:scale-[0.98]',
    outline:
      'bg-transparent border-2 border-[#0EA552] text-[#0EA552] hover:bg-[#0EA552] hover:text-[#F3F0DF] active:scale-[0.98]',
    offwhite:
      'bg-[#F3F0DF] text-[#000000] hover:bg-white hover:text-[#0EA552] shadow-sm active:scale-[0.98] border border-[#000000]/10',
    ghost:
      'bg-transparent text-[#000000] hover:bg-[#0EA552]/10 hover:text-[#0EA552]',
  }[variant];

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  if (to) {
    if (external) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
          {icon && <span className="inline-flex shrink-0">{icon}</span>}
        </a>
      );
    }
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};

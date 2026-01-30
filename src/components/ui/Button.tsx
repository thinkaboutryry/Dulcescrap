import React from 'react';
import { Link } from 'react-router';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  
  // Base styles matching the "Nunito" 24px requirement and rounded-30px
  const baseStyles = "inline-flex items-center justify-center rounded-[30px] font-['Nunito'] font-medium text-[20px] md:text-[24px] tracking-[-0.72px] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3";
  
  const variants = {
    // Pink background, white text, hover effect
    primary: "bg-[#ec268f] text-white hover:bg-[#d61f7a] shadow-lg hover:scale-105 border border-transparent",
    // Transparent background, pink border, pink text, hover fills with pink and white text
    secondary: "bg-transparent text-[#ec268f] border-[3px] border-[#ec268f] hover:bg-[#ec268f] hover:text-white hover:scale-105"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

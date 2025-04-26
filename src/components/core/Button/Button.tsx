// src/components/core/Button/Button.tsx

import React from 'react';

/**
 * Interface defining the props expected by the Button component.
 */
interface ButtonProps {
  children: React.ReactNode; // Content inside the button (text, icons, etc.)
  onClick?: () => void; // Optional click handler function
  type?: 'button' | 'submit' | 'reset'; // HTML button types
  variant?: 'primary' | 'secondary' | 'danger'; // Visual style of the button
  disabled?: boolean; // Disable button interaction if true
  className?: string; // Optional additional custom classes
}

/**
 * Core reusable Button component.
 * 
 * Supports multiple variants, disabled state, and custom classNames.
 * Designed to be highly flexible while maintaining consistent styling across the app.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = ''
}) => {
  
  // Base styling applied to all buttons regardless of variant
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 inline-flex items-center";
  
  // Variant-specific styling (primary, secondary, danger)
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-md hover:shadow-blue-500/20 focus:ring-blue-500",
    secondary: "bg-gray-700 hover:bg-gray-600 text-gray-200 hover:text-white shadow-md focus:ring-gray-400",
    danger: "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-md hover:shadow-red-500/20 focus:ring-red-500"
  };
  
  // Adjustments when the button is disabled (e.g., lower opacity, no hover effects)
  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "hover:scale-105";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

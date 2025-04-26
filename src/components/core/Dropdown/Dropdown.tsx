// src/components/core/Dropdown/Dropdown.tsx

import React from 'react';

/**
 * Interface defining a single option within the Dropdown.
 */
interface DropdownOption {
  value: string; // The internal value of the option
  label: string; // The display text shown to users
}

/**
 * Interface defining props expected by the Dropdown component.
 */
interface DropdownProps {
  options: DropdownOption[]; // List of selectable options
  value: string; // Currently selected value
  onChange: (value: string) => void; // Callback fired when the selection changes
  label?: string; // Optional label displayed above the dropdown
  id: string; // Unique ID for accessibility (linked to the label)
  theme?: 'light' | 'dark'; // Optional theme variant (default: 'light')
}

/**
 * Core reusable Dropdown component.
 * 
 * Supports light and dark themes, accessibility features, and customizable options.
 * Designed for flexibility while maintaining a consistent UX across the app.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  label,
  id,
  theme = 'light'
}) => {
  
  /**
   * Handler triggered when the user selects a new option.
   * Passes the selected value to the parent component via onChange callback.
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  // Base styling applied to all dropdowns regardless of theme
  const baseClasses = "block w-full px-3 py-2 text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 appearance-none";
  
  // Theme-specific styling for light or dark mode
  const themeClasses = theme === 'dark'
    ? "bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
    : "bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="relative">
      {/* Conditionally render label if provided */}
      {label && (
        <label htmlFor={id} className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {label}
        </label>
      )}
      <div className="relative">
        {/* Main dropdown select element */}
        <select
          id={id}
          value={value}
          onChange={handleChange}
          className={`${baseClasses} ${themeClasses}`}
        >
          {/* Render each option dynamically */}
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow icon (SVG) */}
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

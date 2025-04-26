// src/components/core/RadioGroup/RadioGroup.tsx

import React from 'react';

/**
 * Interface defining a single option within the RadioGroup.
 */
interface RadioOption {
  value: string; // Internal value of the radio option
  label: string; // Text displayed to the user
}

/**
 * Interface defining props expected by the RadioGroup component.
 */
interface RadioGroupProps {
  options: RadioOption[]; // List of selectable radio options
  value: string; // Currently selected value
  onChange: (value: string) => void; // Callback fired when the selected option changes
  name: string; // Name attribute for grouping radios
  label?: string; // Optional group label displayed above radios
  theme?: 'light' | 'dark'; // Theme for styling (default: 'light')
}

/**
 * Core reusable RadioGroup component.
 * 
 * Supports light/dark themes and dynamic coloring based on severity levels.
 * Designed to enhance the UI with animated visual feedback upon selection.
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  name,
  label,
  theme = 'light'
}) => {
  
  /**
   * Handler triggered when a radio option is changed.
   * Updates the selected value through the parent callback.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  /**
   * Utility function to determine background color based on option value severity.
   * Example: Low -> Green, Medium -> Yellow, High -> Red, Default -> Blue.
   */
  const getSeverityColor = (optionValue: string) => {
    if (optionValue === 'Low') return theme === 'dark' ? 'bg-green-500' : 'bg-green-500';
    if (optionValue === 'Medium') return theme === 'dark' ? 'bg-yellow-500' : 'bg-yellow-500';
    if (optionValue === 'High') return theme === 'dark' ? 'bg-red-500' : 'bg-red-500';
    return theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600';
  };

  return (
    <div className="space-y-2">
      {/* Render group label if provided */}
      {label && (
        <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
          {label}
        </div>
      )}
      
      {/* Render options in a 3-column responsive grid */}
      <div className="grid grid-cols-3 gap-2">
        {options.map(option => (
          <div 
            key={option.value} 
            className={`
              relative rounded-lg border p-3 flex cursor-pointer focus:outline-none transition-all duration-200
              ${value === option.value 
                ? `border-${getSeverityColor(option.value).replace('bg-', '')} bg-${getSeverityColor(option.value).replace('bg-', '')}/10` 
                : theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}
            `}
            onClick={() => onChange(option.value)}
          >
            {/* Hidden radio input for accessibility */}
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              className="sr-only"
            />

            {/* Visible option content */}
            <div className="flex items-center justify-between w-full">
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {option.label}
              </div>

              {/* Render a colored animated circle if the option is selected */}
              {value === option.value && (
                <div className={`h-4 w-4 rounded-full ${getSeverityColor(option.value)} flex items-center justify-center animate-pulse`}>
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L5 6.586 3.707 5.293z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

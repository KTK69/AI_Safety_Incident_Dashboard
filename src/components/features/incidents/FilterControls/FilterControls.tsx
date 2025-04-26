// src/components/features/incidents/FilterControls/FilterControls.tsx

import React from 'react';
import { Dropdown } from '../../../core/Dropdown/Dropdown';
import { FilterState } from '../../../../types/incident.types';

/**
 * Props interface for FilterControls component.
 * Provides the current filter state and an onFilterChange callback.
 */
interface FilterControlsProps {
  currentFilter: FilterState; // The current state of the filters
  onFilterChange: (filter: FilterState) => void; // Callback to update the filter state
}

/**
 * FilterControls component to handle filtering and sorting of incidents.
 * 
 * This component contains dropdowns for selecting severity level and sort order, 
 * along with event handlers to propagate changes to the parent component.
 */
export const FilterControls: React.FC<FilterControlsProps> = ({
  currentFilter,
  onFilterChange
}) => {

  /**
   * Handle changes to the severity filter.
   * Updates the severity filter in the parent state.
   */
  const handleSeverityChange = (value: string) => {
    onFilterChange({
      ...currentFilter,
      severity: value as FilterState['severity']
    });
  };

  /**
   * Handle changes to the sort direction filter.
   * Updates the sort direction in the parent state.
   */
  const handleSortChange = (value: string) => {
    onFilterChange({
      ...currentFilter,
      sortDirection: value as FilterState['sortDirection']
    });
  };

  // Options for severity dropdown, including a default "All" option
  const severityOptions = [
    { value: 'All', label: 'All Severities' },
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' }
  ];

  // Options for sort direction dropdown
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' }
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-5 mb-6 border border-gray-700 shadow-glow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Section title and icon */}
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
          </svg>
          <h2 className="text-lg font-medium text-white">Filter Incidents</h2>
        </div>
        
        {/* Dropdowns for severity and sort options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
          
          {/* Severity filter dropdown */}
          <div className="min-w-[180px]">
            <Dropdown
              id="severity-filter"
              label="Severity Level"
              options={severityOptions}
              value={currentFilter.severity}
              onChange={handleSeverityChange}
              theme="dark"
            />
          </div>
          
          {/* Sort order dropdown */}
          <div className="min-w-[180px]">
            <Dropdown
              id="sort-filter"
              label="Sort Order"
              options={sortOptions}
              value={currentFilter.sortDirection}
              onChange={handleSortChange}
              theme="dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

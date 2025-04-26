// src/components/features/incidents/IncidentCard/IncidentCard.tsx

import React from 'react';
import { Button } from '../../../core/Button/Button';
import { IncidentDetails } from '../IncidentDetails/IncidentDetails';
import { Incident } from '../../../../types/incident.types';

/**
 * Props interface for IncidentCard component.
 * Provides the incident data and a callback to toggle the incident details.
 */
interface IncidentCardProps {
  incident: Incident; // Incident data to display
  onToggleDetails: (id: string) => void; // Callback to toggle the visibility of incident details
}

/**
 * IncidentCard component displays a single incident with summary information,
 * including severity, date, and a button to toggle more detailed information.
 * 
 * @param {IncidentCardProps} props - The component's props
 */
export const IncidentCard: React.FC<IncidentCardProps> = ({ 
  incident, 
  onToggleDetails 
}) => {
  const { id, title, severity, reported_at, isExpanded } = incident;

  /**
   * Format the date string into a user-friendly date format (yyyy-mm-dd).
   * 
   * @param {string} dateString - The date string to format
   * @returns {string} - The formatted date string
   */
  const formatDate = (dateString: string) => {
    try {
      // Extract and format the individual date components
      const year = dateString.substring(0, 4);
      const month = dateString.substring(5, 7);
      const day = dateString.substring(8, 10);
      const hour = dateString.substring(11, 13);
      const minute = dateString.substring(13, 15);
      const second = dateString.substring(15, 17);
      
      const formattedString = `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
      const date = new Date(formattedString);
      
      return date.toLocaleDateString();
    } catch (error) {
      // Return the original string if parsing fails
      return dateString;
    }
  };

  /**
   * CSS classes for the card's border and background based on the severity level.
   * @type {object}
   */
  const severityColorClasses = {
    'Low': 'border-green-500 from-green-700/60 to-green-900/30 shadow-[0_0_12px_0_rgba(34,197,94,0.25)]',
    'Medium': 'border-yellow-500 from-yellow-600/60 to-yellow-800/30 shadow-[0_0_12px_0_rgba(234,179,8,0.25)]',
    'High': 'border-red-600 from-red-700/60 to-red-900/30 shadow-[0_0_12px_0_rgba(239,68,68,0.25)]'
  };

  /**
   * CSS classes for the severity badge, which changes color and animation based on severity level.
   * @type {object}
   */
  const severityBadgeClasses = {
    'Low': 'bg-gradient-to-r from-green-500/90 to-green-700/80 text-white font-bold border border-green-400/40 shadow-[0_0_8px_2px_rgba(34,197,94,0.4)] animate-pulse',
    'Medium': 'bg-gradient-to-r from-yellow-400/90 to-yellow-600/80 text-white font-bold border border-yellow-400/40 shadow-[0_0_8px_2px_rgba(234,179,8,0.4)] animate-pulse',
    'High': 'bg-gradient-to-r from-red-500/90 to-red-700/80 text-white font-bold border border-red-400/40 shadow-[0_0_8px_2px_rgba(239,68,68,0.4)] animate-pulse'
  };

  return (
    <div className={`rounded-lg p-5 mb-5 border bg-gradient-to-b ${severityColorClasses[severity]} backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg relative overflow-hidden group`}>
      
      {/* Background pattern (static) */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          
          {/* Title of the incident */}
          <h3 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
          
          {/* Severity and report date section */}
          <div className="flex flex-col items-end gap-1">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${severityBadgeClasses[severity]} flex items-center`}>
              <span className={`inline-block w-2 h-2 rounded-full mr-1 animate-pulse bg-${severity === 'Low' ? 'green' : severity === 'Medium' ? 'yellow' : 'red'}-400`}></span>
              {severity}
            </span>
            <span className="text-xs text-gray-400">
              {formatDate(reported_at)} {/* Formatted report date */}
            </span>
          </div>
        </div>
        
        {/* Toggle button to show/hide incident details */}
        <div className="mt-3">
          <Button 
            onClick={() => onToggleDetails(id)}
            variant={isExpanded ? "secondary" : "primary"}
            className="ai-button-glow"
          >
            {isExpanded ? (
              <>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                </svg>
                Hide Details {/* Display text for collapsed state */}
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                View Details {/* Display text for expanded state */}
              </>
            )}
          </Button>
        </div>
        
        {/* Conditional rendering of IncidentDetails if expanded */}
        {isExpanded && (
          <div className="animate-fadeIn">
            <IncidentDetails incident={incident} />
          </div>
        )}
      </div>
    </div>
  );
};

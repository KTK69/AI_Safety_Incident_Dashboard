// src/components/features/incidents/IncidentDetails/IncidentDetails.tsx

import React from 'react';
import { Incident } from '../../../../types/incident.types';

/**
 * Props interface for IncidentDetails component.
 * It takes an `incident` object which contains all relevant details for the incident.
 */
interface IncidentDetailsProps {
  incident: Incident; // Incident object containing the full details of an incident
}

/**
 * IncidentDetails component displays detailed information about a specific incident.
 * This is shown when the user expands an incident card.
 * 
 * @param {IncidentDetailsProps} props - The component's props, including the incident object
 */
export const IncidentDetails: React.FC<IncidentDetailsProps> = ({ incident }) => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-200">
      
      {/* Section Header for Description */}
      <h4 className="text-md font-medium text-white mb-2">Description</h4>
      
      {/* Incident Description Text */}
      <p className="text-gray-200 leading-relaxed">
        {incident.description} {/* Display the incident description */}
      </p>
    </div>
  );
};

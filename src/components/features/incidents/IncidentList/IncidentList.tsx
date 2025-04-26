import React from 'react';
import { IncidentCard } from '../IncidentCard/IncidentCard';
import { Incident } from '../../../../types/incident.types';

/**
 * Props interface for the IncidentList component.
 * This component takes a list of incidents and a callback function `onToggleDetails` 
 * to handle the event when an incident's details are toggled.
 */
interface IncidentListProps {
  incidents: Incident[]; // Array of incidents to be displayed
  onToggleDetails: (id: string) => void; // Callback function to toggle the details of an incident
}

/**
 * IncidentList component renders a list of IncidentCard components.
 * It will display a message if no incidents are available.
 */
export const IncidentList: React.FC<IncidentListProps> = ({ 
  incidents, 
  onToggleDetails 
}) => {
  // If there are no incidents, display a message indicating no incidents are found
  if (incidents.length === 0) {
    return (
      <div className="py-8 px-4 text-center bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium text-gray-700 mb-2">No incidents found</h3>
        <p className="text-gray-500">Try changing your filters or add a new incident.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Map through the incidents array and render an IncidentCard for each */}
      {incidents.map(incident => (
        <IncidentCard
          key={incident.id} // Use the incident id as the key for better performance
          incident={incident}
          onToggleDetails={onToggleDetails} // Pass the onToggleDetails callback to each IncidentCard
        />
      ))}
    </div>
  );
};

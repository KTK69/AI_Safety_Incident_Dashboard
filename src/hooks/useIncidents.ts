// src/hooks/useIncidents.ts
import { useState } from 'react';
import { Incident, SeverityLevel, SortDirection } from '../types/incident.types';
import { mockIncidents } from '../data/mockIncidents';

// Helper function to convert non-standard date format to valid ISO
const convertToValidIso = (dateStr: string): string => {
  try {
    // Parse the date string format like '2025-03-15T100000Z'
    const datePart = dateStr.substring(0, 10);
    const timePart = dateStr.substring(11);
    
    // Insert colons in time part if needed
    let timeFormatted = timePart;
    if (timePart.length === 7) { // e.g. '100000Z'
      timeFormatted = timePart.substring(0, 2) + ':' + 
                     timePart.substring(2, 4) + ':' + 
                     timePart.substring(4);
    }
    
    return datePart + 'T' + timeFormatted;
  } catch (e) {
    // Return original if parsing fails
    return dateStr;
  }
};

export const useIncidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [filter, setFilter] = useState<{ severity: SeverityLevel | 'All', sortDirection: SortDirection }>({
    severity: 'All',
    sortDirection: 'newest'
  });

  const filteredIncidents = incidents
    .filter(incident => filter.severity === 'All' || incident.severity === filter.severity)
    .sort((a, b) => {
      // Convert to valid ISO format before comparison
      const dateA = new Date(convertToValidIso(a.reported_at));
      const dateB = new Date(convertToValidIso(b.reported_at));
      
      if (filter.sortDirection === 'newest') {
        return dateB.getTime() - dateA.getTime();
      } else {
        return dateA.getTime() - dateB.getTime();
      }
    });

  const toggleIncidentDetails = (id: string) => {
    setIncidents(incidents.map(incident => 
      incident.id === id 
        ? { ...incident, isExpanded: !incident.isExpanded } 
        : incident
    ));
  };

  const addIncident = (newIncident: Omit<Incident, 'id' | 'reported_at' | 'isExpanded'>) => {
    // Generate standard ISO string
    const now = new Date();
    const isoString = now.toISOString().replace(/\.\d{3}/, ''); // Remove milliseconds
    
    // Convert to mock format (remove colons from time part)
    const mockFormatDate = isoString.replace(/:/g, '');
    
    const incident: Incident = {
      ...newIncident,
      id: Date.now().toString(),
      reported_at: mockFormatDate,
      isExpanded: false
    };
    setIncidents([incident, ...incidents]);
  };
  

  return {
    incidents: filteredIncidents,
    filter,
    setFilter,
    toggleIncidentDetails,
    addIncident
  };
};

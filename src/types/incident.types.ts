// src/types/incident.types.ts
export type SeverityLevel = 'Low' | 'Medium' | 'High';

export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: SeverityLevel;
  reported_at: string; // ISO format date string
  isExpanded?: boolean;
}

export type SortDirection = 'newest' | 'oldest';

export interface FilterState {
  severity: SeverityLevel | 'All';
  sortDirection: SortDirection;
}

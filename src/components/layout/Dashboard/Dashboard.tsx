import React, { useState, useEffect, useRef } from 'react';
import { FilterControls } from '../../features/incidents/FilterControls/FilterControls';
import { IncidentList } from '../../features/incidents/IncidentList/IncidentList';
import { IncidentForm } from '../../features/incidents/IncidentForm/IncidentForm';
import { useIncidents } from '../../../hooks/useIncidents';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';

/**
 * The Dashboard component is the main interface where users can view and manage AI safety incidents.
 * It includes sections for filtering incidents, viewing existing reports, and submitting new incident reports.
 */
export const Dashboard: React.FC = () => {
  const { 
    incidents,          // List of incidents
    filter,             // Current filter applied
    setFilter,          // Function to update the filter
    toggleIncidentDetails,  // Function to toggle visibility of incident details
    addIncident         // Function to add a new incident
  } = useIncidents();

  const [isLoading, setIsLoading] = useState(true); // Loading state for simulating data fetching
  const [activeSection, setActiveSection] = useState<"reports" | "report">("reports"); // Tracks which section is active (reports or report)
  const reportRef = useRef<HTMLDivElement>(null); // Reference to the report section for smooth scrolling

  // Simulate loading state for the dashboard
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200); // Simulate 1.2s loading time
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  /**
   * Handles smooth navigation between sections (reports and report).
   * Scrolls to the report section or scrolls to the top for reports.
   */
  const handleNavigate = (section: "reports" | "report") => {
    setActiveSection(section); // Set the active section state
    if (section === "report" && reportRef.current) {
      reportRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the report section
    } else if (section === "reports") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top for reports section
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation Bar */}
      <NavBar onNavigate={handleNavigate} activeSection={activeSection} />
      
      {/* Main content area with top padding to account for the fixed navbar */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* AI-themed animated header */}
        <div className="relative overflow-hidden bg-black py-8 mb-6 rounded-xl shadow-lg">
          <div className="ai-grid absolute inset-0 opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center">
              <div className="ai-pulse mr-4"></div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                AI Safety Incident Dashboard
              </h1>
            </div>
            <p className="mt-2 text-gray-400 max-w-2xl">
              Monitor, report, and track AI safety incidents across your systems
            </p>
          </div>
        </div>
        
        {/* Conditional rendering for the loading state */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="ai-loading-spinner"></div> {/* Loading spinner */}
          </div>
        ) : (
          <>
            {/* Filter Controls */}
            <FilterControls 
              currentFilter={filter} 
              onFilterChange={setFilter} 
            />
            
            {/* Incident Reports Section */}
            <div ref={reportRef}>
              <div className="bg-gray-800 rounded-xl shadow-glow overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-blue-900 to-purple-900 border-b border-gray-700">
                  <h2 className="text-xl font-semibold text-white flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Incident Reports
                  </h2>
                </div>
                <div className="p-5">
                  <IncidentList 
                    incidents={incidents} 
                    onToggleDetails={toggleIncidentDetails} 
                  />
                </div>
              </div>
            </div>

            {/* New Incident Report Section */}
            <div ref={reportRef}>
              <div className="bg-gray-800 rounded-xl shadow-glow overflow-hidden mt-20">
                <div className="p-4 bg-gradient-to-r from-blue-900 to-purple-900 border-b border-gray-700">
                  <h2 className="text-xl font-semibold text-white flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Report New Incident
                  </h2>
                </div>
                <div className="p-5">
                  <IncidentForm onSubmit={addIncident} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

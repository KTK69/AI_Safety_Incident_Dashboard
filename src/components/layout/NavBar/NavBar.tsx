import React, { useState } from "react";

// Props type defining the structure of the NavBar component
interface NavBarProps {
  onNavigate: (section: "reports" | "report") => void; // Function to handle navigation
  activeSection: "reports" | "report"; // The currently active section (either 'reports' or 'report')
}

/**
 * The NavBar component is a fixed navigation bar that allows the user to navigate between sections:
 * 'Incident Reports' and 'Report New Incident'. It includes both desktop and mobile layouts.
 */
export const NavBar: React.FC<NavBarProps> = ({ onNavigate, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900/95 via-blue-900/90 to-purple-900/90 backdrop-blur-sm shadow-lg border-b border-blue-950 fixed top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-3">
          {/* Robot emoji for branding */}
          <span className="text-2xl font-bold text-blue-400">🤖</span>
          {/* Dashboard title with gradient text */}
          <span className="text-lg md:text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow">
            AI Safety Incident Dashboard
          </span>
        </div>

        {/* Desktop Navigation (visible on larger screens) */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Button for 'Incident Reports' section */}
          <button
            className={`font-medium transition ${
              activeSection === "reports"
                ? "text-blue-400 border-b-2 border-blue-400" // Active state styling
                : "text-white hover:text-blue-400"
            }`}
            onClick={() => onNavigate("reports")}
          >
            Incident Reports
          </button>

          {/* Button for 'Report New Incident' section */}
          <button
            className={`font-medium transition ${
              activeSection === "report"
                ? "text-purple-400 border-b-2 border-purple-400" // Active state styling
                : "text-white hover:text-purple-400"
            }`}
            onClick={() => onNavigate("report")}
          >
            Report New Incident
          </button>
        </div>

        {/* Hamburger Button for Mobile (visible on smaller screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)} // Toggles menu visibility
            className="text-white focus:outline-none"
            aria-label="Open menu"
          >
            {/* Hamburger icon (changes when the menu is open or closed) */}
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                // Close icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (appears when the hamburger menu is open) */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-900/95 via-blue-900/90 to-purple-900/90 border-t border-blue-950 px-4 pb-4 pt-2">
          {/* Mobile 'Incident Reports' button */}
          <button
            className={`block w-full text-left font-medium py-2 px-2 rounded transition ${
              activeSection === "reports"
                ? "text-blue-400 bg-blue-900/30" // Active section background
                : "text-white hover:text-blue-400"
            }`}
            onClick={() => {
              setMenuOpen(false); // Close the menu after navigation
              onNavigate("reports");
            }}
          >
            Incident Reports
          </button>

          {/* Mobile 'Report New Incident' button */}
          <button
            className={`block w-full text-left font-medium py-2 px-2 rounded transition ${
              activeSection === "report"
                ? "text-purple-400 bg-purple-900/30" // Active section background
                : "text-white hover:text-purple-400"
            }`}
            onClick={() => {
              setMenuOpen(false); // Close the menu after navigation
              onNavigate("report");
            }}
          >
            Report New Incident
          </button>
        </div>
      )}
    </nav>
  );
};

import React from "react";

/**
 * The Footer component displays the footer of the dashboard, including branding, copyright,
 * and links to external resources like GitHub.
 */
export const Footer: React.FC = () => (
  <footer className="w-full bg-gradient-to-r from-gray-900/95 via-blue-900/90 to-purple-900/90 border-t border-blue-950 py-8 mt-12">
    {/* Main container for footer content */}
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Branding section with logo and dashboard title */}
      <div className="flex items-center space-x-2">
        {/* Robot emoji for visual branding */}
        <span className="text-2xl font-bold text-blue-400">🤖</span>
        {/* Dashboard title with gradient text */}
        <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow">
          AI Safety Incident Dashboard
        </span>
      </div>

      {/* Copyright and external links */}
      <div className="text-gray-400 text-sm flex flex-col md:flex-row md:items-center gap-2">
        {/* Dynamic copyright year */}
        <span>&copy; {new Date().getFullYear()} AI Safety. All rights reserved.</span>
        {/* Separator for larger screens */}
        <span className="hidden md:inline mx-2 text-blue-700">|</span>
        {/* GitHub link */}
        <a
          href="https://github.com/KTK69/AI_Safety_Incident_Dashboard.git"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 hover:text-purple-400 transition"
        >
          GitHub
        </a>
      </div>
    </div>

    {/* Decorative line with gradient and blur effect */}
    <div className="mt-6 flex justify-center">
      <div className="h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-40 blur"></div>
    </div>
  </footer>
);

// src/App.tsx
import React from "react";
import { Dashboard } from "./components/layout/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-200 to-blue-900">
      <Toaster position="top-center" reverseOrder={false} />
      <Dashboard />
    </div>
  );
}

export default App;

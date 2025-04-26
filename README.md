# AI Safety Incident Dashboard

A modern, AI-themed web dashboard for tracking, filtering, and reporting AI safety incidents.  
Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## ✨ Features

- **AI-inspired UI:** Glassy cards, vibrant gradients, and dark/light modes (see screenshots below).
- **Incident List:** View incidents with Title, Severity, and Date.
- **Filter & Sort:** Filter by severity, sort by date.
- **Details Toggle:** Expand incident cards for full descriptions.
- **Report New Incident:** Add new incidents via a modern form (session only).
- **Responsive:** Looks great on desktop and mobile.
- **Animated:** Loading spinners, glowing badges, and smooth transitions.
- **AI Theme:** Blue/purple gradients, glowing highlights, and a starry footer.

---

## 🚀 Getting Started

### 1. Clone the repository

- git clone https://github.com/KTK69/AI_Safety_Incident_Dashboard.git
- cd ai-safety-incident-dashboard


### 2. Install dependencies
- npm install

### 3. Run the development server
- npm run dev

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Tech Stack

- **Language:** TypeScript
- **Frontend Framework:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** React useState (session-only, in-memory)
- **Icons:** Reacticons

---

## 📝 Design Decisions & Challenges

- **AI Theme:** The UI uses blue/purple gradients, glassmorphism, and animated glows to evoke a futuristic, AI-inspired feel.
- **Responsiveness:** All layouts and components are mobile-friendly, with a responsive navigation bar and forms.
- **Session-only Data:** User-reported incidents persist only for the current session (in-memory React state), as required.
- **Animated Elements:** Loading spinners, glowing severity badges, and a starry animated footer enhance the experience.
- **Theme Switching:** Both light and dark modes are supported, as shown in the screenshots.

---

## 📦 Project Structure


## Components

### Core Components
Reusable UI components like buttons, dropdowns, and form elements that are used throughout the application.

### Feature Components
Components specific to the incidents feature, including:
- Incident cards
- Incident list
- Filter controls
- Incident form
- Incident details

### Layout Components
Components that define the overall structure of the application:
- NavBar: Navigation header with links
- Dashboard: Main layout container
- Footer: Application footer with links and information

## Data
Contains mock incident data used for initial state and testing.

## Hooks
Custom React hooks, including:
- `useIncidents`: Manages incident state, filtering, and sorting

## Styles
Tailwind CSS configuration for the application.

## Types
TypeScript type definitions for the application:
- Incident interfaces
- Severity types
- Filter state types

## App.tsx
Main application component that serves as the entry point for the React components.

## main.tsx
Entry point for the application that renders the App component to the DOM.

---

## ⚠️ Data Persistence

All user-added incidents are stored in React state and **persist only for the current session**.  
Refreshing or closing the page will reset the data.

---

## 📄 License

MIT License

---

## 🙏 Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://react.dev/)
- [Heroicons](https://heroicons.com/)
- [Vite](https://vitejs.dev/)

---

Enjoy your AI Safety Incident Dashboard!


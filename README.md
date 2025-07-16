# To-Do List Application

A simple, responsive To-Do List built with React and Vite, styled using Tailwind CSS via CDN.  
Users can add, edit, delete, and mark tasks as completed, with timestamps for task creation and completion.

---

## Features

- Add new tasks  
- Edit existing tasks  
- Delete tasks  
- Mark tasks as completed/uncompleted  
- View timestamps for when tasks were added and completed  
- Responsive design for mobile, tablet, and desktop  
- Clean, professional UI with Tailwind CSS  
- Uses functional components with React Hooks (state & props)

---

## Tech Stack

- React 18 (functional components)  
- Vite (build tool & dev server)  
- Tailwind CSS (via CDN for styling)  
- JavaScript (ES6+)

---

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)  
- npm (comes with Node.js)

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. **Install Dependencies**

   ```bash
   npm install

3. **Run Development Server**

   ```bash
   npm run dev

4. **Open The App**

Open http://localhost:5173 in your browser.
The app supports hot reloading for a smooth dev experience.

---

## Styling

Tailwind CSS is loaded via CDN in the index.html for ease of setup and fast prototyping, providing utility-first styling without local config

---

## Project Structure


   ```bash
  /public
  └─ favicon.ico           # Site favicon
  /src
  ├─ components
  │   ├─ Header.jsx        # Task input & add form
  │   ├─ ToDoItem.jsx      # Individual task item (with edit/delete/toggle)
  │   └─ ToDoList.jsx      # List container rendering all tasks
  ├─ App.jsx               # Main app logic and state management
  └─ main.jsx              # React entry point, renders App
  index.html               # HTML template with Tailwind CDN
  package.json             # Project metadata and scripts


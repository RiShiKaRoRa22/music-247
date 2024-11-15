import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // You can add global CSS styles here (optional)
import App from './App';  // This imports the main App component

// Get the root element from the index.html file (public/index.html)
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot, which is required for React 18+
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root div in index.html
root.render(
  <React.StrictMode>
    <App /> {/* This will render your entire app */}
  </React.StrictMode>
);

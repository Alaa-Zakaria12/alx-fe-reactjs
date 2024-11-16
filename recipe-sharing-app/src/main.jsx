import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Make sure you have your styles here if applicable

// Use ReactDOM.createRoot for rendering in React 18 and later
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/components/ProtectedRoute.jsx
// import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Simulate the useAuth hook
const useAuth = () => {
  // This is just a simulation; in a real application, you might get this from context or a global state
  const isAuthenticated = false; // Change to true to simulate a logged-in user
  return isAuthenticated;
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Using the useAuth hook to check authentication status

  return isAuthenticated ? children : <Navigate to="/" />; // If authenticated, render children, else redirect to Home
};

// Validate props
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

// import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Simulate authentication status (replace with real authentication logic)
const isAuthenticated = false; // Change to true for testing logged-in behavior

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

// Validate props
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

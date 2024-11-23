// import React from 'react';
import { Outlet, Link, Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails'; // Make sure the correct path to the ProfileDetails component
import ProfileSettings from './ProfileSettings'; // Make sure the correct path to the ProfileSettings component

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      <Outlet /> {/* Placeholder for nested routes */}
    </div>
  );
};

export default Profile;

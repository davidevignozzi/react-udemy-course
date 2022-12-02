import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav className="d-flex flex-row justify-content-center mx-auto gap-2 mb-4">
        <Link to="me">My Profile</Link>
        <Link to="/profile/2">Profile 2</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;

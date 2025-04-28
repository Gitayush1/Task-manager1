import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="border-b-gray-500 shadow-lg rounded p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg ">
        Task Manager
      </Link>
      <div>
        {user ? (
          <>
            <span className="text-white mr-4">{user.username}</span>
            <button
              onClick={logout}
              className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="space-x-4">
            <Link to="/login" className="text-white">
              Login
            </Link>
            <Link to="/register" className="text-white">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

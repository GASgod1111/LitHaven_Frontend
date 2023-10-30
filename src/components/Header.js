import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Lithaven</Link>
        <div className="space-x-4">
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
          <Link to="/browse" className="text-white hover:text-gray-300">Browse</Link>
          <Link to="/premium" className="text-white hover:text-gray-300">Premium</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

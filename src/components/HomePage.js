import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Lit Haven</h1>
      <p className="text-gray-700 text-lg">
        Discover a novel world at Lit Haven, where every corner is a Book Nook Boutique, and every story transforms you to a page-turner paradise. Our bibliophile's bliss Novel Notions and Prose & Poetry will make you feel like you're in Chapter & Verse. It's the perfect escape to the bookshelf retreat in the heart of literary treasures.
      </p>

      <div className="mt-6">
        <p className="text-gray-700 text-lg">Explore our vast collection of books across various genres, from thrilling mysteries to heartwarming romance novels.</p>
      </div>

      <div className="mt-6">
        <p className="text-gray-700 text-lg">Love reading but don't want to buy every book? No worries! You can borrow books from our extensive library.</p>
      </div>

      <div className="mt-6">
        <p className="text-gray-700 text-lg">Ready to start your literary journey? Sign up or log in now to begin your adventure with Lit Haven.</p>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search for books by name or genre"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <Link to={`/browse?search=${searchTerm}`}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:ring focus:ring-blue-300 mt-2">
            Search
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

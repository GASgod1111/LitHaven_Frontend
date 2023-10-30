import React from 'react';
import { Link } from 'react-router-dom';

function Premium() {
  // Sample premium book data
  const premiumBook = {
    id: 1,
    title: 'Premium Book Title',
    author: 'Author Name',
    description: 'A gripping story with amazing characters.',
    price: 19.99,
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{premiumBook.title}</h2>
      <p className="text-gray-700 text-lg">Author: {premiumBook.author}</p>
      <p className="text-gray-700 text-lg">Description: {premiumBook.description}</p>
      <p className="text-gray-700 text-lg">Price: ${premiumBook.price}</p>

      <div className="mt-6">
        <Link to="/checkout">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:ring focus:ring-blue-300">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Premium;

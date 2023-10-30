import React from 'react';

function Book({ title, author, genre, description, price, dateUploaded }) {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">Author: {author}</p>
      <p className="text-gray-600">Genre: {genre}</p>
      <p className="text-gray-600">Price: ${price}</p>
      <p className="text-gray-600">Date Uploaded: {dateUploaded}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}

export default Book;

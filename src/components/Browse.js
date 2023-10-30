import React, { useState, useEffect } from 'react';
import Book from './Book';



function Browse() {
  const [books, setBooks] = useState([]);

  // Fetch books from the backend when the component mounts
  useEffect(() => {
    // Replace with the URL of your book data API endpoint
    const apiUrl = 'https://example.com/api/books';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Browse Books</h2>
      {books.map((book) => (
        <Book key={book.BookID} title={book.Title} author={book.Author} genre={book.Genre} description={book.Description} price={book.Price} dateUploaded={book.Date_Uploaded} />
      ))}
    </div>
  );
}

export default Browse;



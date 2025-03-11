import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  return (
    <div>
      <h2>Book Details</h2>
      {book ? (
        <div>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Price: {book.price}</p>
          <p>Description: {book.description}</p>
          <p>Availability: {book.availability}</p>
          <button>Add to Cart</button>
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default BookDetails;
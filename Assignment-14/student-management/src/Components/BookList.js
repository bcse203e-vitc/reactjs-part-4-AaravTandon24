import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddBook from "./AddBook";

const BookList = ({ books, onAddBook }) => {
  const [localBooks, setLocalBooks] = useState(books);

  const addBook = (book) => {
    setLocalBooks([...localBooks, { id: localBooks.length + 1, ...book }]);
    onAddBook([...books, { id: books.length + 1, ...book }]);
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {localBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - {book.price}
            <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
      <AddBook onAddBook={addBook} />
    </div>
  );
};

export default BookList;

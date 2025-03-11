import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book One",
      author: "Author One",
      price: "$10",
      description: "Description of Book One",
      availability: "In Stock",
    },
    {
      id: 2,
      title: "Book Two",
      author: "Author Two",
      price: "$15",
      description: "Description of Book Two",
      availability: "Out of Stock",
    },
  ]);

  const addBook = (newBooks) => {
    setBooks(newBooks);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<BookList books={books} onAddBook={addBook} />}
        />
        <Route path="/book/:id" element={<BookDetails books={books} />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState } from "react";

const AddBook = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !title.trim() ||
      !author.trim() ||
      !price.trim() ||
      !description.trim() ||
      !availability.trim()
    )
      return;
    onAddBook({ title, author, price, description, availability });
    setTitle("");
    setAuthor("");
    setPrice("");
    setDescription("");
    setAvailability("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        placeholder="Availability"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBook;

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const ADDBOOK = {
        item_id: uuidv4(),
        title,
        author,
      };
      dispatch(addBook(ADDBOOK));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div className="form">
      <h2> ADD NEW BOOK</h2>
      <form onSubmit={handelSubmit}>
        <input
          className="title"
          placeholder="Book title"
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author"
          placeholder="Book author"
          type="text"
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="submit-btn" type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Form;

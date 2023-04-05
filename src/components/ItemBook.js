import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

function MyBook({ book }) {
  const dispatch = useDispatch();
  // const { title, author } = props;
  return (
    <div className="mybook">
      <div className="title">
        Title:
        {book.title}
      </div>
      <div className="author">
        Author:
        {book.author}
      </div>
      <div className="book-option">
        <button type="button" className="comments-btn">
          Comments
        </button>
        <div className="divider" />
        <button
          type="button"
          className="remove-btn"
          onClick={() => dispatch(removeBook(book.item_id))}
        >
          Remove
        </button>
        <div className="divider" />
        <button type="button" className="edit-btn">
          Edit
        </button>
      </div>
      <div className="second-section">
        <p>74% completed</p>
      </div>
      <div className="divider" />
      <div className="Third-section">
        <p>CURRENT CHAPTER</p>
        <p>CHAPTER 6</p>
        <br />
        <button type="button" className="update-progress">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

MyBook.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default MyBook;

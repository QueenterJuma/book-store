import React from 'react';
import MyBook from './BookItem';
import Form from './BookForm';

function Books() {
  const Books = [
    {
      author: 'Norman Vincent',
      title: 'The Power of positive Thinking',
    },
    {
      author: 'Queen Juma',
      title: 'Fashion Stars',
    },
    {
      author: 'Prince Caleb',
      title: 'The power of Love',
    },
  ];
  return (
    <div className="book-container">
      <div className="books-list">
        {Books.map((book) => (
          <div key={Books.indexOf(book)} className="book-item">
            <div className="first-section">
              <MyBook title={book.title} author={book.author} />
              <br />
              <div className="book-option">
                <button type="button" className="comments-btn">
                  Comments
                </button>
                <div className="divider" />
                <button type="button" className="remove-btn">
                  Removed
                </button>
                <div className="divider" />
                <button type="button" className="edit-btn">
                  Edit
                </button>
              </div>
            </div>
            <div className="second-section">
              <p>32% completed</p>
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
        ))}
      </div>
      <hr />
      <Form />
    </div>
  );
}

export default Books;

import React from 'react';
import PropTypes from 'prop-types';

function MyBook(props) {
  const { title, author } = props;
  return (
    <div className="mybook">
      <div className="title">
        Title:
        {title}
      </div>
      <div className="author">
        Author:
        {author}
      </div>
      <div className="delete-btn">
        <button type="button">Delete</button>
      </div>
    </div>
  );
}

MyBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default MyBook;

import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeBook, DELETEBOOKS } from '../redux/books/booksSlice';

function MyBook({ book }) {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(35);
  const handleRemove = (EndPoint) => {
    dispatch(DELETEBOOKS(EndPoint))
      .then(dispatch(removeBook(EndPoint)));
  };
  const handleProgress = () => {
    let pro = progress;
    if (pro < 100) {
      setProgress(pro += 5);
    }
  };
  return (
    <div className="mybook">
      <div className="first-section">
        <h2 className="title">{book.title}</h2>
        <span className="author">{book.author}</span>
        <div className="book-option">
          <button type="button">Comments</button>
          <button type="button" onClick={() => handleRemove(book.item_id)}>
            Remove
          </button>
          <button type="button" className="edit-btn">
            Edit
          </button>
        </div>
      </div>
      <div className=" second-section">
        <div className="pro-section">
          <CircularProgressbar className="circular-bar" value={progress} />
          <div className="pro-content">
            <span className="pro-percentage">
              {progress}
              %
            </span>
            <span className="pro-complete">completed</span>
          </div>
        </div>
        <div className="Third-section">
          <span className="third-current">CURRENT CHAPTER</span>
          <span className="third-chapter">CHAPTER 12</span>
          <button
            type="button"
            className="pro-update"
            onClick={handleProgress}
          >
            UPDATE PROGRESS
          </button>
        </div>
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

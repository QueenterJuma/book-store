import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MyBook from './ItemBook';
import Form from './AddBook';
import { GETBOOKS } from '../redux/books/booksSlice';

function BookHolder() {
  const BookItem = useSelector((state) => state.book.books);
  const Loading = useSelector((state) => state.book.Loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GETBOOKS());
  }, [dispatch]);
  if (Loading) {
    return (
      <h3>Loading...</h3>
    );
  }
  return (
    <div>
      <div className="book-holder">
        {BookItem.map((book) => (
          <MyBook key={book.item_id} book={book} />
        ))}
      </div>
      <Form />
    </div>
  );
}

export default BookHolder;

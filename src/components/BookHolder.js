import { useSelector } from 'react-redux';
import MyBook from './ItemBook';
import Form from './AddBook';

function BookHolder() {
  const BookItem = useSelector((state) => state.book.books);
  return (
    <div>
      <div>
        {BookItem.map((book) => (
          <MyBook key={book.item_id} book={book} />
        ))}
      </div>
      <Form />
    </div>
  );
}

export default BookHolder;

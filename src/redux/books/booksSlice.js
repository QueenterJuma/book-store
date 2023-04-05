import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      item_id: uuidv4(),
      author: 'Norman Vincent',
      title: 'The Power of positive Thinking',
    },
    {
      item_id: uuidv4(),
      author: 'Queen Juma',
      title: 'Fashion Stars',
    },
    {
      item_id: uuidv4(),
      author: 'Prince Caleb',
      title: 'The power of Love',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const ITEMID = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== ITEMID),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

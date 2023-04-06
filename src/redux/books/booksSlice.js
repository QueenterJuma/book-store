import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const EndPoint = 'jMJnQxXVU8lAt6A7yxyH';
const apiUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${EndPoint}/books`;

export const GETBOOKS = createAsyncThunk('books/GETBOOKS', async () => {
  try {
    const res = await axios.get(apiUrl);
    return res.data;
  } catch (error) {
    return error;
  }
});

export const POSTBOOKS = createAsyncThunk('books/POSTBOOKS', async (book) => {
  try {
    const res = await axios.post(apiUrl, book);
    return res.data;
  } catch (error) {
    return error;
  }
});

export const DELETEBOOKS = createAsyncThunk('books/DELETEBOOKS',
  async () => {
    try {
      const res = await axios.delete(`${apiUrl}/${EndPoint}`);
      return res.data;
    } catch (error) {
      return error;
    }
  });

const initialState = {
  books: [],
  isLoading: true,
  isAdded: true,
  isDeleted: true,
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
  extraReducers: (builder) => {
    builder
      .addCase(GETBOOKS.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(GETBOOKS.fulfilled, (state, action) => {
        const bookItem = action.payload;
        const newBookItem = [];
        Object.keys(bookItem).forEach((book) => newBookItem.push({
          item_id: book,
          title: bookItem[book][0].title,
          author: bookItem[book][0].author,
        }));
        return {
          ...state,
          books: newBookItem,
          isLoading: false,
        };
      })
      .addCase(GETBOOKS.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(POSTBOOKS.pending, (state) => ({
        ...state,
        isAdded: false,
      }))
      .addCase(POSTBOOKS.fulfilled, (state) => ({
        ...state,
        isAdded: true,
      }))
      .addCase(DELETEBOOKS.pending, (state) => ({
        ...state,
        isDeleted: false,
      }))
      .addCase(DELETEBOOKS.fulfilled, (state) => ({
        ...state,
        isDeleted: true,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

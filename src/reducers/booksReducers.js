const defaultState = [];

const booksReducers = (state = { books: defaultState }, action) => {
  switch (action.type) {
    case 'GET_BOOKS': {
      const newState = {
        ...state,
        books: [...action.payload],
      };
      return newState;
    }
    case 'POST_BOOK': {
      const newState = {
        ...state,
        books: [
          ...state.books,
          ...action.payload,
        ],
        msg: 'Saved! Click to continue',
        style: 'warning',
      };
      return newState;
    }
    case 'POST_BOOK_REJECTED': {
      const newState = {
        ...state,
        msg: 'Something went wrong. Please try again!',
        style: 'danger',
      };
      return newState;
    }
    case 'DELETE_BOOK': {
      const allBooks = [...state.books];
      const idxDelete = allBooks.findIndex(book => book._id === action._id);
      const newState = {
        books: [
          ...allBooks.slice(0, idxDelete),
          ...allBooks.slice(idxDelete + 1),
        ],
      };
      return newState;
    }
    case 'UPDATE_BOOK': {
      const allBooks = [...state.books];
      const idxUpdate = allBooks.findIndex(book => book._id === action.payload._id);
      allBooks[idxUpdate] = action.payload;
      const newState = { books: allBooks };
      return newState;
    }
    case 'RESET_FORM': {
      const newState = {
        ...state,
        msg: null,
        style: 'success',
      };
      return newState;
    }
    default:
      return state;
  }
};

export default booksReducers;

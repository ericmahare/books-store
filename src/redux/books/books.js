const REMOVE = 'REMOVE';
const ADD = 'ADD';


const books = [];

// remove books
export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

// add books
export const addBooks = (book) => ({
  type: ADD,
  book,
})

// books reducer 
const reducer = (state = books, action) => {
  switch(action.type) {
    case REMOVE:
    return state.filter((book) => book.id !== action.id);
    case ADD:
    return [...state, action.book]
    default:
      return state;
  }
}

export default reducer;
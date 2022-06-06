import { combineReducers, createStore } from "redux";
import booksReducer from "./books/books";

const rootReducer = combineReducers({
  books: booksReducer,
})

const store = createStore(rootReducer)


export default store
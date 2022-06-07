import { useSelector } from "react-redux"
import Book from "./Book"
import Form from "./Form"

const Books = () => {
  const books = useSelector(state => state.books)
  let data = books.map(book => <Book key={book.id} book={book}/>);
  return (
    <>
      {data}
      <Form/>
    </>
  )
}

export default Books;
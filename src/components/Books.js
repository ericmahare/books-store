import { connect } from "react-redux"
import Book from "./Book"
import Form from "./Form"

const Books = ({ books }) => {
  let data = books.books.map(book => <Book key={book.id} book={book}/>);
  return (
    <>
      {data}
      <Form/>
    </>
  )
}
const mapStateToProps = (state) => {
  const books  = state
  return {books}
}
export default connect(mapStateToProps)(Books)
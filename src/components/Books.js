import Book from "./Book"
import Form from "./Form"

const Books = () => {
  const books = [
    {
      id:1,
      title: 'The magic of thinking Big',
      author: 'Benard Malamud'
    },
    {
      id: 2,
      title: 'The Catcher in the Rye',
      author: 'J.D.Salinger'
    }
  ]

  let data = books.map(book => <Book key={book.id} book={book}/>)
  return (
    <>
      {data}
      <Form/>
    </>
  )
}

export default Books
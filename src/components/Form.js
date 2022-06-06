import { useState } from "react"
import { addBooks } from "../redux/books/books";
import shortid from 'shortid';
import { connect } from "react-redux";
const Form = ({dispatch}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: shortid.generate(),
      title,
      author,
    }
    dispatch(addBooks(book))
  }
  return (
    <div className="form-section">
    <h4>ADD NEW BOOK</h4>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='book title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <input type='text' placeholder='Author' author={author} onChange={(e)=>setAuthor(e.target.value)}/>
      <button className="form-btn">Add book</button>
    </form>
    </div>
  )
}
export default connect()(Form)
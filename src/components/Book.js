import { useDispatch } from "react-redux"
import { removeBook } from "../redux/books/books"
const Book = ({book}) => {
  const {id,title, author} = book
  const dispatch = useDispatch();
  return (
    <article className='book'>
      <div>
        <h5>Action</h5>
        <h3>{title}</h3>
        <p className="book-info">{author}</p>
        <div className='article-footer'>
          <button>Comments |</button>
          <button onClick={()=>dispatch(removeBook(id))}>Remove |</button>
          <button>Edit |</button>
        </div>
      </div>
      <div>
        <h6 className="book-info">CURRENT CHAPTER</h6>
        <p className="chapter">Chapter 17</p>
        <button className="book-btn">Update Progress</button>
      </div>
    </article>
  )
}
export default Book;
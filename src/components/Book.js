const Book = ({book}) => {
  const {title, author} = book
  return (
    <article className='book'>
      <div>
        <h5>Action</h5>
        <h3>{title}</h3>
        <p className="book-info">{author}</p>
        <div className='article-footer'>
          <button>Comments |</button>
          <button>Remove |</button>
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

export default Book
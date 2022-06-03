const Book = () => {
  return (
    <article className='book'>
      <div>
        <h5>Action</h5>
        <h3>The Hunger Games</h3>
        <p className="book-info">Suzanne Collins</p>
        <div className='article-footer'>
          <span>Comments |</span>
          <span>Remove |</span>
          <span>Edit |</span>
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
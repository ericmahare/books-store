const Form = () => {
  return (
    <div className="form-section">
    <h4>ADD NEW BOOK</h4>
    <form>
      <input type='text' placeholder='book title'/>
      <select id="cars" name="cars">
        <option value="volvo">Author</option>
      </select>
      <button className="form-btn">Add book</button>
    </form>
    </div>
  )
}

export default Form
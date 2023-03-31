import React from 'react';

function Form() {
  <div className="form">
    <h2> ADD NEW BOOK</h2>
    <form className="form-main">
      <input
        className="title"
        placeholder="Book title"
        type="text"
        required
      />
      <input className="author" placeholder="Book author" type="text" required />
      <input className="submit-btn" value="Add Book" type="submit" />
    </form>
  </div>;
}

export default Form;

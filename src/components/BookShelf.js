import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BookShelf = function(props) {
  BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };
  
  // Handles the changes of books between shelves
  let handleShelfChange = (book, shelf) => {
    props.onShelfChange(book, shelf);
  };
  

  return (
    <div className="bookshelf">
      <h1 className="bookshelf-title">{props.title}</h1>
      <div className="bookshelf-books">
        <ul className="books-grid">
        {props.books.map(book => (
          <li key={book.id}>
            <Book book={book} changeShelf={handleShelfChange} />
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};


export default BookShelf;

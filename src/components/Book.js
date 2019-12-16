import React from "react";
import PropTypes from "prop-types";

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  };
  
  // Takes the value of the new shelf
  handleShelfChange = e => {
    let newShelf = e.target.value;
    this.props.changeShelf(this, newShelf);
  };

  render() {
    const { book } = this.props;
    return (
      <div key={book.id} className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: book.imageLinks
                ? `url(${book.imageLinks.thumbnail})`
                // Handles if no thumbnail returned
                : `url("../icons/image-not-available.jpg")`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf ? book.shelf : "none"}
              onChange={this.handleShelfChange}
            >
              {/* Drop down menu to move the books between shelves */}
              <option value="move" disabled>
                Move book to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {/* Handles if no Book author is returned */}
          {book.authors ? book.authors : "Unknown author"}
        </div>
      </div>
    );
  }
}

export default Book;

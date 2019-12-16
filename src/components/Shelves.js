import React from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

class Shelves extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };

  // Handles the changes of books between shelves
  handleShelfChange = (book, shelf) => {
    this.props.onShelfChange(book, shelf);
  };

  render() {
    return (
      <div className="list-books-content">
        <div>
          {/* Renders the "Currently Reading" shelf */}
          <BookShelf
            title="Currently Reading"
            books={this.props.books.filter(book => book.shelf === "currentlyReading")}
            onShelfChange={this.handleShelfChange}
          />
          {/* Renders the "Want to Read" shelf */}
          <BookShelf
            title="Want to Read"
            books={this.props.books.filter(book => book.shelf === "wantToRead")}
            onShelfChange={this.handleShelfChange}
          />
          {/* Renders the "Read" shelf */}
          <BookShelf
            title="Read"
            books={this.props.books.filter(book => book.shelf === "read")}
            onShelfChange={this.handleShelfChange}
          />
        </div>
      </div>
    );
  }
}

export default Shelves;

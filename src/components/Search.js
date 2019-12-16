import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

class Search extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };
  state = {
    query: "",
    results: []
  };

  // Reflects the value changes in "query"
  updateQuery = query => {
    if (query.length > 0) {
      this.setState(() => ({
        results: [],
        query: query
      }));
      this.searchBook(query);
    } else {
      this.clearQuery();
    }
  };

  // Emptys "query" value
  clearQuery = () => {
    this.setState({
      query: "",
      results: []
    });
  };

  // Moves the book between shelves
  moveBookToShelf(res) {
    if (!res.error) {
      const books = this.props.books;
      const addShelf = res.filter(result =>
        // eslint-disable-next-line
        books.find(book => {
          if (book.id === result.id) {
            result.shelf = book.shelf;
            return result;
          }
        })
      );
      books.concat(addShelf);
      return res;
    }
  }

  // Shows the books that matches the what's typed in the search bar
  searchBook(query) {
    if (query.length > 0)
      BooksAPI.search(query).then(res => {
        if (query === this.state.query)
          this.setState(currentState => ({
            results: this.moveBookToShelf(res)
          }));
      });
  }

  render() {
    const { query, results } = this.state;
    const { onShelfChange } = this.props;

    return (
      <div>
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={this.clearQuery}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
      NOTES: The search from BooksAPI is limited to a particular set of search terms.
      You can find these search terms here:
      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
      you don't find a specific author or title. Every search is limited by search terms.
    */}
            <input
              type="text"
              placeholder="Search by title or author"
              autofocus
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results ? (
              results.map(book => (
                <li key={book.id}>
                  <Book book={book} changeShelf={onShelfChange} />
                </li>
              ))
            ) : (
              <h3>No books with that title</h3>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
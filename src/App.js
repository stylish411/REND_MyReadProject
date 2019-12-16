import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Shelves from './components/Shelves';
import Search from './components/Search';
import { Route, Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    books: []
  };

  changeShelf = (book, newShelf) => {
    book.props.book.shelf = newShelf;
    
    this.setState(state => ({
      books: state.books
      .filter(b => b.id !== book.props.book.id)
      .concat([book.props.book])
    }));
    
    BooksAPI.update(book.props.book, newShelf);
  };
  
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <Shelves
                books={this.state.books}
                onShelfChange={this.changeShelf}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              books={this.state.books}
              onShelfChange={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

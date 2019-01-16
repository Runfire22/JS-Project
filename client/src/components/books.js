import React, { Component } from 'react';

class Books extends Component {
  constructor(){
      super();
      this.state = {
          books: []
      }
  }

  componentDidMount(){
      fetch('/catalog/books')
      .then(res = res.json())
      .then(books => this.setState({books}, () => console.log('Books fetched...', books)));
  }

  render() {
    return (
      <div>
        <h2>Books</h2>
        <ul>
          {this.state.books.map(book =>
            <li key={book.id}>{book.name}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default Books;

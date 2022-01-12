import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import './App.css';
import List from './components/List';

function App() {

  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredBooks, setFilteredBooks] = useState([]);
  
  useEffect(() => {
    getLocalBooks();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalBooks();
  }, [books, status]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredBooks(books.filter(book => book.completed === true));
        break;
      case 'uncompleted':
        setFilteredBooks(books.filter(book => book.completed === false));
        break;
      default:
        setFilteredBooks(books);
        break;
    }
  };  
 

  const saveLocalBooks = () => {
    localStorage.setItem("books", JSON.stringify(books));
  }

  const getLocalBooks = () => {
    if(localStorage.getItem("books") === null) {
      localStorage.setItem("books", JSON.stringify([]));
    }
    else {
      let bookLocal = JSON.parse(localStorage.getItem("books"));
      setBooks(bookLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Book List</h1>
      </header>
      <Form input={input} setInput={setInput} books={books} setBooks={setBooks} setStatus={setStatus}/>
      <List books={books} setBooks={setBooks} filteredBooks={filteredBooks}/>
    </div>
  );
}

export default App;

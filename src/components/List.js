import React from "react";
import Books from "./Books";

const List = ({ books, setBooks, filteredBooks }) => {
    return (
        <div className="book-container">
            <ul className="book-list">
                {filteredBooks.map(book => (
                    <Books setBooks={setBooks} books={books} book={book} key={book.id} text={book.text}/>
                ))}
            </ul>
        </div>
    );
}

export default List;
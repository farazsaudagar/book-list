import React from "react";

const Books = ({ text, books, setBooks, book }) => {

    const deleteHandler = () => {
        setBooks(books.filter(el => el.id !== book.id));
    }

    const completeHandler = () => {
        setBooks(books.map(item => {
            if(item.id === book.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="books">
            <li className={`book-name ${book.completed ? "completed" : ''}`}>{text}</li>
            <button className="book-completed" onClick={completeHandler}>Completed</button>
            <button className="book-delete" onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Books;
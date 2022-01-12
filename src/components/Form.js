import React from "react";

const Form = ({ setInput, input, books, setBooks, setStatus }) => {

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setBooks([
            ...books,
            {text: input, completed: false, id: Math.random() * 1000}
        ]);        
        setInput("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form className="book-form">
            <input value={input} type="text" placeholder="Enter bookname" className="book-input" onChange={inputHandler}/>
            <button type="submit" className="book-btn" onClick={submitHandler}>Add</button>
            <div className="select">
                <select onChange={statusHandler} name="books" className="filter-todos">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
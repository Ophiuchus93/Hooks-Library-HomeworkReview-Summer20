import React, { useState, useEffect, } from "react"
import Book from "./Book";
import BookForm from "./BookForm";
import axios from "axios";
import { Button, CardDeck, } from "react-bootstrap";

const Books = () => {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get("/api/books")
      .then(res => {
        setBooks(res.data)
      })
  }, [])

  const renderBooks = () => {
    return books.map(book => (
      <Book
        key={book.id}
        {...book}
        editBook={editBook}
        deleteBook={deleteBook}
      />
    ))
  };

  const addBook = (book) => setBooks([book, ...books]);

  const editBook = (id, book) => {
    axios.put(`/api/books/${id}`, book)
      .then( res => {
        const updateBook = books.map( book => {
          if (book.id === id)
            return res.data;
          return book  
        });
        setBooks(updateBook)
      })
  };

  const deleteBook = (id) => {
    axios.delete(`/api/books/${id}`)
      .then( res  => {
        setBooks(books.filter(book => book.id !== id))
      })
  };

  return (
    <>
      <h1 align={"center"}>DPL Library</h1>
      <hr />
      <br />
      {showForm && <BookForm addBook={addBook} toggleForm={setShowForm} />}
      {/* {showForm ? <BookForm addBook={addBook} toggleForm={setShowForm} /> : null} */}
      <br />
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Add Book"}
      </Button>
      <br />
      <br />
      <CardDeck>
        {renderBooks()}
      </CardDeck>
    </>
  )
}

export default Books;
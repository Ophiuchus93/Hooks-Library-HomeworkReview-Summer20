import React, { useState, useEffect, } from "react"
import Book from "./Book";
import BookForm from "./BookForm";
import axios from "axios";
import { Card, } from "react-bootstrap";

const Books = () => {
  const [books, setBooks] = useState([])

  // similar to componentDidMount and componentDidUpdate
  useEffect( () => {
    axios.get("/api/books")
    .then( res => {
      setBooks(res.data)
    })
  }, [])

   const renderBooks = () => {
    return books.map( book => (
      <Book 
      key={book.id}
      {...book}
      />
    ))
  };

  const addBook = (book) => setBooks([book, ...books]);

  return (
    <>
      <h1>DPL Library</h1>
      <hr />
      {renderBooks()}
      <br />
      <BookForm addBook={addBook} />
    </>
  )
}

export default Books;
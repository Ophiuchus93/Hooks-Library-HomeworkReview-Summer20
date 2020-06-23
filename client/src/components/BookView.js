import React, { useState, useEffect, } from "react";
import Reviews from "./Reviews";
import axios from "axios";
import { Card, } from "react-bootstrap"

const BookView = (props) => {
  const [book, setBook] = useState({})

  useEffect(() => {
    axios.get(`/api/books/${props.match.params.id}`)
      .then((res) => {
        setBook(res.data)
      })
  }, [])

  return (
    <>
      <h1 align="center">Book View</h1>
      <hr />
      <Card className="text-center">
        <Card.Header>{book.title}</Card.Header>
        <Card.Body>Author: {book.author}</Card.Body>
        <Card.Body>{book.summary}</Card.Body>
      </Card>
      <hr />
      <Reviews bookId={props.match.params.id}/>
    </>
  )
}

export default BookView;
import React, { useState, } from "react";
import { Link, } from "react-router-dom"
import BookForm from "./BookForm";
import { Button, Card, } from "react-bootstrap";

const Book = (props) => {
  const [editing, setEditing] = useState(false)

  const book = { id: props.id, title: props.title, author: props.author, summary: props.summary }

  return (
    <>
      <div>
        <Card
          bg="light"
          border="dark"
          style={{
            width: "18rem"
          }}>
          <Card.Body>
            <Card.Header>Title: {props.title}</Card.Header>
            <Card.Body>Author: {props.author}</Card.Body>
            <Card.Body>{props.summary}</Card.Body>
          </Card.Body>
          <Card.Footer>
            <Button
              size="sm"
              variant="outline-warning"
              onClick={() => setEditing(!editing)}
            >
              Edit
              </Button>
            <Button
              size="sm"
              variant="outline-danger"
              onClick={() => props.deleteBook(props.id)}
            >
              Delete
            </Button>
            <Button
              size="sm"
              variant="outline-success"
              as={Link}
              to={{pathname: `/api/books/${props.id}`, book: book}}
            >
                View Book
            </Button>
            {editing && <BookForm toggleEdit={setEditing} editBook={props.editBook} {...props} />}
            {/* { editing ? <BookForm /> : null } */}
          </Card.Footer>
        </Card>
        <br />
      </div>
    </>
  )
};

export default Book;
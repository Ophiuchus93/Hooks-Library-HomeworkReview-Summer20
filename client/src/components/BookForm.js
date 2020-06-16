import React, { useState, } from "react";
import { Button, Form, } from "react-bootstrap"
import axios from "axios";

const BookForm = (props) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/books", { title, author })
      .then(res => {
        props.addBook(res.data)
      })
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          placeholder="Book Title"
          name="title"
          require
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <Form.Label>Author:</Form.Label>
        <Form.Control
          placeholder="Book Author"
          name="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
};

export default BookForm;
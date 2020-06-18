import React, { useState, useEffect } from "react";
import { Button, Form, } from "react-bootstrap"
import axios from "axios";

const BookForm = (props) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [summary, setSummary] = useState("")
 
  const book = { title: title, author: author, summary: summary }

  useEffect(() => {
    if (props.id) {
      setTitle(props.title)
      setAuthor(props.author)
      setSummary(props.summary)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.editBook) {
      props.editBook(props.id, book)
      props.toggleEdit()
    } else {
    axios.post("/api/books", { title, author })
      .then(res => {
        props.addBook(res.data)
        props.toggleForm();
      })
    }
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
        <Form.Label>Summary: </Form.Label>
        <Form.Control
          placeholder="Book Summary"
          name="summary"
          required
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
};

export default BookForm;
import React, { useState, } from "react";
import { Button, Form, } from "react-bootstrap";
import axios from "axios"

const ReviewForm = (props) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const bookReview = { title: title, body: body }

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post(`/api/books/${props.bookId}/reviews`, bookReview)
        .then (res => {
          props.addReview(res.data)
        })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title your review: </Form.Label>
          <Form.Control
            placeholder="Title"
            type="input"
            required
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Review: </Form.Label>
          <Form.Control
            placeholder="Review"
            type="input"
            required
            autoFocus
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
        <Button type="submit"> Submit </Button>
      </Form>
    </>
  )
};

export default ReviewForm;
import React, { useState, useEffect } from "react";
import { Button, Form, } from "react-bootstrap";
import axios from "axios"

const ReviewForm = (props) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const bookReview = { title: title, body: body }

  useEffect(() => {
    if (props.review) {
      setTitle(props.review.title)
      setBody(props.review.body)
    }
  }, []);

  const handleSubmit = (e) => {
    if (props.editReview) {
      props.editReview(props.bookId, {title: title, body: body, id: props.review.id })
    } else {
    e.preventDefault();
      axios.post(`/api/books/${props.bookId}/reviews`, bookReview)
        .then (res => {
          props.addReview(res.data)
        })
      }
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
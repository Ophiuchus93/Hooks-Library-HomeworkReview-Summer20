import React, { useState } from "react";
import { Button, Card, } from "react-bootstrap";
import ReviewForm from "./ReviewForm";

const Review = ({ review, editReview, bookId, deleteReview }) => {
  const [editing, setEditing] = useState(false)

  return (
    <>
      <Card style={{ width: "25rem", padding: "10px" }} >
        {editing ? <ReviewForm editReview={editReview} bookId={bookId} review={review} /> :
          <Card.Body>
            <Card.Header className="text-center"><h3>{review.title}</h3></Card.Header>
            <Card.Body>{review.body}</Card.Body>
          </Card.Body>
        }
        <Button
          style={{ width: "5rem" }}
          size="sm"
          variant="outline-warning"
          onClick={() => setEditing(!editing)}
        >
          Edit
        </Button>
        <Button
          style={{ width: "5rem" }}
          size="sm"
          variant="outline-danger"
          onClick={() => deleteReview(bookId, review.id)}
        >
          Delete
        </Button>
      </Card>
    </>
  )
};

export default Review
import React from "react";
import { Card, } from "react-bootstrap"

const Review = ({ review, }) => {
  return (
    <>
      <Card style={{width: "25rem"}} >
        <Card.Header className="text-center"><h3>{review.title}</h3></Card.Header>
        <Card.Body>{review.body}</Card.Body>
      </Card>
    </>
  )
};

export default Review
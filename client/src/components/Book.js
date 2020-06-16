import React from "react";
import { Card, } from "react-bootstrap";

const Book = (props) => {
 return (
  <>
    <Card style={{width: "18rem"}}>
        <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.author}</Card.Text>
      </Card>
  </>
 )
};

export default Book;
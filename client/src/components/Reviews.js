import React, { useState, useEffect, } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import axios from "axios";
import { Container, } from "react-bootstrap";

const Reviews = ({ bookId }) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios.get(`/api/books/${bookId}/reviews`)
      .then(res => {
        setReviews(res.data)
      })
  }, [])

  const renderReviews = () => {
    return reviews.map(review => (
      <Review key={review.id} review={review}/>
    ))
  };

  const addReview = (review) => setReviews([review, ...reviews])

  return (
    <>
      <h2>Book Reviews</h2>
      <br />
      <ReviewForm addReview={addReview} bookId={bookId}/>
      <br />
      {renderReviews()}
    </>
  )
}

export default Reviews;
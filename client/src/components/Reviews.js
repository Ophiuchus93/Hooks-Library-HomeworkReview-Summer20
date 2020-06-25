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
      <Review key={review.id} review={review} editReview={editReview} deleteReview={deleteReview} bookId={bookId}/>
    ))
  };

  const addReview = (review) => setReviews([review, ...reviews])

  const editReview = (bookId, review) => {
    axios.put(`/api/books/${bookId}/reviews/${review.id}`, review)
      .then( res => {
        const updateReview = reviews.map(r => {
          if (r.id === review.id)
            return res.data;
          return r;  
        });
        setReviews(updateReview)
      })
  };

  const deleteReview = (bookId, id) => {
    axios.delete(`/api/books/${bookId}/reviews/${id}`)
      .then( res => {
        setReviews(reviews.filter(r => r.id !== id))
      })
  };

  return (
    <>
      <h2>Book Reviews</h2>
      <br />
      {renderReviews()}
      <br />
      <ReviewForm addReview={addReview} bookId={bookId}/>
      
    </>
  )
}

export default Reviews;
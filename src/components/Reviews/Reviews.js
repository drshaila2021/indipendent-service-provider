import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="reviews text-center my-3">
      <h3> Customer Reviews..</h3>
      <div className="review-container">
        {reviews.map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

import React from "react";

const Review = (props) => {
  const { name, post, rating } = props.review;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>{post}</p>
      <p>
        <small>Rating: {rating} </small>
      </p>
    </div>
  );
};

export default Review;

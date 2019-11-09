import React from "react";
import Likes from "./Likes";

const Topic = ({ topic, user, likes }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>"{topic}"</h3>
        <p>- {user}</p>
      </div>

      <Likes likes={likes} />
    </div>
  );
};

export default Topic;

import React from "react";
import Likes from "./Likes";

const Topic = ({ topic, user, likes }) => {
  return (
    <div>
      <h3>Topic: {topic}</h3>
      <p>Username: {user}</p>

      <Likes likes={likes} />
    </div>
  );
};

export default Topic;

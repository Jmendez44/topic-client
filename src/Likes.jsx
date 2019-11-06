import React, { useState, useContext } from "react";
import { CTX } from "./TopicContext";

const Likes = ({likes, id}) => {
  const [likeNum, setLikeNum] = useState(0)
  const [topics, setTopics] = useContext(CTX);


  const addLikeState = () => {
    setLikeNum(likeNum + 1)
  }

  const addLike = e => {
    
    setLikeNum(likeNum + 1)
    console.log(e.target.key)

    
  };

  const minusLike = e => {
    
    setLikeNum(likeNum - 1)

    console.log(e.composedPath)
  };


  // const addLike = e => {
  //   e.preventDefault();
  //   setTopics(prevTopics => [...prevTopics, {name, price}])
  // };

  return (
    <div>
      <button onClick={addLike}>like</button>
      {likeNum}
      <button onClick={minusLike}>dislike</button>
    </div>
  );
};

export default Likes;

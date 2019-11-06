import React, { useState, createContext, useReducer } from "react";

export const CTX = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'add_like':
      return {likes: state.likes + 1}

    default:
      return state;
  }
}


export const TopicProvider = props => {
  const [topics, setTopics] = useState([
    {
      topic: "impeachment",
      username: "johndoe",
      likes: 0,
      id: 23124

    },
    {
      topic: "game of thrones",
      username: "sally",
      likes: 0,
      id: 2566124
    },
    {
      topic: "Inception",
      username: "fred",
      likes: 0,
      id: 23524
    }
  ]);
  const addLike = e => {
    
    // setLikeNum(likeNum + 1)

    
  };
  const minusLike = e => {
    
    // setLikeNum(likeNum - 1)

    // console.log(likeNum)
  };


  return (
    <CTX.Provider value={[topics, setTopics, addLike, minusLike]}>
      {props.children}
    </CTX.Provider>
  );
};

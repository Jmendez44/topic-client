import React, { useState, createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const CTX = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "add_like":
      return { likes: state.likes + 1 };

    default:
      return state;
  }
};




export const TopicProvider = props => {
  const [topics, setTopics] = useState([

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

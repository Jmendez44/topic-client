import React, { useState, useContext, useReducer } from "react";
import { CTX, reducer } from "./TopicContext";


const AddTopic = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [topics, setTopics] = useContext(CTX);
  const [state, dispatch] = useReducer(reducer, { likes: 0 });

  const updateName = e => {
    setName(e.target.value);
  };
  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addTopic = e => {
    e.preventDefault();
    setTopics(prevTopics => [...prevTopics, {name, price}])
  };

  return (
    <form onSubmit={addTopic}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit!</button>
    </form>
  );
};

export default AddTopic;

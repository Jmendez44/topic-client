import React, { useState, useContext, useReducer } from "react";
import { CTX, reducer } from "./TopicContext";
import axios from "axios";


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

  const addTopic = async e => {
    e.preventDefault();
    try {
      const response = await axios.patch("http://localhost:4000/topics/5dc52bebc1096178a8aafb4f", {
        topic: name,
        username: `jay${Math.floor(Math.random() *  Math.floor(100))}`
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form className='add-topic' onSubmit={addTopic}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <button>Submit!</button>
    </form>
  );
};

export default AddTopic;

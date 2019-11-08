import React, { useState, useContext, useEffect } from "react";
import { CTX } from "./TopicContext";
import Topic from "./Topic";
import axios from 'axios'

const TopicList = () => {
  const [topics, setTopics, addLike, minusLike] = useContext(CTX);

  const getTopics = async () => {
    try {
      const response = await axios.get("http://localhost:4000/topics/5dc52bebc1096178a8aafb4f");
      // setTopics(prevTopics => [...prevTopics, {name, price}])
      console.log(response.data.topics);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(async () => {
    getTopics()
  }, []);


  
  return (
    <div>
      {topics.map(topic => (
        <Topic id={topic.id} topic={topic.topic} user={topic.username} likes={topic.likes} key={topic.id} />
      ))}
    </div>
  );
};

export default TopicList;

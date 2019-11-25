import React, { useState, useContext, useEffect } from "react";
import { CTX } from "./TopicContext";
import Topic from "./Topic";
import axios from "axios";
import AddTopic from "./AddTopic";
import Nav from "./Nav";

const TopicList = () => {
  const [stateTopic, setStateTopic] = useState([]);
  const [topics, setTopics, addLike, minusLike] = useContext(CTX);

  //Topic Fetch from db
  useEffect(() => {
    const getTopics = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/topics/5dc52bebc1096178a8aafb4f"
        );

        setTopics(
          response.data.topics.map(topic => ({
            topic: topic.topic,
            username: topic.username,
            id: topic._id
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    // console.log(Math.random() * Math.floor(100))
    getTopics();
  }, [stateTopic]);

  return (
    <>
    <Nav />
    
    <div className="main-topics">
      <div className="topic-container">
        {topics.map(topic => (
          <Topic
            id={topic.id}
            topic={topic.topic}
            user={topic.username}
            likes={topic.likes}
            key={topic.id}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default TopicList;

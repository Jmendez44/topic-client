import React, { useState, useContext } from "react";
import { CTX } from "./TopicContext";
import Topic from "./Topic";

const TopicList = () => {
  const [topics, setTopics, addLike, minusLike] = useContext(CTX);
  return (
    <div>
      {topics.map(topic => (
        <Topic id={topic.id} topic={topic.topic} user={topic.username} likes={topic.likes} key={topic.id} />
      ))}
    </div>
  );
};

export default TopicList;

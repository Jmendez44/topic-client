import React, { useContext } from "react";
import { CTX } from "./TopicContext";
import AddTopic from "./AddTopic";

const Nav = () => {
  const [topics, setTopics] = useContext(CTX);
  return (
    <div className='nav-container'>
      
      <h3>Topic Suggester</h3>
      <p>Number of Topics: {topics.length}</p>
      <AddTopic />
    </div>
  );
};

export default Nav;

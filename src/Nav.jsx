import React, { useContext } from "react";
import { CTX } from "./TopicContext";

const Nav = () => {
  const [topics, setTopics] = useContext(CTX);
  return (
    <>
      <h3>Topic Suggester</h3>
      <p>Number of Topics: {topics.length}</p>
    </>
  );
};

export default Nav;

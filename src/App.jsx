import React, { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import TopicList from "./TopicList";
import { TopicProvider } from "./TopicContext";
import Nav from "./Nav";
import AddTopic from "./AddTopic";

// const socket = io("http://localhost:4000");

const App = () => {
  return (
    <TopicProvider>
      <div className="App">
        <Nav />
        <TopicList />
        <AddTopic />
      </div>
    </TopicProvider>
  );
};

export default App;

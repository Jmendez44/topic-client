import React, { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import TopicList from "./TopicList";
import { TopicProvider } from "./TopicContext";
import Nav from "./Nav";
import AddTopic from "./AddTopic";
import { Switch, Route, Link } from "react-router-dom";
import { Landing } from "./Landing";

// const socket = io("http://localhost:4000");

const App = () => {
  return (
    <TopicProvider>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/topics">
            <TopicList />
          </Route>
        </Switch>
      </div>
    </TopicProvider>
  );
};

export default App;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const context = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/users/5dc52bebc1096178a8aafb4f"
        );
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };
    // console.log(Math.random() * Math.floor(100))
    getUser();
  }, []);

  return(
    <context.Provider value={user}>
      {children}
    </context.Provider>
  )
};

UserProvider.context = context;
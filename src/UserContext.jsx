import React, { useState, useEffect } from "react";
import { createContext } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const { project, setProject } = useState([]);
  return (
    <UserContext.Provider
      value={{
        admin,
        setAdmin,
        userName,
        setUserName,
        signIn,
        setSignIn,
        project,
        setProject,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
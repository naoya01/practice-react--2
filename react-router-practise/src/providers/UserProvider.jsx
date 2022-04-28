import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const {children} = props;

  const [userInfo, setUseInfo] = useState(null);

  const contextName = "じゃけえ"
  return(
    <UserContext.Provider value={{contextName, userInfo,setUseInfo}} >
    {children}
    </UserContext.Provider>
  )
}
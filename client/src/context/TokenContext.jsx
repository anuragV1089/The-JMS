import React, { createContext, useContext } from "react";

export const TokenContext = React.createContext();

export const TokenProvider = ({ children, value }) => {
  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};

import React, {createContext, useState} from 'react';
import {mockQuestions} from "../data";

export const MyContext = createContext(undefined);

export const MyProvider = ({ children }) => {
  const [questions, setQuestions] = useState(mockQuestions);

  return (
    <MyContext.Provider value={{ questions, setQuestions }}>
      {children}
    </MyContext.Provider>
  );
};
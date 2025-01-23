import React, { createContext, useReducer } from 'react';
import textReducer, { initialState } from './textReducer';

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
    const [texts, dispatch] = useReducer(textReducer, initialState);
  
    return (
      <TextContext.Provider value={{ texts, dispatch }}>
        {children}
      </TextContext.Provider>
    );
  };
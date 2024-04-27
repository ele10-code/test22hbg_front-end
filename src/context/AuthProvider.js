// src/context/AuthProvider.js
import React, { createContext, useState } from 'react';

// Crea il contesto con un valore di default che includa le funzioni vuote per evitare errori di undefined
export const AuthContext = createContext({
  authToken: null,
  setAuthToken: () => {},
  isLoggedIn: () => false
});

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const isLoggedIn = () => authToken != null;

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

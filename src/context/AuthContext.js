import React, { createContext, useState, useContext } from 'react';

// Struttura predefinita per il contesto
const defaultAuthContext = {
  authToken: null,
  setAuthToken: () => {},
  isLoggedIn: () => false
};

export const AuthContext = createContext(defaultAuthContext);

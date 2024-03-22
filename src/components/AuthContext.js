import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authLevel, setAuthLevel] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Here, you could check for an existing auth token in localStorage/sessionStorage
    // and update isLoggedIn and authLevel accordingly
    const storedAuthLevel = localStorage.getItem('authLevel');
    if (storedAuthLevel) {
      setAuthLevel(parseInt(storedAuthLevel, 10));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (level) => {
    setAuthLevel(level);
    setIsLoggedIn(true);
    localStorage.setItem('authLevel', level); // Store the auth level in localStorage
    console.log("login worked")
  };

  const logout = () => {
    setAuthLevel(0);
    setIsLoggedIn(false);
    localStorage.removeItem('authLevel'); // Remove the stored auth level
  };

  return (
    <AuthContext.Provider value={{ authLevel, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

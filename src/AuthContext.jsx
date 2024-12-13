
import React, { createContext, useContext, useState, useEffect } from 'react';
import { axiosWithToken } from "./lib/axios";

// Create the context
export const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default state
  const [token, setToken] = useState(localStorage.getItem("veocabJWTToken") || "");

  const [auth, setAuth] = useState(null);
  const setUserAuth = (data) => {
    setIsLoggedIn(true)
    console.log(data.accessToken);
    let token = data.accessToken;
    let tokenId = JSON.parse(atob(token.split('.')[1]));
    console.log(tokenId);
    let userId= tokenId['id'];
    console.log(userId);
    localStorage.setItem('userId', userId);
    localStorage.setItem('veocabJWTToken', data.accessToken)
    localStorage.setItem('veocabUser', JSON.stringify(data.data))
    setAuth(data.data)
  }

  const logOut = () => {
    setAuth(null);
    setToken("");
    setIsLoggedIn(false);
    localStorage.removeItem("veocabJWTToken");
    localStorage.removeItem("veocabUser");
  };

  useEffect(() => {
    const checkAuth = async () => {
      const JWTToken = localStorage.getItem('veocabJWTToken');
      if (JWTToken && !isLoggedIn) {
        setIsLoggedIn(true);
        setAuth(JSON.parse(localStorage.getItem('veocabUser')));
        await axiosWithToken(JWTToken).get('/admin/getprofile').then((res) => {
          setAuth(res.data.data.user);
          localStorage.setItem('veocabUser', JSON.stringify(res.data.data.user));
        }).catch((err) => {
          setIsLoggedIn(false);
          localStorage.removeItem('veocabJWTToken');
          localStorage.removeItem('veocabUser');
        });
      }
    };

      checkAuth();
    }, [isLoggedIn]);
  return (
    <AuthContext.Provider value={{ auth, setAuth, logOut, setUserAuth, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthProvider

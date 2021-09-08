import React from 'react';

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  register: () => {},
  logout: () => {},
});

export default AuthContext;

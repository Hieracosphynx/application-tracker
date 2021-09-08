import { useState } from 'react';
import axios from 'axios';
import AuthContext from './auth-context';

const AuthProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  let isLoggedIn = !!token;

  const loginHandler = async (username, password) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:5000/api/auth',
        data: {
          username,
          password,
        },
      });

      const resToken = response.data.token;
      localStorage.setItem('token', resToken);
      setToken(resToken);
    } catch (err) {
      console.error(err.message);
    }
  };

  const registerHandler = async (username, password) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:5000/api/users',
        data: {
          username,
          password,
        },
      });

      return response;
    } catch (err) {
      console.error(err.message);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    setToken(null);
    isLoggedIn = false;
  };

  const authValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    register: registerHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

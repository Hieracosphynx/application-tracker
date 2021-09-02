import { useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Login.module.css';

const Auth = () => {
  const authCtx = useContext(AuthContext);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    authCtx.login(enteredUsername, enteredPassword);
  };

  return (
    <section className={classes.container}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' ref={passwordInputRef} />
        </div>
        <div className={classes.action}>
          <button type='submit'>Login</button>
        </div>
      </form>
    </section>
  );
};

export default Auth;

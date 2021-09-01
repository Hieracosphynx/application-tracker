import { useRef } from 'react';
import classes from './Login.module.css';
const Auth = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  return (
    <section className={classes.container}>
      <form>
        <div className={classes.control}>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' ref={passwordInputRef} />
        </div>
      </form>
    </section>
  );
};

export default Auth;

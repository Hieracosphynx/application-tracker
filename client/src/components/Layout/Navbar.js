import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import classes from './Navbar.module.css';

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn, logout } = authCtx;

  return (
    <header className={classes.header}>
      <h1>
        <i className='fas fa-dice-three' /> Application Tracker
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

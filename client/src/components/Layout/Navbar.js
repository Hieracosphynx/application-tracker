import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/' activeClassName={classes.active} exact>
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to='/applications' activeClassName={classes.active}>
                Applications
              </NavLink>
            </li>
          )}
          {isLoggedIn ? (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <li>
              <NavLink to='/login' activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

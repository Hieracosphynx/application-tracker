import { useContext, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0.5),
    '&.active': {
      fontWeight: 'bold',
      fontSize: '1rem',
      color: 'white',
    },
    '&:hover': {
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#B5A33F',
    },
  },
  title: {
    flexGrow: 1,
  },
  button: {
    '&.active': {
      fontWeight: 'bold',
      fontSize: '1rem',
      color: 'white',
    },
    '&:hover': {
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#B5A33F',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const authCtx = useContext(AuthContext);
  const { isLoggedIn, logout } = authCtx;

  let authContent = (
    <Button
      color='inherit'
      component={NavLink}
      to='/login'
      className={classes.menuButton}
    >
      Login
    </Button>
  );

  if (isLoggedIn) {
    authContent = (
      <Fragment>
        <Button
          color='inherit'
          className={classes.menuButton}
          component={NavLink}
          to='/applications'
        >
          Applications
        </Button>
        <Button color='inherit' className={classes.menuButton} onClick={logout}>
          Logout
        </Button>
      </Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
          >
            <i className='fas fa-dice-three' />
          </IconButton>
          <Typography variant='h5' className={classes.title}>
            Application Tracker
          </Typography>
          <Button
            color='inherit'
            className={classes.menuButton}
            component={NavLink}
            to={'/'}
            exact
          >
            Home
          </Button>
          {authContent}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

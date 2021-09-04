import { useContext, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import ButtonHelper from '../UI/ButtonHelper';

import { makeStyles } from '@material-ui/core/styles';
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
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const authCtx = useContext(AuthContext);
  const { isLoggedIn, logout } = authCtx;

  let authContent = (
    <ButtonHelper component={NavLink} to='/login'>
      Login
    </ButtonHelper>
  );

  if (isLoggedIn) {
    authContent = (
      <Fragment>
        <ButtonHelper
          className={classes.button}
          component={NavLink}
          to='/applications'
        >
          Applications
        </ButtonHelper>
        <ButtonHelper className={classes.button} onClick={logout}>
          Logout
        </ButtonHelper>
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
          <ButtonHelper component={NavLink} to={'/'}>
            Home
          </ButtonHelper>
          {authContent}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

import { Fragment, useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import ContainerHelper from '../UI/Container';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    minHeight: '100%',
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    width: '100%',
  },
  button: {
    width: '30%',
    marginTop: '15px',
    marginBottom: '0',
    backgroundColor: 'rgb(63, 81, 181)',
    color: 'white',
  },
  input: {
    width: '100%',
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const [isRegister, setIsRegister] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!isRegister) {
      authCtx.login(enteredUsername, enteredPassword);
    } else {
      authCtx.register(enteredUsername, enteredPassword);
    }
    history.push('/');
    setIsRegister(false);
  };

  const registerHandler = (e) => {
    e.preventDefault();
    setIsRegister((register) => !register);
  };

  return (
    <ContainerHelper>
      <form onSubmit={submitHandler}>
        <Card className={classes.formContainer}>
          <Typography variant='h5'>Application Tracker</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.inputLabel} htmlFor='username'>
              Username
            </InputLabel>
            <Input
              className={classes.input}
              name='username'
              type='text'
              inputRef={usernameInputRef}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.inputLabel} htmlFor='password'>
              Password
            </InputLabel>
            <Input
              className={classes.input}
              name='password'
              type='password'
              inputRef={passwordInputRef}
            />
          </FormControl>
          {!isRegister && (
            <Fragment>
              <Button type='submit' className={classes.button}>
                Login
              </Button>
              <Button type='button' onClick={registerHandler}>
                Register
              </Button>
            </Fragment>
          )}
          {isRegister && (
            <Fragment>
              <Button type='submit' className={classes.button}>
                Register
              </Button>
              <Button type='button' onClick={registerHandler}>
                Login
              </Button>
            </Fragment>
          )}
        </Card>
      </form>
    </ContainerHelper>
  );
};

export default Login;

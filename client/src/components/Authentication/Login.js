import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth-context';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '40vh',
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: '200px',
    borderWidth: '2px',
    boxShadow: '2px 2px',
    borderRadius: '5px',
    borderColor: 'black',
    borderStyle: 'solid',
    color: 'grey',
  },
  formContainer: {
    minHeight: '100%',
    width: '100%',
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

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    authCtx.login(enteredUsername, enteredPassword);
    history.push('/');
  };

  return (
    <Container className={classes.root}>
      <form onSubmit={submitHandler}>
        <Container className={classes.formContainer}>
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
          <Button type='submit' className={classes.button}>
            Login
          </Button>
        </Container>
      </form>
    </Container>
  );
};

export default Login;
//<Card>
//   <form onSubmit={submitHandler}>
//     <div className={classes.control}>
//       <label htmlFor='username'>Username</label>
//       <input type='text' name='username' ref={usernameInputRef} />
//     </div>
//     <div className={classes.control}>
//       <label htmlFor='password'>Password</label>
//       <input type='password' name='password' ref={passwordInputRef} />
//     </div>
//     <div className={classes.action}>
//       <button type='submit'>Login</button>
//     </div>
//   </form>
// </Card>

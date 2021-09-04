import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const buttonStyle = makeStyles((theme) => ({
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

const ButtonHelper = (props) => {
  const classes = buttonStyle();
  return (
    <Button
      color='inherit'
      className={classes.button}
      component={props.component}
      onClick={props.onClick}
      to={props.to}
      exact
    >
      {props.children}
    </Button>
  );
};

export default ButtonHelper;

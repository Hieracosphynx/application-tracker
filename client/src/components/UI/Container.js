import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const containerStyle = makeStyles((theme) => ({
  root: {
    minHeight: '40vh',
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: '200px',
    color: 'grey',
  },
}));

const ContainerHelper = (props) => {
  const classes = containerStyle();

  return <Container className={classes.root}>{props.children}</Container>;
};

export default ContainerHelper;

import { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';

const applicationFormStyle = makeStyles((theme) => ({
  textFields: {
    margin: theme.spacing(1),
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-input': {
      color: 'white',
    },
  },
  input: {
    color: 'white',
  },
  label: {
    borderColor: 'white',
  },
  tableCells: {
    color: 'white',
    borderColor: 'white',
  },
}));

const NewApplicationForm = (props) => {
  const classes = applicationFormStyle();
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <TableCell className={classes.tableCells}>
        <TextField
          className={classes.textFields}
          color='primary'
          variant='outlined'
          size='small'
          InputProps={{
            className: classes.input,
          }}
        />
      </TableCell>
      <TableCell align='center'>
        <TextField
          className={classes.textFields}
          color='primary'
          variant='outlined'
          size='small'
          InputProps={{
            className: classes.input,
          }}
        />
      </TableCell>
      <TableCell align='center'>
        <TextField
          className={classes.textFields}
          color='primary'
          variant='outlined'
          size='small'
          InputProps={{
            className: classes.input,
          }}
        />
      </TableCell>
    </Fragment>
  );
};

export default NewApplicationForm;

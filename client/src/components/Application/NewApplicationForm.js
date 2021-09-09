import { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const applicationFormStyle = makeStyles(() => ({
  tableCells: {
    color: 'white',
  },
}));

const NewApplicationForm = (props) => {
  const classes = applicationFormStyle();
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <TableCell className={classes.tableCells}></TableCell>
      <TableCell className={classes.tableCells}></TableCell>
      <TableCell className={classes.tableCells}></TableCell>
    </Fragment>
  );
};

export default NewApplicationForm;

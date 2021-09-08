import { Fragment } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const applicationListStyle = makeStyles(() => ({
  tableCells: {
    color: 'white',
  },
}));

const ApplicationList = ({ id, company, source, type }) => {
  const classes = applicationListStyle();

  return (
    <Fragment>
      <TableCell className={classes.tableCells} align='left'>
        {company}
      </TableCell>
      <TableCell className={classes.tableCells} align='center'>
        {source}
      </TableCell>
      <TableCell className={classes.tableCells} align='center'>
        {type}
      </TableCell>
    </Fragment>
  );
};

export default ApplicationList;

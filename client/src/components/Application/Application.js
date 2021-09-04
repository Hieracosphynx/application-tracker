import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    width: '100%',
    minWidth: '0px',
  },
  tableContainer: {
    width: '100%',
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    backgroundColor: 'grey',
  },
}));

const Application = () => {
  const classes = useStyles();
  const applications = useSelector((state) => state.application.applications);

  return (
    <Container className={classes.root}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell align='center'>Source</TableCell>
              <TableCell align='center'>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((application) => {
              return (
                <TableRow key={application._id}>
                  <TableCell component='th' scope='row'>
                    {application.company}
                  </TableCell>
                  <TableCell align='center'>{application.source}</TableCell>
                  <TableCell align='center'>{application.type}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Application;

import ApplicationList from './ApplicationList';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
    backgroundColor: '#4B4B4B',
  },
  tableContainer: {
    width: '100%',
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableHeaders: {
    fontWeight: 'bold',
    color: 'white',
  },
  tableCell: {
    color: 'white',
  },
  paper: {
    backgroundColor: 'grey',
  },
}));

const Application = () => {
  const classes = useStyles();
  const applications = useSelector((state) => state.application.applications);

  let applicationData;

  if (applications.length <= 0) {
    applicationData = (
      <TableRow>
        <TableCell>No data found</TableCell>
      </TableRow>
    );
  } else {
    applicationData = applications.map((application) => {
      const { id, company, source, type } = application;
      return (
        <TableRow key={application._id}>
          <ApplicationList
            id={id}
            company={company}
            source={source}
            type={type}
          />
        </TableRow>
      );
    });
  }

  return (
    <Container className={classes.root}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow color='white'>
              <TableCell className={classes.tableHeaders} align='left'>
                Company
              </TableCell>
              <TableCell className={classes.tableHeaders} align='center'>
                Source
              </TableCell>
              <TableCell className={classes.tableHeaders} align='center'>
                Type
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicationData}
            <TableRow>
              <TableCell rowSpan={1} />
              <TableCell colSpan={1} />
              <TableCell className={classes.tableCell} align='right'>
                <Button type='button' color='inherit'>
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Application;

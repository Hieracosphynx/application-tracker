import Card from '../UI/Card';
import { useSelector } from 'react-redux';
import classes from './Application.module.css';

const Application = () => {
  const applications = useSelector((state) => state.application.applications);
  return (
    <Card>
      <table className={classes.applications}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Source</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => {
            return (
              <tr key={application._id}>
                <td>{application.company}</td>
                <td>{application.source}</td>
                <td>{application.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Application;

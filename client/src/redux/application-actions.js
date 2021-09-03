import axios from 'axios';
import { applicationActions } from './application-slice';

export const fetchDataHandler = (token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'http://localhost:5000/api/applications',
          headers: {
            'x-auth-token': token,
          },
        });
        if (response.status !== 200) {
          throw new Error('Something went wrong.');
        }
        return response.data;
      } catch (err) {
        console.error(err.message);
      }
    };
    try {
      const data = await fetchData(token);
      dispatch(
        applicationActions.replaceApplication({
          applications: data.applications,
        })
      );
    } catch (err) {
      console.error(err.message);
      dispatch(
        applicationActions.replaceApplication({
          applications: 'empty',
        })
      );
    }
  };
};

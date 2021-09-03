import { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { fetchDataHandler } from './redux/application-actions';
import AuthContext from './context/auth-context';
import Application from './components/Application/Application';
import Login from './components/Authentication/Login';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';

const App = () => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const { isLoggedIn, token } = authCtx;

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchDataHandler(token));
    }
  }, [isLoggedIn, token, dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        {!isLoggedIn && (
          <Route path='/login'>
            <Login />
          </Route>
        )}
        {isLoggedIn && (
          <Route path='/applications'>
            <Application />
          </Route>
        )}
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;

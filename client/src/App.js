import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthContext from './context/auth-context';
import Home from './pages/Home';
import Login from './components/Authentication/Login';
import Layout from './components/Layout/Layout';

const App = () => {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        {isLoggedIn && <Route path='/applications'>Applications</Route>}
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;

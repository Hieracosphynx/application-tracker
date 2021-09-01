import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Authentication/Login';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;

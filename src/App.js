import {Component, Suspense, lazy} from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from './components/Loader';
import { ToastContainer } from "react-toastify";
import { connect } from 'react-redux';

const HomePage = lazy(() => import('./routers/HomePage'));
const RegisterRouter = lazy(() => import('./routers/RegisterRouter'));
const LoginRouter = lazy(() => import('./routers/LoginRouter'));
const ContactRouter = lazy(() => import('./routers/ContactRouter'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<Loader/>} >
          <Switch>
              <PublicRoute exact path='/' component={HomePage} />
              <PublicRoute path='/register' restricted component={RegisterRouter} redirectTo={'/contacts'}/>
              <PublicRoute path='/login' restricted component={LoginRouter} redirectTo={'/contacts'} />
              <PrivateRoute path='/contacts' component={ContactRouter} redirectTo={'/login'}/>
          </Switch>
        </Suspense>
        <ToastContainer autoClose={3000} position="top-right" type="default"/>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);
import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from './components/Loader';
import { ToastContainer } from "react-toastify";
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('./routers/HomePage'));
const RegisterRouter = lazy(() => import('./routers/RegisterRouter'));
const LoginRouter = lazy(() => import('./routers/LoginRouter'));
const ContactRouter = lazy(() => import('./routers/ContactRouter'));

export default function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch]);
  
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<Loader/>} >
          <Switch>
            <PublicRoute exact path='/'>
              <HomePage/>
            </PublicRoute>
            <PublicRoute path='/register' restricted redirectTo={'/contacts'}>
              <RegisterRouter/>
            </PublicRoute>
            <PublicRoute path='/login' restricted redirectTo={'/contacts'} >
              <LoginRouter/>
            </PublicRoute>
            <PrivateRoute path='/contacts' redirectTo={'/login'}>
              <ContactRouter/>
            </PrivateRoute>
          </Switch>
        </Suspense>
        <ToastContainer autoClose={3000} position="top-right" type="default"/>
      </Container>
    )
}
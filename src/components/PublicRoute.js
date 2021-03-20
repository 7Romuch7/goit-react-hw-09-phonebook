import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute ({
    isAutenticated,
    redirectTo,
    children,
    ...routeProps
}) {
    const isLogedIn = useSelector(authSelectors.getAuthenticated);
    
    return <Route {...routeProps}>
        {isLogedIn && routeProps.restricted
        ? (<Redirect to={redirectTo}/>)
        : (children)
    }
    </Route>
}
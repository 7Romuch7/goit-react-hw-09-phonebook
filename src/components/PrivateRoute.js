import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute ({
    isAuthenticated,
    redirectTo,
    children,
    ...routeProps
}) {

    const isLogedIn = useSelector(authSelectors.getAuthenticated);

    return (
        <Route {...routeProps}> {
            isLogedIn
                ? (children)
                : (<Redirect to={redirectTo} />)
            }
        </Route>
    )
}

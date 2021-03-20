import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function AppBar() {

    const isLogedIn = useSelector(authSelectors.getAuthenticated);

    return (
        <header>
            <Navigation />
            {isLogedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {

  const isLogedIn = useSelector(authSelectors.getAuthenticated);

  return (
    <nav className={styles.navigation}>
      <NavLink to="/" exact className={styles.navigationLink}>
        Homepage
      </NavLink>

      {isLogedIn && <NavLink
        to="/contacts"
        exact
        className={styles.navigationLink}
      >
        Phonebook
      </NavLink>}
    </nav>)
}
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={styles.authNav}>
      <NavLink
        to="/register"
        exact
        className={styles.autLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.autLink}
      >
        Login
      </NavLink>
    </div>
  );
}
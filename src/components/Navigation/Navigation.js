import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

const Navigation = ({isAuthenticated}) => (
  <nav className={styles.navigation}>
    <NavLink to="/" exact className={styles.navigationLink}>
      Homepage
    </NavLink>

    {isAuthenticated && <NavLink
      to="/contacts"
      exact
      className={styles.navigationLink}
    >
      Phonebook
    </NavLink>}

  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
})

export default connect(mapStateToProps)(Navigation);
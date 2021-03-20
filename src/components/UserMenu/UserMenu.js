import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {

  const email = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut())
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <span className={styles.emailUser}>Welcome, {email}</span>
      <button className={styles.btnLogout} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  )
}
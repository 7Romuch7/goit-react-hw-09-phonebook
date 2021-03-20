import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from '../../redux/auth';
import { toast } from 'react-toastify';
import Title from '../../components/Title';
import 'react-toastify/dist/ReactToastify.css';
import styles from './LoginRouter.module.css';

export default function LoginRouter () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const onLogin = useCallback(() =>
      dispatch(authOperations.login({email, password})),
    [email, password, dispatch],
  );

    const handleChange = event => {
        const { name, value } = event.target;

        switch (name) {

            case 'email':
                setEmail(value);
                break;
      
            case 'password':
                setPassword(value);
                break;
      
            default:
                return;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (email === '') { toast.error('Enter email!'); }
            else {
                if (password.length < 8) { toast.error('Wrong password!'); }
            else {
                    onLogin(email, password);
                    clear();
            };
        }
    };

    const clear = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <div className={styles.loginPage}>
            <Title title='Login'/>
            <form className={styles.formLogin}
                onSubmit={handleSubmit}
                autoComplete="off"  
            >
                <label className={styles.labelLogin}>
                    Email
                    <input className={styles.inputLogin}
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.labelLogin}>
                    Password
                    <input className={styles.inputLogin}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button
                    disabled={!email && password < 1}
                    className={styles.btnLogin} 
                    type="submit">
                        Login
                </button>
            </form>
        </div>
)}
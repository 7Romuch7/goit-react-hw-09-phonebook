import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from '../../redux/auth';
import Title from '../../components/Title';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './RegisterRouter.module.css';

export default function RegisterRouter() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
  const onRegister = useCallback(
    () =>
      dispatch(authOperations.register({name, email, password})),
    [name, email, password, dispatch],
  );

    const handleChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

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

        if (name.length < 8) {
            toast.error('Enter a name at least 8 characters!')
        } else {
            if (email === '') { toast.error('Enter email!') }
            else {
                if (password.length < 8) { toast.error('Enter a password at least 8 characters!') }
                else {
                    onRegister(name, email, password);
                    clear();
                    };
                };
        };
  }
    
    const clear = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className={styles.registerPage}>
            <Title title='Register'/>
            <form className={styles.formRegister}
                onSubmit={handleSubmit}
                autoComplete="off"  
            >
                <label className={styles.labelRegister}>
                    Name
                <input className={styles.inputRegister}
                        autoComplete="off"
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={handleChange} />
                </label>

                <label className={styles.labelRegister}>
                    Email
                    <input className={styles.inputRegister}
                        autoComplete="off"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.labelRegister}>
                    Password
                    <input className={styles.inputRegister}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button
                    disabled={!name && !email && password < 1}
                    className={styles.btnRegister} 
                    type="submit">
                        chekin
                </button>
                
            </form>
        </div>
)}
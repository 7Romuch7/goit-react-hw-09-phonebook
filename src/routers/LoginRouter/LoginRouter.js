import { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from '../../redux/auth';
import { toast } from 'react-toastify';
import Title from '../../components/Title';
import 'react-toastify/dist/ReactToastify.css';
import styles from './LoginRouter.module.css';

class LoginRouter extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
         if (email === '') { toast.error('Enter email!'); }
        else {
            if (password.length < 8) { toast.error('Wrong password!'); }
            else {
                this.props.onLogin(this.state);

                this.setState({ email: '', password: '' });
            };
        };
    };

render() {
    const { email, password } = this.state;

    return (
        <div className={styles.loginPage}>
            <Title title='Login'/>
            <form className={styles.formLogin}
                onSubmit={this.handleSubmit}
                autoComplete="off"  
            >
                <label className={styles.labelLogin}>
                    Email
                    <input className={styles.inputLogin}
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>

                <label className={styles.labelLogin}>
                    Password
                    <input className={styles.inputLogin}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>

                {/* <button className={styles.btnLogin} type="submit">Login</button> */}
                {this.state.email && this.state.password > 0
                    ? <button className={styles.btnLogin} type="submit">Login</button>
                    : <button disabled className={styles.btnLogin} type="submit">Login</button>}
            </form>
        </div>
    )}
}

const mapDispatchToProps = {
    onLogin: authOperations.login,
}

export default connect(null, mapDispatchToProps) (LoginRouter);
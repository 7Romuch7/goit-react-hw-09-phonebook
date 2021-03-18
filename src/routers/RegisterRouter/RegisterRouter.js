import { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from '../../redux/auth';
import Title from '../../components/Title';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './RegisterRouter.module.css';

class RegisterRouter extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

     handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { name, email, password } = this.state;
        if (name.length < 8) {
            toast.error('Enter a name at least 8 characters!');
        } else {
            if (email === '') { toast.error('Enter email!'); }
            else {
                if (password.length < 8) { toast.error('Enter a password at least 8 characters!'); }
                else {
                        this.props.onRegister(this.state);
                        this.setState({ name: '', email: '', password: '' });
                    };
                };
        };
        
    };

    render() {
    const { name, email, password } = this.state;

    return (
        <div className={styles.registerPage}>
            <Title title='Register'/>
            <form className={styles.formRegister}
                onSubmit={this.handleSubmit}
                autoComplete="off"  
            >
                <label className={styles.labelRegister}>
                    Name
                <input className={styles.inputRegister}
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={this.handleChange} />
                </label>

                <label className={styles.labelRegister}>
                    Email
                    <input className={styles.inputRegister}
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>

                <label className={styles.labelRegister}>
                    Password
                    <input className={styles.inputRegister}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>

                {/* <button className={styles.btnRegister} type="submit">chekin</button> */}
                {this.state.name && this.state.email && this.state.password > 0
            ? <button onSubmit={this.handleSubmit} className={styles.btnRegister} type="submit">chekin</button>
            : <button disabled onSubmit={this.handleSubmit} className={styles.btnRegister} type="submit">chekin</button>}
            </form>
        </div>
    )}
}


const mapDispatchToProps = {
    onRegister: authOperations.register,
}

export default connect(null, mapDispatchToProps)(RegisterRouter);
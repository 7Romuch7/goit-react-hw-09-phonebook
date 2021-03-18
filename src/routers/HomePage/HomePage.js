import styles from './HomePage.module.css';
import Footer from '../../components/Footer';

const HomePage = () => (
    <>
        <div className={styles.homePage}>
            <h1 className={styles.titleHomePage}>Phonebook</h1>
        </div>
        <Footer/>
    </>
)

export default HomePage;
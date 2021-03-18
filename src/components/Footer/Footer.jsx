import styles from './Footer.module.css';

const Footer = ({ title }) => (
    <div className={styles.footer}>
        <p className={styles.footerDiscription}> © Phonebook Company 2021 </p>
    </div>
);

export default Footer;
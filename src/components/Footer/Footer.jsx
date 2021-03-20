import styles from './Footer.module.css';

const Footer = ({ title }) => (
    <div className={styles.footer}>
        <p className={styles.footerDiscription}>{title}</p>
    </div>
);

export default Footer;
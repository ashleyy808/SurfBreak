import styles from './Footer.module.css';


function Footer(props) {
    return (
        <footer className={styles.Footer}>
            <p>Copyright &copy; ALL RIGHTS RESERVED {new Date().getFullYear()} SURF BREAK</p>
        </footer>
    );

};

export default Footer;
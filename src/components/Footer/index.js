import styles from './Footer.module.css';


function Footer(props) {
    return (
        <footer className={styles.Footer}>
            <p>Copyright &copy; ALL RIGHTS RESERVED {new Date().getFullYear()} Surf Spots</p>
        </footer>
    );

};

export default Footer;
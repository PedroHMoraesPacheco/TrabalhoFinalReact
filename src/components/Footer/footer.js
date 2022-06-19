import {FaFacebook, FaInstagram, FaLinkedIn} from 'react-icons/fa'
import './footerStyle.css'

function Footer(){
    return (
    <footer className={styles.footer}>
    <ul className={styles_social_list}>
        <li>
            <FaFacebook/>
        </li>
        <li>
             <FaInstagram/>
        </li>
        <li>
                <FaLinkedIn/>
        </li>
    </ul>
    <p className={styles.copy_right}>
        <span>TIC T2_2022_01 Grupo3</span> &copy; 2022</p>

    </footer>)
}

export default Footer
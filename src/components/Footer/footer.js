import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './footerStyle.css'

export default function Footer(){
    return (
    <footer className="footer">
    <ul className="social_list">
        <li>
            <a href="https://www.facebook.com/" target="_blank"><FaFacebook/></a> 
        </li>
        <li>
            <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a> 
        </li>
        <li>
            <a href="https://www.linkedin.com/" target="_blank"> <FaLinkedin/></a> 
        </li>
    </ul>
    <p className="copy_right">
        <span>TIC T2_2022_01 Grupo3</span> &copy; 2022</p>

    </footer>
    )
}



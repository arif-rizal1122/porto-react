import profilPicture from '../assets/profile-picture.png'
import '../styles/Header.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
    
    <header>
        <div className="header-jumbotron">
            <img src={profilPicture} />
            <h3>Arif Rizal Portfolio</h3>
            <p>Proggrammer - Fullstack</p>

            <div className="socialMedia">
                <a href=""><FaInstagram /></a>
                <a href=""><FaGithub /></a>
                <a href=""><FaFacebook /></a>
                <a href=""><FaWhatsapp /></a>
            </div>

        </div>
       
       
    </header>

  )
}

export default Header
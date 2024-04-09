import footer_logo from "../assets/images/LOGO.png"
import instagram from "../assets/images/instagram50-icon.png"
import twitter from "../assets/images/twitter-icon.png"
import facebook from "../assets/images/facebook-icon.png"
import linkedin from "../assets/images/linkedin-icon.png"
import {Link} from 'react-router-dom'


function Footer() {
    return (
        <footer>
            <section>
                <img src={footer_logo} alt="footer logo"/>
            </section>
            <section>
                <h4>Doormat Navigation</h4>
                <ul className="doormat_navigation">
                    <li><Link to="/" className="nav-item" >Home</Link></li>
                    <li><Link to="/aboutme" className="nav-item" >about</Link></li>
                    <li><Link to="/Menu" className="nav-item" >Menu</Link></li>
                    <li><Link to="/reservation" className="nav-item">Reservations</Link></li>
                    <li><Link to="/order-online" className="nav-item" >Order Online</Link></li>
                    <li><Link to="/login" className="nav-item" >Login</Link></li>
                </ul>
            </section>
            <section className="footer_contact">
                <h4>Contact</h4>
                <p aria-label="address">Bruder str. 43<br/>59494 Chicago<br/>USA</p>
                <p aria-label="phone number">+49123456789</p>
                <p aria-label="email address">info@littlelemon</p>
            </section>
            <section>
                <h4>Social Media Links</h4>
                <a href="https://instagram.com"><img src={instagram} alt="instagram icon"/></a>
                <a href="https://twitter.com"><img src={twitter} alt="twitter icon" /></a>
                <a href="https://facebook.com"><img src={facebook} alt="facebook icon"/></a>
                <a href="https://linkedin.com"><img src={linkedin} alt="linkedin icon" /></a>
                
            </section>
        </footer>
    )
}

export default Footer
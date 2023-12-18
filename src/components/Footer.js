import footer_logo from "../assets/images/LOGO.png"
import instagram from "../assets/images/instagram50-icon.png"
import twitter from "../assets/images/twitter-icon.png"
import facebook from "../assets/images/facebook-icon.png"
import linkedin from "../assets/images/linkedin-icon.png"

function Footer() {
    return (
        <footer>
            <section>
                <img src={footer_logo} alt="footer logo image"/>
            </section>
            <section>
                <h4>Doormat Navigation</h4>
                <ul className="doormat_navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </section>
            <section className="footer_contact">
                <h4>Contact</h4>
                <p>Bruder str. 43<br/>59494 Chicago<br/>USA</p>
                <p>+49123456789</p>
                <p>info@littlelemon</p>
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
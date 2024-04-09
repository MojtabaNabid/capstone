import Nav from './Nav.js'
import Logo1 from '../assets/images/Logo1.jpg'
import hamburger from "../assets/images/Hamburger_icon.png"




function Header(props) {
    return (
        <header className="App-header">
            <img className='menu-icon' src={hamburger} alt="Hamburger Icon"/>
            <img className='logo' src={Logo1} alt='logo'/>
            <Nav nameAndFamily={props.nameAndFamily} />
        </header>
    )
}

export default Header
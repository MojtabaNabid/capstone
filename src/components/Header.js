import Nav from './Nav.js'
import Logo1 from '../assets/images/Logo1.jpg'

function Header() {
    return (
        <header className="App-header">
            <img className='logo' src={Logo1} alt='logo'/>
            <Nav />
        </header>
    )
}

export default Header
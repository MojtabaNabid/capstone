import {Routes, Route, Link} from 'react-router-dom'


function Nav() {
    return (
        <>
            <nav className="nav desktop-size">
                <ul>
                    <li><Link to="/" className="nav-item" >Home</Link></li>
                    <li><Link to="/aboutme" className="nav-item" >about</Link></li>
                    <li><Link to="/Menu" className="nav-item" >Menu</Link></li>
                    <li><Link to="/reservation" className="nav-item">Reservations</Link></li>
                    <li><Link to="/order-online" className="nav-item" >Order Online</Link></li>
                    <li><Link to="/login" className="nav-item" >Login</Link></li>
                </ul>
            </nav>
            {/* <nav className="nav mobile-size">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav> */}
        </>
    )
}

export default Nav
import './navigation.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function Navigation() {
    return (
        <div className='nav'>
            <div className='nav_logo'><img className='logo' src={logo} alt='logo' /></div>
            <div className='nav_menu'>
                <Link className='nav_link' to="/">HOME</Link>
                <Link className='nav_link' to="/about">ABOUT</Link>
                <Link className='nav_link' to="/menu">MENU</Link>
                <Link className='nav_link' to="/services">SERVICES</Link>
                <Link className='nav_link' to="/contact">CONTACT</Link>
            </div>
        </div>
    );
}

export default Navigation;

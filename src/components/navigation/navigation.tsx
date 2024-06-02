
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function Navigation() {
    return (
        <div className='nav'>
            <img src={logo} alt='logo' />
            <div className='nav_menu'>
                <div className='nav_link'><Link to="/">HOME</Link></div>
                <div className='nav_link'><Link to="/about">ABOUT</Link></div>
                <div className='nav_link'><Link to="/menu">MENU</Link></div>
                <div className='nav_link'><Link to="/services">SERVICES</Link></div>
                <div className='nav_link'><Link to="/contact">CONTACT</Link></div>
            </div>
        </div>
    );
}

export default Navigation;

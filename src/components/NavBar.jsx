import { Link } from 'react-router-dom';
import Navbarstyle from '../styles/Navbarstyle.css';
import logo from '../images/w-s-m.png';

function NavBar() {
  return (
    <nav className='navclass'>

      <div className='logo-title'>
        <img src={logo} className="logo-img"/>
        <h1 className='h1'>Work Study Management</h1>
      </div>

      <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>        
        <li><Link to="/news">News</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>   
      </ul>
    </nav>
  );
}

export default NavBar;

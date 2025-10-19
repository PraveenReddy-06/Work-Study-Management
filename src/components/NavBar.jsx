import { Link } from 'react-router-dom';
import Navbarstyle from '../styles/Navbarstyle.css';

function NavBar() {
  return (
    <nav className='navclass'>
      <h1>Work Study Management</h1>
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

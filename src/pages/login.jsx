import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import StudentLogin from './StudentLogin';
import AdminLogin from './AdminLogin';
import Loginstyle from '../styles/Loginstyle.css';

function Login() {
  return (
    <div className='login-page'>
      <header className='login-header'>
        <NavBar />
      </header>

      <div className='student-admin-login'>
      <div className='student-login'>
        <h2>Login As Student</h2>
        <nav>
          <ul className='student-links'>
            <li><Link to="/student-login">Student Login</Link></li>
          </ul>
        </nav>
      </div>

      <div className='admin-login'>
      <h2>Login As Admin</h2>
      <nav>
        <ul className='admin-links'>
          <li><Link to="/admin-login">Admin Login</Link></li>
         </ul>
      </nav>
      </div>
      </div>

      <div className='login-footer'>
        <Footer />
      </div>
      
    </div>
  );
}
export default Login;

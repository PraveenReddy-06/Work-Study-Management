import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import StudentLogin from './StudentLogin';
import AdminLogin from './AdminLogin';

function Login() {
  return (
    <div>
      <header>
        <h1>Work Study Management</h1>
        <NavBar />
      </header>
      <nav>
        <ul>
          <li><Link to="/student-login">Student Login</Link></li>
          <li><Link to="/admin-login">Admin Login</Link></li>
         </ul>
      </nav>
      <Footer />
    </div>
  );
}
export default Login;

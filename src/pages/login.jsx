import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Loginstyle.css';

function Login() {
  return (
    <div className='login-page'>
      <header className='login-header'>
        <NavBar />
      </header>

      <main className='student-admin-login'>
        {/* Student card */}
        <section className='student-login'>
          <div className="login-card-overlay">
            <h2>Login As Student</h2>
            <nav>
              <ul className='student-links'>
                <li><Link to="/student-login">Student Login</Link></li>
              </ul>
            </nav>
          </div>
        </section>

        {/* Admin card */}
        <section className='admin-login'>
          <div className="login-card-overlay">
            <h2>Login As Admin</h2>
            <nav>
              <ul className='admin-links'>
                <li><Link to="/admin-login">Admin Login</Link></li>
              </ul>
            </nav>
          </div>
        </section>
      </main>

      <footer className='login-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;

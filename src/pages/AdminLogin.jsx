import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Adminlogin from '../styles/Adminlogin.css';

function AdminLogin() {
  return (
    <div className='al'>

      <main className='al-main'>
        <h2 className='al-h2'>
          <div className='al-h2-bg'></div>
          <div className='title'>
            WELCOME TO <br />
            WORK <br />
            STUDY <br />
            MANAGEMENT SYSTEM
          </div>
        </h2>

        <form className='al-form'>
          <div className="form-row">
            <label htmlFor="username">ID: </label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-row">
            <label htmlFor="password">PASSWORD: </label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-row">
            <label htmlFor="captcha">CAPTCHA: </label>
            <input type="text" id="captcha" name="captcha" />
          </div>
          <div className="form-row">
            <label htmlFor="cif">Cif: </label>
            <input type="text" id="cif" name="cif" />
          </div>
          <Link to="/Admin-Dashboard">
            <button type="submit">login</button>
          </Link>
          <a href="#">forget password?</a>
        </form>
        <br />
        
      </main>

      <div className='admin-login-footer'>
        <Footer />
      </div>
      
    </div>
  );
}
export default AdminLogin;

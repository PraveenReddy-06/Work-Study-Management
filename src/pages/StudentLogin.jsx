
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Studentstyle from '../styles/Studentlogin.css';



function StudentLogin() {
  return (
    <div className='sl'>

      <main className='sl-main'>
        <h2 className='sl-h2'>
          <div className='sl-h2-bg'></div>
          <div className='title'>
            WELCOME TO <br />
            WORK <br />
            STUDY <br />
            MANAGEMENT SYSTEM
          </div>
        </h2>

        <div className='sl-form'>
            <form className='sl-form'>
              <div className="form-row">
                <label htmlFor="username">LOGIN: </label>
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
              <Link to="/Student-Dashboard">
                <button type="submit">login</button>
              </Link>
              <a href="#">forget password?</a>
            </form>
        </div>
      </main>

      <div className='student-login-footer'>
      <Footer />
      </div>
    </div>
  );
}

export default StudentLogin;

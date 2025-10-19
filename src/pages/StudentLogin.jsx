
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function StudentLogin() {
  return (
    <div>
      <header>
        <h1>Work Study Management</h1>
        <NavBar />
      </header>
      <main>
        <h1>Student</h1>
        <h2>
          WELCOME TO <br />
          WORK <br />
          STUDY <br />
          MANAGEMENT SYSTEM
        </h2>
        <form>
          <label htmlFor="username">LOGIN: </label>
          <input type="text" id="username" name="username" /><br /><br />

          <label htmlFor="password">PASSWORD: </label>
          <input type="password" id="password" name="password" /><br /><br />

          <label htmlFor="captcha">CAPTCHA: </label>
          <input type="text" id="captcha" name="captcha" /><br /><br />

          <Link to="/Student-Dashboard">
          <button type="submit">login</button>
          </Link>
        </form>
        <br />
        <a href="#">forget password?</a>
      </main>
      <Footer />
    </div>
  );
}

export default StudentLogin;

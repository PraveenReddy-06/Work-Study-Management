import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function AdminLogin() {
  return (
    <div>
      <header>
        <h1>Work Study Management</h1>
        <NavBar />
      </header>
      <main>
        <h2>
          WELCOME TO <br />
          WORK <br />
          STUDY <br />
          MANAGEMENT SYSTEM
        </h2>
        <h3>Administrator</h3>
        <form>
          <label htmlFor="username">ID: </label>
          <input type="text" id="username" name="username" /><br /><br />

          <label htmlFor="password">PASSWORD: </label>
          <input type="password" id="password" name="password" /><br /><br />

          <label htmlFor="captcha">CAPTCHA: </label>
          <input type="text" id="captcha" name="captcha" /><br /><br />

          <label htmlFor="cif">Cif: </label>
          <input type="text" id="cif" name="cif" /><br /><br />
          <Link to="/Admin-Dashboard">
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
export default AdminLogin;

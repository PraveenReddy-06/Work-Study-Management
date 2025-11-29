import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Adminlogin from '../styles/Adminlogin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setGeneratedCaptcha(Math.floor(1000 + Math.random() * 9000).toString());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captcha !== generatedCaptcha) {
      setError('Invalid CAPTCHA');
      setGeneratedCaptcha(Math.floor(1000 + Math.random() * 9000).toString());
      setCaptcha('');
      return;
    }

    const admins = JSON.parse(localStorage.getItem('admins') || '[]');
    const admin = admins.find(
      (a) => a.username === username && a.password === password && a.role === 'admin'
    );

    if (!admin) {
      setError('Admin not found. Please register.');
      window.alert('Admin not found. Please register first.');
      navigate('/UserRegister');
      return;
    }

    localStorage.setItem('adminLoggedIn', 'true');
    localStorage.setItem('currentAdmin', JSON.stringify(admin));

    window.alert('Admin login successful');
    navigate('/Admin-Dashboard');
  };

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

        <form className='al-form' onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="username">ID / USERNAME: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="password">PASSWORD: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="captcha">CAPTCHA: </label>
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <span style={{ fontSize: '12px', color: '#333' }}>
              Enter this code: <strong>{generatedCaptcha}</strong>
            </span>
          </div>

          {error && (
            <div className="form-row" style={{ color: 'red' }}>
              {error}
            </div>
          )}

          <div className="form-row">
            <span style={{ fontSize: '12px', color: '#555' }}>
              <Link to="/Contact" style={{ marginLeft: '12px' }}>
              Forgot password? Contact system owner to reset your admin account.
              </Link>
            </span>
          </div>

          <div className="form-row">
            <button type="submit">login</button>
            <Link to="/UserRegister" style={{ marginLeft: '12px' }}>
              NewUser? Register→
            </Link>
          </div>
          <div>
            <Link to="/login" style={{ marginLeft: '12px' }}>
              ←BackToLogin
            </Link>
          </div>
        </form>
      </main>

      <div className='admin-login-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLogin;

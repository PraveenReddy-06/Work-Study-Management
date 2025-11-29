import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Studentstyle from '../styles/Studentlogin.css';

function StudentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // generate captcha once on load
  useEffect(() => {
    setGeneratedCaptcha(Math.floor(1000 + Math.random() * 9000).toString());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // check captcha
    if (captcha !== generatedCaptcha) {
      setError('Invalid CAPTCHA');
      setGeneratedCaptcha(Math.floor(1000 + Math.random() * 9000).toString());
      setCaptcha('');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u) => u.username === username && u.password === password && u.role === 'student'
    );

    if (!user) {
      setError('User not found. Please register.');
      window.alert('User not found. Please register first.');
      navigate('/UserRegister');
      return;
    }

    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));

    window.alert('Login successful');
    navigate('/student-dashboard');
  };

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
          <form className='sl-form' onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="username">USERNAME: </label>
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
              <span style={{ fontSize: '12px', color: '#0c0c0cff' }}>
                <Link to="/Contact" >
                Forgot password? Contact admin to reset your account.</Link>
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
        </div>
      </main>

      <div className='student-login-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default StudentLogin;

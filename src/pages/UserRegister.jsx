import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Loginstyle.css';

function UserRegister() {
  const [student, setStudent] = useState({
    username: '',
    password: '',
    email: '',
    studentId: '',
    name: ''
  });

  const [admin, setAdmin] = useState({
    username: '',
    password: '',
    email: '',
    name: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleStudentChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleAdminChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleStudentRegister = (e) => {
    e.preventDefault();

    if (!student.username || student.password.length < 6) {
      setError('Student password must be at least 6 characters');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u) => u.username === student.username)) {
      setError('Student username already exists');
      return;
    }

    users.push({
      ...student,
      role: 'student',
      id: Date.now().toString()
    });

    localStorage.setItem('users', JSON.stringify(users));
    setError('');
    window.alert('Student registered successfully. Please login.');
    navigate('/login');
  };

  const handleAdminRegister = (e) => {
    e.preventDefault();

    if (!admin.username || admin.password.length < 6) {
      setError('Admin password must be at least 6 characters');
      return;
    }

    const admins = JSON.parse(localStorage.getItem('admins') || '[]');
    if (admins.find((a) => a.username === admin.username)) {
      setError('Admin username already exists');
      return;
    }

    admins.push({
      ...admin,
      role: 'admin',
      id: Date.now().toString()
    });

    localStorage.setItem('admins', JSON.stringify(admins));
    setError('');
    window.alert('Admin registered successfully. Please login.');
    navigate('/login');
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <NavBar />
      </header>

      <div className="student-admin-login">
        {/* LEFT: Student card */}
        <div className="student-login">
          <div className="login-card-overlay">
            <h2>Student Registration</h2>
            <form className="register-form" onSubmit={handleStudentRegister}>
              <div className="form-row">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={handleStudentChange}
                  required
                />
              </div>

              <div className="form-row">
                <label>Student ID:</label>
                <input
                  type="text"
                  name="studentId"
                  value={student.studentId}
                  onChange={handleStudentChange}
                  required
                />
              </div>

              <div className="form-row">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={student.email}
                  onChange={handleStudentChange}
                  required
                />
              </div>

              <div className="form-row">
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={student.username}
                  onChange={handleStudentChange}
                  required
                />
              </div>

              <div className="form-row">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={student.password}
                  onChange={handleStudentChange}
                  minLength={6}
                  required
                />
              </div>

              <div className="form-row form-row-buttons">
                <button type="submit">Create Student Account</button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT: Admin card */}
        <div className="admin-login">
          <div className="login-card-overlay">
            <h2>Admin Registration</h2>
            <form className="register-form" onSubmit={handleAdminRegister}>
              <div className="form-row">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="name"
                  value={admin.name}
                  onChange={handleAdminChange}
                  required
                />
              </div>

              <div className="form-row">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={admin.email}
                  onChange={handleAdminChange}
                  required
                />
              </div>

              <div className="form-row">
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={admin.username}
                  onChange={handleAdminChange}
                  required
                />
              </div>

              <div className="form-row">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={admin.password}
                  onChange={handleAdminChange}
                  minLength={6}
                  required
                />
              </div>

              <div className="form-row form-row-buttons">
                <button type="submit">Create Admin Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {error && (
        <div style={{ textAlign: 'center', marginTop: '10px', color: 'red' }}>
          {error}
        </div>
      )}

      <div className="login-footer">
        <Footer />
      </div>
    </div>
  );
}

export default UserRegister;
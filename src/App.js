// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import StudentLogin from './pages/StudentLogin';
import AdminLogin from './pages/AdminLogin';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import UserProfile from './pages/UserProfile';
import AdminProfile from './pages/AdminProfile';
import Contact from './pages/Contact';
import News from './pages/News';
import UserRegister from './pages/UserRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/UserRegister" element={<UserRegister/>}/>
      </Routes>
    </Router>
  );
}
export default App;

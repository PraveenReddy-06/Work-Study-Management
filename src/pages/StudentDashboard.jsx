import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Studentdash.css';

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <header>
        <NavBar />
      </header>
      <main className="dashboard-grid">
        <section className="availjobs">
          <h2>Available Jobs</h2>
          <ul>
            <li>job 1 <button>apply</button></li>
            <li>job 2 <button>apply</button></li>
            <li>job 3 <button>apply</button></li>
            <li>job 4 <button>apply</button></li>
          </ul>
        </section>
        <section className="my-app">
          <h2>My Applications</h2>
          <ul>
            <li>Google <span className="accepted">Accepted</span></li>
            <li>Nvedia <span className="rejected">Rejected</span></li>
          </ul>
        </section>
        <section className="workhours">
          <h2>Work Hours</h2>
          <p>Total Time spent this Month</p>
          <p>Total time spent this week - 12Hrs</p>
        </section>
        <section className="review">
          <h2>Last Review</h2>
          <p>Gouse Sir - All Students complete your projects by Monday.</p>
        </section>
      </main>
      <div className="sd-footer">
        <Footer />
      </div>
    </div>
  );
}
export default StudentDashboard;

import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Studentdash.css';

function StudentDashboard() {
  const [jobs, setJobs] = useState([]);
  const [myApps, setMyApps] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // load user, jobs, and applications
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);

    const storedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    setJobs(storedJobs);

    const allApps = JSON.parse(localStorage.getItem('applications') || '[]');
    if (user && user.username) {
      setMyApps(allApps.filter(a => a.student === user.username));
    }
  }, []);

  const handleApply = (jobId) => {
    if (!currentUser || !currentUser.username) {
      alert('Please login as student to apply');
      return;
    }

    const allApps = JSON.parse(localStorage.getItem('applications') || '[]');

    // prevent duplicate application
    if (allApps.find(a => a.jobId === jobId && a.student === currentUser.username)) {
      alert('You already applied for this job');
      return;
    }

    const newApp = {
      id: Date.now().toString(),
      jobId,
      student: currentUser.username,
      status: 'Pending'
    };

    const updatedApps = [...allApps, newApp];
    localStorage.setItem('applications', JSON.stringify(updatedApps));
    setMyApps(updatedApps.filter(a => a.student === currentUser.username));
    alert('Application submitted');
  };

  const getJobById = (id) => jobs.find(j => j.id === id);

  return (
    <div className="student-dashboard">
      <header>
        <NavBar />
      </header>

      <main className="dashboard-grid">
        {/* AVAILABLE JOBS FROM ADMIN */}
        <section className="availjobs">
          <h2>Available Jobs</h2>
          {jobs.length === 0 ? (
            <p>No jobs posted yet.</p>
          ) : (
            <ul>
              {jobs.map(job => (
                <li key={job.id}>
                  {job.title} – {job.company} ({job.location}) {job.salary && `- ${job.salary}`}
                  <button onClick={() => handleApply(job.id)}>Apply</button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* MY APPLICATIONS FROM localStorage */}
        <section className="my-app">
          <h2>My Applications</h2>
          {(!currentUser || myApps.length === 0) ? (
            <p>No applications yet.</p>
          ) : (
            <ul>
              {myApps.map(app => {
                const job = getJobById(app.jobId);
                return (
                  <li key={app.id}>
                    {job ? job.title : 'Job'} at {job ? job.company : 'N/A'}{' '}
                    <span className={app.status.toLowerCase()}>{app.status}</span>
                  </li>
                );
              })}
            </ul>
          )}
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

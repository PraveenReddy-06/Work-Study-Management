import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Admindash.css';

function AdminDashboard() {
  const [job, setJob] = useState({
    title: '',
    location: '',
    company: '',
    salary: ''
  });
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [feedbackDrafts, setFeedbackDrafts] = useState({});   // drafts for each app

  // load existing jobs + applications from localStorage
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    setJobs(storedJobs);

    const storedApps = JSON.parse(localStorage.getItem('applications') || '[]');
    setApplications(storedApps);
  }, []);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    if (!job.title || !job.location || !job.company) {
      alert('Please fill all fields');
      return;
    }

    const newJob = {
      id: Date.now().toString(),
      ...job
    };

    const updated = [...jobs, newJob];
    setJobs(updated);
    localStorage.setItem('jobs', JSON.stringify(updated));

    alert('Job posted successfully');
    setJob({ title: '', location: '', company: '', salary: '' });
  };

  const getJobById = (id) => jobs.find(j => j.id === id);

  const handleUpdateStatus = (appId, status) => {
    const updated = applications.map(a =>
      a.id === appId ? { ...a, status } : a
    );
    setApplications(updated);
    localStorage.setItem('applications', JSON.stringify(updated));
  };

  // update feedback draft text only
  const handleFeedbackDraftChange = (appId, text) => {
    setFeedbackDrafts(prev => ({ ...prev, [appId]: text }));
  };

  // save feedback, alert, and clear the input
  const handleSendFeedback = (appId) => {
    const text = feedbackDrafts[appId] || '';

    const updated = applications.map(a =>
      a.id === appId ? { ...a, feedback: text } : a
    );
    setApplications(updated);
    localStorage.setItem('applications', JSON.stringify(updated));

    setFeedbackDrafts(prev => {
      const copy = { ...prev };
      delete copy[appId];
      return copy;
    });

    alert('Feedback sent to student');
  };

  const handleDeleteJob = (jobId) => {
    const updatedJobs = jobs.filter(j => j.id !== jobId);
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));

    const allApps = JSON.parse(localStorage.getItem('applications') || '[]');
    const remainingApps = allApps.filter(a => a.jobId !== jobId);
    localStorage.setItem('applications', JSON.stringify(remainingApps));
    setApplications(remainingApps);

    alert('Job removed');
  };

  return (
    <div className="admin-dashboard">
      <header>
        <NavBar />
      </header>

      <main className="dashboard-grid">
        {/* LEFT: Post + list jobs */}
        <section className="availjobs">
          <h2>Post New Job</h2>
          <form onSubmit={handlePostJob} className="job-form">
            <div className="form-row">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={job.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                value={job.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                value={job.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="salary">Salary:</label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={job.salary}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <button type="submit">Post Job</button>
            </div>
          </form>

          <h3 style={{ marginTop: '1rem' }}>Current Jobs</h3>
          {jobs.length === 0 ? (
            <p>No jobs posted yet.</p>
          ) : (
            <ul>
              {jobs.map(j => (
                <li key={j.id}>
                  {j.title} - {j.company} ({j.location}) {j.salary && `- ${j.salary}`}
                  <button
                    onClick={() => handleDeleteJob(j.id)}
                    style={{
                      marginLeft: '8px',
                      color: 'white',
                      backgroundColor: 'crimson',
                      border: 'none',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* RIGHT: Manage applications + feedback */}
        <section className="my-app">
          <h2>Manage Applications</h2>
          {applications.length === 0 ? (
            <p>No applications yet.</p>
          ) : (
            <ul>
              {applications.map(app => {
                const job = getJobById(app.jobId);
                return (
                  <li key={app.id}>
                    {app.student} → {job ? job.title : 'Job'} at {job ? job.company : 'N/A'}{' '}
                    <span className={app.status ? app.status.toLowerCase() : 'pending'}>
                      {app.status || 'Pending'}
                    </span>
                    <button
                      onClick={() => handleUpdateStatus(app.id, 'Accepted')}
                      style={{ marginLeft: '8px' }}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(app.id, 'Rejected')}
                      style={{ marginLeft: '4px' }}
                    >
                      Reject
                    </button>

                    {/* Feedback input + Send button */}
                    <div
                      style={{
                        marginTop: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <label style={{ fontSize: '12px' }}>Feedback:</label>
                      <input
                        type="text"
                        value={feedbackDrafts[app.id] ?? (app.feedback || '')}
                        onChange={(e) => handleFeedbackDraftChange(app.id, e.target.value)}
                        style={{ padding: '4px 6px', minWidth: '220px' }}
                        placeholder="Write feedback for student"
                      />
                      <button
                        type="button"
                        onClick={() => handleSendFeedback(app.id)}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '4px',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section className="workhours">
          <h2>Work Hours</h2>
          <p>Satish - 34Hrs</p>
          <p>Ashok - 12Hrs</p>
          <p>Girresh - 65Hrs</p>
          <p>Lallu - 45Hrs</p>
        </section>

        <section className="review">
          <h2>Last Review</h2>
          <p>Gouse Sir - All Students complete your projects by Monday.</p>
        </section>
      </main>

      <div className="ad-footer">
        <Footer />
      </div>
    </div>
  );
}

export default AdminDashboard;

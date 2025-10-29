
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function StudentDashboard() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <h2>Available Jobs</h2>
          <ul>
            <li>job 1 <button>apply</button></li>
            <li>job 2 <button>apply</button></li>
            <li>job 3 <button>apply</button></li>
            <li>job 4 <button>apply</button></li>
          </ul>
        </section>

        <section>
          <h2>My Applications</h2>
          <ul>
            <li>Google <span>Accepted</span></li>
            <li>Nvedia <span>Rejected</span></li>
          </ul>
        </section>

        <section>
          <h2>Work Hours</h2>
          <p>Total Time spent this Month</p>
          <p>Total time spent this week - 12Hrs</p>
        </section>

        <section>
          <h2>Last Review</h2>
          <p>Gouse Sir - All Students complete your projects by Monday.</p>
        </section>
      </main>
      <div class='sd-footer'>
        <Footer />
      </div>
    </div>
  );
}
export default StudentDashboard;

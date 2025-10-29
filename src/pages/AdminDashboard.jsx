import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function AdminDashboard() {
  return (
    <div>
      <header>
        
        <NavBar />
      </header>
      <main>
        <section>
          <h2>Post New Job</h2>
          <form>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" /><br /><br />
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" /><br /><br />
            <label htmlFor="company">Company:</label>
            <input type="text" id="company" name="company" /><br /><br />
            <label htmlFor="salary">Salary:</label>
            <input type="text" id="salary" name="salary" /><br /><br />
            <button type="submit">Post Job</button>
          </form>
        </section>
        <section>
          <h2>Manage Applications</h2>
          <ul>
            <li>PRAVEEN | <a href="#">url</a> | Accepted</li>
            <li>JAYSAI | <a href="#">url</a> | Rejected</li>
          </ul>
        </section>
        <section>
          <h2>Track Hours</h2>
          <ul>
            <li>Satish - 34Hrs</li>
            <li>Ashok - 12Hrs</li>
            <li>Girresh - 65Hrs</li>
            <li>Lallu - 45Hrs</li>
          </ul>
        </section>
        <section>
          <h2>Last Review</h2>
          <p>Gouse Sir - All Students complete your projects by Monday.</p>
        </section>
      </main>
      <div class='ad-footer'>
        <Footer />
      </div>
      
    </div>
  );
}
export default AdminDashboard;

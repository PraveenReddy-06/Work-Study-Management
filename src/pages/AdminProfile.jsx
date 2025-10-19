import Footer from '../components/Footer';

function AdminProfile() {
  return (
    <div>
      <h2>Work Study Management - <a href="profile.html">Profile</a></h2>
      <form>
        <label htmlFor="jobDesc">Job Description:</label><br />
        <textarea id="jobDesc" name="jobDesc" rows="4" cols="40" /><br /><br />

        <label htmlFor="jobTitle">Job Title:</label><br />
        <input type="text" id="jobTitle" name="jobTitle" /><br /><br />

        <label htmlFor="qualifications">Qualifications:</label><br />
        <textarea id="qualifications" name="qualifications" rows="2" cols="40" /><br /><br />

        <label htmlFor="position">Position:</label><br />
        <input type="text" id="position" name="position" /><br /><br />

        <label htmlFor="eligibility">Eligibility:</label><br />
        <textarea id="eligibility" name="eligibility" rows="2" cols="40" /><br /><br />

        <label htmlFor="note">Note:</label><br />
        <textarea id="note" name="note" rows="2" cols="40" /><br /><br />

        <label htmlFor="contact">Contact:</label><br />
        <input type="text" id="contact" name="contact" /><br /><br />

        <button type="reset">Reset</button>
        <button type="submit">Apply</button>
      </form>
      <Footer />
    </div>
  );
}
export default AdminProfile;

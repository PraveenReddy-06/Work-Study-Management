
import Footer from '../components/Footer';

function UserProfile() {
  return (
    <div>
      <h2>Work Study Management - <a href="profile.html">Profile</a></h2>
      <form>
        <label htmlFor="firstName">First Name:</label><br />
        <input type="text" id="firstName" name="firstName" /><br /><br />

        <label htmlFor="lastName">Last Name:</label><br />
        <input type="text" id="lastName" name="lastName" /><br /><br />

        <label htmlFor="email1">Email:</label><br />
        <input type="email" id="email1" name="email1" /><br /><br />

        <label htmlFor="department">Department:</label><br />
        <input type="text" id="department" name="department" /><br /><br />

        <label htmlFor="email2">Department Email:</label><br />
        <input type="email" id="email2" name="email2" /><br /><br />

        <label htmlFor="city">City:</label><br />
        <input type="text" id="city" name="city" /><br /><br />

        <label htmlFor="pincode">Pincode:</label><br />
        <input type="number" id="pincode" name="pincode" /><br /><br />

        <label htmlFor="upload">Upload:</label><br />
        <input type="file" id="upload" name="upload" /><br /><br />

        <button type="reset">Reset</button>
        <button type="submit">Apply</button>
      </form>
      <Footer />
    </div>
  );
}
export default UserProfile;

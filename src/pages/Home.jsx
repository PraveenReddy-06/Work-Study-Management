
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import StickyNav from '../components/StickyNav';
import Grid from '../styles/Grid.css';
import Datestable from '../Home-comp/Datestable.jsx'

function Home() {
  return (
    <div className='home-grid' style={{backgroundColor:"#b8bbc0"}}>
      <header className='headerclass'>
        <NavBar />
      </header>

        <div className='sticky-and-content'>
        <div className='stickynavclass'>
          <StickyNav />
        </div>
        
        <div className='content-class'>
          <section id="overveiwid">
            <h2>Overveiw</h2>
              The Work Study program offers part-time, paid on-campus employment to eligible undergraduate and graduate students at the Kl University. The program provides students with an opportunity to earn money while learning, developing workplace knowledge and skills, and exploring how their academic studies translate to career possibilities.
          </section>

          <section id="Eligibilityid">
            <h2>Eligibility</h2>
              Students must have at least 60 percent marks in 10+2 for BTech and other undergraduate courses. For BArch, NATA qualification is needed. For MBA or postgraduate programs, a bachelor’s degree with around 50 percent marks and a valid entrance test score like CAT, MAT, or university test is required. Diploma holders can join BTech through lateral entry.
          </section>

          <section id="datesid">
            <h2>Dates</h2>
              Admissions for the 2025–26 academic year are open. Entrance exams like KLEEE, JEE Main, and EAMCET are accepted for BTech. Application forms, fee payments, and counselling dates are announced by the university every year.
              <Datestable />
          </section>

          <section id="applyjobid">
            <h2>Apply For Jobs</h2>
              Teaching and non-teaching job openings are available on the university careers page. Applicants must fill out the online form, upload their resume, and provide qualifications and experience details.
          </section>

          <section id="acceptjobid">
            <h2>Accept a Job Offer</h2>
            Once selected, confirm the job offer in writing. Check details such as post, salary, and joining date. Submit required documents and complete joining formalities as directed by HR or the department.
          </section>

          <section id="contactid">
          <h2>Contact</h2>
            For admissions help: phone number 7815901716.For career or HR queries: phone numbers 08645 350200 and 7981337620 Email: careers@kluniversity.in
          </section>

          <section id="faqsid">
          <h2>FAQs</h2>
            For BTech admission, students need 60 percent in 10+2 with Physics, Chemistry, and Mathematics. If you missed the entrance exam, you can still apply online before the last date. Management quota seats are available through direct admission. Students waiting for results can get provisional admission. MBA admission requires a bachelor’s degree and valid entrance exam score.
          </section><br />
        </div>
        </div>
      
      <div className='footerclass'>
        <Footer />
      </div>
      
        
    </div>
  );
}
export default Home;

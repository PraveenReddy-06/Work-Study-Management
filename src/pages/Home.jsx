
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import StickyNav from '../components/StickyNav';
import Grid from '../styles/Grid.css';  

function Home() {
  return (
    <div class='home-grid'>
      <header class='headerclass'>
        <NavBar />
      </header>

        <div class='stickynavclass'>
          <StickyNav />
        </div>
        
        <div class='content-class'>
          <section id="overveiwid">
            <h2>Overveiw</h2>
              The Work Study program offers part-time, paid on-campus employment to eligible undergraduate and graduate students at the Kl University. The program provides students with an opportunity to earn money while learning, developing workplace knowledge and skills, and exploring how their academic studies translate to career possibilities.
          </section>

          <section id="Eligibilityid">
            <h2>Eligibility</h2>
              {/* Add content for Dates here */}
          </section>

          <section id="datesid">
            <h2>Dates</h2>
              {/* Add content for Dates here */}
          </section>

          <section id="applyjobid">
            <h2>Apply For Jobs</h2>
              {/* Add content for Apply For Jobs here */}
          </section>

          <section id="acceptjobid">
            <h2>Accept a Job Offer</h2>
            {/* Add content for Accept a Job Offer here */}
          </section>

          <section id="contactid">
          <h2>Contact</h2>
            {/* Add contact info here */}
          </section>

          <section id="faqsid">
          <h2>FAQs</h2>
            {/* Add FAQs content here */}
          </section>
        </div>
      
      <div class='footerclass'>
        <Footer />
      </div>
      
        
    </div>
  );
}
export default Home;

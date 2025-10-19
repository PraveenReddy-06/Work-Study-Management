import Grid from '../styles/Grid.css'
import Footerstyle from '../styles/Footerstyle.css'

function Footer() {
  return (
    <footer className='footer-class'>
       <div className='title-about-contact'>    
          <div className='footer-title'>
            <h2>Work Study Management</h2>
          </div>

          <div className='about-links'>
            <h5>About</h5>
            <ul>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          <div className='contact'>
            <h5>Contact Us:</h5>
            Phone: 943959-235057<br />
            Email: <a href="mailto:hduewobfb@email.com">hduewobfb@email.com</a><br />
            Address: Vijayawada, Bhavanipuram<br />
          </div>
        </div>
        <div className='footer-bottom'>
        <div className='fb-left'>All Rights Reserved 2022</div>
        <div className='fb-center'>Follow Us: Telegram | LinkedIn | Instagram | Twitter</div>
        <div className='fb-right'> Contact: @fbew.com</div>
      </div>
    
    </footer>
  );
}
export default Footer;

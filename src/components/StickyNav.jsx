import Navbarstyle from '../styles/Navbarstyle.css'
import Sticky from '../styles/Sticky.css'

function stickyNav() {
    return (
    <nav className='sticky-nav'>
      <h1 className='h1'>On This Page</h1>
      <ul className='sticky-list'>
        <a href="#overveiwid">Overveiw</a>
        <a href="#Eligibilityid">Eligibility</a>
        <a href="#datesid">Important Dates</a>
        <a href="#acceptjobid">Accept a Job</a>
        <a href="#applyjobid">Apply a Job</a>
        <a href="#contactid">Contact</a>
        <a href="#faqsid">faqs</a>
      </ul>
    </nav>
    );
}
export default stickyNav;

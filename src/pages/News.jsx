import { memo } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const News = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h2> Hot News</h2>
      <ol>
        <li><strong>New Feature: Automated Task Reminders</strong><br />The system now sends automatic reminders for upcoming tasks, study schedules, and deadlines. Students can customize the reminder time and alert type.</li>
        <li><strong>Attendance Tracking Improved</strong><br />We upgraded the attendance module to reduce errors and support real-time updates. Faculty can now mark attendance directly from mobile devices.</li>
        <li><strong>Study Planner Added to Dashboard</strong><br />A new study planner feature is now available. Students can create daily, weekly, and monthly plans and track their study hours more effectively.</li>
        <li><strong>Performance Analytics Launched</strong><br />The system now includes performance analytics. It shows progress graphs, completed tasks, and study-time comparisons to help users understand their improvements.</li>
        <li><strong>Multi-Device Access Enabled</strong><br />Users can now access the system from laptops, tablets, and mobile phones with consistent performance and fast loading time.</li>
        <li><strong>Peer Collaboration Feature Introduced</strong><br />Students can now create shared groups to manage group study sessions, share files, and assign tasks within the team.</li>
        <li><strong>Security Update Released</strong><br />A new security patch has been applied to protect user data and prevent unauthorized access. All users are advised to update their passwords.</li>
        <li><strong>Offline Mode Coming Soon</strong><br />The development team is working on an offline-access feature that will allow users to view study schedules and tasks even without an internet connection.</li>
        <li><strong>Faculty Feedback Module Activated</strong><br />Teachers can now provide direct feedback on student tasks and study performance through the dashboard. Students receive alerts instantly.</li>
        <li><strong>New Theme Options Available</strong><br />The system UI now supports light and dark modes. Users can switch themes anytime from the settings panel.</li>
      </ol>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default News;
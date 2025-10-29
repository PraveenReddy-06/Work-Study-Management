import React from 'react';
import Datestablestyle from './Datestablestyle.css';

function Datestable() {
  return (
    <table className='dates-table'border="1">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Work Hours</th>
          <th>Money</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frontend</td>
          <td>2025-11-05</td>
          <td>2026-01-20</td>
          <td>120</td>
          <td>₹6,000</td>
        </tr>
        <tr>
          <td>DBMS</td>
          <td>2025-11-10</td>
          <td>2026-02-01</td>
          <td>100</td>
          <td>₹5,000</td>
        </tr>
        <tr>
          <td>OS</td>
          <td>2025-11-20</td>
          <td>2026-03-01</td>
          <td>80</td>
          <td>₹4,000</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Datestable;

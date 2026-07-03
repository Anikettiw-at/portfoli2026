import React from 'react';
import { internshipDetails } from '../data/experience'; // Data file se import kiya

function Experience() {
  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      color: '#fff', // White text
      backgroundColor: '#1f1f1f', // Dark background to match your portfolio
      borderRadius: '8px'
    },
    header: {
      borderBottom: '2px solid #333',
      paddingBottom: '15px',
      marginBottom: '20px'
    },
    roleTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: '0 0 5px 0',
      color: '#f1c40f' // Yellow accent color
    },
    companyInfo: {
      fontSize: '18px',
      color: '#ccc',
      margin: '0 0 10px 0'
    },
    dateLocation: {
      fontSize: '14px',
      color: '#888',
      fontStyle: 'italic',
      marginBottom: '15px'
    },
    list: {
      paddingLeft: '20px',
      lineHeight: '1.8'
    },
    listItem: {
      marginBottom: '12px',
      color: '#e0e0e0'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.roleTitle}>{internshipDetails.role}</h2>
        <h3 style={styles.companyInfo}>
          <strong>{internshipDetails.company}</strong> | {internshipDetails.classification}
        </h3>
        <div style={styles.dateLocation}>
          <span>{internshipDetails.startDate} - {internshipDetails.endDate}</span>
          <span style={{ margin: '0 10px' }}>•</span>
          <span>{internshipDetails.location}</span>
        </div>
      </div>

      <div>
        <h4 style={{ fontSize: '18px', marginBottom: '10px', color: '#f1c40f' }}>Key Responsibilities:</h4>
        <ul style={styles.list}>
          {internshipDetails.responsibilities.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
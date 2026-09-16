import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const sectionStyle = {
    marginTop: '30px',
    textAlign: 'left',
    maxWidth: '700px',
    margin: '30px auto 0 auto'
  };

  const skillRowStyle = {
    color: '#a1a1aa',
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '8px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>About Me</h2>
      <h3 style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '15px' }}>Samyak Kumar</h3>

      <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '650px', margin: '0 auto' }}>
        Software Development Engineer aspirant with a strong foundation in Data Structures & Algorithms,
        full-stack development, backend systems, and database design. Experienced in building scalable
        web applications, RESTful APIs, and real-time systems using modern development technologies.
      </p>

      <div style={sectionStyle}>
        <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
          Education
        </h3>
        <p style={skillRowStyle}><strong style={{ color: '#fff' }}>Dayananda Sagar College of Engineering, Bangalore</strong> — BE in Information Science (2024–2028), CGPA: 9.45/10</p>
        <p style={skillRowStyle}><strong style={{ color: '#fff' }}>The Vivekanand School, Delhi</strong> — Class XII, CBSE (2022–2023), 84.8%</p>
        <p style={skillRowStyle}><strong style={{ color: '#fff' }}>Bal Bharati Public School, Noida</strong> — Class X, CBSE (2020–2021), 95.6%</p>
      </div>

      <div style={sectionStyle}>
        <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
          Technical Skills
        </h3>
        <p style={skillRowStyle}><strong style={{ color: '#fff' }}>CS Fundamentals:</strong> Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, REST APIs</p>
        <p style={skillRowStyle}><strong style={{ color: '#fff' }}>Languages:</strong> C++, Java, Python, JavaScript, SQL</p>
        <p style={skillRowStyle}><strong style={{ color: '#fff' }}>Frontend:</strong> React.js, Redux Toolkit, HTML, CSS</p>
        <p style={skillRowStyle}><strong style={{ color: '#fff' }}>Backend:</strong> Node.js, Express.js</p>
        <p style={skillRowStyle}><strong style={{ color: '#fff' }}>Databases:</strong> PostgreSQL, MongoDB</p>
        <p style={skillRowStyle}><strong style={{ color: '#fff' }}>Real-Time & Messaging:</strong> Socket.IO, Redis, Apache Kafka</p>
        <p style={skillRowStyle}><strong style={{ color: '#fff' }}>Developer Tools:</strong> Git, GitHub, VS Code</p>
      </div>
    </div>
  );
};

export default About;
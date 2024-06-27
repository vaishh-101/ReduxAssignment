import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#764ABC',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const sectionStyle = {
    flex: '1',
    margin: '0 10px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    margin: '5px 0',
  };

  const socialStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  };

  const socialIconStyle = {
    width: '24px',
    height: '24px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h2>About The Redux</h2>
          <p> Here we have learned the use of Redux with an example of implementing dark mode and light mode. Redux is a powerful state management library for JavaScript applications, providing a predictable and centralized way to manage state. By using Redux, we can ensure that our application's state is consistent and easily accessible throughout different components.</p>
        </div>
        <div style={sectionStyle}>
          <h2>Quick Links</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}><a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
            <li style={listItemStyle}><a href="/dashboard/benefits" style={{ color: 'white', textDecoration: 'none' }}>Advantages and Disadvantages</a></li>
                 </ul>
        </div>
        <div style={sectionStyle}>
          <h2>Follow Us</h2>
          <div style={socialStyle}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={socialIconStyle} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style={socialIconStyle} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" style={socialIconStyle} />
            </a>
          </div>
        </div>
      </div>
      <p>&copy; 2024 Vaishnavi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

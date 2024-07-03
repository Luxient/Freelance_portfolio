import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        <p>Follow me on:</p>
        <div className="footer-links">
          <a href="https://web.facebook.com/profile.php?id=100084554707290&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.linkedin.com/in/james-mthethwa-504328198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Fluxient.github.io%2F" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/Luxient" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

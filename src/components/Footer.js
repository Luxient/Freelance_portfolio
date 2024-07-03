import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        <p>Follow me on:</p>
        <div className="footer-links">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">Twitter</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">LinkedIn</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">GitHub</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

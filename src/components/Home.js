import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <Container className="home-container">
      <div className="home-content">
        <h1>Butho James Mthethwa</h1>
        <p>Aspiring Data Engineer with a solid foundation in IT systems development and a passion for leveraging data to drive innovation.</p>
        <p>Explore my services in web development, content writing, data analysis, and more.</p>
        <Row className="mt-4">
          <Col>
            <Button href="https://drive.google.com/file/d/1DJza11wXWcG2-LJa99Q4e3y9xK86zK_F/view?usp=sharing" target="_blank" className="btn-cv">
              View My CV
            </Button>
          </Col>
          <Col>
            <Button href="#projects" className="btn-cv">
              View My Projects
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;


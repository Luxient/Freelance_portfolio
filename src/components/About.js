import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col md={12}>
          <h1>About Me</h1>
          <p>Aspiring Data Engineer with a solid foundation in IT systems development and a passion for leveraging data to drive innovation.</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Background</h2>
          <p>I hold a Higher Certificate in Physics from the University of South Africa and a National Certificate in Information Technology from Umuzi Academy. My training has equipped me with strong analytical and problem-solving skills, essential for data engineering.</p>
        </Col>
        <Col md={6}>
          <h2>Skills</h2>
          <ul>
            <li>Programming Languages: Python, SQL, JavaScript, HTML, CSS</li>
            <li>Tools & Technologies: Docker, PostgreSQL, Git, GitHub, Bash</li>
            <li>Frameworks & Libraries: Flask, Django (ORM)</li>
            <li>Data Engineering Skills: ETL Pipelines, REST APIs, JSON & XML, Workflow Management, Message Queuing (RabbitMQ)</li>
            <li>Professional Skills: Test Driven Development, Object-Oriented Programming, Clean Code Practices</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Professional Goals and Aspirations</h2>
          <p>I aim to achieve mastery in data engineering and secure a black belt in Lean Six Sigma. I aspire to work with pioneering teams on cutting-edge projects in technology and data science, contributing to meaningful projects that utilize data to create impactful solutions.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Contact Information</h2>
          <p>Email: mthethwajames5@gmail.com</p>
          <p>Phone: 078 980 0119</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/james-mthethwa/" target="_blank" rel="noopener noreferrer">James Mthethwa</a></p>
          <p>Portfolio: <a href="https://luxient.github.io/my_portfolio" target="_blank" rel="noopener noreferrer">My Portfolio</a></p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

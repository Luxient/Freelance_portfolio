import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

const services = [
  {
    title: 'Web Development',
    description: 'I specialize in creating responsive and visually appealing websites using HTML, CSS, JavaScript, and frameworks like React and Bootstrap.',
  },
  {
    title: 'Content Writing',
    description: 'I provide professional content writing services, including articles, blog posts, technical writing, and documentation.',
  },
  {
    title: 'Data Analysis',
    description: 'I offer data analysis services using Python, SQL, and data visualization tools to help you make informed decisions based on data.',
  },
  {
    title: 'Editing and Proofreading',
    description: 'I provide editing and proofreading services to ensure your content is clear, concise, and error-free.',
  },
  {
    title: 'Technical Support',
    description: 'I offer technical support for various IT-related issues, helping you resolve problems efficiently.',
  },
];

const Services = () => {
  return (
    <Container className="services-container">
      <h1>My Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;

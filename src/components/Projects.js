import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    title: 'Global Warming',
    description: 'A comprehensive study on the effects of global warming on our planet, including analysis of temperature changes, impacts on ecosystems, and potential solutions.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/EfudQkmCWMVBlZKe2FZxFHQBvJDmCJoiDDCkcmtNpbEPDg'
  },
  {
    title: 'Top 10 Emerging Technologies in 2024',
    description: 'An article exploring the most promising emerging technologies in 2024, detailing their potential impacts on various industries and everyday life.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/Ed7CPz1GhuNPtI-IjwLFxs0BouIYnNfRwM5K4eUXrGqIBw'
  },
  {
    title: 'Renewable Energy',
    description: 'A technical report on renewable energy sources, including solar, wind, and hydroelectric power, and their roles in sustainable development.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/EQZLM2akd1VIsfPknwaK0QMBEdZ1rJF2lqJ9DvDLdhI0YQ'
  },
  {
    title: 'Graphene',
    description: 'A study on the properties of graphene, its potential applications, and its impact on future technological advancements.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/EcLqUNlvSMVKtJ9JsoQ9K88BBkc5lyNOg7z-msHRodekzA'
  },
  {
    title: 'Global Temperature Analysis',
    description: 'A data analysis project focusing on global temperature changes over the past century, using Python for data processing and visualization.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/Ed5aMXhx405FrQAKaMIL9vsBvWyboaAovtVrkbkeTPliwA'
  },
  {
    title: 'Urban Population Growth',
    description: 'An analysis of urban population growth trends, the challenges of urbanization, and the implications for infrastructure and resource management.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/EeJthoK3NblKma2ZUWtCNsUBuPK5lx43yVmJPZlWYMHL5w'
  },
  {
    title: 'Editing a Technical Document on Machine Learning Basics',
    description: 'Proofreading and editing a technical document that introduces the basic concepts and applications of machine learning.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/EfO0qeam5epAq45FsJ42iIoBe5FX-qKvNvCFrna6Xhk9LQ'
  },
  {
    title: 'Blach Self-Care Products Website',
    description: 'A responsive website designed for Blach, a self-care products company, showcasing their product range and company values.',
    link: 'https://luxient.github.io/Blach/'
  },
  {
    title: 'ElectroPaint Company Website',
    description: 'A professional website for ElectroPaint, a company specializing in painting and electrical services, highlighting their services and portfolio.',
    link: 'https://luxient.github.io/ELECTROPAINT/'
  }
];

const Projects = () => {
  return (
    <Container className="projects-container">
      <h1>My Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;

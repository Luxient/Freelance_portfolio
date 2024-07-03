import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    title: 'Project One',
    description: 'This is a description of the first project. It includes details about the technologies used and the project’s purpose.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/EfudQkmCWMVBlZKe2FZxFHQBvJDmCJoiDDCkcmtNpbEPDg'
  },
  {
    title: 'Project Two',
    description: 'This is a description of the second project. It includes details about the technologies used and the project’s purpose.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/Ed7CPz1GhuNPtI-IjwLFxs0BouIYnNfRwM5K4eUXrGqIBw'
  },
  {
    title: 'Project Three',
    description: 'This is a description of the second project. It includes details about the technologies used and the project’s purpose.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/EQZLM2akd1VIsfPknwaK0QMBEdZ1rJF2lqJ9DvDLdhI0YQ'
  },
  {
    title: 'Project Four',
    description: 'This is a description of the second project. It includes details about the technologies used and the project’s purpose.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/EcLqUNlvSMVKtJ9JsoQ9K88BBkc5lyNOg7z-msHRodekzA'
  },
  {
    title: 'Project Five',
    description: 'This is a description of the second project. It includes details about the technologies used and the project’s purpose.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/Ed5aMXhx405FrQAKaMIL9vsBvWyboaAovtVrkbkeTPliwA'
  },
  {
    title: 'Project Six',
    description: 'This is a description of the second project. It includes details about the technologies used and the project’s purpose.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/EeJthoK3NblKma2ZUWtCNsUBuPK5lx43yVmJPZlWYMHL5w'
  },
  {
    title: 'Project Seven',
    description: 'This is a description of the second project. It includes details about the technologies used and the project’s purpose.',
    link: 'https://1drv.ms/w/c/84f8b8aa1b588f8a/EfO0qeam5epAq45FsJ42iIoBe5FX-qKvNvCFrna6Xhk9LQ'
  },
  {
    title: 'Project Eight',
    description: 'This is a description of the second project. It includes details about the technologies used and the project’s purpose.',
    link: 'https://luxient.github.io/Blach/'
  },
  {
    title: 'Project Nine',
    description: 'This is a description of the second project. It includes details about the technologies used and the project’s purpose.',
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

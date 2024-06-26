import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: "Project One",
    description: "This is a description of Project One.",
    link: "https://github.com/username/project-one"
  },
  {
    title: "Project Two",
    description: "This is a description of Project Two.",
    link: "https://github.com/username/project-two"
  },
  {
    title: "Project Three",
    description: "This is a description of Project Three.",
    link: "https://github.com/username/project-three"
  }
];

const Projects = () => {
  return (
    <Container>
      <h1 className="my-4">Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
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

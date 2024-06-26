// src/components/Contact.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.from_name) {
      valid = false;
      formErrors.from_name = 'Name is required';
    }

    if (!formData.reply_to) {
      valid = false;
      formErrors.reply_to = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.reply_to)) {
      valid = false;
      formErrors.reply_to = 'Email address is invalid';
    }

    if (!formData.message) {
      valid = false;
      formErrors.message = 'Message is required';
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm(
        'service_gtz1jdh', // Replace with your Service ID
        'template_nfccfsa', // Replace with your Template ID
        e.target,
        'qT8sUc1WFQmNyubO8' // Replace with your Public Key (user_id)
      ).then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
        }
      );
      setFormData({
        from_name: '',
        reply_to: '',
        message: ''
      });
    }
  };

  return (
    <Container className="mt-5">
      <h1>Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            isInvalid={!!errors.from_name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.from_name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            isInvalid={!!errors.reply_to}
          />
          <Form.Control.Feedback type="invalid">
            {errors.reply_to}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Enter your message"
            required
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;

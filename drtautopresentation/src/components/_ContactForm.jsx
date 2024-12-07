import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const ContactForm = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingFirstName" label="First Name">
                <Form.Control type="text" placeholder="FirstName" />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Col>
        <Col  md={6}>
          <Form>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingEmail" label="Email Address">
                <Form.Control type="email" placeholder="name@example.icon" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingComments" label="Comments">
                <Form.Control as="textarea" rows={3} placeholder="Your Comments" />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo2.png';
import Stack from 'react-bootstrap/Stack';
import ContactForm from './ContactForm';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <>
      <Stack direction="horizontal" position="relative">
        <Container className="mx-auto">
          <Col className="col">
            <Image src={logo} alt="Dr. T Automotive logo" width="60" height="60" className="d-block mx-auto"/>
            <small className="d-block mb-3 text-body-secondary text-center"><span className="text-primary">&copy;</span> 2024</small>
          </Col>
        </Container>
        <Container>
          <Col className="col justify-content-start">
            <h5 className=" text-center">Contact Us</h5>
            <Stack direction="horizontal" gap={3} className="justify-content-center">
              <i className="bi bi-phone contact text-center" href="tel:+18034869063" id="cellphone" />
              <i className="bi bi-envelope-at contact text-center" id="email" href="mailto:1drtautomotive@gmail.com" />
              <i className="bi bi-chat-left-dots contact text-center" href="sms:+18034869063" id="text" />
            </Stack>          
          </Col>
        </Container>
        <Container>
          <Button className="btn btn-dark" type="submit" >Schedule</Button>
          <Col className="col">
            <h2 className="ms-0 text-center text-primary" id="or">• or •</h2>
            <h6 className="text-center pt-2">Leave Us Your Info!</h6>
          </Col>
        </Container>
      </Stack>
      <Stack direction="horizontal">
        <ContactForm />
      </Stack>      
    </>
  );
};

export default Footer;
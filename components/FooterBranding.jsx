import React from 'react';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

const FooterBranding = () => {
  return (
    <>
      <Col className="col ps-1 align-items-center" width="75">
        <Navbar.Brand href="#">
          <Image src="/logo2.png" alt="dr. t logo" class="d-block mx-auto" width="60" height="60" />
        </Navbar.Brand>
        <small className="d-block mb-3 text-body-secondary"><span className="small-span">&copy;</span>2024</small>
      </Col>
    </>
  );
};

export default FooterBranding;
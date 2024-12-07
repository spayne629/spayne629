import React from 'react';
import Nav from 'react-bootstrap/Nav';

const PhoneLink = () => {
  return (
    <>
      <Nav className="py-2 phone-contact">
        <span className="phone-span me-2">
          <i className="bi bi-telephone me-2 ps-2 phone-icon" />
        </span>
        <a href="tel:803-486-9063" className="phone-number fs-5 me-3 h6 pt-1">803.486.9063</a>
      </Nav>
    </>
  );
};

export default PhoneLink;
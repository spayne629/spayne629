import React from 'react';
import logo from '../../public/logo2.png';
import Nav from 'react-bootstrap/Nav';

const Heartbeat = () => {
  return (
    <>
      <Nav className="justify-content-start">
        <div className="heartbeat-icon me-1" >
          <span className="ak-heartbeat-btn">
            <img className="logo" src={logo} position="relative" width="54" height="54"/>
          </span>
        </div>
      </Nav>
    </>
  );
};

export default Heartbeat;

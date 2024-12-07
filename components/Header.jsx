import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Navsntabs from './Navsntabs';
import ThemeSwitcher from './ThemeSwitcher';
import Heartbeat from './Heartbeat';
import PhoneLink from './PhoneLink';

const MyHeader1 = () => {
  return (
    <>
      <Navbar expand="md" id="#navbar">
        <Container className="justify-content-between" fluid>
          <Heartbeat />
          <ThemeSwitcher />
          <Navsntabs />
          <PhoneLink />
        </Container>
      </Navbar>
    </>
  );
};

export default MyHeader1;
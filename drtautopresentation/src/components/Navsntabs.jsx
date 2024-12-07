import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

const Navsntabs = () => {
  return (
    <>
      <Nav className="justify-content-end">
        <NavItem>
          <NavLink className="h4 link-primary" href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="h4 link-primary" href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="h4 link-primary" href="#services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="h4 link-primary" href="#contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default Navsntabs;
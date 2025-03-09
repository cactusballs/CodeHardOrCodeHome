import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Person, Gear } from "react-bootstrap-icons"; 

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Container className="d-flex justify-content-between">
        <Person size={24} /> 
        <Gear size={24} /> 
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
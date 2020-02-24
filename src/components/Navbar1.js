import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Navbar1() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='#home'>filbert.io</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Link</Nav.Link>
          <NavDropdown title='Projects' id='basic-nav-dropdown'>
            <NavDropdown.Item href='https://github.com/Sporego/SpaceColumbus'>
              SpaceColumbus (Unity C#)
            </NavDropdown.Item>
            <NavDropdown.Item href='https://github.com/Sporego/filbert.io'>
              filbert.io (MERN)
            </NavDropdown.Item>
            <NavDropdown.Item href='https://filbert.io'>
              Placeholder
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='https://github.com/Sporego'>
              Github
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button className='mr-sm-2' variant='outline-info'>
          Login
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


function NavBar() {
    return (
        <Container className="navbar-container">
            <Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="navbar-link" href="#features">About Me</Nav.Link>
                        <Nav.Link className="navbar-link" href="#pricing">Projects</Nav.Link>
                        <Nav.Link className="navbar-link" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavBar;

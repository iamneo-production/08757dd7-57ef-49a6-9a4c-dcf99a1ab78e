import React, {Component} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends Component{
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to={"login"} className="navbar-brand">
                        <img src="https://cdn.freelogovectors.net/svg07/apple_music_logo.svg" width="25px" height="25px" alt="" /> Instrument Delight
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Link to={"login"} className="nav-link">Login</Link>
                            <Link to={"signup"} className="nav-link">Signup</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavigationBar
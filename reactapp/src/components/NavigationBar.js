import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

class NavigationBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to={"/login"} className="navbar-brand">
                        <img src="https://cdn.freelogovectors.net/svg07/apple_music_logo.svg" width="25px" height="25px" alt="" /> Instrument Delight
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Link to={"/login"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link>
                            <Link to={"/signup"} className="nav-link"><FontAwesomeIcon icon={faUserPlus} /> Signup</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavigationBar